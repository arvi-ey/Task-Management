const TaskSchema = require('../model/taskmodel')


const GetAllTask = async (req, res) => {
    try {
        const alltasks = await TaskSchema.find();
        // console.log("All Tasks are available")
        res.status(201).send({ status: 'success', alltasks });
    }
    catch (err) {
        res.status(401).send(err);
        console.log(err)

    }
}


const CreateNewTask = async (req, res) => {

    const task = new TaskSchema(req.body);
    try {
        if (task.title || task.desc || task.startDate || task.endDate || task.startTime || task.endTime || task.assign || task.status || task.priority) {
            const newTask = await task.save();
            console.log("New Task Created");
            res.status(200).send(newTask)
        }
    }
    catch (e) {
        res.status(401).send(err);
    }
}



const DeleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedTask = await TaskSchema.findByIdAndDelete(id);
        res.status(201).send(deletedTask);
    }
    catch (err) {
        res.status(401).send(err)
    }
}


const Singletask = async (req, res) => {
    const id = req.params.id;
    try {
        const singletask = await TaskSchema.findById(id)
        res.status(201).send(singletask)
    }
    catch (err) {

        res.status(401).send(err)
    }

}



const Updatetask = async (req, res) => {

    const id = req.params.id;
    try {
        const updatedTask = await TaskSchema.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).send({ updated: "true", updatedTask })
    }
    catch (e) {
        res.status(404).send(err)
    }
}


module.exports = {
    GetAllTask,
    CreateNewTask,
    DeleteTask,
    Singletask,
    Updatetask
}