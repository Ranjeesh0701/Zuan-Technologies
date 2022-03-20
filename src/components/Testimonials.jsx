import { Swiper, SwiperSlide } from "swiper/react";
import {Container, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import "swiper/css";
import "swiper/css/pagination"


const Testimonials = () => {
    return (
        <div className="student-testimonials">
            <Container className="pb-lg-5 pt-lg-1 pb-4">
                <Row style={{alignItems:"center", justifyContent:"center"}}>
                    <Col>
                       <Row>
                        <p className="big-header" style={{color:"#000"}}>Student Testimonials</p>
                       </Row>
                    </Col>
                </Row>
                <Row>
               <Row className="justify-content-center mx-auto">
               <Swiper watchSlidesProgress={true} spaceBetween={50} pagination={false} 
                    breakpoints={{
                        1200: {
                            slidesPerView: 3,
                        },
                        800: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1
                        }
                    }}
                    className="mySwiper pt-lg-4 px-3"
                >
                    <SwiperSlide className="swiperSlide4">
                        <Row className="student-testimonial-card">
                        <Col className="the-card">
                            <Row>
                                <Col>
                                    <p className='testimony'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quibusdam ipsum vitae? Quo atque quasi fugit exercitationem !</p>
                                    <p className='courseName my-0'>Course name</p>
                                    <Row style={{paddingLeft:"11px"}}>
                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                    <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                    <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} size='sm' className='unCompleted-star' /></Col>
                                    </Row>
                                    <Row className='align-items-center pt-4'>
                                        <Col xs="auto">
                                            <div className="circle-pic"></div>
                                        </Col>
                                        <Col xs="auto"><p className="name my-0"><span>Name </span><span>Surname</span></p></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>  
                    </Row>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide4">
                        <Row className="student-testimonial-card">
                        <Col className="the-card">
                            <Row>
                                <Col>
                                    <p className='testimony'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quibusdam ipsum vitae? Quo atque quasi fugit exercitationem !</p>
                                    <p className='courseName my-0'>Course name</p>
                                    <Row style={{paddingLeft:"11px"}}>
                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                    <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                    <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} size='sm' className='unCompleted-star' /></Col>
                                    </Row>
                                    <Row className='align-items-center pt-4'>
                                        <Col xs="auto">
                                            <div className="circle-pic">
                                                {/* <img src="" alt="" /> */}
                                            </div>
                                        </Col>
                                        <Col xs="auto"><p className="name my-0"><span>Name </span><span>Surname</span></p></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>  
                    </Row>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide4">
                        <Row className="student-testimonial-card">
                        <Col className="the-card">
                            <Row>
                                <Col>
                                    <p className='testimony'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quibusdam ipsum vitae? Quo atque quasi fugit exercitationem !</p>
                                    <p className='courseName my-0'>Course name</p>
                                    <Row style={{paddingLeft:"11px"}}>
                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                    <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                    <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} size='sm' className='unCompleted-star' /></Col>
                                    </Row>
                                    <Row className='align-items-center pt-4'>
                                        <Col xs="auto">
                                            <div className="circle-pic"></div>
                                        </Col>
                                        <Col xs="auto"><p className="name my-0"><span>Name </span><span>Surname</span></p></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>  
                    </Row>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide4">
                        <Row className="student-testimonial-card">
                        <Col className="the-card">
                            <Row>
                                <Col>
                                    <p className='testimony'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quibusdam ipsum vitae? Quo atque quasi fugit exercitationem !</p>
                                    <p className='courseName my-0'>Course name</p>
                                    <Row style={{paddingLeft:"11px"}}>
                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                    <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                    <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} size='sm' className='completed-star' /></Col>
                                    <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} size='sm' className='unCompleted-star' /></Col>
                                    </Row>
                                    <Row className='align-items-center pt-4'>
                                        <Col xs="auto">
                                            <div className="circle-pic"></div>
                                        </Col>
                                        <Col xs="auto"><p className="name my-0"><span>Name </span><span>Surname</span></p></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>  
                    </Row>
                    </SwiperSlide>
                </Swiper>
               </Row>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonials;