import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoute from './routes/authRoute.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Mongo is connected successfully"))
    .catch(err => console.error(err))


app.listen(PORT, () => {
    console.log(`Server runing on ${PORT}`);
})

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use(cookieParser())
app.use(express.json())
app.use("/", authRoute)