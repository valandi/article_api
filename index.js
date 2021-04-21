import express from 'express';
import routes from './src/routes/articleRoutes.js'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 2814;

mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/articledb', 
    {useNewUrlParser: true,  useUnifiedTopology: true}
);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);

app.get(
    '/', 
    (req, res) => res.send(`Server running on port ${PORT}`)
)

app.listen(
    PORT, 
    () => console.log(`Nice! Your server is running on port ${PORT}`)
)