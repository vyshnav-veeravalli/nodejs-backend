require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db.js');
const userRoutes = require('./src/routes/user.routes.js')
const logger = require('./src/middleware/logger.js');
const postRouter = require('./src/routes/post.routes.js');

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use(logger);
app.use('/api/posts', postRouter);

app.use((err, req, res, next) => {
    console.log("error caught", err.stack);
    res.status(500).json({error: "somethign went wrong"})
});

// Connect to MongoDB then start the server
connectDB().then(() => {
    app.listen(3000, () => {
        console.log("✅ Server running on port 3000");
    });
}).catch((error) => {
    console.error("❌ MongoDB failed to connect", error.message);
});
