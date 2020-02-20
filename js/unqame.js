// Removing highlighters and rolling back the magic.
var qaboxelem = document.querySelectorAll(".qa-box");
var qaelem = '[data-testid]';
// DIV selector
var divs = document.getElementsByTagName("DIV");
// QA elements selector
var dataAttr = document.querySelectorAll(qaelem);

for (var i = 0; i < dataAttr.length; i++) {
    var d = dataAttr[i];
    d.style.border = "";
    d.style.backgroundColor = "";
    d.style.position = "";
    d.parentElement.style.position = "";
    d.classList.remove("qa-bg");
}

for (var i = 0; i < qaboxelem.length; i++) {
    qaboxelem[i].parentNode.removeChild(qaboxelem[i]);
}


for (var i = 0; i < divs.length; i++) {
    divs[i].style.overflow = "visible";
}

[].forEach.call(qaboxelem, function (el) {
    el.classList.remove("qa-box");
});