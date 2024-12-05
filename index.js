import { createNote, note_color } from './sticky.mjs';
import { sticky } from './drag.mjs';

let stickyindex = 0;
document.body.addEventListener('dblclick', function(event) {
    // Change the background color to a random color
    stickyindex+= 1;
    createNote(event);
  });

const container = document.getElementById("container");

const HTMLinj = function(){
    const temp = `
    <div class="stickyTitle">
        <h2> <input type='text'> title</input>${stickyindex}</h2>
    </div>
    <input type="text" id= stickyNote${stickyindex} class="StickyNote"> please type your note </input>
    ` 
    
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('note')) {
        sticky({ target: event.target });
    }
});

 
// Jonahs section (do not touch!!!)
// >:( grr
//     :(


container.addEventListener("click", beenClicked);
function beenClicked() {
    console.log("I've been clicked");
}//  for double clickmake a html object that is draggable and shows up
//  Eventlistner for dragging.
//close button on the sticky note

