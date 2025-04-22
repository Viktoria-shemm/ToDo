export const getItemLocalStorage = (userName) => {
  const storedData = localStorage.getItem(userName);
  return storedData ? JSON.parse(storedData) : [];
};

export const setItemLocalStorage = (userName, tasks) => {
  localStorage.setItem(userName, JSON.stringify(tasks));
};

export const removeItemLocalStorage = (userName, deleteTaskId) => {
  const currentData = getItemLocalStorage(userName);
  const updatedData = currentData.filter((task) => task.id !== deleteTaskId);
  setItemLocalStorage(userName, updatedData);
};
