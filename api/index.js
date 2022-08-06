import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authroute from './routes/auth.js'
const app = express();
dotenv.config();

// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log("DB connection sucessfull!"))
//     .catch((err) => console.log(err));


//middlewares
app.use(express.json());

app.use('/api/auth', authroute);


app.listen(8000, () => {
    console.log("backend is running")
})
