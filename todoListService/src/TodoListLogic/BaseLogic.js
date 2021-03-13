import {
  addTaskToDB,
  updateTaskInDB,
  deleteTaskFromDB,
  getTasksByDuedateFromDB,
  getAllTasksFromDB,
} from "../DataAccess/mongoDataAccess.js";

const addTask = async (task) => {
  await addTaskToDB(task);
};

const updateTask = async (task) => {
  await updateTaskInDB(task);
};

const deleteTask = async (taskId) => {
  await deleteTaskFromDB(taskId);
};

const getAllTasks = async () => {
  return await getAllTasksFromDB();
};

const getTasksByDuedate = async (date) => {
  return await getTasksByDuedateFromDB(date);
};

export {
  addTask,
  updateTask,
  deleteTask,
  getAllTasks,
  getTasksByDuedate,
};
