const addTaskToDB = (task) => {
  const { name, duedate } = task;
  //Should paramitize the values.
  `INSERT INTO TASKS_LIST (NAME, DUEDATE)
     VALUES (${(name, duedate)})`;
};

const updateTaskInDB = (task) => {
  const { id, name, duedate, status } = task;
  //Should paramitize the values.
  `UPDATE TASKS_LIST 
     SET NAME = ${name}, DUEDATE = ${duedate}, STATUS = ${status}
     WHERE ID = ${id}`;
};

const deleteTaskFromDB = (taskId) => {
  //Should paramitize the values.
  `DELETE FROM  TASKS_LIST
     WHERE ID = ${taskId}`;
};

const getAllTasksFromDB = () => {
  //Should paramitize the values.
  `SELECT ID, NAME, DUEDATE, STATUS 
     FROM TASKS_LIST`;
};

const getTasksByDuedateFromDB = (date) => {
  //Should paramitize the values.
  `SELECT ID, NAME, DUEDATE, STATUS 
     FROM TASKS_LIST
     WHERE DUEDATE = ${date}`;
};

export {
  addTaskToDB,
  updateTaskInDB,
  deleteTaskFromDB,
  getAllTasksFromDB,
  getTasksByDuedateFromDB,
};
