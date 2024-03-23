import axios from "axios"
import { useEffect, useState } from "react"
import myimg from "./del.jpg"

const Deleted = () => {
    const [studata, setStudata] = useState([])

    const loadData = () => {
        axios.get("http://localhost:5000/studisplay/").then((res) => {
            setStudata(res.data)
        })
    }

    useEffect(() => {
        loadData()
    }, [])


    const mydel = (id) => {
        axios.get(`http://localhost:5000/studeleted/${id}`).then(alert("Your Data Delete For Database"));
        loadData()
    }

    const myData = studata.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fess}</td>
                    <td>
                        <a href="/" onClick={() => { mydel(key._id) }}>
                            <img src={myimg}  alt="/" width="20px" height="20px" />
                        </a>
                    </td>

                </tr>
            </>
        )
    })

    return (
        <>
        <h1 className="deleteh1">welcome to Delete</h1>

            <div className="deletediv1">
            <h1 className="deleteh2">Student Delete Records</h1>
                
                <table border="1" className="deletename" >
                    <tr>
                        <td>RollNo</td>
                        <td>Name</td>
                        <td>City</td>
                        <td>Fess</td>
                        <td>Deleted</td>
                    </tr>
                    {myData}
                </table>
            </div>
        </>
    );
}

export default Deleted