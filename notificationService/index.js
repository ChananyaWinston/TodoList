import express from 'express';
import bodyParser from 'body-parser';
import notifyRoute from './src/notificationRoutes/notifyRoute.js';
const app = express()
 
app.use(bodyParser.json());
app.use('/notifications',  notifyRoute)
 
app.listen(8080, () => {
  console.log(`Listening on port ${8080}`)
})