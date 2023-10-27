const HISTORY_LIST = [
  {
    index: 0,
    category: "식비",
    name: "버거킹 문정역점",
    amount: 10800,
    type: "지출",
  },
  {
    index: 1,
    category: "취미",
    name: "포토그레이 신촌점",
    amount: 5000,
    type: "지출",
  },
  {
    index: 2,
    category: "월급",
    name: "이번달 과외비",
    amount: 300000,
    type: "수입",
  },
  {
    index: 3,
    category: "쇼핑",
    name: "겨울옷",
    amount: 30000,
    type: "지출",
  },
];

const INIT_BALANCE = 0;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

window.addEventListener("DOMContentLoaded", () => {
  renderAssets();
  renderTotalIncomeAndExpense();
  renderHistoryList(HISTORY_LIST);
  setupEventListeners();
});

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
  const listsWrapper = $(".lists-wrapper");
  listsWrapper.innerHTML = "";

  historyList.forEach((item, index) => {
    const listItem = document.createElement("div");
    listItem.classList.add("list");
    listItem.innerHTML = `
            <div class="category">${item.category}</div>
            <div class="name">${item.name}</div>
            <div class="amount">${item.amount}</div>
            <button class="delete-button" data-index="${index}">X</button>
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
  const incomeCheckbox = $(".checkbox-income");
  const expenditureCheckbox = $(".checkbox-expenditure");
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
  const category = $$(".category").value;
  const amount = parseInt($$(".amount").value, 10);
  const description = $$(".subject").value;

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
  const incomeButton = $(".income");
  const expenditureButton = $(".expenditure");
  const saveButton = $(".save");
  const closeButton = $$(".close");
  const addButton = $(".add-button");
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
    // 클릭되었을 때 로그 출력
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
