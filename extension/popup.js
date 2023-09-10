import sustain from "../sustainabilityScore.js"

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
    const scores = sustain.calculateTransportationScore(carDist, carTime, transitDist, transitTime, walkingDist, walkingTime, bikeDist, bikeTime);
    
    // Displaying the results on the popup
    // You can add elements to `popup.html` to display the scores, for example:
    document.getElementById("carScore").innerText = `Car Score: ${scores.carScore}`;
    document.getElementById("transitScore").innerText = `Transit Score: ${scores.transitScore}`;
    document.getElementById("walkingScore").innerText = `Walking Score: ${scores.walkingScore}`;
    document.getElementById("bikeScore").innerText = `Bike Score: ${scores.bikeScore}`;
});

document.getElementById("toggleBtn").addEventListener("click", function() {
    chrome.scripting.executeScript({
        target: { tabId: currentTabId },
        file: 'content.js'
    }, () => {
        // Send a message to content.js to toggle the green circle
        chrome.scripting.sendMessage({
            target: { tabId: currentTabId },
            data: { action: 'toggleGreenCircle' }
        });
    });
});
