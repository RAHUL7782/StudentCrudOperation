import axios from "axios"
import { useState } from "react"
const Insert = () => {
    const [input, setInput] = useState({})
    const Handleinput = (e) => {
        const name = e.target.name
        const value = e.target.value

        setInput(values => ({ ...values, [name]: value }))

    }

    const inputsave = () => {
        axios.post("http://localhost:5000/stusave", input).then(alert("Data Save Successfully"));
    }

    return (
        <>

            <div id="record">
                <h1 className="inserth1">Student Records</h1>
                
                <div className="div">
                    <label>RollNo</label>
                    <input type="text" name="rollno" value={input.rollno} onChange={Handleinput} placeholder="Enter RollNo"></input>
                    <label>Name</label>
                    <input type="text" name="name" value={input.name} onChange={Handleinput} placeholder="Enter Name"></input>
                    <label>City</label>
                    <input type="text" name="city" value={input.city} onChange={Handleinput} placeholder="Enter City"></input>
                    <label>Fess</label>
                    <input type="text" name="fess" value={input.fess} onChange={Handleinput} placeholder="Enter Fess"></input>
                    <button onClick={inputsave}>Submit</button>
                </div>

            </div>

        </>
    )

}

export default Insert