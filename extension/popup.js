let currentTabId; // Ensure this is properly set

document.getElementById("toggleBtn").addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        currentTabId = tabs[0].id;
        
        if (tabs[0].url && tabs[0].url.startsWith("https://www.google.com/maps")) {
            toggleGreenishEffect(currentTabId);
            sendToggleMessage(currentTabId);
            displayScores();
        } else {
            alert("This extension works only on Google Maps!");
        }
    });
});

document.getElementById("statsBtn").addEventListener("click", function() {
    chrome.tabs.create({ url: "http://localhost:3000/" });
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

function sendToggleMessage(tabId) {
    chrome.scripting.sendMessage({
        target: { tabId: tabId },
        data: { action: 'toggleGreenEffect' }
    });

    chrome.scripting.sendMessage({
        target: { tabId: tabId },
        data: { action: 'toggleGreenCircle' }
    });
}

function displayScores() {
    // Display the sustainability scores
    document.getElementById("sustainabilityScores").style.display = "block";
}
