import React from 'react'
import Slider from 'react-slick';
import Post1 from '../../biz-components/Img/Post1.png'
import Post2 from '../../biz-components/Img/Post2.png'
import SlideImg from '../../biz-components/Img/slideImg.png'
import Post from '../../biz-components/Img/Post.png'

const ReactSlick = () => {
    var bizSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };
    const SliderBox = (props) => {
        return (
            <>
                <div>
                    <div className="group-slide-box ">
                        <img src={props.img} alt="sliderImg" width="160px" height="160px" />
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="container-fluid section-t-space px-0">
                <div className="group-main-block">
                    <div className="group-custom-block">
                        <Slider {...bizSettings} className="default-space">
                            <SliderBox img={SlideImg} />
                            <SliderBox img={Post1} />
                            <SliderBox img={Post2} />
                            <SliderBox img={Post} />
                            <SliderBox img={SlideImg} />
                            <SliderBox img={Post2} />
                            <SliderBox img={Post} />

                        </Slider>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ReactSlick