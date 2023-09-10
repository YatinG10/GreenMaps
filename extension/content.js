chrome.storage.local.get(["isGreen"], function(result) {
    if (result.isGreen) {
        let style = document.createElement("style");
        style.id = "greenishStyle";
        style.innerHTML = "body { filter: hue-rotate(90deg) }";
        document.head.appendChild(style);
    }
});

// Sample code to scrape the time and distance for each mode of transport
// Note: This might not be robust as Google Maps can change their structure.
let modes = ['driving', 'transit', 'walking', 'bicycling'];

let results = {};

modes.forEach(mode => {
    let timeElement = document.querySelector(`[data-travel-mode=${mode}] .section-directions-trip-duration`);
    let distanceElement = document.querySelector(`[data-travel-mode=${mode}] .section-directions-trip-distance`);

    if (timeElement && distanceElement) {
        results[mode] = {
            time: timeElement.innerText.trim(),
            distance: distanceElement.innerText.trim()
        };
    }
});

chrome.runtime.sendMessage(results);

// Inject the green circle with "5" into the Google Maps page
function showGreenCircle() {
    if (document.getElementById('greenCircle')) {
        // If it already exists, remove it to toggle the effect off
        document.getElementById('greenCircle').remove();
        return;
    }

    // Create the circle element
    const circle = document.createElement('div');
    circle.id = 'greenCircle';
    circle.style.position = 'fixed';
    circle.style.bottom = '20px';
    circle.style.right = '20px';
    circle.style.width = '50px';
    circle.style.height = '50px';
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = '#0ea47a';
    circle.style.display = 'flex';
    circle.style.justifyContent = 'center';
    circle.style.alignItems = 'center';
    circle.style.fontSize = '24px';
    circle.style.color = 'white';
    circle.style.zIndex = '9999'; // Ensure it appears on top
    circle.innerText = '5';

    // Append the circle to the body
    document.body.appendChild(circle);
}

// Check for a message to toggle the green circle effect
chrome.runtime.onMessage.addListener((request) => {
    if (request.action === 'toggleGreenCircle') {
        showGreenCircle();
    }
});