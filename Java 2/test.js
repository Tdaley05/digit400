window.onload = function () {
  alert("Hell0!");
};

title.onmouseover = function () {
  title.style.fontSize = "40px";
  title.style.color = "purple";
  title.style.textDecoration = "underline";
  title.style.cursor = "pointer";
};

title.onmouseout = function () {
  title.style.fontSize = "32px";
  title.style.color = "red";
  title.style.textDecoration = "underline";
  title.style.cursor = "pointer";
};

/*When I put the script in my html file, if it was in the head it wouldn't read anything beyond the onload popup, so I'm not sure if it's just something I forgot to do or something I just did wrong*/

highlightToggle.onclick = function () {
  if (highlightToggle.checked) {
    myText.classList.add("on");
  } else {
    myText.classList.remove("on");
  }
};

myText.onmouseover = function () {
  myText.style.cursor = "pointer";
  myText.classList.add("hover");
};

myText.onmouseout = function () {
  myText.style.cursor = "pointer";
  myText.classList.remove("hover");
};
