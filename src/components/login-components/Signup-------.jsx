import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Use for snakebar
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';

const Signup = () => {
    const [user, setUser] = useState({
        isEmail: false,
        countryId:"",
        email: "",
        mobile: "",
        type: "signup"
    });
    const [userData, setUserData] = useState({ code: "", mobile: "" });
    const [phoneCode, setPhoneCode] = useState([])

    // Snackbar Code
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({ sev: 'success', content: '' });

    let navigate = useNavigate();

    //  Snackbar Alert Function
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userData.code) { setOpen(true); setAlert({ sev: "error", content: "Please Select Phone Code !", }); }
        else if (!userData.mobile) { setOpen(true); setAlert({ sev: "error", content: "Please Enter Phone Number !", }); }
        else if (userData.mobile.length > 10 || userData.mobile.length < 10) { setOpen(true); setAlert({ sev: "error", content: "Please Enter Valid Phone Number !", }); }
        else {
            setUser({ ...user, mobile: `${userData.code} ${userData.mobile}` })
            user.mobile = `${userData.code} ${userData.mobile}`;
            console.log("Done")
            console.log(user)
            axios.post('https://apiserver.msgmee.com/public/sendOtp', user)
                .then((res) => {
                    console.log(res.data.data)
                    if (res.data.data?.successResult) {
                        setOpen(true);
                        setAlert({ sev: "success", content: `${res.data.data?.successResult} !`, });
                    }
                    else {

                        setOpen(true);
                        setAlert({ sev: "error", content: `${res.data.data?.errorResult} !`, });

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
        if (alert.sev === 'success') navigate("/Otp", { state: user })
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


    const countryCodeHandler =(e)=>{
        userData.code=e.target.value;
        if(userData.code)
        {   
            // filter country by phone code
            const filterCode=phoneCode.filter((curr)=>{return `+${curr.teleCode}`===userData.code})
            // console.log(filterCode[0].id)
            user.countryId=filterCode[0].id;
        }
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
                                        <h4>Please SignUp to your account.</h4>
                                    </div>
                                    <div className="form-sec">
                                        <div>
                                            <form className="theme-form" onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <label>Enter your Mobile Number</label>
                                                    <div className="input-block">
                                                        <div className="phone-with-code">
                                                            <select className="form-select" onChange={countryCodeHandler}>
                                                                <option value="">Code</option>
                                                                {
                                                                    phoneCode.map((cur) => {
                                                                        return <option value={`+${cur?.teleCode}`} key={cur?.teleCode}>{`${cur?.teleCode}`}</option>
                                                                    })
                                                                }
                                                            </select>
                                                            <input type="text" className="form-control" placeholder="Enter Mobile Number" name="mobile" onChange={(e) => setUserData({ ...userData, mobile: e.target.value })} />
                                                        </div>
                                                    </div>
                                                    <p className="error-input-msg d-none">**Caption text, description, error notification**</p>
                                                </div>
                                                <p className="notimsg-blk">When you will click on continue,  you will receive a verification code on the mobile number that you have entered.</p>
                                                <div className="btn-section">
                                                    <Stack spacing={2} sx={{ width: '100%' }} id="stack">
                                                        <button className="btn btn-solid btn-lg">CONTINUE</button>
                                                        {/* Snackbar */}
                                                        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={1500} onClose={handleClose}>
                                                            <Alert onClose={handleClose} severity={alert.sev} sx={{ width: '100%' }}>
                                                                {alert.content}
                                                            </Alert>
                                                        </Snackbar>
                                                    </Stack>
                                                </div>
                                                <div className="connect-with">
                                                    <div className="no-account-blk">
                                                        <p>Already have an account? <Link className="" to="/">Login</Link></p>
                                                    </div>
                                                </div>
                                            </form>
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

export default Signup
