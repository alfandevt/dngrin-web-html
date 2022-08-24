var screenWidth = window.screen.width;
var desktopScreen = 992;

var sectionEls = document.querySelectorAll(".section");
var navBtn = document.getElementById("nav-btn");
var menuBtn = document.getElementById("menu-btn");
var navMenu = document.getElementById("nav-menu");

// Toggle mobile menu
function showMenu() {
  navMenu.classList.toggle("active");
}

function menuEventListener() {
  navBtn.addEventListener("click", showMenu);

  if (menuBtn) {
    menuBtn.addEventListener("click", showMenu);
  }
}

// Scroll Animation
function sectionAnimate() {
  const triggerBottom = (window.innerHeight / 6) * 4;

  sectionEls.forEach((sectionEl) => {
    const sectionTop = sectionEl.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      console.log(triggerBottom);
      console.log("section top", sectionTop);
      sectionEl.classList.add("show");
    } else {
      sectionEl.classList.remove("show");
    }
  });
}

function onSectionScroll() {
  console.log(screenWidth, desktopScreen);
  if (screenWidth > desktopScreen) {
    window.addEventListener("scroll", sectionAnimate);
  }
}

// Execute function
onSectionScroll();
menuEventListener();
