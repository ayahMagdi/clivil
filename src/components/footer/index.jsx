import './footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6}>
                    <div className='copyright'>© 2023 Mitech. All Rights Reserved.</div>
                </Col>
                <Col lg={6} className="social__links">
                <ul className='social d-flex align-items-center justify-content-end'>
                   <li className='social__item facebook'>
                     <Link to="/">
                        <FacebookOutlinedIcon />
                     </Link>
                   </li>
                   <li className='social__item whatsapp'>
                     <Link to="/">
                        <WhatsAppIcon />
                     </Link>
                   </li>
                   <li className='social__item twitter'>
                     <Link to="/">
                        <TwitterIcon />
                     </Link>
                   </li>
                   <li className='social__item google'>
                     <Link to="/">
                        <GoogleIcon />
                     </Link>
                   </li>
                   <li className='social__item linkedin'>
                     <Link to="/">
                        <LinkedInIcon />
                     </Link>
                   </li>
                </ul>
              </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer