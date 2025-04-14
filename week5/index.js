require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db.js');
const authRouter = require('./routes/auth.routes.js');


const app = express();
app.use(express.json());


app.use('/api/auth/', authRouter);

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`server running on ${process.env.PORT}`);
});