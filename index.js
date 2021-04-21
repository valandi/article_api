import express from 'express';
import routes from './src/routes/articleRoutes.js'
import mongoose from 'mongoose';

const app = express();

const PORT = 2814;

mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/articledb', 
    {useNewUrlParser: true}
);

routes(app);

app.get(
    '/', 
    (request, response) => response.send(`Server running on port ${PORT}`)
)

app.listen(
    PORT, 
    () => console.log(`Nice! Your server is running on port ${PORT}`)
)