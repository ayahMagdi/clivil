import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.css';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import SectionHeader from '../sectionHeader/SectionHeader';

const Aboutus = () => {
  return (
    <div className='aboutus'>
        <Container>
            <div className='aboutus__wrapper'>
                <Row>
                    <Col className='about__img' lg={6}>
                        <div className='img__container'>
                            <img 
                                alt='about img' 
                                src='https://demo.casethemes.net/itfirm/wp-content/uploads/2022/12/h7-banner2.png'
                             />
                        </div>
                    </Col>
                    <Col className='about__content d-flex align-items-center' lg={6}>
                        <div className='content__container'>
                            <SectionHeader textAlign='text-left' altTitle='about itfirm' title='We Are Innovative IT Solutions & Services Company' />
                            {/* <h3 className='alt__title'>ABOUT ITFIRM</h3> */}
                            {/* <h2 className='title'>We Are Innovative IT Solutions & Services Company</h2> */}
                            <p className='text'>Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
                            <Row className='alt__section'>
                                <Col xs={6} className='item'>
                                    <Row className='align-items-center'>
                                        <Col xs={2}>
                                            <div className='section__icon'><EngineeringOutlinedIcon /></div>
                                        </Col>
                                        <Col xs={10}>
                                            <div className='seciton__title'>Moneyback <br /> Gurentee</div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={6} className='item'>
                                    <Row className='align-items-center'>
                                        <Col xs={2}>
                                            <div className='section__icon'><AssignmentOutlinedIcon /></div>
                                        </Col>
                                        <Col xs={10}>
                                            <div className='seciton__title'>Technical <br /> Support</div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <div className='section__btn'>
                                <button type="button" className="btn btn__contact">Contact Us</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
        <div className='alt-bg__img'>
            <img 
              alt='about img'
              src='https://demo.casethemes.net/itfirm/wp-content/uploads/2022/12/h7-shape6.png'
            />
        </div>
    </div>
  )
}

export default Aboutus