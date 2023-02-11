import './banner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

const Banner = () => {
  return (
    <div className='banner'>
        <Container>
            <div className='banner__wrapper'>
                <Col md={9}>
                    <div className='banner__text'>
                      We run all kinds of IT services that vow your <span className='main-color'>success</span> 
                    </div>
                </Col>
                <Col md={3}>
                    <div className='banner__btns'>
                        <button type="button" className="btn banner__btn"><MessageOutlinedIcon /> Let's Talk</button>
                        <button type="button" className="btn banner__btn"><ErrorOutlineOutlinedIcon /> Get Info</button>
                    </div>
                </Col>
            </div>
        </Container>
    </div>
  )
}

export default Banner