import express, { response } from 'express';

const app = express();

const PORT = 2814;

app.get('/', (request, response) => 
    response.send(`Server running on port ${PORT}`)
)

app.listen(PORT, () =>
    console.log(`Nice! Your server is running on port ${PORT}`)
)