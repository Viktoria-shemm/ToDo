export const addClassContainer = () => {
  const appContainer = document.querySelector(".app-container");
  appContainer.classList.add(
    "vh-100",
    "w-100",
    "d-flex",
    "align-items-center",
    "justify-content-center",
    "flex-column"
  );
  return appContainer;
};

export const createTitle = (appContainer) => {
  const title = document.createElement("h1");
  title.textContent = "Todo App";
  appContainer.append(title);
};

export const createForm = (appContainer) => {
  const form = document.createElement("form");
  form.classList.add("d-flex", "align-items-center", "mb-3");
  appContainer.append(form);

  const label = document.createElement("label");
  label.classList.add("form-group", "me-3", "mb-0");
  form.append(label);

  const input = document.createElement("input");
  input.classList.add("form-control");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "ввести задачу");
  input.setAttribute("name", "task");
  label.append(input);

  const buttonSubmit = document.createElement("button");
  buttonSubmit.textContent = "Сохранить";
  buttonSubmit.classList.add("btn", "btn-primary", "me-3");
  buttonSubmit.setAttribute("type", "submit");
  buttonSubmit.setAttribute("disabled", "");
  form.append(buttonSubmit);

  const buttonReset = document.createElement("button");
  buttonReset.textContent = "Очистить";
  buttonReset.classList.add("btn", "btn-warning");
  buttonReset.setAttribute("type", "reset");
  form.append(buttonReset);

  return {
    input,
    buttonSubmit,
    form,
    buttonReset,
  };
};

export const createTable = (appContainer) => {
  const tableWrapper = document.createElement("div");
  tableWrapper.classList.add("table-wrapper");

  const table = document.createElement("table");
  table.classList.add("table", "table-hover", "table-bordered");
  tableWrapper.append(table);

  const tableHead = document.createElement("thead");
  table.append(tableHead);

  const tableHeadRow = document.createElement("tr");
  tableHead.append(tableHeadRow);
  tableHeadRow.insertAdjacentHTML(
    "afterbegin",
    `
          <th>№</th>
          <th>Задача</th>
          <th>Статус</th>
          <th>Действия</th>
      `
  );

  const tableBody = document.createElement("tbody");
  table.append(tableBody);

  appContainer.append(tableWrapper);

  return tableBody;
};
