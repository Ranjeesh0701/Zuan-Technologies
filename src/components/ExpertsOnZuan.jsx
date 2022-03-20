import {Container, Row, Col} from 'reactstrap';
import Button1 from './Buttons/button1';
import Button2 from './Buttons/button2';
import Button3 from './Buttons/button3';
import { Swiper, SwiperSlide } from "swiper/react";
// import expert from '../images/expert.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import tooth from '../images/tooth.png';
import teeth2 from '../images/teeth2.png';
import handshake from '../images/handshake.png';
import { useState, useEffect } from 'react';

import "swiper/css";
import "swiper/css/pagination"

const ExpertsOnZuan = () => {
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
            <Container className="pt-lg-4 pb-lg-5 py-5">
                <Row style={{alignItems:"center"}}>
                    <Col lg="5">
                       <Row>
                       <p className="big-header my-0">Experts only on Zuan</p>
                        <p className="normal-text" style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde exercitationem neque temporibus, ipsam dolor iste? Aperiam minima provident fugiat, unde nostrum!</p>
                       </Row>
                        <Row>
                            <Col lg="auto"  className='text-center text-lg-start pt-lg-0 pt-2'>
                                <Button1 text="View All" />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="5" className='ms-auto pt-lg-5 pt-4'>
                        <Row className='align-items-center text-center'>
                            <Col lg="6" className="normal-text"><p className='category-text my-0 pb-2'>EXPERT NAME</p></Col>
                            <Col lg="6" className='text-lg-end'>    
                            {
                                    (windowWidth > 992) ? (
                                        <Button2 text="Enroll Now" />
                                    )
                                    :
                                    (
                                        <Button3 text="Enroll Now" />
                                    )
                                }
                            </Col>
                        </Row>
                        <Row className='align-items-center pt-lg-2 pt-4 text-center'>
                            <Col lg="6" className="normal-text"><p className='category-text my-0 pb-2'>EXPERT NAME</p></Col>
                            <Col lg="6" className='text-lg-end'>
                                {
                                    (windowWidth > 992) ? (
                                        <Button2 text="Enroll Now" />
                                    )
                                    :
                                    (
                                        <Button3 text="Enroll Now" />
                                    )
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="pt-5 pb-4">
                <Swiper watchSlidesProgress={true} spaceBetween={10} pagination={false}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        769: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5.3,
                        }
                    }}
                className="mySwiper">
                    <SwiperSlide className="swiperSlide-5">
                        <Row className="Experts">
                            <Col className="experts-section">
                                <Row className="experts-section-top align-items-center mx-auto" style={{height:"200px"}}> 
                                </Row>
                                <Row className="experts-section-bottom pt-5 px-3" style={{minHeight:"200px"}}>
                                    <Col xs="12">
                                        <Row>
                                            <div className='details'>
                                                <p className='name mt-0 mb-1'>Dr. Ratnadeep Patil</p>
                                                <p className='qualification mt-0 mb-1'>Qualification and Expertise</p>
                                                <p className='designationLocation my-0'>Designation, Hospital. City. Country</p>
                                            </div> 
                                        </Row>
                                    </Col>
                                    <Col xs="12">
                                    <Row className='icons align-items-center py-3' style={{justifyContent:"space-between"}}>
                                        <Col xs="auto">
                                            <Row>
                                                <Col>
                                                    <img src={tooth} alt="" />
                                                </Col>
                                                <Col>
                                                    <img src={handshake} alt="" />
                                                </Col>
                                                <Col>
                                                    <img src={teeth2} alt="" />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    </Col>   
                                    <Col xs="12">
                                    <Row className='align-items-center' style={{justifyContent:"space-between", paddingLeft:"13px"}}>
                                    <Col xs="auto">     
                                    <Row>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} className='unCompleted-star' /></Col>
                                        <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} className='unCompleted-star' /></Col>
                                    </Row>                                        
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>EN</p>
                                            </Col>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>ES</p>
                                            </Col>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>Fr</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    </Row>
                                    </Col>                    
                                </Row>                                 
                                
                            </Col>  
                            
                            </Row>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide-5">
                        <Row className="Experts">
                            <Col className="experts-section">
                                <Row className="experts-section-top align-items-center mx-auto" style={{height:"200px"}}> 
                                </Row>
                                <Row className="experts-section-bottom pt-5 px-3" style={{minHeight:"200px"}}>
                                    <Col xs="12">
                                        <Row>
                                            <div className='details'>
                                                <p className='name mt-0 mb-1'>Dr. Ratnadeep Patil</p>
                                                <p className='qualification mt-0 mb-1'>Qualification and Expertise</p>
                                                <p className='designationLocation my-0'>Designation, Hospital. City. Country</p>
                                            </div> 
                                        </Row>
                                    </Col>
                                    <Col xs="12">
                                    <Row className='icons align-items-center py-3' style={{justifyContent:"space-between"}}>
                                        <Col xs="auto">
                                            <Row>
                                                <Col>
                                                    <img src={tooth} alt="" />
                                                </Col>
                                                <Col>
                                                    <img src={handshake} alt="" />
                                                </Col>
                                                <Col>
                                                    <img src={teeth2} alt="" />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    </Col>   
                                    <Col xs="12">
                                    <Row className='align-items-center' style={{justifyContent:"space-between", paddingLeft:"13px"}}>
                                    <Col xs="auto">     
                                    <Row>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} className='unCompleted-star' /></Col>
                                        <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} className='unCompleted-star' /></Col>
                                    </Row>                                        
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>EN</p>
                                            </Col>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>ES</p>
                                            </Col>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>Fr</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    </Row>
                                    </Col>                    
                                </Row>                                 
                                
                            </Col>  
                            
                            </Row>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide-5">
                        <Row className="Experts">
                            <Col className="experts-section">
                                <Row className="experts-section-top align-items-center mx-auto" style={{height:"200px"}}> 
                                </Row>
                                <Row className="experts-section-bottom pt-5 px-3" style={{minHeight:"200px"}}>
                                    <Col xs="12">
                                        <Row>
                                            <div className='details'>
                                                <p className='name mt-0 mb-1'>Dr. Ratnadeep Patil</p>
                                                <p className='qualification mt-0 mb-1'>Qualification and Expertise</p>
                                                <p className='designationLocation my-0'>Designation, Hospital. City. Country</p>
                                            </div> 
                                        </Row>
                                    </Col>
                                    <Col xs="12">
                                    <Row className='icons align-items-center py-3' style={{justifyContent:"space-between"}}>
                                        <Col xs="auto">
                                            <Row>
                                                <Col>
                                                    <img src={tooth} alt="" />
                                                </Col>
                                                <Col>
                                                    <img src={handshake} alt="" />
                                                </Col>
                                                <Col>
                                                    <img src={teeth2} alt="" />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    </Col>   
                                    <Col xs="12">
                                    <Row className='align-items-center' style={{justifyContent:"space-between", paddingLeft:"13px"}}>
                                    <Col xs="auto">     
                                    <Row>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} className='unCompleted-star' /></Col>
                                        <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} className='unCompleted-star' /></Col>
                                    </Row>                                        
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>EN</p>
                                            </Col>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>ES</p>
                                            </Col>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>Fr</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    </Row>
                                    </Col>                    
                                </Row>                                 
                                
                            </Col>  
                            
                            </Row>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide-5">
                        <Row className="Experts">
                            <Col className="experts-section">
                                <Row className="experts-section-top align-items-center mx-auto" style={{height:"200px"}}> 
                                </Row>
                                <Row className="experts-section-bottom pt-5 px-3" style={{minHeight:"200px"}}>
                                    <Col xs="12">
                                        <Row>
                                            <div className='details'>
                                                <p className='name mt-0 mb-1'>Dr. Ratnadeep Patil</p>
                                                <p className='qualification mt-0 mb-1'>Qualification and Expertise</p>
                                                <p className='designationLocation my-0'>Designation, Hospital. City. Country</p>
                                            </div> 
                                        </Row>
                                    </Col>
                                    <Col xs="12">
                                    <Row className='icons align-items-center py-3' style={{justifyContent:"space-between"}}>
                                        <Col xs="auto">
                                            <Row>
                                                <Col>
                                                    <img src={tooth} alt="" />
                                                </Col>
                                                <Col>
                                                    <img src={handshake} alt="" />
                                                </Col>
                                                <Col>
                                                    <img src={teeth2} alt="" />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    </Col>   
                                    <Col xs="12">
                                    <Row className='align-items-center' style={{justifyContent:"space-between", paddingLeft:"13px"}}>
                                    <Col xs="auto">     
                                    <Row>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} className='unCompleted-star' /></Col>
                                        <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} className='unCompleted-star' /></Col>
                                    </Row>                                        
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>EN</p>
                                            </Col>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>ES</p>
                                            </Col>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>Fr</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    </Row>
                                    </Col>                    
                                </Row>                                 
                                
                            </Col>  
                            
                            </Row>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide-5">
                        <Row className="Experts">
                            <Col className="experts-section">
                                <Row className="experts-section-top align-items-center mx-auto" style={{height:"200px"}}> 
                                </Row>
                                <Row className="experts-section-bottom pt-5 px-3" style={{minHeight:"200px"}}>
                                    <Col xs="12">
                                        <Row>
                                            <div className='details'>
                                                <p className='name mt-0 mb-1'>Dr. Ratnadeep Patil</p>
                                                <p className='qualification mt-0 mb-1'>Qualification and Expertise</p>
                                                <p className='designationLocation my-0'>Designation, Hospital. City. Country</p>
                                            </div> 
                                        </Row>
                                    </Col>
                                    <Col xs="12">
                                    <Row className='icons align-items-center py-3' style={{justifyContent:"space-between"}}>
                                        <Col xs="auto">
                                            <Row>
                                                <Col>
                                                    <img src={tooth} alt="" />
                                                </Col>
                                                <Col>
                                                    <img src={handshake} alt="" />
                                                </Col>
                                                <Col>
                                                    <img src={teeth2} alt="" />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    </Col>   
                                    <Col xs="12">
                                    <Row className='align-items-center' style={{justifyContent:"space-between", paddingLeft:"13px"}}>
                                    <Col xs="auto">     
                                    <Row>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} className='unCompleted-star' /></Col>
                                        <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} className='unCompleted-star' /></Col>
                                    </Row>                                        
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>EN</p>
                                            </Col>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>ES</p>
                                            </Col>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>Fr</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    </Row>
                                    </Col>                    
                                </Row>                                 
                                
                            </Col>  
                            
                            </Row>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide-5">
                        <Row className="Experts">
                            <Col className="experts-section">
                                <Row className="experts-section-top align-items-center mx-auto" style={{height:"200px"}}> 
                                </Row>
                                <Row className="experts-section-bottom pt-5 px-3" style={{minHeight:"200px"}}>
                                    <Col xs="12">
                                        <Row>
                                            <div className='details'>
                                                <p className='name mt-0 mb-1'>Dr. Ratnadeep Patil</p>
                                                <p className='qualification mt-0 mb-1'>Qualification and Expertise</p>
                                                <p className='designationLocation my-0'>Designation, Hospital. City. Country</p>
                                            </div> 
                                        </Row>
                                    </Col>
                                    <Col xs="12">
                                    <Row className='icons align-items-center py-3' style={{justifyContent:"space-between"}}>
                                        <Col xs="auto">
                                            <Row>
                                                <Col>
                                                    <img src={tooth} alt="" />
                                                </Col>
                                                <Col>
                                                    <img src={handshake} alt="" />
                                                </Col>
                                                <Col>
                                                    <img src={teeth2} alt="" />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    </Col>   
                                    <Col xs="12">
                                    <Row className='align-items-center' style={{justifyContent:"space-between", paddingLeft:"13px"}}>
                                    <Col xs="auto">     
                                    <Row>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} className='unCompleted-star' /></Col>
                                        <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} className='unCompleted-star' /></Col>
                                    </Row>                                        
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>EN</p>
                                            </Col>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>ES</p>
                                            </Col>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>Fr</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    </Row>
                                    </Col>                    
                                </Row>                                 
                                
                            </Col>  
                            
                            </Row>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide-5">
                        <Row className="Experts">
                            <Col className="experts-section">
                                <Row className="experts-section-top align-items-center mx-auto" style={{height:"200px"}}> 
                                </Row>
                                <Row className="experts-section-bottom pt-5 px-3" style={{minHeight:"200px"}}>
                                    <Col xs="12">
                                        <Row>
                                            <div className='details'>
                                                <p className='name mt-0 mb-1'>Dr. Ratnadeep Patil</p>
                                                <p className='qualification mt-0 mb-1'>Qualification and Expertise</p>
                                                <p className='designationLocation my-0'>Designation, Hospital. City. Country</p>
                                            </div> 
                                        </Row>
                                    </Col>
                                    <Col xs="12">
                                    <Row className='icons align-items-center py-3' style={{justifyContent:"space-between"}}>
                                        <Col xs="auto">
                                            <Row>
                                                <Col>
                                                    <img src={tooth} alt="" />
                                                </Col>
                                                <Col>
                                                    <img src={handshake} alt="" />
                                                </Col>
                                                <Col>
                                                    <img src={teeth2} alt="" />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    </Col>   
                                    <Col xs="12">
                                    <Row className='align-items-center' style={{justifyContent:"space-between", paddingLeft:"13px"}}>
                                    <Col xs="auto">     
                                    <Row>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 px-0'><FontAwesomeIcon icon={faStar} className='completed-star' /></Col>
                                        <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} className='unCompleted-star' /></Col>
                                        <Col xs="auto" className='pe-1 ps-0'><FontAwesomeIcon icon={faStar} className='unCompleted-star' /></Col>
                                    </Row>                                        
                                    </Col>
                                    <Col xs="auto">
                                        <Row>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>EN</p>
                                            </Col>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>ES</p>
                                            </Col>
                                            <Col xs="auto" className='px-1'>
                                                <p className='language-options my-0'>Fr</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    </Row>
                                    </Col>                    
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

export default ExpertsOnZuan;