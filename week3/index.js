const express = require('express');
const app = express();
const userRoutes = require('./routes/book.routes.js');
const logger = require('./middleware/logger.js')
const errorHandler = require('./middleware/error.js');

app.use(express.json());
app.use(logger);
app.use(errorHandler);


// Prefix all user routes with /api/users
app.use('/api/users', userRoutes);

app.listen(3000, () => {
    console.log('✅ Server running on port 3000');
});
