// Lets get access to database

const Task = require("../Models/TaskModels");

const getAllTask = async(req, res) => {
    // res.send("get All Task");

    try {
        const tasks = await Task.find()
        res.status(200).json({ tasks });
    } catch (error) {
        res.json(error);
        console.log(error);
    }
}
const getASingleTask = async(req, res) => {
    // res.send("get A Single Task");
    try {
        const {taskId} = req.params
        const task = await Task.findById({_id: taskId})
        if(!task){
            return res.status(404).json({ success: false });
           }
           res.status(200).json({ success: true, task });
    } catch (error) {
        res.json(error);
        console.log(error);
    }
}
const createTask = async(req, res) => {
    // res.send("CreateTask");
    const task = await Task.create(req.body);
    try {
        res.status(201).json({ task });
    } catch (error) {
        res.json(error);
        console.log(error);
    }
}
const updateTask = async(req, res) => {
    // res.send("Update Task");
    const {taskId} = req.params;
    try {
        const task = await Task.findByIdAndUpdate({_id: taskId }, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({ success: true, task });
    } catch (error) {
        res.json(error);
        console.log(error);
    }
}
const deleteTask = async(req, res) => {
    // res.send("Delete Task");
    const {taskId} = req.params
    try {
        const task = await Task.findByIdAndDelete({_id: taskId })
        res.status(200).json({ success: true })
    } catch (error) {
        res.json(error);
        console.log(error);
    }
};

module.exports = {
    getAllTask,
    getASingleTask,
    createTask,
    updateTask,
    deleteTask,
};