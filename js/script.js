/* =========================================
FILE: js/script.js
========================================= */

function openGallery(id){

  document.getElementById(id).style.display = "block";

  document.body.style.overflow = "hidden";
}


function closeGallery(id){

  document.getElementById(id).style.display = "none";

  document.body.style.overflow = "auto";
}


/* CLICK OUTSIDE CLOSE */

window.onclick = function(event){

  var modals = document.querySelectorAll(".modal");

  modals.forEach(function(modal){

    if(event.target == modal){

      modal.style.display = "none";

      document.body.style.overflow = "auto";
    }

  });

};


/* ESC CLOSE */

document.addEventListener("keydown", function(e){

  if(e.key === "Escape"){

    var modals = document.querySelectorAll(".modal");

    modals.forEach(function(modal){

      modal.style.display = "none";

    });

    document.body.style.overflow = "auto";

  }

});





// =========================
// OPEN CATEGORY MODAL
// =========================

function openGallery(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "block";
  }
}

// =========================
// CLOSE CATEGORY MODAL
// =========================

function closeGallery(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
  }
}

// =========================
// FULL IMAGE VIEWER OPEN
// =========================

function openImage(src) {

  const viewer = document.getElementById("imageViewer");
  const fullImage = document.getElementById("fullImage");
  const downloadBtn = document.getElementById("downloadBtn");

  if (!viewer || !fullImage || !downloadBtn) return;

  viewer.style.display = "flex";
  fullImage.src = src;
  downloadBtn.href = src;
}

// =========================
// FULL IMAGE VIEWER CLOSE
// =========================

function closeImageViewer() {
  const viewer = document.getElementById("imageViewer");
  if (viewer) {
    viewer.style.display = "none";
  }
}

// =========================
// CLICK OUTSIDE TO CLOSE
// =========================

window.addEventListener("click", function(event) {

  // close modals
  const modals = document.querySelectorAll(".modal");

  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // close image viewer
  const viewer = document.getElementById("imageViewer");

  if (viewer && event.target === viewer) {
    viewer.style.display = "none";
  }
});