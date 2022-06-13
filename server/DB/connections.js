const mongoose = require('mongoose');
// require('dotenv/config');
const DB = 'mongodb+srv://exam:exam123@cluster0.cgixj.mongodb.net/EXAMSGP?retryWrites=true&w=majority'
const connectDB = async() => {
    // await mongoose.connect(process.env.uri, {
    // useUnifiedTopology: true,
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // });
    console.log("MongoDB Connection done Successfully...");
}

module.exports = connectDB;