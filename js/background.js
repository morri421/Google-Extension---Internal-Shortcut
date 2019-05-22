//function doStuffWithDOM(element) {
//    alert("I received the following DOM content:\n" + element);
//}

//Send message to content.js to get id from website where extension button is
//is clicked, then open the url with the acquired id
chrome.browserAction.onClicked.addListener(function(activeTab){
  chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"}, function(response) {
    var newURL = "https://secure.emochila.com/emoadmin/aspartame/asp.jsp?id=" + response;
    chrome.tabs.create({ url: newURL });

  });


});
