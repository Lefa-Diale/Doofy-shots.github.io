window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 0) {
    nav.classList.add("window-scrolled");
  } else {
    nav.classList.remove("window-scrolled");
  }
});

const textButtons = document.querySelectorAll(".contact_btn");

textButtons.forEach((textButton) => {
  let text = textButton.querySelector("p");
  let textContent = text.innerHTML.trim(); // remove any leading/trailing white space

  // add an extra space character to the end of the text
  let textWithSpace = textContent + " ";

  text.innerHTML = textWithSpace
    .split("")
    .map((character, index) => {
      if (character === '"' || character === "'") {
        return character; // skip quotation marks
      }
      return `<span style="transform: rotate(${
        index * (360 / textWithSpace.length) - 360 / textWithSpace.length / 2
      }deg)">${character}</span>`;
    })
    .join("");
});
// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    599: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween60: 60,
    },
  },
});

// ==============hamburger btn================

const nav = document.querySelector(".nav_links");
const openNavbtn = document.querySelector("#nav_toggle-open");
const closeNavbtn = document.querySelector("#nav_toggle-close");

const openNav = () => {
  nav.style.display = "flex";
  openNavbtn.style.display = "none";
  closeNavbtn.style.display = "inline-block";
};

openNavbtn.addEventListener("click", openNav);

const closeNav = () => {
  nav.style.display = "none";
  openNavbtn.style.display = "inline-block";
  closeNavbtn.style.display = "none";
};

closeNavbtn.addEventListener("click", closeNav);

nav.querySelectorAll("li a").forEach((navLink) => {
  navLink.addEventListener("click", closeNav);
});
