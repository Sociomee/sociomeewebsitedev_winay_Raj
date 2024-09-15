import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

// Use for snakebar
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';

const SignupProfile = () => {
   const location = useLocation();
   const [user, setUser] = useState(location.state)
   const [profile, setProfile] = useState({ fullName: "", userName: "", password: "", tnc: false })
   // Complete Data for registration
   const [completeUserData, setCompleteUSerData] = useState({
      mobile: "",
      email: "",
      fullName: "",
      userName: "",
      password: "",
      loginMode: "password",
      languagId: "12c840f6-fddf-44d3-9680-8c6411ecaff7",
      dob: "",
      gender: "",
      addressBy: "",
      locationLAT: "12c840f6-fddf-44d3-9680-8c6411ecaff7",
      locationLONG: "80.9988773769",
      countryId: "",
      platform: "ios",
      ipAddress: "12.12.12.1",
      deviceId: "1234",
      deviceInfo: "iPhone13 Pro",
      fcmToken: ""
   })

   // Snackbar Code
   const [open, setOpen] = useState(false);
   const [alert, setAlert] = useState({ sev: 'success', content: '' });

   let navigate = useNavigate();

   //  Snackbar Alert Function
   const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
   });

   // Input Handler
   const onChangeHandler = (ev) => {
      let { name, value } = ev.target;
      setProfile({ ...profile, [name]: value })
      if (name === 'tnc') {
         setProfile({ ...profile, tnc: (profile.tnc === false ? true : false) })
      }
   }

   // Submit Profile Data
   const submitHandler = (ev) => {
      ev.preventDefault();
      if (!profile.fullName) { setOpen(true); setAlert({ sev: "error", content: "Please Enter FullName" }); }
      else if (!profile.userName) { setOpen(true); setAlert({ sev: "error", content: "Please Enter UserName" }); }
      else if (!profile.password) { setOpen(true); setAlert({ sev: "error", content: "Please Enter Password" }); }
      else if (profile.password.length < 8) { setOpen(true); setAlert({ sev: "error", content: "Please Enter Password Above 8 Characters" }); }
      else if (!profile.tnc) { setOpen(true); setAlert({ sev: "error", content: "Please Select Term & Condition" }); }
      else {
         // username availibility checking
         axios.post('https://apiserver.msgmee.com/public/userNameAvailable', profile)
            .then((res) => {
               if (res.data.data.successResult === 'available') {

                  console.log(completeUserData)
                  completeUserData.mobile = user.mobile.slice(4);
                  completeUserData.countryId = user.countryId;
                  completeUserData.userName = profile.userName;
                  completeUserData.fullName = profile.fullName;
                  completeUserData.password = profile.password;
                  axios.post('https://apiserver.msgmee.com/public/registerUser', completeUserData)
                     .then((res) => {
                        if (res.data.data?.successResult) {
                           setOpen(true);
                           setAlert({ sev: "success", content: "Registration Successfully." });
                           localStorage.setItem('user', JSON.stringify(res.data.data.successResult))
                        }
                        else if (res.data.data?.errorResult.message === "Mobile Number already exists.") {
                           setOpen(true);
                           setAlert({ sev: "error", content: "This Mobile Number already exists." });
                        }
                        else {
                           setOpen(true);
                           setAlert({ sev: "error", content: "Something went wrong" });
                        }
                     })
                     .catch((err) => {
                        setOpen(true);
                        setAlert({ sev: "error", content: err });
                     })

               }
               else if (res.data.data.errorResult.message === "userNameExists") {
                  setOpen(true);
                  setAlert({ sev: "error", content: "This username is already exist. Please try other username" });
               }
            })
            .catch((err) => { setOpen(true); setAlert({ sev: "error", content: `${err} !`, }); })
      }
   }

   // console.log(user)
   const [style, setStyle] = useState('');

   // Cancel Snackbar
   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
         return;
      }
      setOpen(false);
      if (alert.sev === 'success') navigate("/SignupDetail")
   };

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
                                       <label>What's your name?</label><input type="text" className="form-control" placeholder="Write your full name here" name="fullName" value={profile.fullName} onChange={onChangeHandler} />
                                       <p className="instruction-msg">Max 64 Characters</p>
                                    </div>
                                    <div className="form-group">
                                       <label>Pick a userName</label>
                                       <p className="label-descrip-blk">Help your friends to find you on SocioMee with a unique UserName</p>
                                       <input type="text" className="form-control" placeholder="Write your userName here" name="userName" value={profile.userName} onChange={onChangeHandler} />
                                       <p className="error-input-msg d-none">**Caption text, description, error notification**</p>
                                    </div>
                                    <div className="form-group">
                                       <label>Create password</label>
                                       <p className="label-descrip-blk">Enter password of minimum 8 character with atleast one lowercase, uppercase, number and special character</p>
                                       <div className="input-block">
                                          <input type={!style ? 'password' : 'text'} className="form-control" placeholder="Enter your password here" name="password" value={profile.password} onChange={onChangeHandler} />

                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={!style ? 'input-icon iw-20 ih-20' : 'input-icon iw-20 ih-20 d-none'} onClick={() => setStyle(1)}>
                                             <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                             <circle cx="12" cy="12" r="3"></circle>
                                          </svg>
                                          <svg viewBox="0 0 24 24" width="16" height="16" stroke="#B9B9C3" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={!style ? 'input-icon iw-20 ih-20 d-none' : 'input-icon iw-20 ih-20'} onClick={() => setStyle('')}>
                                             <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                             <line x1="1" y1="1" x2="23" y2="23"></line>
                                          </svg>
                                       </div>
                                       <p className="instruction-msg">Min 8 Characters</p>
                                    </div>
                                    <div className="bottom-sec">
                                       <div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" name="tnc" value={profile.tnc} id="exampleCheck1" onChange={onChangeHandler} /><label className="form-check-label" htmlFor="exampleCheck1">I accept the &nbsp;<Link to="#">Terms &amp; Conditions</Link></label></div>
                                    </div>
                                    <div className="btn-section">
                                       <Stack spacing={2} sx={{ width: '100%' }} id="stack">
                                          <button className="btn btn-solid btn-lg" onClick={submitHandler}>CONTINUE</button>
                                          {/* Snackbar */}
                                          <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={1500} onClose={handleClose}>
                                             <Alert onClose={handleClose} severity={alert.sev} sx={{ width: '100%' }}>
                                                {alert.content}
                                             </Alert>
                                          </Snackbar>
                                       </Stack>
                                    </div>
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

export default SignupProfile
