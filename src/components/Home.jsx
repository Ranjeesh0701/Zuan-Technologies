import {Row, Col} from 'reactstrap';
import HomeSwiper1 from './Swipers/HomeSwiper-1';
import HomeSwiper2 from './Swipers/HomeSwiper-2';


const Home = () => {
    return (
        <div className='home-section' style={{overflow:"hidden"}}>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <Row>
                                <HomeSwiper1 />
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{background: "#E7E7E7"}}>
                        <Row className='mx-auto py-2' >
                            <HomeSwiper2 />
                        </Row>
                    </Row>
                </Col>
            </Row>
            
        </div>
    )
}

export default Home;