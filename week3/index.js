
const app = require('./src/app');

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});