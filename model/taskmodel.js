const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({


    title: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    startDate: {
        type: String,
        require: true
    },
    endDate: {
        type: String,
        require: true
    },
    startTime: {
        type: String,
        require: true
    },
    endTime: {
        type: String,
        require: true
    },
    assign: {
        type: String,
        require: true
    },

    status: {
        type: String,
        require: true
    },
    priority: {
        type: String,
        require: true
    }
});

const TaskSchema = mongoose.model('Task', taskSchema);

module.exports = TaskSchema;