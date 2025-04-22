import { setItemLocalStorage, removeItemLocalStorage } from "./localStorage.js";

export const renderTask = (tableBody, tasks, userName) => {
  tableBody.innerHTML = "";

  tasks.forEach((task, index) => {
    let tableBodyRow = Array.from(tableBody.children).find(
      (row) => row.getAttribute("data-id") === task.id
    );

    if (!tableBodyRow) {
      tableBodyRow = document.createElement("tr");
      tableBodyRow.setAttribute("data-id", task.id);
      tableBody.append(tableBodyRow);
    }

    tableBodyRow.className = task.completed ? "table-success" : "table-light";

    tableBodyRow.innerHTML = `
        <td>${index + 1}</td>
        <td class="${
          task.completed
            ? "completed text-decoration-line-through"
            : "in-progress"
        }">${task.name}</td>
        <td>${task.completed ? "Выполнено" : "В процессе"}</td>
        <td>
          <button class="btn btn-danger">Удалить</button>
          <button class="btn btn-success">Завершить</button>
        </td>
      `;

    const completeBtn = tableBodyRow.querySelector(".btn-success");
    completeBtn.addEventListener("click", () => {
      task.completed = true; // меняем статус задачи
      setItemLocalStorage(userName, tasks);
      renderTask(tableBody, tasks, userName); // заново отрисовываем таблицу
    });

    const deleteBtn = tableBodyRow.querySelector(".btn-danger");
    deleteBtn.addEventListener("click", () => {
      tasks.splice(
        tasks.findIndex((t) => t.id === task.id),
        1
      ); // удаляем задачу из массива
      renderTask(tableBody, tasks, userName); // заново отрисовываем таблицу
      removeItemLocalStorage(userName, task.id);
    });

    tableBody.append(tableBodyRow);
  });
};

export const addTask = (form, tasks, tableBody, userName) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    const formData = new FormData(form); // создаём объект FormData из формы

    const taskName = formData.get("task").trim(); // Получаем значение из поля ввода

    if (!taskName) {
      alert("Задача не может быть пустой!"); // Проверка на пустое поле
      return;
    }

    const newTask = {
      id: Math.random().toString().substring(2, 10),
      name: taskName, // Получаем значение из поля ввода
      completed: false, // Инициализируем задачу как незавершенную
    };

    tasks.push(newTask);
    form.reset(); // очищаем форму
    setItemLocalStorage(userName, tasks); // обновляем локальное хранилище
    renderTask(tableBody, tasks, userName); // обновляем таблицу при добавлении задачи
  });
};
