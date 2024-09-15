import { Rating, Stack } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Circle from '../../biz-components/Img/x-circle.png'

const CreateBizCard = () => {
    const AvatarProfile = [
        {
            img: "assets/images/story-2.jpg"

        },
        {
            img: "assets/images/story-3.jpg"

        },
        {
            img: "assets/images/story-4.jpg"

        },
        {
            img: "assets/images/story-3.jpg"
        },
        {
            img: "assets/images/story-4.jpg"

        }
    ]
    return (
        <>
            <div className="group-slide-box">
                <div className="gallery-img-sublink">                   
                    <img src={Circle} />
                </div>
                <NavLink to="/BizDetail" className="bizpagelink-blk"><img src="assets/images/group-img-1.jpg" className="img-fluid group-img" /><div className="group-adminprofile-blk"><img src="assets/images/post-6.jpg" /></div></NavLink>
                <div className="group-content">
                    <h4 className='CardTextHeading'>Traditional Wedding </h4>
                    <h5>Music Equipment</h5>
                    <div className='d-flex justify-content-center'>
                        <Stack spacing={1}>
                            <Rating name="read-only" defaultValue={2.5} readOnly />
                        </Stack>
                    </div>                 
                    <div className="people-likes matual-friend-sec">
                        <ul className="matual-friend-blk">
                            {
                                AvatarProfile.map((e) => (
                                    <li className="popover-cls" data-bs-toggle="popover" data-placement="right"
                                        data-name="sufiya eliza" data-img={e.img}>
                                        <img src={e.img} className="img-fluid bg-img" alt="" />
                                    </li>
                                ))
                            }
                        </ul>
                        <h6>+79k Followers</h6>
                    </div>
                    <div className="group-buttons-blk">                      
                        <a href="#" className="group-btn">Follow</a>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateBizCard