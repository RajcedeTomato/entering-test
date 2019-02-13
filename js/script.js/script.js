"use strict";

function openSection(event) {
  closeAll();
  removeActiveClass();
  addActiveClass(event);

  for (var _len = arguments.length, names = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    names[_key - 1] = arguments[_key];
  }

  var sections = names;
  sections.map(function (section) {
    if (section != "contact") {
      document.getElementById(section).style.display = "initial";
    } else {
      document.getElementById(section).style.display = "flex";
    }
  });
}

function closeAll() {
  var contents = document.getElementsByClassName('content');

  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
}

function removeActiveClass() {
  var buttons = document.getElementsByClassName('nav-link');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace("active", "");
  }
}

function addActiveClass(event) {
  event.currentTarget.className += " active";
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topButton").style.display = "block";
    document.getElementById("topButton").style.transition = "display 1s";
  } else {
    document.getElementById("topButton").style.transition = "display 1s";
    document.getElementById("topButton").style.display = "none";
  }
};