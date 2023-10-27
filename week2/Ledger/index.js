import { HISTORY_LIST } from "./constants/HISTORY_LIST";
export const INIT_BALANCE = 0;
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

window.addEventListener("DOMContentLoaded", () => {
  renderInitialData(); // 초기 데이터 렌더링을 위한 함수 호출
  setupEventListeners();
});

function renderInitialData() {
  renderAssets();
  renderTotalIncomeAndExpense();
  renderHistoryList(HISTORY_LIST);
}

//나의 자산 업데이트
function renderAssets() {
  const balanceElement = $(".my-cost");
  const balance = HISTORY_LIST.reduce(
    (total, item) => total + item.amount,
    INIT_BALANCE
  );
  balanceElement.textContent = balance;
}

//내역 리스트 업데이트
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

//총수입, 총지출 업데이트
function renderTotalIncomeAndExpense() {
  const totalIncome = HISTORY_LIST.filter(
    (item) => item.type === "수입"
  ).reduce((total, item) => total + item.amount, 0);

  const totalExpense = HISTORY_LIST.filter(
    (item) => item.type === "지출"
  ).reduce((total, item) => total + item.amount, 0);

  const incomeElement = $(".income span");
  const expenditureElement = $(".expenditure span");

  incomeElement.textContent = totalIncome;
  expenditureElement.textContent = totalExpense;
}

//내역 필터링
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
//내역 삭제
function deleteHistoryItem(index) {
  HISTORY_LIST.splice(index, 1);
  renderHistoryList(HISTORY_LIST);
  renderTotalIncomeAndExpense();
  renderAssets();
}
// 모달 열기
function openModal() {
  const modal = $(".modal-container");
  modal.style.display = "block";
}
// 모달 닫기
function closeModal() {
  const modal = $(".modal-container");
  modal.style.display = "none";
}

function saveNewItem() {
  const type = $("input[name='modal-type']:checked").value;
  const category = document.getElementById("category").value;
  const amount = parseInt(document.getElementById("amount").value, 10);
  const description = document.getElementById("subject").value;

  if (!category || isNaN(amount) || !description) {
    alert("모든 필드를 작성해주세요.");
    return;
  }

  const newItem = {
    type,
    category,
    amount,
    name: description,
  };

  HISTORY_LIST.push(newItem);
  renderHistoryList(HISTORY_LIST);
  renderTotalIncomeAndExpense();
  renderAssets();
  closeModal();
  alert("저장되었습니다.");
}

function setupEventListeners() {
  const incomeButton = document.getElementById("income-btn");
  const expenditureButton = document.getElementById("expenditure-btn");
  const saveButton = document.getElementById("save");
  const closeButton = $$(".close");
  const addButton = document.getElementById("add-button");
  const deleteButtons = $$(".delete");

  incomeButton.addEventListener("click", () => {
    incomeButton.classList.add("active");
    expenditureButton.classList.remove("active");
  });

  expenditureButton.addEventListener("click", () => {
    expenditureButton.classList.add("active");
    incomeButton.classList.remove("active");
  });

  saveButton.addEventListener("click", saveNewItem);

  closeButton.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  addButton.addEventListener("click", () => {
    console.log("add-button이 클릭되었습니다."); // 클릭되었을 때 로그 출력
    openModal();
  });

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      deleteHistoryItem(index);
    });
  });

  document
    .getElementById("category")
    .addEventListener("change", filterHistoryList);
  document
    .getElementById("checkbox-income")
    .addEventListener("change", filterHistoryList);
  document
    .getElementById("checkbox-expenditure")
    .addEventListener("change", filterHistoryList);
}
