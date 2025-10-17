/* DISABLE COPY AND PASTE, DISABLE DRAG AND DROP, DISABLE F12 */
document.addEventListener('DOMContentLoaded', function() {
  // Disable right-click
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  // Disable copy, cut, and paste
  ['copy', 'cut', 'paste'].forEach(function(evt) {
    document.addEventListener(evt, function(e) {
      e.preventDefault();
    });
  });

  // Disable drag & drop
  ['dragstart', 'drop'].forEach(function(evt) {
    document.addEventListener(evt, function(e) {
      e.preventDefault();
    });
  });

  // Disable keyboard shortcuts for copy/paste/etc.
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) &&
        ['c', 'x', 'v', 's', 'u', 'a'].includes(e.key.toLowerCase())) {
      e.preventDefault();
    }

    // Optional: disable F12 (Developer Tools)
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
    }
  });
});


/* DESKTOP SIDEBAR INTERACTIVITY */ 
var mini = true;

function toggleSidebar() {
  if (mini) {
    console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
    this.mini = false;
  } else {
    console.log("closing sidebar");
    document.getElementById("mySidebar").style.width = "70px";
    document.getElementById("main").style.marginLeft = "70px";
    this.mini = true;
  }
}


// LIGHTBOX FEATURE FOR LANDSCAPES, PORTRAITS, BLACK AND WHITE PAGES

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".landscape-item img, .blackWhite-item img, .portrait-item img");
  
  // Create popup container
  const popup = document.createElement("div");
  popup.classList.add("image-popup");
  const popupImg = document.createElement("img");
  popup.appendChild(popupImg);
  document.body.appendChild(popup);

  // When thumbnail clicked
  images.forEach(img => {
    img.addEventListener("click", () => {
      const fullSrc = img.dataset.full || img.src; // use data-full if available
      popupImg.src = fullSrc;
      popup.classList.add("active");
    });
  });

  // Close popup on click anywhere
  popup.addEventListener("click", () => {
    popup.classList.remove("active");
  });
});



