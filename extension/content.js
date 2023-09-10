// chrome.storage.local.get(["isGreen"], function(result) {
//     if (result.isGreen) {
//         let style = document.createElement("style");
//         style.id = "greenishStyle";
//         style.innerHTML = "body { filter: hue-rotate(90deg) }";
//         document.head.appendChild(style);
//     }
// });

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

// // ... Previous content script code ...

// // Function to apply the greenish effect
// function toggleGreenEffect() {
//     if (document.body.style.filter) {
//         // If filter is already applied, reset it
//         document.body.style.filter = '';
//     } else {
//         // Apply a sepia filter, which will give a greenish tint while keeping blues
//         document.body.style.filter = 'sepia(0.7)';
//     }
// }

// Check for a message to toggle the green circle effect or greenish effect
chrome.runtime.onMessage.addListener((request) => {
    if (request.action === 'toggleGreenCircle') {
        showGreenCircle();
    } else if (request.action === 'toggleGreenEffect') {
        toggleGreenEffect();
    }
});

// // Function to change the pathways to green
// function toggleGreenPathways() {
//     // Approximation to target pathways on Google Maps
//     let paths = document.querySelectorAll('[aria-label*="Path"], [role="region"] > div > div');

//     if (paths.length === 0) {
//         // No paths were found based on the current criteria
//         return;
//     }

//     paths.forEach(path => {
//         if (path.style.backgroundColor !== 'green') {
//             path.style.backgroundColor = 'green';
//             path.style.borderColor = 'green';
//         } else {
//             // Reset the path colors
//             path.style.backgroundColor = '';
//             path.style.borderColor = '';
//         }
//     });
// }

// function toggleGreenWash() {
//     const greenWash = document.getElementById('greenWashOverlay');

//     // If green wash is already applied, remove it
//     if (greenWash) {
//         greenWash.remove();
//         return;
//     }

//     // Create a div that covers the entire Google Maps viewport
//     const overlay = document.createElement('div');
//     overlay.id = 'greenWashOverlay';
//     overlay.style.position = 'fixed';
//     overlay.style.top = '0';
//     overlay.style.left = '0';
//     overlay.style.right = '0';
//     overlay.style.bottom = '0';
//     overlay.style.backgroundColor = 'rgba(0, 255, 0, 0.1)';  // Semi-transparent green
//     overlay.style.pointerEvents = 'none';  // Allows interaction with the map underneath
//     overlay.style.zIndex = '999';  // Ensure it appears on top, but beneath our other UI elements

//     // Add the overlay to the body
//     document.body.appendChild(overlay);
// }