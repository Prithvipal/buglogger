const mongoose = require('mongoose')

const connectDB = async () =>{
    try {
        const conn = mongoose.connect('mongodb+srv://prithvi:prithvi123@cluster0.rmlet.mongodb.net/buglogger?retryWrites=true&w=majority', 
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        }
        )
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
        process.exit(1) 
    }
}

module.exports = connectDB