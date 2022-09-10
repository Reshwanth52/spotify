const { default: mongoose } = require("mongoose");

const songSchema=new mongoose.Schema({
    id:{type:String},
    beats:{type:[Number]},
    name:{type:String}
})

const Song=mongoose.model("Song",songSchema)

module.exports={Song}
