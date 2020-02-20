// Scripts for the popup

var found = document.getElementById("found");
var foundHtml = 'No elements found in the DOM...';


// Number of data-qa elements found in the DOM
function getDOM() {
    return document.querySelectorAll('[data-testid]').length;
}

//Highlight QA elements
function qame() {
    var qameBtn = document.getElementById("qame");
    qameBtn.innerHTML = 'Hightlighting...';
    setTimeout(function () {
        qameBtn.innerHTML = 'Highlight';
    }, 1000);
    //Current tab functions
    browser.tabs.executeScript(null, {
        //Removing previous extension content in DOM
        file: '/js/unqame.js'
    });
    browser.tabs.executeScript(null, {
        //Adding extension content in DOM
        file: '/js/qame.js'
    });
    // Number of data-qa elements found in the DOM
    chrome.tabs.executeScript({
        code: '(' + getDOM + ')();'
    }, (results) => {
        if (results[0] > 0) {
            found.innerHTML = results[0] + ' elements found in the DOM';
            return false;
        }
        else {
            found.innerHTML = foundHtml;
        }
    });
    found.innerHTML = foundHtml;
    return false;
}

//Remove QA elements
function unqame() {
    var unQameBtn = document.getElementById("unqame");
    unQameBtn.innerHTML = 'Done...';
    setTimeout(function () {
        unQameBtn.innerHTML = 'Remove';
    }, 1000);
    //Current tab functions
    browser.tabs.executeScript(null, {
        //Removing extension content in DOM
        file: '/js/unqame.js'
    });
    found.innerHTML = 'Highlights removed...'
}

document.getElementById('qame').addEventListener('click', qame);
document.getElementById('unqame').addEventListener('click', unqame);

