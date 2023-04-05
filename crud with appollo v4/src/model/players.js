const mongoose = require('mongoose')

const playerschema = new mongoose.Schema({

    playername:{
        type : String,
        require : true
    },
    position :{
        type:String,
        require:true
    },
    country :{
        type : String,
        require : true
    },
    isDeleted :{
        type : Boolean,
        default : false
    }
})

const Player = mongoose.model('Player',playerschema)

module.exports = Player