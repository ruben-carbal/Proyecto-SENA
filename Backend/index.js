require('dotenv').config();
const express = require('express');
const routineRouter = require('./controllers/rutinas');
const loginRouter = require('./controllers/login');
const usersRouter = require('./controllers/users');

const app = express();

const PORT = process.env.PORT;
const URI = process.env.URI;

app.get('/', (req, res) => {
    res.send('<h1>Esto funciona</h1>');
});

app.use(express.json());

app.use('/api/rutinas', routineRouter);
app.use('/api/login', loginRouter);
app.use('/api/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
