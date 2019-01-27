import '../img/icon-128.png';
import '../img/icon-34.png';

chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "balloonmark.html";
    chrome.tabs.create({ url: newURL });
});

//Works correctly 
function initbookmarks(id) {
    chrome.bookmarks.getChildren(id, function(children) {
        for (var i = 0; i < children.length; i++) {
            var bookmark = children[i];
            console.log(bookmark.title);
            if (bookmark.title == 'Bookmarks bar') {
                //chrome.bookmarks.getTree(storbookmarkall);
                //getbookmark('http://motherboard.vice.com/read/the-guardians-of-londons-black-cab-knowledge');
                break;
            }
        }
    });
}

//Works correctly
function testconsolelogall(bookmarks) {
    for (var i=0;i<bookmarks.length;i++) {
        var bookmark = bookmarks[i];
        if (bookmark.url) {
            console.log("bookmark: "+ bookmark.title + "~ "+ bookmark.url);
        }
        if (bookmark.children) {
            testconsolelogall(bookmark.children);
        }
    }
}

function storbookmarkall(bookmarks) {
    var defaultint = 0;
    var urldict = {};
    for (var i=0;i<bookmarks.length;i++) {
        var bookmark = bookmarks[i];
        if (bookmark.url) {
            console.log(bookmark.url+" : "+defaultint);
            urldict[bookmark.url] = defaultint;
        }
        chrome.storage.local.set(urldict);
        if (bookmark.children) {
            storbookmarkall(bookmark.children);
        }
    }
}


function teststorbookmark(keyurl,defaultint) {
    var urldict={};
    urldict[keyurl] = defaultint;
    chrome.storage.local.set(urldict);
    chrome.storage.local.get(urldict, function(result) {
        console.log(result[keyurl]);
    });
}

function removebookmark(keyurl) {
    chrome.storage.local.remove(keyurl);
    console.log('Deleted '+keyurl);
}

function removebookmarkall() {
    chrome.storage.local.remove(urldict);
    console.log('Deleted all??');
}

function getbookmark(keyurl) {
    chrome.storage.local.get(urldict[keyurl], function(result) {
        console.log('Value is: '+result.key);
    });
}