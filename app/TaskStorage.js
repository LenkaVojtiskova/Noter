import { TASKS_KEY } from "./constants.js";

const TaskStorage = {
  get() {
    const tasksAsString = localStorage.getItem(TASKS_KEY);
    if (!tasksAsString) return [];
    return JSON.parse(tasksAsString);
  },
  add() {},
  update() {},
  delete() {},
  clear() {},
  save(tasks) {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  },
};

export default TaskStorage;
