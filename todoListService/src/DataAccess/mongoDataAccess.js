import mongodb from 'mongodb';
const { MongoClient } =  mongodb;

const uri = `mongodb+srv://todo:Aa123456@todolist.0ahwg.mongodb.net/todoList?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useUnifiedTopology: true } );
await client.connect();

const addTaskToDB = async (task) => {
    try {
        const todoList = client.db("todoList").collection("todoList");
        const result = await todoList.insertOne(task);
    
    } catch (e) {
        console.error(e);
        throw e
    }
}

const updateTaskInDB = async (taskToUpdate) => {

    try {
       
        const todoList = client.db("todoList").collection("todoList");
        const filter = { id: taskToUpdate.id };

        const updatedTask = {
            $set: taskToUpdate,
        };

        const result = await todoList.updateOne(filter, updatedTask);
    
    } catch (e) {
        console.error(e);
        throw e
    } 
}

const deleteTaskFromDB = async (id) => {
    try {
        const todoList = client.db("todoList").collection("todoList");

        const taskToDelete = {
            id: id
        }
        const result = await todoList.deleteOne(taskToDelete);
    
    } catch (e) {
        console.error(e);
        throw e;
    }
}

const getAllTasksFromDB = async (id) => {
    try {
        
        const todoList = client.db("todoList").collection("todoList");

        const cursor = await todoList.find();
        const result = [];
        for await (const doc of cursor) {
            result.push(doc)
          }
        return result;
    
    } catch (e) {
        console.error(e);
        throw e;
    } 
}

const getTasksByDuedateFromDB = async (duedate) => {
    try {
        
        const todoList = client.db("todoList").collection("todoList");

        const filter = {
            duedate:duedate
        }
        const cursor = await todoList.find(filter);
        const result = [];
        for await (const doc of cursor) {
            result.push(doc)
          }
        return result;
    
    } catch (e) {
        console.error(e);
        throw e;
    } 
}

export {
    addTaskToDB,
    updateTaskInDB,
    deleteTaskFromDB,
    getAllTasksFromDB,
    getTasksByDuedateFromDB,
  };