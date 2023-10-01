// adding event listener for any changes in chrome tab
chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
      const queryParameters = tab.url.split("?")[1];
      const urlParameters = new URLSearchParams(queryParameters);
  
      // send msg to contentScript that new vid is loaded
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        videoId: urlParameters.get("v"),
      });
    }
  });
  