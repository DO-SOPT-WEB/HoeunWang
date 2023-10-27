import { HISTORY_LIST } from "./constants/COST";

window.addEventListener("DOMContentLoaded", () => {
  renderAssets();
  renderTotalIncomeAndExpense();
  renderHistoryList(HISTORY_LIST);
  setupEventListeners();
});
