
import dotenv from "dotenv";
dotenv.config();

import express from 'express'
import connectDB from './library/connectDB.js'
import userRouter from './routes/user.route.js'
import postRouter from './routes/post.route.js'
import commentRoute from './routes/comment.route.js'

const app = express()
app.use(express.json())
// app.get('/test',(req,res)=>{
 //    res.status(200).send('it works bro!')
// })

app.use('/users', userRouter)
app.use('/posts', postRouter)
app.use('/comments', commentRoute)

const PORT = process.env.PORT || 8000

app.listen(PORT, () =>{
       connectDB()
    console.log(`Server is running on port ${PORT}`)
})     