const mongoose = require('mongoose');

// Create a Schema to define the datatype of each field.
const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    }
});

const ToDo = mongoose.model('ToDo', todoSchema);

module.exports = ToDo;