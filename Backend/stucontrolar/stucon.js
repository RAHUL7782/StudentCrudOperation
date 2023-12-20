const studata=require("../Stumodel/studetail")

const Studentdisplay=(req,res)=>{
    studata.find().then((data)=>{
        res.send(data)
    })

}

const sturecord=(req,res)=>{
const stusave=new studata(req.body)
stusave.save().then(()=>{
    
})
}

const stuSearch=(req,res)=>{
studata.find(req.body).then((data)=>{
res.send(data)
})
}

const stuDel=(req,res)=>{
    studata.findByIdAndDelete(req.params.id).then((data)=>{
        res.send(data);
    })   
}
const stuEdit=(req,res)=>{
    studata.findById(req.params.id).then((data)=>{
        res.send(data);
    })
}
const stuEditSave=(req,res)=>
{
    studata.findByIdAndUpdate(req.params.id,req.body).then((data)=>{

        res.send(data);
    })
}

module.exports={
    Studentdisplay,
    sturecord,
    stuSearch,
    stuDel,
    stuEdit,
    stuEditSave

}
