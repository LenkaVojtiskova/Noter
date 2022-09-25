import TaskStorage from "./TaskStorage.js";
import { TASKS_KEY } from "./constants.js";
import { createModal } from "./elements/createModal.js";

const testData = [
  { id: 1, title: "Some title 1", text: "Some descripting text" },
  { id: 2, title: "Some title 2", text: "Some descripting text" },
  { id: 3, title: "Some title 3", text: "Some descripting text" },
];
const testTask = {
  title: "Some title 3",
  text: "Some descripting text",
};
localStorage.setItem(TASKS_KEY, JSON.stringify(testData));

const tasks = TaskStorage.get();
console.log(tasks);

// const modal = createModal({
//   onConfirm: (task) => TaskStorage.add(task)
// });
createModal();
