
const express = require("express");

const ReceipeInfo = require('./model/ReceipeDb')

const app = new express();

const path = require('path'); 
app.use(express.static(path.join(__dirname,'/build')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type ");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
})
app.get('/',(req,res)=>{
      res.send("Congratulations!!!!!,Server is Up in new reaceipe");
})


app.post('/api/create',(req,res)=>
{
    try{
    let course = new ReceipeInfo(req.body); 
    course.save();
    console.log(req.body)
    res.send("Data Added")
    }
    catch (error) {
        res.status(500).send(error);
    }
})

app.get('/api/view',async (req,res)=>{
    try{ 
      let result = await ReceipeInfo.find();
      res.json(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
})
app.post('/api/update',async (req,res)=>{
    try{
    let result = await ReceipeInfo.findByIdAndUpdate(req.body._id,req.body);
    res.send("Data Updated")
    }
    catch (error) {
        res.status(500).send(error);
    }
})

app.post('/api/delete',async (req,res)=>{
   try{
    let result = await ReceipeInfo.findByIdAndDelete(req.body._id);
    res.send("Data Deleted");
   }
   catch (error) {
    res.status(500).send(error);
}
})

app.post('/api/get/',async (req,res) => {
    console.log(req.body)
    try{
        let result = await ReceipeInfo.findById(req.body._id);
        console.log("console.log++++++++++")
        res.json(result);
        console.log(result)
       }
       catch (error) {
        res.status(500).send(error);
    }
})
app.get('/api/search/indian',async (req,res) => {
    try{
        console.log('indian fetched++++++++++++++++4++++++++++++++=')
        console.log(req.body)
        // let result = await ReceipeInfo.find();
        let result = await ReceipeInfo.find({cusion_category: "Indian"});
        // let result = await ReceipeInfo.find({ "cusion_category": { $regex: '.*' + Indian + '.*' } });
        console.log('print_resukt')
        console.log(result)
        res.json(result);
       }
       catch (error) {
        res.status(500).send(error);
    }
})
app.get('/api/search/italian',async (req,res) => {
    try{
        console.log('Italian fetched++++++++++++++++4++++++++++++++=')
        console.log(req.body)
        // let result = await ReceipeInfo.find();
        let result = await ReceipeInfo.find({cusion_category: "Italian"});
        // let result = await ReceipeInfo.find({ "cusion_category": { $regex: '.*' + Indian + '.*' } });
        console.log('print_resukt')
        console.log(result)
        res.json(result);
       }
       catch (error) {
        res.status(500).send(error);
    }
})
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'/build/index.html'));
 });
//4. Setting PORT Number
app.listen(5000,()=>
{
    console.log("Server is running in port 5000");
})