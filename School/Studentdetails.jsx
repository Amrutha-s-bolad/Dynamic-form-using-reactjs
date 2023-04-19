import React, { useState } from "react";
import axios from "axios";
import style from"./logoin.module.css";


const Studentdetails =()=>{

    let [studentname, setStudentName] = useState("")
    let [address, setAddress] = useState("")
    let [collage, setCollage] = useState("")



    let StudentNameData=(e)=>{
        setStudentName(e.target.value)
    }

    let AddressData=(e)=>{
        setAddress(e.target.value)
    }

    let CollageData=(e)=>{
        setCollage(e.target.value)
    }


    let formHandle =(e)=>{
        e.preventDefault()
        let payload= {studentname , address , collage}
        axios.post("http://localhost:3000/content",payload)
        .then(()=>{
            console.log("Data has been added")
        })
        .catch(()=>{
            console.log("Something is wrong")
        })
        
    }


    return (
        
        <div id={style.studentform}>
            <table>
            <tr>
        <td><label>STUDENT NAME</label></td>
        <td>:<input type="text" value={studentname} onChange={StudentNameData} /></td>
        <td><label>ADDRESS</label></td>
        <td>:<input type="text" value={address} onChange={AddressData} /></td>
        <td><label>COLLEGE</label></td>
        <td>:<input type="text" value={collage} onChange={CollageData} /></td>
        <td><button onClick={formHandle}>Add</button></td>
        <td><button onClick={formHandle}>Remove</button></td>
        
        
    </tr>
    <tr>
    <td><label>STUDENT NAME</label></td>
        <td>:<input type="text" value={studentname} onChange={StudentNameData} /></td>
        <td><label>ADDRESS</label></td>
        <td>:<input type="text" value={address} onChange={AddressData} /></td>
        <td><label>COLLEGE</label></td>
        <td>:<input type="text" value={collage} onChange={CollageData} /></td>
        <td><button onClick={formHandle}>Add</button></td>
        <td><button onClick={formHandle}>Remove</button></td>
        
        
    </tr>
    <tr>
    <td><label>STUDENT NAME</label></td>
        <td>:<input type="text" value={studentname} onChange={StudentNameData} /></td>
        <td><label>ADDRESS</label></td>
        <td>:<input type="text" value={address} onChange={AddressData} /></td>
        <td><label>COLLEGE</label></td>
        <td>:<input type="text" value={collage} onChange={CollageData} /></td>
        <td><button onClick={formHandle}>Add</button></td>
        <td><button onClick={formHandle}>Remove</button></td>
        
        
    </tr>
    <tr>
        <td colSpan={8}>
          <div style={{textAlign: "center"}}>
            <button onClick={formHandle}>SAVE</button>
          </div>
        </td>
      </tr>
                
            </table>
        </div>

    )
}

export default Studentdetails