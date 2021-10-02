import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import './Section.css';
function Section() {
    return (
        <>
         <div class="regular-progression">
            <section className="container ">
                <Navbar />
                <div className="row vh-100 align-items-center mt-5 justify-content-center">
                    <div className="col-sm-8 col-md-6 col-lg-4 mt-5 bg-white rounded p-5 shadow">

                        <form className="form-container mt-4">
                            <h5 className="mb-4 text-center"><strong>Welcome back!</strong></h5>

                            <div className="mb-4">
                                <label for="email" className="form-label"><b>Email</b></label>
                                <input type="email" className= "p-2 form-control" id="email" aria-describedby="emailHelp" />

                            </div>

                            <div className="mb-4">
                                <label for="Password" className="form-label"><b>Password</b></label>
                                <input type="password" aria-hidden="true" className=" p-2 form-control" id="Password" aria-describedby="passwordHelp" />



                            </div>

                            <div className="mb-4 form-check">
                                <input type="checkbox" className="form-check-input" id="remember " />
                                <label className="form-check-label" for="remember"><b>Remember Me</b></label>
                            </div>
                            <button type="login" className="btn-1 p-2 mb-3 btn-1 btn-primary w-100 btn-block">Login</button>

                        </form>
   
                    </div>
                    <Footer />
                </div>
            </section>
            </div>
        </>
    )
}

export default Section
