import React from 'react';
import  '../assets/css/regiForm.css';
import { FaUserTie , FaLock} from "react-icons/fa";


const RegiForm =() => {
    return (
        <div className="RegiForm-container">

        
        <div className='wapper'> 
        <form action="POST">
            <h1>Robot Registeration</h1>
            <div className="input-box">
                <input type="text" placeholder ="Username" required />
                <FaUserTie className='icon'/>
            </div>
            {/* ----Email--- */}
            <div className="input-box">
                <input type="email" placeholder = "Email"  required/>
                <FaLock className='icon' />
            </div>
            {/* ----Password--- */}
            <div className="input-box">
                <input type="Password" placeholder = "Password"  required/>
                <FaLock className='icon' />
            </div>
            {/* ----Confirm Password--- */}
            <div className="input-box">
                <input type="Password" placeholder = "Confirm Password"  required/>
                <FaLock className='icon' />
            </div>

            <button type="submit" className='regi_button' >Sign Up</button>

            <div className="register-link">
                {/* <p>Don't have an account?  <a href="/">Register</a></p> */}
            </div>
        </form>   
        </div>
        </div>
    );
};

export default RegiForm;