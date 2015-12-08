// ==UserScript==
//@name         Tracker Userscript
//@namespace    http://tracker.dynamit.us
//@version      0.3
//@description  enter something useful
//@author       Sully
//@grant        none
//@include      http://tracker.dynamit.us/*
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('span')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('.icon { font-size: 30px !important; margin-left:10px !important; display:inline-block !important; }');
addGlobalStyle('.icon-delete { font-size: 34px !important; margin-top:-2px !important; }');
addGlobalStyle('.icon:hover { color:#e95e3f !important; }');
addGlobalStyle('.mobileonly { display:none !important; }');
addGlobalStyle('.icon-edit { width:30px !important; overflow:hidden !important; top: 6px !important; position:relative !important; }');
addGlobalStyle('.menu { display:none !important; }');
addGlobalStyle('.userthumb { max-width: 50px; display:inline-block; padding-right:30px; }');