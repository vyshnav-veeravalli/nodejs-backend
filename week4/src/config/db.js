const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDb:", process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.log("❌ MongoDB connection failed", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
