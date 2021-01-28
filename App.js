// countdown component
const startingMinutes = 10;

let time = startingMinutes * 60;

const countDownEl = document.getElementById("timer");

const updateCountdown = () => {
  const minutes = Math.floor(time / 60);

  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countDownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
};
let id = setInterval(updateCountdown, 1000);

const endClass = document.getElementById("open");

const terminateClass = document.getElementById("end-class");

const modal = document.getElementById("modal-container");

const cancelModal = document.getElementById("cancel-button");

const classInterrupt = document.getElementById("interrupted-radio");

const classEnd = document.getElementById("end-class-radio");

const childContainer = document.getElementById("child-radio-container");

const textArea = document.getElementById("textarea");

const childRadios = document.querySelectorAll(".child-radio");

childRadios.forEach((child) => {
  child.addEventListener("click", (e) => {
    if (e.target.id === "child5") {
      textArea.style.opacity = "1";
      textArea.style.height = "auto";
      textArea.style.visibility = "visible";
    } else {
      textArea.style.opacity = "0";
      textArea.style.visibility = "hidden";
      textArea.style.height = "0px";
    }
  });
});

endClass.addEventListener("click", () => {
  modal.classList.add("show");
});

cancelModal.addEventListener("click", () => {
  modal.classList.remove("show");
  clearInterval(id);
  id = setInterval(updateCountdown, 1000);
});

classInterrupt.addEventListener("click", () => {
  if (classInterrupt.checked) {
    childContainer.style.display = "block";
  }
});

classEnd.addEventListener("click", () => {
  if (classEnd.checked) {
    childContainer.style.display = "none";
  }
});

terminateClass.addEventListener("click", () => {
  modal.classList.remove("show");
  clearInterval(id);
});

// hamburger

const overlay = document.getElementById("overlay");

const toggleNav = () => {
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.add("overlay-slide-right");
    overlay.classList.remove("overlay-slide-left");
  } else {
    overlay.classList.add("overlay-slide-left");
    overlay.classList.remove("overlay-slide-right");
  }
};
const hamburger = document.getElementById("hamburger");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");

hamburger.addEventListener("click", toggleNav);
nav1.addEventListener("click", toggleNav);
nav2.addEventListener("click", toggleNav);
nav3.addEventListener("click", toggleNav);
nav4.addEventListener("click", toggleNav);
