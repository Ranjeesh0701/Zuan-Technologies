import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import {Row, Col} from 'reactstrap';
import "swiper/css/navigation";

import SwiperCore, {
    Navigation
} from 'swiper';

SwiperCore.use([Navigation]);
  

const HomeSwiper2 = () => {
    return (
            <Swiper watchSlidesProgress={true} pagination={false} spaceBetween={25}
                navigation={true}
                breakpoints={{
                    1300: {
                        slidesPerView: 4.6,
                    },
                    1200: {
                        slidesPerView: 3.6  ,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    700: {
                        slidesPerView: 2,
                    },
                    600: {
                        slidesPerView: 1.6
                    },
                    500: {
                        slidesPerView: 1.3
                    },
                    0: {
                        slidesPerView: 1,
                    }
                }}
            className="mySwiper pt-lg-4 px-4 py-3">
                <SwiperSlide className="swiperSlide7">
                   <Row className="home-slide-2-magic align-items-center pb-3 pt-5 px-2">
                        <Col>
                            <Row>
                                <p className="home-category">EDUCATION</p>
                            </Row> 
                            <Row  style={{justifyContent:"space-around"}}>
                                <Col xs="auto"><p className="types_of_Home_category mb-0 mt-4 my-0">24 Categories</p></Col>
                                <Col xs="auto"><p className="types_of_Home_category mb-0 mt-4 my-0">24K Doctors</p></Col>
                                <Col xs="auto"><p className="types_of_Home_category mb-0 mt-4 my-0">240 Tutorials</p></Col>
                            </Row>                     
                        </Col>
                    </Row>
                </SwiperSlide> 

                <SwiperSlide className="swiperSlide7">
                   <Row className="home-slide-2-magic align-items-center pb-3 pt-5 px-2">
                        <Col>
                            <Row>
                                <p className="home-category">Mentorship</p>
                            </Row> 
                            <Row  style={{justifyContent:"space-around"}}>
                                <Col xs="auto"><p className="types_of_Home_category mb-0 mt-4 my-0">75 experts</p></Col>
                                <Col xs="auto"><p className="types_of_Home_category mb-0 mt-4 my-0">15K Senior Doctors</p></Col>
                            </Row>                      
                        </Col>
                    </Row>
                </SwiperSlide> 

                <SwiperSlide className="swiperSlide7">
                   <Row className="home-slide-2-magic align-items-center pb-3 pt-5 px-2">
                        <Col>
                            <Row>
                                <p className="home-category">Doc Shop</p>
                            </Row> 
                            <Row  style={{justifyContent:"space-around"}}>
                                <Col xs="auto"><p className="types_of_Home_category mb-0 mt-4 my-0">24 Categories</p></Col>
                                <Col xs="auto"><p className="types_of_Home_category mb-0 mt-4 my-0">65 products</p></Col>
                                <Col xs="auto"><p className="types_of_Home_category mb-0 mt-4 my-0">15 services</p></Col>
                            </Row>                      
                        </Col>
                    </Row>
                </SwiperSlide> 

                <SwiperSlide className="swiperSlide7">
                   <Row className="home-slide-2-magic align-items-center pb-3 pt-5 px-2">
                        <Col>
                            <Row>

                            </Row>
                            <Row>
                                <p className="home-category">My Docket</p>
                            </Row> 
                            <Row  style={{justifyContent:"space-around"}}>
                                <Col xs="auto"><p className="types_of_Home_category mb-0 mt-4 my-0">Subscriptions</p></Col>
                                <Col xs="auto"><p className="types_of_Home_category mb-0 mt-4 my-0">Goals</p></Col>
                                <Col xs="auto"><p className="types_of_Home_category mb-0 mt-4 my-0">Achievements</p></Col>
                            </Row>                       
                        </Col>
                    </Row>
                </SwiperSlide> 


                <SwiperSlide className="swiperSlide7">
                   <Row className="home-slide-2-magic align-items-center pb-3 pt-5 px-2">
                        <Col>
                            <Row>

                            </Row>
                            <Row>
                                <p className="home-category">Community</p>
                            </Row> 
                            <Row  style={{justifyContent:"space-around"}}>
                                <Col xs="auto"><p className="types_of_Home_category mb-0 mt-4 my-0">12 regional</p></Col>
                                <Col xs="auto"><p className="types_of_Home_category mb-0 mt-4 my-0">6 National</p></Col>
                                <Col xs="auto"><p className="types_of_Home_category mb-0 mt-4 my-0">2 International</p></Col>
                            </Row>                       
                        </Col>
                    </Row>
                </SwiperSlide> 

                <SwiperSlide className="swiperSlide7">  
                   <Row className="home-slide-2-magic align-items-center pb-3 pt-5 px-2">
                        <Col>
                            <Row>

                            </Row>
                            <Row>
                                <p className="home-category">Upcoming Events</p>
                            </Row> 
                            <Row  style={{justifyContent:"space-around"}}>
                            <Col xs="auto"><p className="types_of_Home_category mb-0 mt-4 my-0">4 regional</p></Col>
                                <Col xs="auto"><p className="types_of_Home_category mb-0 mt-4 my-0">2 National</p></Col>
                                <Col xs="auto"><p className="types_of_Home_category mb-0 mt-4 my-0">1 International</p></Col>
                            </Row>                       
                        </Col>
                    </Row>
                </SwiperSlide> 

            </Swiper>
    )
}

export default HomeSwiper2;