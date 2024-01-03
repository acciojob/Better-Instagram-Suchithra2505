//your code here
document.addEventListener('DOMContentLoaded', function () {
  const parent = document.getElementById('parent');
  let dragged;

  parent.addEventListener('dragstart', function (event) {
    dragged = event.target;
    event.dataTransfer.setData('text/plain', ''); // required for Firefox
  });

  parent.addEventListener('dragover', function (event) {
    event.preventDefault();
  });

  parent.addEventListener('drop', function (event) {
    event.preventDefault();
    const target = event.target;

    // Check if the drop target is a valid image element
    if (target.classList.contains('image')) {
      // Swap the background images
      const temp = target.style.backgroundImage;
      target.style.backgroundImage = dragged.style.backgroundImage;
      dragged.style.backgroundImage = temp;
    }
  });
});




  
