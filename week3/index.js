const express = require('express');
const app = express();
const userRoutes = require('./routes/book.routes');

app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(5000, () => {
    console.log("server running on http://localhost:5000");
});
