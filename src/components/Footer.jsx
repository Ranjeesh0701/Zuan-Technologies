import {Container, Row, Col} from 'reactstrap';

const Footer = () => {
    return (
        <>
           <Container>
                <Row className='justify-content-center py-5 text-center'>
                    <Col lg="auto"><p style={{fontSize:"100px", fontWeight: "100"}} className='my-0'>footer</p></Col>
                </Row>
           </Container>
        </>
    )
}

export default Footer;