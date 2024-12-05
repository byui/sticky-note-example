export const sticky = function(event) {
    const stickyNote = event.target;

    // Start dragging
    stickyNote.ondragstart = function (event) {
        const rect = stickyNote.getBoundingClientRect();
        event.dataTransfer.setData("offsetX", event.clientX - rect.left);
        event.dataTransfer.setData("offsetY", event.clientY - rect.top);
        event.dataTransfer.setData("id", stickyNote.id); // Pass ID
    };

    // Prevent default to allow dropping
    document.ondragover = function (event) {
        event.preventDefault();
    };

    // Handle drop
    document.ondrop = function (event) {
        event.preventDefault();
        const id = event.dataTransfer.getData("id");
        const offsetX = parseInt(event.dataTransfer.getData("offsetX"), 10);
        const offsetY = parseInt(event.dataTransfer.getData("offsetY"), 10);

        const element = document.getElementById(id);
        if (element) {
            element.style.position = "absolute";
            element.style.left = `${event.clientX - offsetX}px`;
            element.style.top = `${event.clientY - offsetY}px`;
        }
    };
};
