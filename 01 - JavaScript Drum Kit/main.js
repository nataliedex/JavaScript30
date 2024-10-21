// function playSound(eventKey){
//     const key = document.querySelector(`.key[data-key="${eventKey}"]`);
//     const audio = document.querySelector(`audio[data-key="${eventKey}"]`);

//     if(!key || !audio) return;

//     key.classList.add("playing");
//     audio.currentTime = 0;
//     audio.play();

//     setTimeout(() => {
//         key.classList.remove("playing");
//     }, 200);
// }

// function handleKeyEvent(keyCode) {
//     switch (keyCode) {
//         case 65:
//             playSound(65);
//             break;
//         case 83:
//             playSound(83);
//             break;
//         case 68:
//             playSound(68);
//             break;
//         case 70:
//             playSound(70);
//             break;
//         case 71:
//             playSound(71);
//             break;
//         case 72:
//             playSound(72);
//             break;
//         case 74:
//             playSound(74);
//             break;
//         case 75:
//             playSound(75);
//             break;
//         case 76:
//             playSound(76);
//             break;
    
//         default:
//             console.log("key not mapped");;
//     }
// }

// document.addEventListener("keydown", (event) => {
//     handleKeyEvent(event.keyCode);
// });

document.addEventListener("keydown", (e) => {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
    audio.play();
    setTimeout(() => {
        key.classList.remove("playing");
    },200);
     
});