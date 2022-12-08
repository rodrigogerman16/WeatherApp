import React from "react";
import SearchBar from "./SearchBar";
import style from "../modules/Nav.module.css";
import { Link } from "react-router-dom";

function Nav(props){
    return(
        <div className={style.Container}>
            <div>
                <Link to="/">                             
                    <h3>Home</h3>
                </Link>
                <Link to="/about" >
                    <h3>About</h3>
                </Link>
            </div>            
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}

export default Nav;