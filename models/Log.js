const mongoose = require('mongoose')

const LogSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Log text is requireds']
    },
    priority: {
        type: String,
        default: 'low',
        enum: ['low', 'moderate', 'high']
    },
    user: {
        type: String,
        trim: true,
        required: [true, 'User is requireds']
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Log', LogSchema)