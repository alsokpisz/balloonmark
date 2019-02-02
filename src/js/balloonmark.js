var d3 = require('d3');
//[FUNCTIONAL] Event listeners for pouchDB actions with buttons described in balloonmark.html
//[DEV] Interesting problem: these need Promises! Time to learn.
//[DEV] https://medium.com/quick-code/javascript-promises-in-twenty-minutes-3aac5b65b887
document.getElementById("myBtnInitID").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "myBtnInitID";
});

document.getElementById("myBtnPop").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "myBtnPop";
});