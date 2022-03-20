import { Row, Col } from 'reactstrap';
import '../css/style.css';
import profilepic from '../images/profilepic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const NavBar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [modal, setModal] = useState(false);
    function toggle() {
        setModal(!modal);
    }

    const getWindowWidth = () => {
        const width = window.innerWidth;
        return width;
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(getWindowWidth);
            if(windowWidth < 700 && modal) {
                setModal(false);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })

    return (
        <>
        <div style={{overflow: "hidden"}} className='brand-container'>
            <Row className="brand align-items-center my-1" style={{justifyContent:"space-between"}}>
                <Col lg="auto" xs="auto">
                   <Row className="align-items-center">
                        <Col lg="auto" xs="auto">
                            <div className="hamBurger" onClick={() => {
                                if(windowWidth > 700) {
                                    return ;
                                }
                                else {
                                    toggle();
                                }
                            }}>
                                <div className='ham ham1'>

                                </div>
                                <div className='ham ham2'>

                                </div>
                                <div className='ham ham3'>

                                </div>
                            </div> 
                        </Col>
                        <Col lg="auto"  xs="auto">
                            <div className="brandName align-items-center">                            
                                <div>
                                    <p className="brandText my-0">zuan</p>
                                </div>
                            </div>
                        </Col>
                   </Row>
                </Col>
                {
                    (windowWidth > 700) && (
                        <Col lg="auto" xs="auto">
                            <Row className='align-items-center justify-content-end'>
                                <Col lg="auto" xs="auto">
                                    <div>
                                        <FontAwesomeIcon icon={faSearch} className="icons me-5" />
                                    </div>
                                </Col>
                                <Col lg="auto" xs="auto">
                                    <div>
                                        <p className='my-0 hi-user'>Hi Team Z,</p>
                                    </div>
                                </Col>
                                <Col lg="auto" xs="auto">
                                    <div>
                                        <img src={profilepic} alt="user" className='profile-pic mx-2' />
                                    </div>
                                </Col>
                                <Col lg="auto" xs="auto">
                                    <div>
                                        <FontAwesomeIcon icon={faBookmark} className="icons mx-2" />
                                    </div>
                                </Col>
                                <Col lg="auto" xs="auto">
                                    <div>
                                    <FontAwesomeIcon icon={faShoppingBag} className="icons ms-2" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    )
                }
            </Row>
        </div>

        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
            <Row className='align-items-center'>
            <Col xs="auto">
                <div>
                    <p className='my-0 hi-user' style={{fontSize:"17px", fontWeight:"400"}}>Hi Team Z,</p>
                </div>
            </Col>      
            <Col xs="auto">
                <div>
                    <img src={profilepic} alt="user" className='profile-pic mx-2' />
                </div>
            </Col>   
            </Row>
        </ModalHeader>
        <ModalBody>
        <Col lg="auto" xs="aut0" className='h-100'>
                    <Row className='justify-content-center'>
                        <Row className='justify-content-center py-4'>
                            <Col xs="auto">
                                <div>
                                    <FontAwesomeIcon icon={faSearch} className="icons mx-2" />
                                </div>
                            </Col> 
                            <Col xs="auto">
                                <div>
                                    <FontAwesomeIcon icon={faBookmark} className="icons mx-2" />
                                </div>
                            </Col>      
                            <Col xs="auto">
                                <div>
                                <FontAwesomeIcon icon={faShoppingBag} className="icons ms-2" />
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </Col>
        </ModalBody>
        </Modal>    
        </>
    )
}

export default NavBar;