let coinCount = 100;
const coinCountElement = document.getElementById("coin-count");
const callHistoryContainer = document.querySelector(".call-history-list");

function makeCall(serviceName, serviceNumber) {
  if (coinCount < 20) {
    alert("Insufficient coins! You need at least 20 coins to make a call.");
    return;
  }

  coinCount -= 20;
  coinCountElement.textContent = coinCount;
  alert(`Calling ${serviceName} at ${serviceNumber}`);
  addToCallHistory(serviceName, serviceNumber);
}

function addToCallHistory(serviceName, serviceNumber) {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  const historyItem = document.createElement("div");
  historyItem.className = "flex justify-between items-center py-2";

  historyItem.innerHTML = `
    <div class="bg-[#fafafa] flex justify-between items-center p-2 rounded-md w-full">
        <div>
          <div class="font-bold manrope-bold text-gray-800">${serviceName}</div>
          <div class="text-sm manrope-bold text-blue-600">${serviceNumber}</div>
        </div>
        <div class="text-xs manrope-bold text-gray-500">${currentTime}</div>
    </div>
  `;

  if (callHistoryContainer) {
    callHistoryContainer.insertBefore(
      historyItem,
      callHistoryContainer.firstChild
    );
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const allCallButtons = document.querySelectorAll(".call-button");

  allCallButtons.forEach((callButton) => {
    callButton.addEventListener("click", function () {
      const serviceName = this.getAttribute("data-service-name");
      const serviceNumber = this.getAttribute("data-service-number");
      makeCall(serviceName, serviceNumber);
    });
  });

  if (coinCountElement) {
    coinCountElement.textContent = coinCount;
  }

  const clearButton = document.getElementById("clear-btn");
  console.log("Clear button found:", clearButton);

  if (clearButton) {
    clearButton.addEventListener("click", function () {
      callHistoryContainer.innerHTML = "";
    });
  }
});
