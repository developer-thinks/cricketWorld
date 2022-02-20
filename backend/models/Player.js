const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    jourseyNo : {
        type : Number,
        required : true,
        unique : true
    },
    playerName :{
        type : String,
        required : true
    },
    totalRuns : {
        type : Number,
        required : true
    },
    highestScore :{
        type : Number,
        required : true
    },
    fours : {
        type : Number,
        required : true
    },
    sixes : {
        type : Number,
        required : true
    }
},{
    timestamps : true
})

module.exports = mongoose.model("player", PlayerSchema)