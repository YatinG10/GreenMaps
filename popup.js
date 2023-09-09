document.addEventListener("DOMContentLoaded", function () {
    const toggleMap = document.getElementById("toggleMap");
  
    toggleMap.addEventListener("change", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: toggleGreenMap,
        });
      });
    });
  
    function toggleGreenMap() {
      const map = document.querySelector(".widget-scene");
      if (map) {
        map.style.filter = toggleMap.checked ? "grayscale(0%) sepia(100%)" : "";
      }
    }
  });
  