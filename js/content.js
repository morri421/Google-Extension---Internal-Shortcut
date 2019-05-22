
//Receives background.js message then sends back id value
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      const bar = document.getElementById("storedSiteId").value;
      sendResponse(bar);
    }
  }
);
