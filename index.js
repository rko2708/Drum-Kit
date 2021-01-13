for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var thisButton = this.innerHTML;
    sound(thisButton);
    currentlyPressed(thisButton);
  });

}

document.addEventListener("keypress", function(event) {
  sound(event.key);
  currentlyPressed(event.key);
});

function sound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:
      break;
  }
}

function currentlyPressed(key) {
  var current = document.querySelector("." + key);
  current.classList.add("pressed");
  var time_break = 100;
  setTimeout(function() {
    current.classList.remove("pressed");
  }, time_break);

}
