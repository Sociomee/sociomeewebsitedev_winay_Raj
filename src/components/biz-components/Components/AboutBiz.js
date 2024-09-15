import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, FormGroup, Input, Label, Modal, ModalBody, Row }
    from 'reactstrap'
import LatestReviews from './LatestReviews'
import ReactSlick from './ReactSlick'

const AboutBiz = () => {
    const [modal, setModal] = useState(false)
    const [additionalInfo, setAdditionalInfo] = useState(false)
    const [emailInfo, setEmailInfo] = useState(false)
    const [contactInfo, setContactInfo] = useState(false)
    const [tymInfo, setTymInfo] = useState(false)
    const [remome, setRemove] = useState(false)
    const toggleInfo = () => setAdditionalInfo(!additionalInfo)
    const toggle = () => setModal(!modal)
    const toggleEmail = () => setEmailInfo(!emailInfo)
    const toggleContact = () => setContactInfo(!contactInfo)
    const toggleTym = () => setTymInfo(!tymInfo)
    const toggleRemove = () => setRemove(!remome)
    const [time, setTime] = useState([
        {
            name: "Timing",
            update: "Open now",
            time: "9:00AM - 6:00PM",
            icon1: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
            icon2: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>

        }
    ])
    const [website, setWebsite] = useState([
        {
            name: "Website",
            link1: "www.behance.net",
            link2: "www.gihub.net",
            icon1: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
            icon2: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>

        },
        {
            name: "Email",
            link1: "digital@gmail.com",
            link2: "info@sociomee.com",
            icon1: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
            icon2: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>

        }

    ])
    const [Contact, setContact] = useState([
        {
            name: "Contact",
            mob: "8818844881",
            icon1: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
            icon2: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
        }

    ])
    const [mapdata, setMapData] = useState([
        {
            link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2266.133469088304!2d10.344347315868879!3d55.39057698045794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cdfc6c8acf0bd%3A0xc9e5ab1219682ea!2sDybdevej%2010%2C%205200%20Odense%2C%20Denmark!5e0!3m2!1sen!2sin!4v1656575287386!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
            name1: "Address 1",
            name2: "Dybdevej 10, 5200 Odense, Denmark",
            icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>

        },
        {
            link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2266.133469088304!2d10.344347315868879!3d55.39057698045794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cdfc6c8acf0bd%3A0xc9e5ab1219682ea!2sDybdevej%2010%2C%205200%20Odense%2C%20Denmark!5e0!3m2!1sen!2sin!4v1656575287386!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
            name1: "Address 2",
            name2: "Dybdevej 10, 5200 Odense, New York",
            icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-18 ih-18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>

        }

    ])
    const data = ["Ad managment", "Branding", "App deveploment", "Ad campaign", "Digital solutions", "Branding"]
    const Offerings = ["Facebook Ads", "Print media", "Web design", "E-commerce", "iOS deveploment", "Android deveploment"]

    const RowFirstSideData = () => {
        return (
            <>
                <div className="custom-card-block">
                    <div className="custom-card-head biz-carddetail-blk">
                        <h4>Address</h4>
                        <div className="settings">
                            <div className="setting-btn">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#editbizaboutmodel">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="biz-about-cont">
                        {
                            mapdata.map((e, index) => (
                                <ul>
                                    <li>
                                        <div className="bizabout-location" key={index} >
                                            {e.link}
                                            <div className="biz-icon-cont-blk">
                                                <div className="icon">
                                                    {e.icon}
                                                </div>
                                                <div className="details">
                                                    <h5>{e.name1}</h5>
                                                    <h6>{e.name2}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))
                        }
                        {
                            time.map((tym, index) => (
                                <ul>
                                    <li>
                                        <div className="biz-icon-cont-blk" key={index}>
                                            <div className="icon">
                                                {tym.icon1}
                                            </div>
                                            <div className="details">
                                                <div className='d-flex'>
                                                    <div className='me-auto'>
                                                        <h5>{tym.name}</h5>
                                                        <h6><span className="green">{tym.update}</span> {tym.time}</h6>
                                                    </div>
                                                    <div className="setting-btn " onClick={toggleTym}>
                                                        {tym.icon2}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))
                        }
                        {/* </li> */}
                        {
                            website.map((web, index) => (
                                <ul>
                                    <li>
                                        <div className="biz-icon-cont-blk" key={index}>
                                            <div className="icon">
                                                {web.icon1}
                                            </div>
                                            <div className="details">
                                                <div className='d-flex'>
                                                    <div className='me-auto'>
                                                        <h5>{web.name}</h5>
                                                        <h6><Link to={"www.behance.net"}>{web.link1}</Link> <br /> <Link to={"www.gihub.net"}>{web.link2}</Link></h6>
                                                    </div>
                                                    <div className="setting-btn" onClick={toggleEmail}>
                                                        {web.icon2}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))
                        }
                        {
                            Contact.map((info, index) => (
                                <ul>
                                    <li>
                                        <div className="biz-icon-cont-blk" key={index}>
                                            <div className="icon" >
                                                {info.icon1}
                                            </div>
                                            <div className="details">
                                                <div className='d-flex'>
                                                    <div className='me-auto'>
                                                        <h5>{info.name}</h5>
                                                        <h6>{info.mob}</h6>
                                                    </div>
                                                    <div className="setting-btn" onClick={toggleContact} >
                                                        {info.icon2}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))}
                    </div>
                </div>
            </>
        )
    }
    const RowSecondSideData = () => {
        return (
            <>
                <div className="custom-card-block">
                    <div className="custom-card-head d-flex">
                        <div className='me-auto'>
                            <h4 >About</h4>
                        </div>
                        <div className="setting-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={toggle} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                        </div>
                    </div>
                    <div className="custom-card-body">
                        <div className="biz-main-about-blk">
                            <h4>Summary</h4>

                            <p>The #1 Platform for Virtual Sales Teams. Get visibility into your conversations and deals with Revenue Intelligence.</p>
                        </div>
                        <div className="biz-main-about-blk ">
                            <div className='d-flex'>
                                <div className='me-auto'>
                                    <h4>What we do</h4>
                                </div>
                                <div className="setting-btn ">
                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={toggle} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                </div>
                            </div>
                            <p>Gong.io enables revenue teams to realize their fullest potential by unveiling customer reality.</p>
                            <p>The patented Gong Revenue Intelligence Platform captures and understands every customer interaction then delivers insights at scale, empowering revenue teams to make decisions based on data instead of opinions.</p>
                        </div>
                        <Row className="biz-main-about-blk">
                            <Col>
                                <h4>{"Service Option"}</h4>
                            </Col>
                            <Col className=' d-flex justify-content-end'>
                                <div className="setting-btn ">
                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={toggle} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                </div>
                            </Col>
                            <div className="service-list-blk">
                                {data.map((menu, index) => (
                                    <span>{menu}</span>
                                ))}
                            </div>
                        </Row>
                        <Row className="biz-main-about-blk">
                            <Col sm="6">
                                <h4>{"Offerings"}</h4>
                            </Col>
                            <Col sm="6" className=' d-flex justify-content-end'>
                                <div className="setting-btn ">
                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={toggle} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                </div>
                            </Col>
                            <div className="service-list-blk">
                                {
                                    Offerings.map((offerData) => (
                                        <span>{offerData}</span>
                                    ))}
                            </div>
                        </Row>
                        <Row className="biz-main-about-blk">
                            <Col sm="6">
                                <h4>Additional Information</h4>
                            </Col>
                            <Col sm="6" className=' d-flex justify-content-end'>
                                <div className="setting-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleInfo} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                </div>
                            </Col>
                            <p>The patented Gong Revenue Intelligence Platform captures and understands every customer interaction then delivers insights at scale, empowering revenue teams to make decisions based on data instead of opinions.</p>
                        </Row>
                    </div>
                </div>
              
            </>
        )
    }
    const ModalTab = () => {
        return (
            <>
                <Modal isOpen={modal} toggle={toggle} size="md" className='modal-dialog-centered'>
                    <div className='d-flex justify-content-center  align-items-center' style={{ background: "#F6F6F6", height: "70px" }} >
                        <h2>{"Edit Additional Info"}</h2>
                    </div>
                    <ModalBody>
                        <div className='mb-2 ' >
                            <Label for='email' >
                                <h4 ><b>{"Heading"}</b></h4>
                            </Label>
                            <Input
                                type='heading'
                                id='heading'
                                placeholder='enter your heading here'
                                maxLength={24}
                                bsSize="lg"

                            />
                            <p className='text-end pt-1 text-muted '>{"Max 24 Characters"}</p>
                        </div >
                        <div className='mb-2'>
                            <FormGroup>
                                <Label for="exampleText">
                                    <h4 ><b> {'Description'}</b></h4>
                                </Label>
                                <Input
                                    id="exampleText"
                                    name="text"
                                    type="textarea"
                                    maxLength={300}
                                    placeholder='enter your description here'
                                    bsSize="lg"
                                />
                                <p className='text-end pt-1 text-muted '>{"Max 300 Characters"}</p>
                            </FormGroup>
                        </div>
                    </ModalBody>
                    <div className='d-flex justify-content-center mb-4'>
                        <div className='me-2'>
                            <Button color="secondary" outline size="lg" onClick={toggle}>
                                Cancle
                            </Button>
                        </div>
                        <div >
                            <Button color="primary" size="lg" onClick={toggle}>
                                save
                            </Button>
                        </div>
                    </div>
                </Modal>
            </>
        )
    }
    const ModalInfoTab = () => {
        return (
            <>
                <Modal isOpen={additionalInfo} toggle={toggleInfo} className='modal-dialog-centered' style={{ height: "354px", width: "500px", borderRadius: "10PX" }} >
                    <div className='d-flex justify-content-center  align-items-center' style={{ background: "#F6F6F6", height: "70px" }} >
                        <h2>{"Add Additional Information"}</h2>
                    </div>
                    <ModalBody>
                        <Label for="infoText">
                            <h3><b>{'Select format for info'}</b></h3>
                        </Label>
                        <div class="d-flex align-items-center py-1">
                            <div class="mr-auto ">
                                <h4 className='text-secondary'><b>Heading and Description</b></h4>
                                <h6 className='text-muted pt-2'>Describe additional information about your business</h6>
                            </div>
                            <FormControl component="fieldset" className="d-flex ">
                                <FormControlLabel
                                    control={<Radio style={{ color: "#4E924D" }} />}
                                    defaultChecked
                                />
                            </FormControl>
                        </div>
                        <div class="d-flex align-items-center py-1">
                            <div class="mr-auto ">
                                <h4 className='text-secondary'><b>Heading and Poppins</b></h4>
                                <h6 className='text-muted pt-2'>List additional features and amenities of your business</h6>
                            </div>
                            <FormControl component="fieldset" className="d-flex ">
                                <FormControlLabel
                                    control={<Radio style={{ color: "#4E924D" }} />}
                                    defaultChecked
                                />
                            </FormControl>
                        </div>
                    </ModalBody>
                    <div className='d-flex justify-content-center mb-4'>
                        <div className='me-2'>
                            <Button color="secondary" outline size="lg" onClick={toggleInfo}>
                                Cancle
                            </Button>
                        </div>
                        <div >
                            <Button color="primary" size="lg" onClick={toggleInfo}>
                                Add Info
                            </Button>
                        </div>
                    </div>
                </Modal>
            </>
        )
    }
    const EmailModal = () => {
        return (
            <>
                <Modal isOpen={emailInfo} toggle={toggleEmail} className='modal-dialog-centered' style={{ height: "354px", width: "500px", borderRadius: "10PX" }} >
                    <div className='d-flex justify-content-center  align-items-center' style={{ background: "#F6F6F6", height: "70px" }} >
                        <h2>{"Edit Email Address"}</h2>
                    </div>
                    <ModalBody>
                        <Row className='mt-4' >
                            <Col md="7 py-2" className=' d-flex justify-content-around'>
                                <h3>sociomee@gmail.com</h3>

                            </Col>
                            <Col md="5 py-2" className=' d-flex justify-content-around'>
                                <h4 className="text-danger">Remove</h4>
                            </Col>
                            <Col md="7 py-2" className=' d-flex justify-content-around'>
                                <h3>sociomee@gmail.com</h3>

                            </Col>
                            <Col md="5 py-2" className=' d-flex justify-content-around'>
                                <h4 className="text-danger" onClick={toggleRemove}  >Remove</h4>
                            </Col>
                        </Row>
                    </ModalBody>
                    <div className='d-flex d-flex justify-content-center mb-4 '>
                        <div className='me-2'>
                            <Input
                                placeholder='sociomee@gmail.com'
                                bsSize="lg"
                            />
                        </div>
                        <div >
                            <Button color="primary" size="lg" onClick={toggleEmail}>
                                Add
                            </Button>
                        </div>
                    </div>
                </Modal>
            </>
        )
    }
    const ContactModal = () => {
        return (
            <>
                <Modal isOpen={contactInfo} toggle={toggleContact} className='modal-dialog-centered' style={{ height: "354px", width: "500px", borderRadius: "10PX" }} >
                    <div className='d-flex justify-content-center  align-items-center' style={{ background: "#F6F6F6", height: "70px" }} >
                        <h2>{"Edit Email Address"}</h2>
                    </div>
                    <ModalBody>
                        <Row className='mt-4' >
                            <Col md="7 py-2" className=' d-flex justify-content-around'>
                                <h3>9876543210</h3>
                            </Col>
                            <Col md="5 py-2" className=' d-flex justify-content-around'>
                                <h4 className="text-danger">Remove</h4>
                            </Col>
                            <Col md="7 py-2">
                                <h3>8818844881</h3>
                            </Col>
                            <Col md="5 py-2" className=' d-flex justify-content-around'>
                                <h4 className="text-danger" onClick={toggleRemove}  >Remove</h4>
                            </Col>
                        </Row>
                    </ModalBody>
                    <div className='d-flex justify-content-center mb-4'>
                        <div className='me-2'>
                            <Button color="secondary" onClick={toggleContact}>
                                cancel
                            </Button>
                        </div>
                        <div >
                            <Button color="primary" onClick={toggleContact}>
                                Add Info
                            </Button>
                        </div>
                    </div>
                </Modal>
            </>
        )
    }
    const Timemodal = () => {
        return (
            <>
                <Modal isOpen={tymInfo} toggle={toggleTym} className='modal-dialog-centered' style={{ height: "354px", width: "500px", borderRadius: "10PX" }} >
                    <div className='d-flex justify-content-center  align-items-center' style={{ background: "#F6F6F6", height: "70px" }} >
                        <h2>{"Edit Email Address"}</h2>
                    </div>
                    <ModalBody>
                        time
                    </ModalBody>
                    <div className='d-flex justify-content-center mb-4'>
                        <div className='me-2'>
                            <Button color="secondary" onClick={toggleTym}>
                                cancel
                            </Button>
                        </div>
                        <div >
                            <Button color="primary" onClick={toggleTym}>
                                Add Info
                            </Button>
                        </div>
                    </div>
                </Modal>
            </>
        )
    }
    const RemoveModal = () => {
        return (
            <>
                <Modal isOpen={remome} toggle={toggleRemove} className='modal-dialog-centered' style={{ height: "354px", width: "500px", borderRadius: "10PX" }} >
                    <div className='d-flex justify-content-center  align-items-center' style={{ background: "#F6F6F6", height: "70px" }} >
                        <h2>{"Remove Email"}</h2>
                    </div>
                    <ModalBody>
                        <div className='d-flex justify-content-center mt-4' >
                            <h3>Do you really want to remove email id? </h3>

                        </div>
                        <p className='text-center py-2'><b>sociomee@gmail.com</b></p>
                    </ModalBody>
                    <div className='d-flex justify-content-center mb-4'>
                        <div className='me-2'>
                            <Button color="secondary" outline size="lg" onClick={toggleRemove}>
                                cancel
                            </Button>
                        </div>
                        <div >
                            <Button color="primary" size="lg" onClick={toggleRemove}>
                                confirm
                            </Button>
                        </div>
                    </div>
                </Modal>
            </>

        )
    }
    // main_return_function
    return (
        <>
            <div className="container-fluid section-t-space px-0">
                <div className="page-content">
                    <div className="content-center w-100">
                        <div className="gdpost-about-blk">
                            <Row>
                                <Col md={4}>
                                    <RowFirstSideData />
                                </Col>
                                <Col md={8}>
                                    <RowSecondSideData />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
            <ModalTab />
            <ModalInfoTab />
            <EmailModal />
            <ContactModal />
            <Timemodal />
            <RemoveModal />
        </>
    )
}

export default AboutBiz