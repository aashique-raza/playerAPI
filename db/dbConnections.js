
import mongoose from 'mongoose'


const databaseConnection=async(uri)=>{
    try {

        const result=await mongoose.connect(uri)

        console.log(`db coonection successfull ${result.connection.host}`)

        
    } catch (error) {
        console.log(`db connection failes ${error.message}`)
    }
}


export default databaseConnection;