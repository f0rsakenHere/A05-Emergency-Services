let heartCount = 0;
const heartCountElement = document.getElementById("heart-count");

function toggleHeart(heartButton) {
  const isLiked = heartButton.classList.contains("fas");

  if (isLiked) {
    heartCount--;
    heartButton.className =
      "far fa-heart text-gray-400 cursor-pointer hover:text-red-500 heart-button";
  } else {
    heartCount++;
    heartButton.className =
      "fas fa-heart text-red-500 cursor-pointer hover:text-red-600 heart-button";
  }

  heartCountElement.textContent = heartCount;
}

document.addEventListener("DOMContentLoaded", function () {
  const allHeartButtons = document.querySelectorAll(".heart-button");

  allHeartButtons.forEach((heartButton) => {
    heartButton.addEventListener("click", function () {
      toggleHeart(this);
    });
  });
});

console.log("Script loaded successfully");
