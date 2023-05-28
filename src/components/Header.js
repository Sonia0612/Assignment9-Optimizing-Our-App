import { useState } from "react";
import * as constant  from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import useOnline from "../utils/useOnline"

const Header=()=>{
    let nav=useNavigate();
    const [isLogged,setIsLogged]=useState(false);
    const isOnline=useOnline();
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={constant.LOGO_URL} alt='lOGO here'/>
            </div>
            <h1 className="heading">Food Corner</h1>
            <div className="nav-list">
                <ul>
                    <Link to="/"><li>home</li></Link>
                    <Link to="/about"><li>about</li></Link>
                    <Link to="/contact"><li>contact us</li></Link>
                    <Link to="/instamart"><li>Instamart</li></Link>
                    
                    {/* <li>cart</li> */}
                </ul>
            </div>
            {/* online|offline status */}
            {!isOnline? '🔴' :'🟢'}
            {isLogged?<button className="log">Logout</button>:
            <button className="log" onClick={()=>nav('/login')}>Login</button>}
        </div>
    )
}
export default Header;