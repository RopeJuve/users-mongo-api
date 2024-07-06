import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usersRouter from './routes/usersRouter.js';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Users API');
});

// Add the usersRouter to the app
app.use('/api/users', usersRouter);

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });

