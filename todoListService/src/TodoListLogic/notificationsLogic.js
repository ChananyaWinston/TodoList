import schedule from "node-schedule";
import http from "http";
import { getTasksByDuedateFromDB } from "../TodoListDataAccess/mongoDataAccess.js";

const getCurrentDateInDuedateFormat = () => {
  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  return `${currentDay}/${currentMonth}/${currentYear}`;
};

export const scheduleNotifications = () => {
    console.log("Scheduling todo list notifications");  
  const job = schedule.scheduleJob("* * * * *", () => {
    const currentDate = getCurrentDateInDuedateFormat();
    console.log("Fetching task from db")
    getTasksByDuedateFromDB(currentDate).then((taskDueToday) => {
        console.log("Got task from db")
      const activeTasks = taskDueToday.filter((task) => {
        return task.status === "active";
      });

      if (activeTasks.length) {
        var tasksToSend = JSON.stringify({ tasks: activeTasks });

        const options = {
          hostname: "host.docker.internal",
          port: 8080,
          path: "/notifications/notify",
          method: "POST",
          headers: {
            "content-type": "application/json",
            accept: "application/json",
          },
        };

        
        const req = http.request(options, (res) => {
          res.setEncoding("utf8");
          res.on("data", (chunk) => {
            console.log(`BODY: ${chunk}`);
          });
          res.on("end", () => {
            console.log("No more data in response.");
          });
        });

        req.on("error", (e) => {
          console.error(`problem with request: ${e.message}`);
        });

        req.write(tasksToSend);
        req.end();
      } 
    });
  });
  console.log("Done scheduling todo list notifications")
};
