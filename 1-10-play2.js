function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("Text");

  if (ev.target.getAttribute("data-drop") === data)
    ev.target.appendChild(document.getElementById(data));
}

document.getElementById("six").addEventListener("click", function () {
  document.getElementById("audio-six").play();
});

document.getElementById("seven").addEventListener("click", function () {
  document.getElementById("audio-seven").play();
});

document.getElementById("eight").addEventListener("click", function () {
  document.getElementById("audio-eight").play();
});

document.getElementById("nine").addEventListener("click", function () {
  document.getElementById("audio-nine").play();
});

document.getElementById("ten").addEventListener("click", function () {
  document.getElementById("audio-ten").play();
});
