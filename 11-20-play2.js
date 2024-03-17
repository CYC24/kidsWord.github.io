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

document.getElementById("sixteen").addEventListener("click", function () {
  document.getElementById("audio-sixteen").play();
});

document.getElementById("seventeen").addEventListener("click", function () {
  document.getElementById("audio-seventeen").play();
});

document.getElementById("eighteen").addEventListener("click", function () {
  document.getElementById("audio-eighteen").play();
});

document.getElementById("nineteen").addEventListener("click", function () {
  document.getElementById("audio-nineteen").play();
});

document.getElementById("twenty").addEventListener("click", function () {
  document.getElementById("audio-twenty").play();
});
