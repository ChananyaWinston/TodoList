  import express from "express";
  import {
    addTask,
    updateTask,
    deleteTask,
    getAllTasks,
    getTasksByDuedate,
  } from "../TodoListLogic/BaseLogic.js";

  const router = express.Router();

  router.post("/", async (req, res) => {
    try {
      const task = req.body;
      await addTask(task);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).send("Sorry, we encounterd trouble saving your task");
    }
  });

  router.put("/", async (req, res) => {
    try {
      const task = req.body;
      await updateTask(task);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).send(error);
      res.status(500).send("Sorry, we encounterd trouble updating your task");
    }
  });

  router.delete("/", async (req, res) => {
    try {
      const taskId = req.body.id;
      await deleteTask(taskId);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).send(error);
      res.status(500).send("Sorry, we encounterd trouble deleting your task");
    }
  });

  router.get("/", async (req, res) => {
      try {
          //const tasksList = await getAllTasks();
          res.status(200).send(tasksList);
        } catch (error) {
          res.status(500).send(error);
          res.status(500).send("Sorry, we encounterd trouble retrieving your task");
        }
  });

  router.get("/byDuedate", async (req, res) => {
      try {
          const duedate = req.query.duedate;
          const tasksList = await getTasksByDuedate(duedate);
          res.status(200).send(tasksList);
        } catch (error) {
          res.status(500).send(error);
          res.status(500).send("Sorry, we encounterd trouble retrieving your task");
        }
  });

  export default router;
