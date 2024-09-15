import React, { useState } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'

const SignupEmail = () => {
   const location =useLocation();
   console.log(location)
   const [user,setUser]=useState(location.state);

   const [email,setEmail]=useState("");

   let navigate=useNavigate();

   // Skip Signup by email function
   const skipSignupEmail =(e)=>{
      navigate('/SignupProfile',{state:user})     
   }

   
   // Email Verification
   const emailVerification =(ev)=>{
      ev.preventDefault();
      if(!email)console.log('Please Enter Email !')

   }

  return (
    <>
      <section className="login-section">
   <div className="container">
      <div className="row">
         <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 m-auto">
            <div className="login-header-section">
               <div className="logo-sec"><Link className="" to="/"><img src="/assets/images/logo.png" alt="logo" className="img-fluid" /></Link></div>
            </div>
            <div className="login-form">
               <div>
                  <div className="login-title">
                     <h2>Welcome</h2>
                  </div>
                  <div className="login-discription">
                     <h4>Welcome to SocioMee, please fill the form below.</h4>
                  </div>
                  <div className="form-sec">
                     <div>
                        <form className="theme-form">
                           <div className="form-group">
                              <label>Enter your Email Address</label><input type="email" className="form-control" placeholder="Enter Email Address" value={email} onChange={(ev)=>setEmail(ev.target.value)}/>
                              <p className="error-input-msg d-none">**Caption text, description, error notification**</p>
                           </div>
                           <div className="connect-with">
                              <h6><span>OR Connect With</span></h6>
                              <ul className="social-login-blk">
                                 <li><Link to="/"><img src="/assets/images/google-icon.png" alt="Google Login"/> Continue with Google</Link></li>
                                 <li><Link to="/"><img src="/assets/images/apple-icon.png" alt="Apple Login"/> Continue with Google</Link></li>
                              </ul>
                           </div>
                           <p className="notimsg-blk">Provide your email for better communication. </p>
                           <div className="btn-section"><button className="btn btn-solid btn-lg" onClick={emailVerification}>CONTINUE</button></div>
                           <div className="skip-reg-block"><button className="btn" onClick={skipSignupEmail}>Skip</button></div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
  )
}

export default SignupEmail
