import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// Use for snakebar
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';

const Otp = () => {
    const location = useLocation();
    const [user, setUser] = useState(location.state);
    const [verifyOtp, setVerifyOtp] = useState({ sentTo: "", type: "", otp: "" })
    const [otp, setOtp] = useState(new Array(6).fill(""));
    let lastFour = user?.mobile.substr(user.mobile.length - 4);

    // Snackbar Code
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({ sev: '', content: '' });

    let navigate = useNavigate();

    //  Snackbar Alert Function
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    // This function is used to handle six digit code 
    const handleOtpChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };


    const complete = otp.join("");

    const otpSubmit = (e) => {
        e.preventDefault();
        if (complete === "" || complete === null || complete.length > 6) { setOpen(true); setAlert({ sev: "error", content: `Wrong OTP !`, }); }
        else {
            verifyOtp.sentTo = user.mobile; verifyOtp.type = user.type; verifyOtp.otp = complete;
            setUser({ ...user, sentTo: user.mobile, type: user.type, otp: complete })
            axios.post('https://apiserver.msgmee.com/public/verifyOtp/', verifyOtp)
                .then((res) => {
                    setOpen(true)
                    setAlert({ sev: "success", content: `${res.data.data.successResult}`, })
                })
                .catch((err) => {
                    setOpen(true)
                    setAlert({ sev: "error", content: `${err}`, })
                })

        }
    }



    // Close Snackbar Function
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        if (alert.sev === 'success') navigate("/SignupEmail", { state: user })
    };

    // useEffect(() => {
    //     let startTimer = 20;

    //     let resendTimer = setInterval(function () {
    //         if (startTimer <= 0) {
    //             clearInterval(resendTimer);
    //             document.getElementById('timer').innerHTML = '00:00';
    //             document.getElementById('resendotp').style.display = 'block';
    //         }
    //         else {
    //             document.getElementById('timer').innerHTML = `00:${startTimer?startTimer:'00'}`;
    //         }
    //         startTimer -= 1;
    //         // eslint-disable-next-line react-hooks/exhaustive-deps
    //     }, 1000);

    //     if (alert.sev === 'success') {
    //         clearInterval(resendTimer);
    //     }
    // }, [])


    return (
        <div>
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
                                        <h2>Enter OTP</h2>
                                    </div>
                                    <div className="login-discription">
                                        <h4>An OTP has been sent to your phone number ending with <b>XXX XXX {lastFour}</b></h4>
                                    </div>
                                    <div className="form-sec">
                                        <div>
                                            <form className="theme-form">
                                                <div className="form-group">
                                                    <div className="otpContainer">
                                                        {otp.map((data, index) => {

                                                            return (<input
                                                                name="otp"
                                                                type="text"
                                                                placeholder="-"
                                                                autoComplete="off"
                                                                className="otpInput form-control"
                                                                tabIndex="1"
                                                                maxLength="1"
                                                                key={index}
                                                                value={data}
                                                                onChange={e => handleOtpChange(e.target, index)}
                                                                onFocus={e => e.target.select()} />)

                                                        })}
                                                    </div>
                                                    <p className="error-input-msg d-none">Invalid OTP</p>
                                                </div>
                                                {/* <div className="otp-time-count"><span id="timer"></span> sec</div> */}
                                                <div className="resendotp-blk" id="resendotp">Didn't receive OTP yet? <Link to="/">Resend</Link></div>
                                                <div className="btn-section">
                                                    <Stack spacing={2} sx={{ width: '100%' }} id="stack">
                                                        <button className="btn btn-solid btn-lg" onClick={otpSubmit}>CONTINUE</button>
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
        </div>
    )
}

export default Otp
