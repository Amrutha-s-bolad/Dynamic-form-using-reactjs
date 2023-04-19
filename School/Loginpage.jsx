import axios from "axios"
import React,{useEffect, useState}from "react"
import style from"./logoin.module.css"
import { Link } from "react-router-dom"

const Loginpage =()=>{
    let [data,setData]= useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/content")
        .then((response)=>{
            setData (response.data)
        })
        .catch(()=>{
            console.log("didnt get")
        })
    },[])


    let deleteData=(id)=>{
        axios.delete(`http://localhost:3000/content/${id}`)
        
    }
    
    return(
        <div id={style.mylogin}>
            {data.map((x)=>{
                return(
                    <div id={style.cards}> 
                    <table>
                        <tr>
                            <th colSpan='2'><h3>Student{x.id}</h3></th>
                        </tr><br/>
                    <tr>
                        <td>Student Name</td>
                        <td>:{x.name}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>:{x.Class}</td>
                    </tr>
                    <tr>
                        <td>Collage</td>
                        <td>:{x.section}</td>
                    </tr>
                    <tr>
                        <td><button> <Link to={`/edit/${x.id}`}>Add</Link></button></td>
                        <td><button onClick={()=>{deleteData(x.id)}}>Remove</button></td>
                    </tr>
                    </table>
                      
                    </div>
                )
            })}

            <h1></h1>
        </div>
    )
}

export default Loginpage