import { Rating, Stack } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
import { CardTitle, Col, Row, Progress } from 'reactstrap'
import Review from '../../biz-components/Img/ReviewImg.png'

const LatestReviews = () => {
    var bizSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    const SliderDataReview = () => {
        return (
            <>
                <Row>
                    <Col sm="10">
                        <div className='ReviewColSection'>
                            <div className='ReviewImgSection p-1'>
                                <img src={Review} alt="img" className='img-fluid' />
                            </div>
                            <div className='ml-2 '>
                                <small ><b>We’re here to put an end to that. By asking specific, targeted questions in employee evaluations, managers can really dive into individual performance, employee motivations, and goals.</b></small>
                                <h3>
                                    <Stack spacing={1}>
                                        <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
                                    </Stack>
                                </h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
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
    const ReviewDataStatus = () => {
        return (
            <>
                <div >
                    {/* <CardTitle>
                        <h3>Your BizPage Rating</h3>
                    </CardTitle> */}
                    <div className="review-content ">
                        <Row>
                            {/* <Col sm="12">
                                <h2>4.9</h2>
                            </Col>
                            <Col sm="6" className='mt-3 d-flex align-items-center  '>
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </Stack>
                            </Col>
                            <Col sm="6" className='mt-  d-flex justify-content-end align-items-center  '>
                                (31)
                            </Col> */}
                            <Col sm="12">
                                <h3 className='mt-3 mb-3'><b>Your Reviews Summary</b></h3>
                            </Col>
                            <Col sm="8">
                                <div className="review-part my-1 ">

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
                            </Col>
                            <Col sm="4" >
                                <div className='align-items-center'>
                                    <h2 className='text-center'>4.9</h2>
                                    <Stack spacing={1} >
                                        <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
                                    </Stack>
                                    <h4 className='text-center'>(31)</h4>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </div>
            </>
        )
    }

    // main_function
    return (
        <>
            <div className='create-post'>
                <CardTitle>
                    <div className='ReviewsHeading'>
                        <h3 >Latest Reviews</h3>
                    </div>
                </CardTitle>
                <div className="container-fluid section-t-space px-0">
                    <div className="group-main-block">
                        <div className="group-custom-block">
                            <Slider {...bizSettings} className="default-space">
                                <SliderDataReview />
                                <SliderDataReview />
                                <SliderDataReview />
                                <SliderDataReview />
                                <SliderDataReview />
                            </Slider>
                        </div>
                    </div>
                </div>
                <ReviewDataStatus />
            </div>
        </>
    )
}

export default LatestReviews