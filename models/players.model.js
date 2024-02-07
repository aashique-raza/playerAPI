

import mongoose from "mongoose";

const playerSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        required:true
    }
},{timestamps:true})

const Player=mongoose.model('player',playerSchema)


export default Player;