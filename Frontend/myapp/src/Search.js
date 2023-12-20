import { useState } from "react"
import axios from "axios"
import StudentDis from "./StuDisplay"
const Search = () => {
    const [rollno, setRollno] = useState("")
    const [stuData, setstuData] = useState([])

    const handleinput = () => {
        axios.post("http://localhost:5000/stusearch", { rollno: rollno }).then((res) => {
            setstuData(res.data)

        })
    }

    const myData = stuData.map((key) =>
        <StudentDis
            rno={key.rollno}
            nm={key.name}
            ct={key.city}
            fs={key.fess}
        />)

    return (
        <>
            <h1 className="searchhead">Student Search</h1>
            <div className="searchroll">
                <div>
                    <h2 className="searchh2">Enter rollno</h2>
                    <input className="searchrollinput" type="text" name="rollno" onChange={(e) => { setRollno(e.target.value) }} />
                    <button className="searchroll button" onClick={handleinput}>Search</button>
                </div>
            </div>




            <div className="">
                <table border="4" align="center" width="600px" height="70px" bgcolor="orange" style={{ margin: "auto" }} className="searchtable">
                    <tr>
                        <td className="seatchtd">RollNo</td>
                        <td className="seatchtd">Name</td>
                        <td className="seatchtd">City</td>
                        <td className="seatchtd">Fess</td>
                    </tr>
                    {myData}
                </table>
            </div>


        </>
    )
}

export default Search