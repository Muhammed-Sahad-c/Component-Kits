// For scrollContainer
const scrollContainer = document.getElementById("scrollContainer");

let isScrolling = false;
let scrollX = 0;

scrollContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollX += event.deltaX;
  isScrolling = true;
});

setInterval(() => {
  if (isScrolling) {
    scrollContainer.scrollLeft += scrollX;
    isScrolling = false;
    scrollX = 0;
  }
}, 16);

scrollContainer.addEventListener("wheel", (event) => {
  scrollContainer.scrollLeft += event.deltaY;
  event.preventDefault();
});

// For scrollContainer2
const scrollContainer2 = document.getElementById("scrollContainer2");
const scrollBackwardButton = document.getElementById("scrollBackward");
const scrollForwardButton = document.getElementById("scrollForward");

let isScrolling2 = false
let scrollX2 = 0;

const updateScrollPosition = () => {
  scrollContainer2.scrollLeft += scrollX2;
  isScrolling2 = false;
  scrollX2 = 0;
};

scrollBackwardButton.addEventListener("click", () => {
  scrollX2 -= 200;
  updateScrollPosition();
});

scrollForwardButton.addEventListener("click", () => {
  scrollX2 += 200;
  updateScrollPosition();
});

scrollContainer2.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollX2 += event.deltaX;
  isScrolling2 = true;
});

setInterval(() => {
  if (isScrolling2) {
    updateScrollPosition();
  }
}, 16);

scrollContainer2.addEventListener("wheel", (event) => {
  scrollContainer2.scrollLeft += event.deltaY;
  event.preventDefault();
});
