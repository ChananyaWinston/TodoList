import express from 'express';
import bodyParser from 'body-parser';
import CRUDRouter from './src/TodoListRoutes/CRUDRoutes.js';
import { scheduleNotifications } from './src/TodoListLogic/notificationsLogic.js';

const app = express();

scheduleNotifications()
 
app.use(bodyParser.json());
app.use('/tasks', CRUDRouter);
 
app.listen(3000, () => {
  console.log(`Listening on port ${3000}`)
})