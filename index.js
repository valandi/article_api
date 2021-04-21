import express from 'express';

const app = express();

const PORT = 2814;

app.listen(PORT, () =>
    console.log(`Nice! Your server is running on port ${PORT}`)
)