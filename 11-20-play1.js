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

document.getElementById("eleven").addEventListener("click", function () {
  document.getElementById("audio-eleven").play();
});

document.getElementById("twelve").addEventListener("click", function () {
  document.getElementById("audio-twelve").play();
});

document.getElementById("thirteen").addEventListener("click", function () {
  document.getElementById("audio-thirteen").play();
});

document.getElementById("fourteen").addEventListener("click", function () {
  document.getElementById("audio-fourteen").play();
});

document.getElementById("fifteen").addEventListener("click", function () {
  document.getElementById("audio-fifteen").play();
});
