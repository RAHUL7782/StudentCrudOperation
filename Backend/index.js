const express=require("express")
const app=express()
const mongoose=require("mongoose")
const Student=require("./stucontrolar/stucon")
mongoose.connect("mongodb://127.0.0.1:27017/Studentdata")
const cors = require('cors')
app.use(cors())


app.use(express.json())


app.get("/studisplay", Student.Studentdisplay)
app.post("/stusave",Student.sturecord)
app.post("/stusearch",Student.stuSearch)
app.get("/studeleted/:id",Student.stuDel)
app.get("/stuedit/:id",Student.stuEdit)
app.post("/editsave/:id",Student.stuEditSave)





app.listen(5000,()=>{
    console.log("your server 5000 is ready")
});




