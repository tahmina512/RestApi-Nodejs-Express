import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './route/users.js'
const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use('/users', usersRoutes);

// create a root path (./) for the homepage
//remember browser only get method

app.get('/', (req, res) => {
    res.send("hello from homepage");
});

//start the server and listen to a specific part
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
