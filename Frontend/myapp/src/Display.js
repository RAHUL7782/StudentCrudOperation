import axios from "axios"
import { useEffect, useState } from "react"
import StudentDis from "./StuDisplay"
const Display=()=>{
const [studata,setStudata]=useState([])

const loadData=()=>{
axios.get("http://localhost:5000/studisplay").then((res)=>{
setStudata(res.data)
})    
}

useEffect(()=>{
    loadData()
},[])

const mydata=studata.map((key)=>
<StudentDis
rno={key.rollno}
nm={key.name}
ct={key.city}
fs={key.fess}
/>
)

return(
    <>
    <h1 className="displayh1">welcome to display</h1>
<table border="1" className="table" >
<tr>
<td className="td">RollNo</td>
<td className="td">Name</td>
<td className="td">City</td>
<td className="td">Fess</td>
</tr>
{mydata}
</table>
    </>
)
}

export default Display;