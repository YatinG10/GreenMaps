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
