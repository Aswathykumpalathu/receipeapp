const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://AswathyKiran:Pulser90@cluster0.sj2c7gy.mongodb.net/?retryWrites=true&w=majority");
const Schema = mongoose.Schema;
var receipeSchema = new Schema({
    name : String,
    cusion_category: String,
    duration : String,
    servings : String,
    file : String,
})

var ReceipeInfo = mongoose.model("receipess" ,receipeSchema)
module.exports = ReceipeInfo;
