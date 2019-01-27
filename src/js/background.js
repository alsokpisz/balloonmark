import '../img/icon-128.png';
import '../img/icon-34.png';
const PouchDB = require('pouchdb').default;

var db = new PouchDB('bookmarkbase');

//[FUNCTIONAL] Creates newtab on extension click and initiates the bookmark categorization.
chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "balloonmark.html";
    chrome.tabs.create({ url: newURL });
    initbookmarks('0'); //Start-point for initbookmarks
});

//[FUNCTIONAL] Initializes all the other functions by indexing the root bookmark directory.
function initbookmarks(id) {
    chrome.bookmarks.getChildren(id, function(children) {
        for (var i = 0; i < children.length; i++) {
            var bookmark = children[i];
            console.log(bookmark.title);
            if (bookmark.title == 'Bookmarks bar') {
                //chrome.bookmarks.getTree(storbookmarkall); Start-point for storbookmarkall
                //chrome.bookmarks.getTree(testconsolelogall); Start-point for testconsolelogall
                console.log("Does execute?");
                postbookmarkpair("https://lego.com/en-us",0);
                break;
            }
        }
    });
}

//[DEV] Console.logs all bookmarks
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

//[FUNCTIONAL] Console.logs all bookmarks and utilizes the [DEV] function to post all the bookmarks to the pouchDB. 
function storbookmarkall(bookmarks) {
    var defaultint = 0;
    for (var i=0;i<bookmarks.length;i++) {
        var bookmark = bookmarks[i];
        if (bookmark.url) {
            console.log(bookmark.url+" : "+defaultint);
            postbookmarkpair(bookmark.url,defaultint); //Start-point pouchDB.
        }
        chrome.storage.local.set(urldict);
        if (bookmark.children) {
            storbookmarkall(bookmark.children); //Recursively calls on each folder.
        }
    }
}

//[DEV] Posts a dictionary called bookmarkpair to the pouchDB. Unsure if correctly stores information.
function postbookmarkpair(url,val) {
    var bookmarkpair = {
        _id: url,
        visitval: val,
    };
    db.put(bookmarkpair, function callback(err, result) {
        if(!err) {
            console.log('Successfully posted bookmark!');
        }
    });
}

//[DEV] Queries the database to find any bookmarkpair dictionary objects with 'val' over 0. Returns to a unspecified function
//      drawd3, which was intended to be for the vizualiation component with d3.js. Unsure if correctly queried.
function showbookmarkpairs() {
    db.find({
        selector: {val: {$gt: 0}}},
    function(err, doc) {
        if (err) {return console.log(err); }
        drawd3(doc); //Start-point for d3.js
    });
}

//[DEV] Increments the 'val' of a bookmarkpair by 1.
function editbookmarkpair(url) {
    db.get(url, function(err, doc) {
        if (err) { return console.log(err); }
    var bookmarkval = doc.val;
    ++bookmarkval;
    db.put(bookmarkval);
    console.log("Updated the value for "+url);
    });
}

//[DEV] The unspecified function drawd3, which was where the d3.js library was supposed to implement the vizualization.
//      Currently, supposedly, just prints the object to the console.
function drawd3(doc) {
    console.dir(doc);
}