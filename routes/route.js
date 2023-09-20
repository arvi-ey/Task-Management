const express = require('express')
const router = new express.Router();
const { GetAllTask, CreateNewTask, DeleteTask, Singletask, Updatetask } = require('../controlers/controlers')
router.get('/', (req, res) => {
    res.send({ status: "success" })
})


//-->REST API of ALL Tasks
router.get('/tasks', GetAllTask)

//-->REST API for create a new Task
router.post('/create', CreateNewTask)

//-->REST API for get a Single task
router.get('/task/:id', Singletask)

//-->REST API for UPDATE a task

router.patch('/update/:id', Updatetask)

//-->REST API for Delete a Particular Task
router.delete('/task/:id', DeleteTask)

module.exports = router;