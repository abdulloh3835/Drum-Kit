/* click from Mouse events used */
for (var i = 0; i < document.querySelectorAll(".box").length; i++) {
    document.querySelectorAll(".box")[i].addEventListener("click", myFunction1);

    function myFunction1() {
        // this.style.color = "white";
        var txt = this.innerHTML;
        // console.log("clicked button text is: " + txt);
        makeSound(txt);
        makeAnimation(txt);
    }
}


/* keydown from Keyboard events used */
window.document.addEventListener("keydown", myFunction2);        // (or 2nd way) window.addEventListener("keydown", myFunction2);   (or 3rd way) document.addEventListener("keydown", myFunction2);

function myFunction2(event_or_I_can_write_anything) {
    // console.log("pressed key is: " + event.key);       // from keyboardEvent properties, key property.
    makeSound(event_or_I_can_write_anything.key);
    makeAnimation(event_or_I_can_write_anything.key);
}


/* function for making sounds with Switch statement (Audio object used)*/
function makeSound(letters) {
    switch (letters) {
        case "a":
            var sound = new Audio('./sounds/tom-1.mp3');
            sound.play();
            break;
        case "s":
            var sound = new Audio('./sounds/tom-2.mp3');
            sound.play();
            break;
        case "d":
            var sound = new Audio('./sounds/tom-3.mp3');
            sound.play();
            break;
        case "f":
            var sound = new Audio('./sounds/tom-4.mp3');
            sound.play();
            break;
        case "j":
            var sound = new Audio('./sounds/snare.mp3');
            sound.play();
            break;
        case "k":
            var sound = new Audio('./sounds/crash.mp3');
            sound.play();
            break;
        case "l":
            new Audio('./sounds/kick-bass.mp3').play();
            break;
        default:
            console.log(letters);
    }
}
// document.querySelector("button.w").setAttribute("src","crash.mp3");         just to know.


/* function for making animation with if statement (Window setTimeout() method used)*/
function makeAnimation(letters) {
    var arrayLetters = ["a", "s", "d", "f", "j", "k", "l"];
    if (arrayLetters.includes(letters)) {
        // console.log(letters);
        document.querySelector("." + letters).classList.add("animation");
        window.setTimeout(removeFunction, 100);      // can be written without window. -> just like -> setTimeout(removeFunction, 100); 

        function removeFunction() {
            document.querySelector("." + letters).classList.remove("animation");
        }
    }
    else {
        console.log("value invalid");
    }

    // document.querySelector("." + letters).classList.add("animation");       this way also works without using if-else statement.
    // setTimeout(removeFunction, 100);

    // function removeFunction() {
    //     document.querySelector("." + letters).classList.remove("animation");
    // }
} 