export let note_color = "blue"

// Function to change color on color div clicked

const colors = document.querySelectorAll(".color_pick")
colors.forEach(color => {
    color.addEventListener("click", (event) => {
        console.log(color.id)   
        changeColor(color.id)
        
        document.querySelector('.selected').classList.remove('selected')
        event.target.classList.add("selected")
    })
})

function changeColor(color) {
    note_color = color
}

export function createNote(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    const sticky = document.createElement("div");
    sticky.classList.add("note");
    sticky.setAttribute("draggable", "true"); // Make draggable
    sticky.id = `stickyNote-${Date.now()}`; // Unique ID based on timestamp

    sticky.style.position = "absolute";
    sticky.style.left = `${x}px`;
    sticky.style.top = `${y}px`;
    sticky.style.width = "300px";
    sticky.style.height = "200px";
    sticky.style.backgroundColor = note_color;

    sticky.innerHTML = `
        <input type="text" class="stickyTitle" placeholder="Title">
        <textarea class="stickyContent" placeholder="Write your note here"></textarea>
    `;

    document.getElementById("container").appendChild(sticky);
}