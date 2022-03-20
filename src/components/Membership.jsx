import {Container, Row, Col} from 'reactstrap';
import DarkButton from './Buttons/darkButton';
import frame from '../images/frame.png'

const Membership = () => {
    return (
        <div className='membership-banner pt-lg-2 py-lg-0 py-5'>
            <Container className='py-lg-5'>
            <Row className='align-items-center'>
                <Col lg="4" className='logoNdCompany text-lg-start text-center'>
                    <img src={frame} alt="logoMembership" className='w-75' />
                </Col>
                <Col lg="4" style={{textAlign:"justify"}} className='offer-text pt-lg-0 pt-3'>
                    <p className='header'><span>40%</span> OFF LIMITED period offer</p>
                    <p className='para'>Upgrade your skills with over 40 courses, case discussions and live surgical videos at no additional cost.</p>
                </Col>
                <Col lg="4" className='get-it'>
                    <Row className='text-lg-end text-center pt-lg-0 pt-3'>
                        <Col>
                        <DarkButton text="Get Membership" /></Col>
                    </Row>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Membership;