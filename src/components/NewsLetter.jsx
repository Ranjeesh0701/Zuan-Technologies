import {Container, Row, Col} from 'reactstrap';
import Button2 from './Buttons/button2';
import email from '../images/email.png';

const NewsLetter = () => {
    return (
        <div className='signup-newsletter pt-lg-2'>
            <Container className='py-5'>
            <Row className='align-items-center'>
                <Col lg="5" as="12" className='logoNdCompany'>
                    <img src={email} alt="" />
                </Col>
                <Col lg="7" style={{textAlign:"left"}} className='newletter-text'>
                    <p className='header mt-0 mb-1 pt-lg-0 pt-2' style={{color:"#fff"}}>Sign up for our newsletter</p>
                    <p className='para my-0'>Be the first to hear about our latest courses by signing up to our mailing list.</p>
                    <Row className='inputAndButton align-items-center'>
                        <Col lg="8">
                            <input className="email-sender-input" type="text" placeholder='Your email address' />
                        </Col>
                        <Col lg="4" className="pt-lg-0 pt-4">
                            <Button2 text="Subscribe" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default NewsLetter;