import {Container, Row, Col} from 'reactstrap';
import Button1 from './Buttons/button1';
import Button2 from './Buttons/button2';
import Button3 from './Buttons/button3';
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faStar } from '@fortawesome/free-solid-svg-icons'
import coursepic from '../images/aestheticshot1.png';
import {useState, useEffect} from 'react';

import "swiper/css";
import "swiper/css/pagination"

const YourCourses = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const getWindowWidth = () => {
        const width = window.innerWidth;
        return width;
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(getWindowWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })


    return (
        <>
            <Container className="pt-5 pt-lg-5 pb-5">
                <Row style={{alignItems:"center"}}>
                    <Col lg="5">
                       <Row>
                       <p className="big-header my-0">Your Courses</p>
                        <p className="normal-text" style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde exercitationem neque temporibus, ipsam dolor iste? Aperiam minima provident fugiat, unde nostrum!</p>
                       </Row>
                        <Row>
                            <Col lg="auto" className='text-center text-lg-start pt-lg-0 pt-2'>
                            <Button1 text="Add New" />                                
                            </Col>
                            <Col lg="auto" className='text-center text-lg-start pt-lg-0 pt-2'>
                                <Button2 text="View All" />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="5" className='ms-auto pt-lg-5 pt-4'>
                        <Row className='align-items-center text-center'>
                            <Col lg="6" className="normal-text"><p className='category-text pb-lg-0 pb-2'>CATEGORY NAME 1</p></Col>
                            <Col lg="6" className='text-lg-end'>    
                                {
                                    (windowWidth > 992) ? (
                                        <Button2 text="Check Status 1" />
                                    )
                                    :
                                    (
                                        <Button3 text="Check Status 1" />
                                    )
                                }
                                
                            </Col>
                        </Row>
                        <Row className='align-items-center pt-lg-2 pt-4 text-center'>
                            <Col lg="6" className="normal-text"><p className='category-text pb-lg-0 pb-2'>CATEGORY NAME 2</p></Col>
                            <Col lg="6" className='text-lg-end'>
                                {
                                    (windowWidth > 992) ? (
                                        <Button2 text="Check Status 2" />
                                    )
                                    :
                                    (
                                        <Button3 text="Check Status 2" />
                                    )
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="pt-5 px-2 pb-4">
                <Swiper watchSlidesProgress={true} spaceBetween={10} pagination={false} 
                    breakpoints={{
                        1300: {
                            slidesPerView: 4.3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        520: {
                            slidesPerView: 2,
                        },
                        400: {
                            slidesPerView: 1.5,
                        },
                        380: {
                            slidesPerView: 1.4,
                        },
                        340: {
                            slidesPerView: 1.2,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    }}
                className="mySwiper">
                    <SwiperSlide className="swiperSlide-1">
                            <Row className="yourCourse">
                                <Col className="your-courses">
                                    <Row className="your-courses-top align-items-end pb-2 px-lg-2 px-sm-0 px-md-2 px-xl-2 px-xxl-2" 
                                        style={{height:"200px", backgroundImage:`url(${coursepic})`}}
                                    >
                                        <Col lg="auto" xs="auto"><FontAwesomeIcon icon={faCalendar} style={{color:"#fff"}} /></Col>
                                        <Col lg="auto" xs="auto" className='pb-1'><p className='course-date mb-0'>Fri Nov 06</p></Col>
                                        <Col lg="auto" xs="auto" className='pb-1'><p className='course-timing mb-0'>8:00 AM - 5:00 PM</p></Col>
                                    </Row>
                                    <Row className="your-courses-bottom pb-5">
                                        <div className='details' style={{paddingBottom:"20px"}}>
                                            <p className='title'>Master Class on Dental Photography</p>
                                            <p className='category'>Oral Surgery</p>
                                            <p className='course-completion'>Course Completion</p>
                                            <div className='range pt-0'>
                                            <div className='outer-range'>
                                                <div className='inner-range not-completed'></div>
                                            </div>
                                        </div>
                                        </div>
                                    </Row>  
                                </Col>  
                            </Row>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide-1 coursecompleted">
                            <Row className="yourCourse">
                                <Col className="your-courses">
                                    <Row className="your-courses-top align-items-end pb-2 px-lg-2 px-sm-0 px-md-2 px-xl-2 px-xxl-2" style={{height:"200px",  backgroundImage:`url(${coursepic})`}}>
                                        <Col lg="auto" xs="auto"><FontAwesomeIcon icon={faCalendar} style={{color:"#fff"}} /></Col>
                                        <Col lg="auto" xs="auto" className='pb-1'><p className='course-date mb-0'>Fri Nov 06</p></Col>
                                        <Col lg="auto" xs="auto" className='pb-1'><p className='course-timing mb-0'>8:00 AM - 5:00 PM</p></Col>
                                    </Row>
                                    <Row className="your-courses-bottom" >
                                        <div className='details'>
                                            <p className='title'>Master Class on Dental Photography</p>
                                            <p className='category'>Oral Surgery</p>
                                            <p className='course-completion'>Course Completion</p>
                                            <div className='range pt-0'>
                                            <div className='outer-range'>
                                                <div className='inner-range  completed'></div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className='rating'>
                                            <Row className='px-2 pt-4 align-items-center pb-3' style={{justifyContent:"space-between"}}>
                                                <Col xs="auto"><p className='rating-text my-0'>You Rated:</p></Col>
                                                <Col xs="auto">     
                                                <Row>
                                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                                    <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} size='sm' className='unCompleted-star' /></Col>
                                                    <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} size='sm' className='unCompleted-star' /></Col>
                                                </Row>                                        
                                                </Col>
                                            </Row>
                                        </div>
                                    </Row>  
                                </Col>  
                            </Row>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide-1">
                            <Row className="yourCourse">
                                <Col className="your-courses">
                                    <Row className="your-courses-top align-items-end pb-2 px-lg-2 px-sm-0 px-md-2 px-xl-2 px-xxl-2" style={{height:"200px", backgroundImage:`url(${coursepic})`}}>
                                        <Col lg="auto" xs="auto"><FontAwesomeIcon icon={faCalendar} style={{color:"#fff"}} /></Col>
                                        <Col lg="auto" xs="auto" className='pb-1'><p className='course-date mb-0'>Fri Nov 06</p></Col>
                                        <Col lg="auto" xs="auto" className='pb-1'><p className='course-timing mb-0'>8:00 AM - 5:00 PM</p></Col>
                                    </Row>
                                    <Row className="your-courses-bottom pb-5">
                                        <div className='details' style={{paddingBottom:"20px"}}>
                                            <p className='title'>Master Class on Dental Photography</p>
                                            <p className='category'>Oral Surgery</p>
                                            <p className='course-completion'>Course Completion</p>
                                            <div className='range pt-0'>
                                            <div className='outer-range'>
                                                <div className='inner-range not-completed'></div>
                                            </div>
                                        </div>
                                        </div>
                                    </Row>  
                                </Col>  
                            </Row>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide-1 coursecompleted">
                            <Row className="yourCourse">
                                <Col className="your-courses">
                                    <Row className="your-courses-top align-items-end pb-2 px-lg-2 px-sm-0 px-md-2 px-xl-2 px-xxl-2" style={{height:"200px"}}>
                                        <Col lg="auto" xs="auto"><FontAwesomeIcon icon={faCalendar} style={{color:"#fff"}} /></Col>
                                        <Col lg="auto" xs="auto" className='pb-1'><p className='course-date mb-0'>Fri Nov 06</p></Col>
                                        <Col lg="auto" xs="auto" className='pb-1'><p className='course-timing mb-0'>8:00 AM - 5:00 PM</p></Col>
                                    </Row>
                                    <Row className="your-courses-bottom" >
                                        <div className='details'>
                                            <p className='title'>Master Class on Dental Photography</p>
                                            <p className='category'>Oral Surgery</p>
                                            <p className='course-completion'>Course Completion</p>
                                            <div className='range pt-0'>
                                            <div className='outer-range'>
                                                <div className='inner-range completed'></div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className='rating'>
                                            <Row className='px-2 pt-4 align-items-center pb-3' style={{justifyContent:"space-between"}}>
                                                <Col xs="auto"><p className='rating-text my-0'>You Rated:</p></Col>
                                                <Col xs="auto">     
                                                <Row>
                                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                                    <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} size='sm' className='unCompleted-star' /></Col>
                                                    <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} size='sm' className='unCompleted-star' /></Col>
                                                </Row>                                        
                                                </Col>
                                            </Row>
                                        </div>
                                    </Row>  
                                </Col>  
                            </Row>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide-1">
                            <Row className="yourCourse">
                                <Col className="your-courses">
                                    <Row className="your-courses-top align-items-end pb-2 px-lg-2 px-sm-0 px-md-2 px-xl-2 px-xxl-2" style={{height:"200px"}}>
                                        <Col lg="auto" xs="auto"><FontAwesomeIcon icon={faCalendar} style={{color:"#fff"}} /></Col>
                                        <Col lg="auto" xs="auto" className='pb-1'><p className='course-date mb-0'>Fri Nov 06</p></Col>
                                        <Col lg="auto" xs="auto" className='pb-1'><p className='course-timing mb-0'>8:00 AM - 5:00 PM</p></Col>
                                    </Row>
                                    <Row className="your-courses-bottom pb-5">
                                        <div className='details' style={{paddingBottom:"20px"}}>
                                            <p className='title'>Master Class on Dental Photography</p>
                                            <p className='category'>Oral Surgery</p>
                                            <p className='course-completion'>Course Completion</p>
                                            <div className='range pt-0'>
                                            <div className='outer-range'>
                                                <div className='inner-range not-completed'></div>
                                            </div>
                                        </div>
                                        </div>
                                    </Row>  
                                </Col>  
                            </Row>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide-1 coursecompleted">
                            <Row className="yourCourse">
                                <Col className="your-courses">
                                    <Row className="your-courses-top align-items-end pb-2 px-lg-2 px-sm-0 px-md-2 px-xl-2 px-xxl-2" style={{height:"200px"}}>
                                        <Col lg="auto" xs="auto"><FontAwesomeIcon icon={faCalendar} style={{color:"#fff"}} /></Col>
                                        <Col lg="auto" xs="auto" className='pb-1'><p className='course-date mb-0'>Fri Nov 06</p></Col>
                                        <Col lg="auto" xs="auto" className='pb-1'><p className='course-timing mb-0'>8:00 AM - 5:00 PM</p></Col>
                                    </Row>
                                    <Row className="your-courses-bottom" >
                                        <div className='details'>
                                            <p className='title'>Master Class on Dental Photography</p>
                                            <p className='category'>Oral Surgery</p>
                                            <p className='course-completion'>Course Completion</p>
                                            <div className='range pt-0'>
                                            <div className='outer-range'>
                                                <div className='inner-range completed'></div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className='rating'>
                                            <Row className='px-2 pt-4 align-items-center pb-3' style={{justifyContent:"space-between"}}>
                                                <Col xs="auto"><p className='rating-text my-0'>You Rated:</p></Col>
                                                <Col xs="auto">     
                                                <Row>
                                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                                    <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} size='sm' className='unCompleted-star' /></Col>
                                                    <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} size='sm' className='unCompleted-star' /></Col>
                                                </Row>                                        
                                                </Col>
                                            </Row>
                                        </div>
                                    </Row>  
                                </Col>  
                            </Row>
                    </SwiperSlide>

                </Swiper>
                </Row>
            </Container>
        </>
    )
}

export default YourCourses;