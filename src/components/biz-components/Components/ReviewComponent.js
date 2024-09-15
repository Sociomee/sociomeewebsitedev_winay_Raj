import React from 'react'
import Headers from '../../Header'
import LeftSidebar from '../../LeftSidebar'
import RightSidebar from '../../RightSidebar'
import BizTopBanne from '../../biz-components/BizTopBanner'
import BizDetailMenu from '../../biz-components/BizDetailMenu'
import { Card, CardBody, CardTitle, Col, Input, Progress, Row } from 'reactstrap'
import { Rating, Stack } from '@mui/material'
import RevImg from '../Img/review.png'
import RevImg1 from '../Img/picture.png'
import { useState } from 'react'
const ReviewComponent = () => {

    const RatingData = [
        {
            headingName: "5",
            Progress: <Progress striped className='progress-bar-warning' value={85} />
        },
        {
            headingName: "4",
            Progress: <Progress striped className='progress-bar-warning' value={65} />
        },
        {
            headingName: "3",
            Progress: <Progress striped className='progress-bar-warning' value={55} />
        },
        {
            headingName: "2",
            Progress: <Progress striped className='progress-bar-warning' value={45} />
        },
        {
            headingName: "1",
            Progress: <Progress striped className='progress-bar-warning' value={25} />
        }
    ]

    const RowFirstSideData = () => {
        return (
            <>
                <div className="review-counter section-b-space">
                    <CardTitle>
                        <h3>Your BizPage Rating</h3>
                    </CardTitle>
                    <div className="review-content ">
                        <Row>
                            <Col sm="12">
                                <h2>4.9</h2>
                            </Col>
                            <Col sm="6" className='mt-3 d-flex align-items-center  '>
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </Stack>
                            </Col>
                            <Col sm="6" className='mt-  d-flex justify-content-end align-items-center  '>
                                (31)
                            </Col>
                            <Col sm="12">
                                <h3 className='mt-3 mb-3'><b>Your Reviews Summary</b></h3>
                            </Col>
                            <div className="review-part my-1 me-1">

                                {
                                    RatingData.map((e) => (
                                        <ul className='my-2'>
                                            <li>
                                                <h5>{e.headingName}</h5>
                                                <div className='progress'>
                                                    {e.Progress}
                                                </div>
                                            </li>
                                        </ul>

                                    ))
                                }
                            </div>
                        </Row>
                    </div>

                </div>
            </>
        )
    }
    const SecoundRowData = () => {
        return (
            <>
                <div className='review-counter section-b-space'>
                    <CardTitle>
                        <h3>Public Reviews</h3>
                    </CardTitle>
                    {/* <hr /> */}
                    <ReviewsDataInfo
                        src={RevImg}
                        name="Wade Warren"
                        paragraph=" We’re here to put an end to that. By asking specific, targeted questions in employee evaluations, managers can really dive into individual performance, employee motivations, and goals. This added level of depth shows employees their development is valued and gives managers ways to help employees grow.We’re here to put an end to that. By asking specific, targeted questions in employee evaluations, managers can really dive into individual performance, employee motivations, and goals. This added level of depth shows employees their
                        development is valued and gives managers ways to help employees grow."
                    />
                    <ReviewsDataInfo
                        src={RevImg1}
                        name="Marvin McKinney"
                        paragraph=" We’re here to put an end to that. By asking specific, targeted questions in employee evaluations, managers can really dive into individual performance, employee motivations, and goals. This added level of depth shows employees their development is valued and gives managers ways to help employees grow.We’re here to put an end to that. By asking specific, targeted questions in employee evaluations, managers can really dive into individual performance, employee motivations, and goals. This added level of depth shows employees their
                        development is valued and gives managers ways to help employees grow."
                    />
                </div>
            </>
        )
    }
    const ReviewsDataInfo = (props) => {
        return (
            <>
                <Row className='mt-2 d-flex Rowdata '>
                    <Col sm="6"  >
                        <div className='align-items-start d-flex'>
                            <div className='align-items-start ml-2'>
                                <span><img src={props.src} width='40px' height='40px' /></span>
                            </div>
                            <div className='ml-2'>
                                <p className='ProfileName'>{props.name}</p>
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </Stack>

                            </div>
                        </div>
                    </Col>
                    <Col sm="11" className='offset-sm-1 '>
                        <p className='mr-1 reviewsData' >
                            {props.paragraph}
                        </p>
                    </Col>
                    <Col sm="11  mb-3" className='offset-sm-1'>
                        <div className='replydata mt-2'>
                            <p className='me-5'>Reply</p>
                            <p >Report</p>
                        </div>
                    </Col>
                </Row>
            </>
        )
    }

    // main function
    return (
        <>
            <Headers />
            <div className="page-body container-fluid profile-page">
                <LeftSidebar />
                <div className="page-center">
                    <BizTopBanne />
                    <BizDetailMenu />
                    <div className="container-fluid section-t-space px-0">
                        <div className="page-content">
                            <div className="content-center w-100">
                                <div className="gdpost-about-blk">
                                    <Row>
                                        <Col md={4}>
                                            <RowFirstSideData />
                                        </Col>
                                        <Col md={8}>
                                            <SecoundRowData />
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RightSidebar />
            </div>


        </>
    )
}

export default ReviewComponent