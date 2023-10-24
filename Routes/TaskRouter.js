const express = require("express");
const router = express.Router();
const {
    getAllTask,
    getASingleTask,
    createTask,
    updateTask,
    deleteTask
} = require('../Controllers/TaskController')
router.route('/').get(getAllTask).post(createTask)
router.route('/:taskId').get(getASingleTask).patch(updateTask).delete(deleteTask)

module.exports = router;