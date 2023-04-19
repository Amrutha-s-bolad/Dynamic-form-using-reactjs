import React from "react";
import style from "./logoin.module.css"
import { Link } from "react-router-dom";
const Studentlogoin = () =>{
    return(
        <section id ={style.navbar}>
            <Link to="/Course ">Course</Link>
            <Link to="/Fees">Fees </Link>
            <Link to="/Insuctor">Insructor </Link>
            <Link to="/Branch">Branch </Link>
            {/* <Link to="/loginpage">Loginpage</Link> */}

        </section>
        
    )
}

export default Studentlogoin