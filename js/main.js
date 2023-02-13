// Toggles the mobile menu
function toggleMenu() {
  let x = document.querySelector(".mobile-nav");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  console.log("Toggle Mobile Menu");
}

// Toggle Moco Facilities & Services Details

function toggleDetail(service) {
  const serviceText = document.querySelector(service).style.display;
  if (serviceText === "block") {
    serviceText = "none";
  } else {
    serviceText = "block";
  }
  console.log("Toggle Service Details");
}
