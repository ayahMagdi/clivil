import './porjects.css';
import Container from 'react-bootstrap/Container';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionHeader from '../sectionHeader/SectionHeader';

const Projects = () => {
  return (
    <div className='projects'>
       <Container>
        <div className='projects__wrapper'>
            <SectionHeader textAlign='text-center' altTitle='latest news' title='our latest news' />
            <Row className='projects__container align-items-center justify-content-center'>
                <Col lg={4} md={6}>
                    <div className='project'>
                        <div className='project__img'>
                            <img
                               alt='project img'
                               src='https://demo.casethemes.net/itfirm/wp-content/uploads/2021/07/h2-blog1-680x410.jpg' 
                            />
                        </div>
                        <div className='project__body'>
                            <Row className='project__date'>
                                <Col xs={5}>
                                    <div className='date'>
                                      <CalendarMonthOutlinedIcon />
                                       July 24, 2021
                                    </div>
                                </Col>
                                <Col xs={5}>
                                   <div className='date'>
                                      <ArticleOutlinedIcon />
                                      UI/UX Design
                                    </div>
                                </Col>
                            </Row>
                            <h3 className='project__title'>Regional Manager & limited time management.</h3>
                            <div className='project__content'>
                                With over a decade experience, we’ve established ourselves as one of the pioneering agencies in the region. We understand the importance of approaching each work…
                            </div>
                            <button type="button" className="btn project__btn">Read More <ArrowForwardOutlinedIcon /></button>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                <div className='project'>
                        <div className='project__img'>
                            <img
                               alt='project img'
                               src='https://demo.casethemes.net/itfirm/wp-content/uploads/2021/07/h2-blog2-680x410.jpg' 
                            />
                        </div>
                        <div className='project__body'>
                            <Row className='project__date'>
                                <Col xs={5}>
                                    <div className='date'>
                                      <CalendarMonthOutlinedIcon />
                                       July 24, 2021
                                    </div>
                                </Col>
                                <Col xs={5}>
                                   <div className='date'>
                                      <ArticleOutlinedIcon />
                                      UI/UX Design
                                    </div>
                                </Col>
                            </Row>
                            <h3 className='project__title'>Regional Manager & limited time management.</h3>
                            <div className='project__content'>
                                With over a decade experience, we’ve established ourselves as one of the pioneering agencies in the region. We understand the importance of approaching each work…
                            </div>
                            <button type="button" className="btn project__btn">Read More <ArrowForwardOutlinedIcon /></button>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                <div className='project'>
                        <div className='project__img'>
                            <img
                               alt='project img'
                               src='https://demo.casethemes.net/itfirm/wp-content/uploads/2021/07/h2-blog3-680x410.jpg' 
                            />
                        </div>
                        <div className='project__body'>
                            <Row className='project__date'>
                                <Col xs={5}>
                                    <div className='date'>
                                      <CalendarMonthOutlinedIcon />
                                       July 24, 2021
                                    </div>
                                </Col>
                                <Col xs={5}>
                                   <div className='date'>
                                      <ArticleOutlinedIcon />
                                      UI/UX Design
                                    </div>
                                </Col>
                            </Row>
                            <h3 className='project__title'>Regional Manager & limited time management.</h3>
                            <div className='project__content'>
                                With over a decade experience, we’ve established ourselves as one of the pioneering agencies in the region. We understand the importance of approaching each work…
                            </div>
                            <button type="button" className="btn project__btn">Read More <ArrowForwardOutlinedIcon /></button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
       </Container>
    </div>
  )
}

export default Projects