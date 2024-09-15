import { Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Use for snakebar
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';
import { useEffect } from 'react';


const SignupInterest = () => {

    const user = JSON.parse(localStorage.getItem('user'))

    // Snackbar Code
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({ sev: 'success', content: '' });

    let navigate = useNavigate();
    const [interestData, setInterestData] = useState([]);
    const [getAllInterest, setGetAllInterest] = useState([]);

    // User Registration
    const registerUser = (ev) => {
        ev.preventDefault();

        if (!interestData) { setOpen(true); setAlert({ sev: "error", content: "Please Select Interests" }); }
        else if (interestData.length < 3 || interestData.length > 3) { setOpen(true); setAlert({ sev: "error", content: "Please select at least 3 interests" }); }
        else {
            const interest = interestData.map((val) => val.id)
            const body = { interestIds: interest }
            const config = {
                headers: { Authorization: `Bearer ${user.token}` }
            };
            axios.post('https://apiserver.msgmee.com/user/addInterests', body, config)
                .then((res) => {
                    if(res.data.data?.successResult)
                    {
                        setOpen(true);
                        setAlert({ sev: "success", content: "Interest Submited" });
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

    }

    //  Snackbar Alert Function
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    // Cancel Snackbar
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        if (alert.sev === 'success') {navigate('/Home')}
    };

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        const body = { searchKey: "" }
        axios.post('https://apiserver.msgmee.com/admin/getAllInterests', body, config)
            .then((res) => {
                setGetAllInterest(res.data.data?.successResult?.rows)
            })
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
                                <div className="logo-sec"><Link className="" to="/"><img src="/assets/images/logo.png" alt="logo" className="img-fluid" /></Link></div>
                            </div>
                            <div className="login-form">
                                <div>
                                    <div className="login-title">
                                        <h2>Choose your Interests</h2>
                                    </div>
                                    <div className="login-discription">
                                        <h4>Please select <b>at least 3 interests</b> for a better in-app experience</h4>
                                    </div>
                                    <div className="form-sec">
                                        <div>
                                            <form className="theme-form">
                                                <div className="form-group">
                                                    {/* Mui Autocomplete multiselect*/}
                                                    <Autocomplete
                                                        multiple
                                                        limitTags={2}
                                                        id="multiple-limit-tags"
                                                        options={getAllInterest}
                                                        getOptionLabel={(option) => option.name}
                                                        renderInput={(params) => (
                                                            <TextField {...params} label="Interest" placeholder="Select Favourite" />
                                                        )}
                                                        onChange={(e, params) => setInterestData(params)}
                                                    />
                                                    {/* <div className="interest-list-blk">
                                                        <span><i className="ti-camera"></i> Photography</span>
                                                        <span><i className="ti-book"></i> Books</span>
                                                        <span><i className="ti-music"></i> Song</span>
                                                        <span><i className="ti-video-camera"></i> Movies</span>
                                                        <span><i className="ti-car"></i> Travelling</span>
                                                        <span><i className="ti-pencil"></i> Writing</span>
                                                        <span><i className="ti-thought"></i> Philosophy</span>
                                                        <span><i className="ti-basketball"></i> Astrology</span>
                                                        <span><i className="ti-image"></i> Reading</span>
                                                        <span><i className="ti-image"></i> Reading</span>
                                                        <span><i className="ti-image"></i> Reading</span>
                                                        <span><i className="ti-image"></i> Reading</span>
                                                        <span><i className="ti-image"></i> Reading</span>
                                                        <span><i className="ti-image"></i> Reading</span>
                                                        <span><i className="ti-image"></i> Reading</span>
                                                        <span><i className="ti-image"></i> Reading</span>
                                                        <span><i className="ti-image"></i> Reading</span>
                                                        <span><i className="ti-image"></i> Reading</span>
                                                    </div> */}
                                                </div>
                                                <div className="btn-section">
                                                    <Stack spacing={2} sx={{ width: '100%' }} id="stack">
                                                        <button className="btn btn-solid btn-lg" onClick={registerUser}>CONTINUE</button>
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

export default SignupInterest
