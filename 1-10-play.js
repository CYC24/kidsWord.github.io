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

document.getElementById("one").addEventListener("click", function () {
  document.getElementById("audio-one").play();
});

document.getElementById("two").addEventListener("click", function () {
  document.getElementById("audio-two").play();
});

document.getElementById("three").addEventListener("click", function () {
  document.getElementById("audio-three").play();
});

document.getElementById("four").addEventListener("click", function () {
  document.getElementById("audio-four").play();
});

document.getElementById("five").addEventListener("click", function () {
  document.getElementById("audio-five").play();
});
