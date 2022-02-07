let btn = document.querySelectorAll(".drum");

// mouse click   

btn.forEach((element) => {
  element.addEventListener("click", function () {
    var btntext = this.innerHTML;
    makeSound(btntext);
    addAnimation(btntext)
  });
});


// keyborad press   

var key;
document.addEventListener('keypress',function(event){

    key = event.key;
    makeSound(key);
    addAnimation(key);
});


function makeSound(key){

    switch (key) {
        case "w":
          var tom1 = new Audio("./sounds/tom-1.mp3");
          tom1.play();
          break;
        case "a":
          var tom2 = new Audio("./sounds/tom-2.mp3");
          tom2.play();
          break;
        case "s":
          var snare = new Audio("./sounds/snare.mp3");
          snare.play();
          break;
        case "d":
          var tom3 = new Audio("./sounds/tom-3.mp3");
          tom3.play();
          break;
        case "j":
          var tom4 = new Audio("./sounds/tom-4.mp3");
          tom4.play();
          break;
        case "k":
          var kick = new Audio("./sounds/kick-bass.mp3");
          kick.play();
          break;
        case "l":
          var crash = new Audio("./sounds/crash.mp3");
          crash.play();
          break;
          
  
  
      default:
          console.log('henhe');
      }
}

function addAnimation(events){
  document.querySelector('.'+events).classList.add('pressed');

  setTimeout(function(){
    document.querySelector('.'+events).classList.remove('pressed')
  },200)
}

