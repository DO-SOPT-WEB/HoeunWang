import { HISTORY_LIST, INIT_BALANCE } from "./constants/COST";

window.addEventListener("DOMContentLoaded", () => {
  renderAssets();
  renderTotalIncomeAndExpense();
  renderHistoryList(HISTORY_LIST);
  setupEventListeners();
});

function renderAssets() {
  const balanceElement = document.querySelector(".my-cost");
  balanceElement.textContent = INIT_BALANCE;
}
function renderHistoryList(historyList) {
  const listsWrapper = document.getElementById("lists-wrapper");
  listsWrapper.innerHTML = "";

  historyList.forEach((item, index) => {
    const listItem = document.createElement("div");
    listItem.classList.add("history-item");
    listItem.innerHTML = `
        <div class="item-type">${item.type}</div>
        <div class="item-category">${item.category}</div>
        <div class="item-amount">${item.amount}원</div>
        <div class="item-description">${item.description}</div>
        <button class="delete" data-index="${index}">X</button>
      `;
    listsWrapper.appendChild(listItem);
  });
}
