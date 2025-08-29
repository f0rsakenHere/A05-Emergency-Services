let copyCount = 0;
const copyCountElement = document.getElementById("copy-count");

document.addEventListener("DOMContentLoaded", function () {
  const allCopyButtons = document.querySelectorAll(".copy-button");

  allCopyButtons.forEach((copyButton) => {
    copyButton.addEventListener("click", function () {
      const serviceNumber = this.getAttribute("data-service-number");

      navigator.clipboard
        .writeText(serviceNumber)
        .then(function () {
          // Increase copy count
          copyCount++;
          copyCountElement.textContent = copyCount + " Copy";

          alert(`Number ${serviceNumber} copied to clipboard!`);
        })
        .catch(function (err) {
          const textArea = document.createElement("textarea");
          textArea.value = serviceNumber;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);

          // Increase copy count
          copyCount++;
          copyCountElement.textContent = copyCount + " Copy";

          alert(`Number ${serviceNumber} copied to clipboard!`);
        });
    });
  });
});

console.log("Copy scripts loaded successfully");
