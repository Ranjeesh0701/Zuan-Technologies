import { Swiper, SwiperSlide } from "swiper/react";
import {useState, useEffect} from 'react';
import "swiper/css";
import "swiper/css/pagination"
import {Container, Row, Col} from 'reactstrap';
import Button1 from '../Buttons/button1';
import home_back from './src/images/home_back.png';

// import Swiper core and required modules
import SwiperCore, {
    Pagination,
    Autoplay
} from 'swiper';
  
// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);


const HomeSwiper1 = () => {

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
            <Swiper pagination={true} centeredSlides={true} loop={true} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
            }} className="mySwiper home-swiper-1"
            >

                <SwiperSlide className="swiperSlide6" style={{backgroundImage: (windowWidth > 992) ? `url(${home_back})`: "none"}}>
                   <Container>
                   <Row className="Slide-magic align-items-center py-lg-0 py-5 mt-5" style={{minHeight: (windowWidth > 992) ? "90vh":"auto"}}>
                        {
                            (windowWidth > 992) && (<Col lg="7"></Col>)
                        }
                        <Col lg="5" style={{textAlign:"justify"}}>
                            <p className="gray-home-header my-0">Healthcare</p>
                            <p className="big-header mb-2">Enterpreneur's Ecosystem</p>
                            <p className="normal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspend ultrices gravida.</p>
                            <Button1 text="Call to Action" />
                        </Col>
                    </Row>
                   </Container>
                </SwiperSlide>
                <SwiperSlide className="swiperSlide6" style={{backgroundImage: (windowWidth > 992) ? `url(${home_back})`: "none"}}>
                   <Container>
                   <Row className="Slide-magic align-items-center py-lg-0 py-5 mt-5" style={{minHeight: (windowWidth > 992) ? "90vh":"auto"}}>
                        {
                            (windowWidth > 992) && (<Col lg="7"></Col>)
                        }
                        <Col lg="5" style={{textAlign:"justify"}}>
                            <p className="gray-home-header my-0">Healthcare</p>
                            <p className="big-header mb-2">Enterpreneur's Ecosystem</p>
                            <p className="normal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspend ultrices gravida.</p>
                            <Button1 text="Call to Action" />
                        </Col>
                    </Row>
                   </Container>
                </SwiperSlide>
                <SwiperSlide className="swiperSlide6" style={{backgroundImage: (windowWidth > 992) ? `url(${home_back})`: "none"}}>
                   <Container>
                   <Row className="Slide-magic align-items-center py-lg-0 py-5 mt-5" style={{minHeight: (windowWidth > 992) ? "90vh":"auto"}} >
                        {
                            (windowWidth > 992) && (<Col lg="7"></Col>)
                        }
                        <Col lg="5" style={{textAlign:"justify"}}>
                            <p className="gray-home-header my-0">Healthcare</p>
                            <p className="big-header mb-2">Enterpreneur's Ecosystem</p>
                            <p className="normal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspend ultrices gravida.</p>
                            <Button1 text="Call to Action" />
                        </Col>
                    </Row>
                   </Container>
                </SwiperSlide>
                
            </Swiper>
        </>
    )
}

export default HomeSwiper1;