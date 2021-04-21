import express from 'express';
import routes from './src/routes/articleRoutes.js'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app = express();
const PORT = 2814;

// Setting up the database connection...
mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/articledb', 
    {useNewUrlParser: true,  useUnifiedTopology: true}
);

// Use bodyParser to parse JSON...
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Set up api routes, and attach to app
routes(app);

// Home endpoint response
app.get(
    '/', 
    (req, res) => res.send(`Server running on port ${PORT}`)
)

// Initialize server
app.listen(
    PORT, 
    () => console.log(`Nice! Your server is running on port ${PORT}`)
)