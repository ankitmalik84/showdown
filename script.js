const reviews = document.querySelectorAll(".review");
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
let currentIndex = 0;

function showReview(index) {
  reviews.forEach((review, i) => {
    if (i === index) {
      review.classList.add("active");
      review.classList.remove("left", "right");
    } else if (i < index) {
      review.classList.add("left");
      review.classList.remove("active", "right");
    } else {
      review.classList.add("right");
      review.classList.remove("active", "left");
    }
  });
}

showReview(currentIndex);

leftButton.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
  showReview(currentIndex);
});

rightButton.addEventListener("click", () => {
  currentIndex = currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
  showReview(currentIndex);
});
