import { eventListenerBtns } from "./eventListener.js";
import { renderTask, addTask } from "./renderElements.js";
import { getItemLocalStorage } from "./localStorage.js";
import * as create from "./createElements.js";

const promptUserName = () => {
  const name = prompt("Здравствуйте! Введите Ваше имя.", "").trim();

  if (!name) {
    alert("Введите корректное имя!");
    return promptUserName();
  }

  return name;
};

const init = () => {
  const userName = promptUserName();
  const tasks = getItemLocalStorage(userName);
  const appContainer = create.addClassContainer();
  create.createTitle(appContainer);
  const { input, buttonSubmit, form, buttonReset } = create.createForm(appContainer);
  const tableBody = create.createTable(appContainer);
  renderTask(tableBody, tasks, userName);
  addTask(form, tasks, tableBody, userName);
  eventListenerBtns(input, buttonSubmit, buttonReset);
};

init();
