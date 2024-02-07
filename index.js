import express from 'express'
import dotenv from 'dotenv'
import router from './routes/players.route.js'
import cors from 'cors'
dotenv.config()


import databaseConnection from './db/dbConnections.js'

const app=express()


const PORT=process.env.PORT || 8500
const DB_URI=process.env.MONGODB_UR

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// all routes
// app.get('/',(req,res)=>{
//     res.send({message:'hii from server'})
// })
app.use('/api',router)



// port listen

app.listen(PORT,()=>{
    console.log(`server running on port no ${PORT}`)
    // dbconnection
databaseConnection(DB_URI)
})
