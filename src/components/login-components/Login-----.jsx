import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

// Use for snakebar
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import { useContext } from 'react';
import  UserContext  from '../../Context/userContext';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
    // global current user data store 
    const [userProfile,setUserProfile]=useContext(UserContext)

    const [user, setUser] = useState({ phone_code: "", phone: "", password: "" })
    const [style, setStyle] = useState('');
    const [phoneCode, setPhoneCode] = useState([])
    let navigate = useNavigate();
    const [loginBody, setLoginBody] = useState(
        {
            "loginId": "+91",
            "password": "",
            "type": "mobile",
            "platform": "ios",
            "ipAddress": "192.168.1.1",
            "deviceId": "15df65sd4f85sd1f4sd6",
            "deviceInfo": {
                "desc": "i love this devce"
            },
            "locationLAT": 12.0325,
            "locationLONG": 51.23652,
            "loginMode": "password"
        }
    );
    // Snackbar Code
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({ sev: 'success', content: '' });
    const onChangeHandler = (e) => {
        let { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(user);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (!user.phone_code) { setOpen(true); setAlert({ sev: "error", content: "Please Enter Phone Code !", }); }
        else if (!user.phone) { setOpen(true); setAlert({ sev: "error", content: "Please Enter Phone !", }); }
        else if (user.phone.length > 10 || user.phone.length < 10) { setOpen(true); setAlert({ sev: "error", content: "Please Enter Valid Phone !", }); }
        else if (!user.password) { setOpen(true); setAlert({ sev: "error", content: "Please Enter Password!", }); }
        else {
            loginBody.loginId = user.phone;
            loginBody.password = user.password;
            console.log("Done")
            console.log(loginBody)
            axios.post('https://apiserver.msgmee.com/public/login/', loginBody)
                .then((res) => {
                    console.log(res.data.data)
                    if (res.data.data.errorResult) {
                        setOpen(true);
                        setAlert({ sev: "error", content: `${res.data.data.errorResult} !`, });
                    }
                    else {
                        setOpen(true);
                        setAlert({ sev: "success", content: 'Login Successfully', });
                        setUserProfile(res.data.data.successResult)
                        localStorage.setItem('user',JSON.stringify(res.data.data.successResult))
                        navigate('/Home')
                        // window.location.reload(false);
                    }
                })
                .catch((err) => {
                    console.log(err)
                    setOpen(true);
                    setAlert({ sev: "error", content: `${err} !`, });
                })
        }

    }

    // Cancel Snackbar
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    // Get all phone code
    useEffect(() => {
        axios.post('https://apiserver.msgmee.com/public/getAllCountry/')
            .then((res) => { setPhoneCode(res.data.data.successResult.rows) })
            .catch((err) => {
                setOpen(true);
                setAlert({ sev: "error", content: `${err} !`, });
            })
    }, [])


    return (
        <>
            <section className="login-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 m-auto">
                            <div className="login-header-section">
                                <div className="logo-sec"><Link aria-current="page" className="active" to="/"><img src="/assets/images/logo.png" alt="logo" className="img-fluid" /></Link></div>
                            </div>
                            <div className="login-form">
                                <div>
                                    <div className="login-title">
                                        <h2>Welcome</h2>
                                    </div>
                                    <div className="login-discription">
                                        <h4>please login to your account.</h4>
                                    </div>
                                    <div className="form-sec">
                                        <div>
                                            <form className="theme-form">
                                                <div className="form-group">
                                                    <label>Enter your Mobile Number</label>
                                                    <div className="input-block">
                                                        <div className="phone-with-code">
                                                            <select className="form-select" value={user.phone_code} name="phone_code" onChange={onChangeHandler}>
                                                                <option value="">Code</option>
                                                                {
                                                                    phoneCode.map((cur) => {
                                                                        return <option value={`+${cur?.teleCode}`} key={cur?.teleCode}>{`${cur?.teleCode}`}</option>
                                                                    })
                                                                }
                                                            </select>
                                                            <input type="text" className="form-control" placeholder="Enter Mobile Number" name="phone" value={user.phone} onChange={onChangeHandler} />
                                                        </div>
                                                    </div>
                                                    <p className="error-input-msg d-none">**Caption text, description, error notification**</p>
                                                </div>
                                                <div className="form-group">
                                                    <label>Enter your password</label>
                                                    <div className="input-block">
                                                        <input type={!style ? 'password' : 'text'} className="form-control" placeholder="Enter your password here" name="password" value={user.password} onChange={onChangeHandler} />

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={!style ? 'input-icon iw-20 ih-20' : 'input-icon iw-20 ih-20 d-none'} onClick={() => setStyle(1)}>
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>
                                                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="#B9B9C3" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={!style ? 'input-icon iw-20 ih-20 d-none' : 'input-icon iw-20 ih-20'} onClick={() => setStyle('')}>
                                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                                            <line x1="1" y1="1" x2="23" y2="23"></line>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="bottom-sec">
                                                    <div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id="exampleCheck1" /><label className="form-check-label" htmlFor="exampleCheck1" >remember me</label></div>
                                                    <NavLink to="/ForgotPassword" className="ms-auto forget-password">forget password?</NavLink>
                                                </div>
                                                <div className="btn-section">
                                                    <Stack spacing={2} sx={{ width: '100%' }} id="stack">
                                                        <button className="btn btn-solid btn-lg dffewfwef" onClick={onSubmit}>login</button>
                                                        {/* Snackbar */}
                                                        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={1500} onClose={handleClose}>
                                                            <Alert onClose={handleClose} severity={alert.sev} sx={{ width: '100%' }}>
                                                                {alert.content}
                                                            </Alert>
                                                        </Snackbar>
                                                    </Stack>
                                                </div>
                                            </form>
                                            <div className="connect-with">
                                                {/* <h6><span>OR Connect With</span></h6>
                                                <ul className="social-login-blk">
                                                    <li><Link to="/"><img src="assets/images/google-icon.png" alt="Google Store" /> Continue with Google</Link></li>
                                                    <li><Link to="/"><img src="assets/images/apple-icon.png" alt="App Store" /> Continue with Google</Link></li>
                                                </ul> */}
                                                <div className="no-account-blk">
                                                    <p>Don't have an account? <Link className="" to="/Signup">Sign Up</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="language-selection-blk">
                                <div className="langauge-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 14" fill="none" className="iw-14 globe-svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.00004 0.583344C3.44171 0.583344 0.583374 3.44168 0.583374 7.00001C0.583374 10.5583 3.44171 13.4167 7.00004 13.4167C10.5584 13.4167 13.4167 10.5583 13.4167 7.00001C13.4167 3.44168 10.5584 0.583344 7.00004 0.583344ZM12.1917 6.41668H9.85837C9.74171 4.78334 9.21671 3.26668 8.28337 1.92501C10.3834 2.45001 11.9584 4.25834 12.1917 6.41668ZM8.75004 7.58334H5.30837C5.42504 9.15834 6.00837 10.675 7.05837 11.9C7.99171 10.675 8.57504 9.15834 8.75004 7.58334ZM5.30837 6.41668C5.48337 4.84168 6.06671 3.32501 7.00004 2.10001C7.99171 3.38334 8.57504 4.90001 8.69171 6.41668H5.30837ZM4.14171 6.41668C4.25837 4.78334 4.78337 3.26668 5.65837 1.92501C3.61671 2.45001 2.04171 4.25834 1.80837 6.41668H4.14171ZM1.80837 7.58334H4.14171C4.25837 9.21668 4.78337 10.7333 5.71671 12.075C3.61671 11.55 2.04171 9.74168 1.80837 7.58334ZM9.91671 7.58334C9.74171 9.21668 9.21671 10.7333 8.34171 12.075C10.3834 11.55 11.9584 9.74168 12.25 7.58334H9.91671Z" fill="#647589"></path>
                                    </svg>
                                    <select className="form-select">
                                        <option value="">Select Language</option>
                                        <option value="English">English</option>
                                        <option value="Hindi">Hindi</option>
                                        <option value="Spanish">Spanish</option>
                                        <option value="Dutch">Dutch</option>
                                        <option value="Arabic">Arabic</option>
                                        <option value="Arawak">Arawak</option>
                                        <option value="Chinese">Chinese</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
