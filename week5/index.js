require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db.js');
const authRouter = require('./routes/auth.routes.js');
const adminRoutes = require('./routes/admin.routes.js');


const app = express();
app.use(express.json());


app.use('/api/auth/', authRouter);
app.use('/api/admin', adminRoutes);

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`server running on ${process.env.PORT}`);
});