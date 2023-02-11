import './team.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import SectionHeader from '../sectionHeader/SectionHeader';

const Team = () => {
  return (
    <div className='team'>
        <Container>
            <div className='team__wrapper'>
                <SectionHeader textAlign='text-center' altTitle='our team' title='our some finest team' />
                <Row className='team__container align-items-center justify-content-center'>
                    <Col lg={4} md={6}>
                        <div className='teammember'>
                            <div className='teammember__img'>
                                <img 
                                  alt='team member'
                                  src='https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/theme7-600x600.jpg'
                                />
                            </div>
                            <div className='teammember__info'>
                                <Row>
                                    <Col xs={10}>
                                       <h3 className='job'>Cloud Services</h3>
                                       <h2 className='name'>Product Engineering</h2>
                                    </Col>
                                    <Col xs={2}>
                                        <button type="button" className="btn team__btn"><ArrowForwardOutlinedIcon /></button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className='teammember'>
                            <div className='teammember__img'>
                                <img 
                                  alt='team member'
                                  src='https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/gallery2-600x600.jpg'
                                />
                            </div>
                            <div className='teammember__info'>
                                <Row>
                                    <Col xs={10}>
                                       <h3 className='job'>Cloud Services</h3>
                                       <h2 className='name'>Product Engineering</h2>
                                    </Col>
                                    <Col xs={2}>
                                        <button type="button" className="btn team__btn"><ArrowForwardOutlinedIcon /></button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className='teammember'>
                            <div className='teammember__img'>
                                <img 
                                  alt='team member'
                                  src='https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/theme-10-600x600.jpg'
                                />
                            </div>
                            <div className='teammember__info'>
                               <Row>
                                    <Col xs={10}>
                                       <h3 className='job'>Cloud Services</h3>
                                       <h2 className='name'>Product Engineering</h2>
                                    </Col>
                                    <Col xs={2}>
                                        <button type="button" className="btn team__btn"><ArrowForwardOutlinedIcon /></button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default Team