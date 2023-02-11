import './contact.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const Contact = () => {
  return (
    <div className='contact'>
       <Container>
         <div className='contact__wrapper'>
            <Row className='justify-content-center align-items-center'>
                <Col lg={6}>
                    <div className='contact__form'>
                        <h2 className='title'>Need a hand?</h2>
                        <h3 className='subTitle'>Reach out to the world’s most reliable IT services.</h3>
                        <form>
                            <Row>
                                <Col md={6}><input type='text' placeholder='Username' id='username'/></Col>
                                <Col md={6}><input type='email' placeholder='Email' id='email'/></Col>
                            </Row>
                            <input type='phone' placeholder='Phone' id='phone' />
                            <textarea placeholder='Type your message...' />
                            <button type='button' className="btn contact__us">Contact Us</button>
                        </form>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className='contact__information'>
                        <h3 className='alt__title'>REACH OUT NOW!</h3>
                        <h2 className='phone__number'>(+00) 123 567990</h2>
                        <p className='text'>Start the collaboration with us while figuring out the best solution based on your needs.</p>
                        <div className='address d-flex align-items-center'>
                           <div className='address__icon d-flex justify-content-center align-items-center'><PlaceOutlinedIcon /></div>
                           View on Google map
                        </div>
                    </div>
                </Col>
            </Row>
         </div>
       </Container>
    </div>
  )
}

export default Contact