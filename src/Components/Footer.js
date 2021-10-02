import React from 'react'
import googleimg from '../img/google.png';
import './Footer.css';

function Footer() {
    return (
        <>
       
            <div className="text-center ">
                <div className="pt-2">  
                <a href="#" color="inherit" className=" mb-2 text-white">Forgot your password?</a>
                </div>
                <div className="text-center p-4  mb-5">
                    <button type="login"  className="btn-sm-6 btn-2 mb-5   text-primary p-2">
                        <img src={googleimg} width="7%" height="7%" alt="img" /> &nbsp;  <b>Login with Google</b></button>
                </div>
            </div>
            
        </>
    )
}

export default Footer
