import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from 'reactstrap';
import Button3 from './Buttons/button3';

import "swiper/css";
import "swiper/css/pagination"


const DarkThemeBanner = () => {
    return (
        <div className="dark-banner">
            <Container className="py-5">
                <Row>
                    <Col>
                        <Row style={{ alignItems: "center" }}>
                            <Col>
                                <Row>
                                    <p className="big-header" style={{ color: "#fff" }}>Browse By Categories</p>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Row className="mx-auto">
                                <Swiper watchSlidesProgress={true} spaceBetween={25} pagination={false}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        576: {
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 3,
                                        },
                                        1200: {
                                            slidesPerView: 3.8,
                                        }
                                    }}
                                    className="mySwiper pt-lg-4  px-lg-0 px-md-0 px-sm-0">
                                    <SwiperSlide className="swiperSlide2">
                                        <Row className="select-by-category">
                                            <Col className="the-category">
                                                <Row>
                                                    <Col>
                                                        <p className='categoryName'>Oral Implantology</p>
                                                        <p className='avaiableCourses'>8 courses</p>
                                                        <Button3 text="Explore" />
                                                    </Col>
                                                    <Col>

                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiperSlide2">
                                        <Row className="select-by-category">
                                            <Col className="the-category">
                                                <Row>
                                                    <Col>
                                                        <p className='categoryName'>Oral Implantology</p>
                                                        <p className='avaiableCourses'>8 courses</p>
                                                        <Button3 text="Explore" />
                                                    </Col>
                                                    <Col>

                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiperSlide2">
                                        <Row className="select-by-category">
                                            <Col className="the-category">
                                                <Row>
                                                    <Col>
                                                        <p className='categoryName'>Oral Implantology</p>
                                                        <p className='avaiableCourses'>8 courses</p>
                                                        <Button3 text="Explore" />
                                                    </Col>
                                                    <Col>

                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiperSlide2">
                                        <Row className="select-by-category">
                                            <Col className="the-category">
                                                <Row>
                                                    <Col>
                                                        <p className='categoryName'>Oral Implantology</p>
                                                        <p className='avaiableCourses'>8 courses</p>
                                                        <Button3 text="Explore" />
                                                    </Col>
                                                    <Col>

                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiperSlide2">
                                        <Row className="select-by-category">
                                            <Col className="the-category">
                                                <Row>
                                                    <Col>
                                                        <p className='categoryName'>Oral Implantology</p>
                                                        <p className='avaiableCourses'>8 courses</p>
                                                        <Button3 text="Explore" />
                                                    </Col>
                                                    <Col>

                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiperSlide2">
                                        <Row className="select-by-category">
                                            <Col className="the-category">
                                                <Row>
                                                    <Col>
                                                        <p className='categoryName'>Oral Implantology</p>
                                                        <p className='avaiableCourses'>8 courses</p>
                                                        <Button3 text="Explore" />
                                                    </Col>
                                                    <Col>

                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </SwiperSlide>

                                </Swiper>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DarkThemeBanner;