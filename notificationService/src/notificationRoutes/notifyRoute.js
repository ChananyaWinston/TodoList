import express from "express";
import {
  notify
} from "../notificationLogic/notifyLogic.js";

const router = express.Router();

router.post("/notify", async (req, res) => {
  try {
    const dataToNotify = req.body;
    const dataOrigin = req.hostname;
    await notify(dataToNotify, dataOrigin);
    res.status(200).send("Client has been notiifed");
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
});

router.get("/test", async (req, res) => {
  try {
    res.sendStatus(200);
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
});

export default router;
