//your code here
// Function to handle drag start
function handleDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  event.target.classList.add("selected");
}

// Function to handle drag over
function handleDragOver(event) {
  event.preventDefault();
}

// Function to handle drop
function handleDrop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(data);
  const dropTarget = event.target;

  // Swap images by swapping background-image property
  const tempBackground = draggedElement.style.backgroundImage;
  draggedElement.style.backgroundImage = dropTarget.style.backgroundImage;
  dropTarget.style.backgroundImage = tempBackground;

  // Remove the selected class after dropping
  draggedElement.classList.remove("selected");
}

// Get all image elements and add event listeners
const imageElements = document.querySelectorAll(".image");
imageElements.forEach((element) => {
  element.addEventListener("dragstart", handleDragStart);
  element.addEventListener("dragover", handleDragOver);
  element.addEventListener("drop", handleDrop);
});
