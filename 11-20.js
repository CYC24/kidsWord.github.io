function playAudio(audioId) {
  var audio = document.getElementById(audioId);
  audio.play();
}

document.getElementById("eleven").addEventListener("click", function () {
  playAudio("audioEleven");
});

document.getElementById("twelve").addEventListener("click", function () {
  playAudio("audioTwelve");
});

document.getElementById("thirteen").addEventListener("click", function () {
  playAudio("audioThirteen");
});

document.getElementById("fourteen").addEventListener("click", function () {
  playAudio("audioFourteen");
});

document.getElementById("fifteen").addEventListener("click", function () {
  playAudio("audioFifteen");
});

document.getElementById("sixteen").addEventListener("click", function () {
  playAudio("audioSixteen");
});

document.getElementById("seventeen").addEventListener("click", function () {
  playAudio("audioSeventeen");
});

document.getElementById("eighteen").addEventListener("click", function () {
  playAudio("audioEighteen");
});

document.getElementById("nineteen").addEventListener("click", function () {
  playAudio("audioNineteen");
});

document.getElementById("twenty").addEventListener("click", function () {
  playAudio("audioTwenty");
});
