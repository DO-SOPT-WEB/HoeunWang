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
    listItem.classList.add("list");
    listItem.innerHTML = `
        <div class="category">${item.category}</div>
        <div class="name">${item.name}</div>
        <div class="amount">${item.amount}</div>
        <button class="delete" data-index="${index}">X</button>
      `;
    listsWrapper.appendChild(listItem);
  });
}

function renderTotalIncomeAndExpense() {
  const totalIncome = HISTORY_LIST.filter(
    (item) => item.type === "수입"
  ).reduce((total, item) => total + item.amount, 0);

  const totalExpense = HISTORY_LIST.filter(
    (item) => item.type === "지출"
  ).reduce((total, item) => total + item.amount, 0);

  const incomeElement = document.querySelector(".income span");
  const expenditureElement = document.querySelector(".expenditure span");

  incomeElement.textContent = totalIncome;
  expenditureElement.textContent = totalExpense;
}

function filterHistoryList() {
  const incomeCheckbox = document.getElementById("checkbox-income");
  const expenditureCheckbox = document.getElementById("checkbox-expenditure");
  const filteredHistory = HISTORY_LIST.filter((item) => {
    if (incomeCheckbox.checked && expenditureCheckbox.checked) {
      return true;
    } else if (incomeCheckbox.checked) {
      return item.type === "수입";
    } else if (expenditureCheckbox.checked) {
      return item.type === "지출";
    }
    return false;
  });

  renderHistoryList(filteredHistory);
}
function deleteHistoryItem(index) {
  HISTORY_LIST.splice(index, 1);
  renderHistoryList(HISTORY_LIST);
  renderTotalIncomeAndExpense();
  renderAssets();
}
// 모달 열기
function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}

// 모달 닫기
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
