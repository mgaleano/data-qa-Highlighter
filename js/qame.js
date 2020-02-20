// QA data-* attibutes names array
var qaelem = '[data-testid]';
// QA elements selector
var dataAttr = document.querySelectorAll(qaelem);

// DIV selector
var divs = document.getElementsByTagName("DIV");

// Applying styles and making some stuff for the QA elements found in DOM
for (var i = 0; i < dataAttr.length; i++) {
    var d = dataAttr[i];
    
    dataElemTxt = d.getAttribute("data-testid");
    var qaBoxTxt;
    
    if (dataElemTxt) {
        qaBoxTxt = dataElemTxt
    }
    
    var qabox = '<div class="qa-box">' + qaBoxTxt + '</div>';
    var elems = ['SELECT', 'TEXTAREA', 'INPUT', 'BUTTON', 'SPAN'];
    d.style.border = "2px red solid";
    d.style.backgroundColor = "grey";
    d.style.position = "relative";
    d.parentElement.style.position = "relative";
    d.className += " qa-bg";

    /* We differentiate between form elements and other types of elements, for getting better positioning results. 
    This is, rather, something specific for the proyect we are working */
    if (elems.indexOf(d.tagName) !== -1) {
        d.insertAdjacentHTML('afterend',
            qabox);
    } else {
        d.insertAdjacentHTML('afterbegin',
            qabox);
    }
}

// Visual fix for qa highlighters
for (var i = 0; i < divs.length; i++) {
    divs[i].style.overflow = "visible";
}