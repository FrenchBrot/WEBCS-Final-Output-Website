/* DISABLE DRAG AND DROP */




/* DISABLE COPY AND PASTE */





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

// TYPERITING EFFECT FOR WELCOME MESSAGE
