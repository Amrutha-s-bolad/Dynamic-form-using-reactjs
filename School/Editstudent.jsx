import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import style from "./logoin.module.css"
import axios from "axios";

const Editstudent =()=>{
    let [name,setName] = useState("")
    let [Class,setClass] = useState("")
    let [section,setSection] = useState("")
    let {index} = useParams()
    console.log(index)

    useEffect(()=>{
        axios.get(`http://localhost:3000/content/${index}`)
        .then((resp)=>{
            console.log(resp.data)
            setName(resp.data.name)
            setClass(resp.data.Class)
            setSection(resp.data.section)
        })

    },[])


            let nameData=(e)=>{
                e.preventDefault()
                setName(e.target.value)
            }
        
            let ClassData=(e)=>{
                e.preventDefault()
                setClass(e.target.value)
            }
        
            let sectionData=(e)=>{
                e.preventDefault()
                setSection(e.target.value)
            }
            let formHandle =(e)=>{
                e.preventDefault()
                let payload= {name , Class , section}
                axios.put(`http://localhost:3000/content/${index}`,payload)
                .then(()=>{
                    console.log("Data has been added")
                })
                .catch(()=>{
                    console.log("Something is wrong")
                })
                
            }
        
            
       
    return(
        <div id={style.studentform}>
            <table>
            <tr>
                    <th colSpan= "2"><h4>Student Details</h4></th>
                </tr>
                <tr>
                    <td><label>Student Name</label></td>
                    <td>:<input type ="text"  value={name} onChange={nameData}/></td>
                </tr>
                <tr>
                    <td><label>ADDRESS</label></td>
                    <td>:<input type ="text"  value={Class} onChange={ClassData}/></td>
                </tr>
                <tr>
                    <td><label>COLLAGE</label></td>
                    <td>:<input type ="text"  value={section} onChange={sectionData}/></td>
                </tr>
                <tr>
                    <th colSpan="2"><button onClick={formHandle}> Add </button></th>
                </tr>
                <tr>
                    <th colSpan="2"><button onClick={formHandle}> Remove</button></th>
                </tr>
                <tr>
                    <th colSpan="2"><button onClick={formHandle}> Update</button></th>
                </tr>
                
            </table>
        </div>
    )

}
export default Editstudent