import '../img/icon-128.png'
import '../img/icon-34.png'
chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "balloonmark.html";
    chrome.tabs.create({ url: newURL });
});