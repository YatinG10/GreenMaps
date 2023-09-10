document.getElementById("toggleBtn").addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        let currentTab = tabs[0];
        
        if (currentTab.url && currentTab.url.startsWith("https://www.google.com/maps")) {
            toggleGreenishEffect(currentTab.id);
        } else {
            alert("This extension works only on Google Maps!");
        }
    });
});

function toggleGreenishEffect(tabId) {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: toggleEffect,
        args: []
    });
}

function toggleEffect() {
    let styleElement = document.getElementById("greenishStyle");
    if (styleElement) {
        styleElement.remove();
    } else {
        let style = document.createElement("style");
        style.id = "greenishStyle";
        style.innerHTML = `
            body { filter: hue-rotate(90deg) }
            .section-directions-trip-line { background-color: green !important; }
        `;
        document.head.appendChild(style);
    }
}

document.getElementById("statsBtn").addEventListener("click", function() {
    chrome.tabs.create({ url: "http://localhost:3000/" });
});

chrome.runtime.onMessage.addListener(function(response) {
    // Extracting and processing the received data
    const carDist = parseFloat(response.driving.distance.split(" ")[0]);
    const carTime = parseFloat(response.driving.time.split(" ")[0]);
    const transitDist = parseFloat(response.transit.distance.split(" ")[0]);
    const transitTime = parseFloat(response.transit.time.split(" ")[0]);
    const walkingDist = parseFloat(response.walking.distance.split(" ")[0]);
    const walkingTime = parseFloat(response.walking.time.split(" ")[0]);
    const bikeDist = parseFloat(response.bicycling.distance.split(" ")[0]);
    const bikeTime = parseFloat(response.bicycling.time.split(" ")[0]);

    // Calculate transportation scores using the provided functions
    const scores = calculateTransportationScore(carDist, carTime, transitDist, transitTime, walkingDist, walkingTime, bikeDist, bikeTime);
    
    // Displaying the results on the popup
    // You can add elements to `popup.html` to display the scores, for example:
    document.getElementById("carScore").innerText = `Car Score: ${scores.carScore}`;
    document.getElementById("transitScore").innerText = `Transit Score: ${scores.transitScore}`;
    document.getElementById("walkingScore").innerText = `Walking Score: ${scores.walkingScore}`;
    document.getElementById("bikeScore").innerText = `Bike Score: ${scores.bikeScore}`;
});

function mapValuesToRange(arr, minRange, maxRange) {
    const minArrValue = Math.min(...arr);
    const maxArrValue = Math.max(...arr);
  
    const mappedValues = arr.map((value) => {
      const mappedValue = ((value - minArrValue) / (maxArrValue - minArrValue)) * (maxRange - minRange) + minRange;
      return Math.round(mappedValue); // Round the result to the nearest integer
    });
  
    return mappedValues;
  }

function calculateTransportationScore(carDist, carTime, transitDist, transitTime, walkingDist, walkingTime, bikeDist, bikeTime) {
    dists = [carDist, transitDist,walkingDist,bikeDist]
    times = [carTime, transitTime, walkingTime, bikeTime]


    
    dists = mapValuesToRange(dists, 0, 25)

    carDist = dists[0]
    transitDist = dists[1]
    walkingDist = dists[2]
    bikeDist = dists[3]

    times = mapValuesToRange(times, 0, 25)

    carTime = times[0]
    transitTime = times[1]
    walkingTime = times[2]
    bikeTime = times[3]

    carScore = (100 - carDist - carTime) * 0.8
    transitScore = (100 - transitDist - transitTime) *0.9
    walkingScore = 100 - walkingDist - walkingTime
    bikeScore = 100 - bikeDist - bikeTime

    // Determine the best mode of transportation
    let bestTransportationMode = "Car";
    let highestScore = carScore;

    if (transitScore > highestScore) {
        bestTransportationMode = "Transit";
        highestScore = transitScore;
    }

    if (walkingScore > highestScore) {
        bestTransportationMode = "Walking";
        highestScore = walkingScore;
    }

    if (bikeScore > highestScore) {
        bestTransportationMode = "Bike";
        highestScore = bikeScore;
    }

    return {
        bestTransportationMode: bestTransportationMode,
        carScore: carScore,
        transitScore: transitScore,
        walkingScore: walkingScore,
        bikeScore: bikeScore,
    };
}
