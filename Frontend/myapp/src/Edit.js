import axios from "axios"
import { useEffect, useState } from "react"
import img from "./Edit2.png"

const Edit = () => {
    const [studata, setStudata] = useState([]);
    const [mydata, setMydata] = useState({});


    const loadData = () => {
        axios.get("http://localhost:5000/studisplay/").then((res) => {
            setStudata(res.data)
        })
    }

    useEffect(() => {
        loadData()
    }, [])


    const myEdit = (id) => {
        axios.get(`http://localhost:5000/stuedit/${id}`).then((res) => {

            setMydata(res.data);

        });
    }

    const hendleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setMydata(values => ({ ...values, [name]: value }));
    }
    const editSave = () => {
        axios.post(`http://localhost:5000/editsave/${mydata._id}`, mydata).then(alert("Your Data Edit Successfully")).then((res) => {

            loadData();

        })

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
                        <a href="#" onClick={() => { myEdit(key._id) }}>
                            <img src={img} width="20px" height="20px" />
                        </a>
                    </td>

                </tr>
            </>
        );
    });

    return (
        <>


            <div className="main">
                <div className="Editdiv">
                    <h1 className="Edith2">Edit Student Recordes</h1>

                    <div className="Editinput">
                        <label>Edit Rollno</label>
                        <input type="text" value={mydata.rollno} name="rollno" onChange={hendleInput} />

                        <label> Edit name</label>
                        <input type="text" value={mydata.name} name="name" onChange={hendleInput} />

                        <label> Edit City</label>
                        <input type="text" value={mydata.city} name="city" onChange={hendleInput} />

                        <label>Edit Fees</label>
                        <input type="text" value={mydata.fess} name="fess" onChange={hendleInput} />

                        <button onClick={editSave}>Data Update</button>
                    </div>

                </div>



                {/* Edit second div */}

                
                <div className="Editdiv1">
                    <h1 className="Edit1">Dispaly Student Records</h1>

                    <table border="1" className="Editinput1" >
                        <tr>
                            <td>RollNo</td>
                            <td>Name</td>
                            <td>City</td>
                            <td>Fess</td>
                            <td>Edit</td>
                        </tr>
                        {myData}
                    </table>
                </div>
            </div>



        </>
    )


}

export default Edit;