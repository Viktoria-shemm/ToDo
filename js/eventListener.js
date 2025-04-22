export const eventListenerBtns = (input, buttonSubmit, buttonReset) => {
  const toggleSubmitButton = () => {
    if (input.value.trim() !== "") {
      buttonSubmit.removeAttribute("disabled");
    } else {
      buttonSubmit.setAttribute("disabled", true);
    }
  };

  input.addEventListener("input", toggleSubmitButton); // Проверяем состояние поля при вводе
  input.addEventListener("focusout", toggleSubmitButton); // Проверяем состояние поля при потере фокуса

  buttonReset.addEventListener("click", () => {
    input.value = "";
    toggleSubmitButton(); // Проверяем состояние кнопки после очистки поля
  });
};
