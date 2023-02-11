import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link , NavLink} from 'react-router-dom';
import './navbar.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuIcon from '@mui/icons-material/Menu';
import { useState , useEffect } from 'react';

const Navbar = () => {

  const [position , setPosition] = useState(false)

  const currentScroll = () => {
      const windowScroll = document.documentElement.scrollTop
      windowScroll >= 100 ? setPosition(true) : setPosition(false)
  }
  
  useEffect(() => {
    window.addEventListener("scroll", currentScroll);
    return () => {
      window.removeEventListener("scroll", currentScroll);
    };
  });


  return (
    <div className={position ? 'fixedHead header__nav py-3' : 'header__nav py-3'}>
      <Container>
        <div className='navbar__wrapper'>
            <Row className='justify-content-between align-items-center'>

                  {/* LOGO */}

             <Col xs={6} lg={2} className={position ? 'd-block' : 'd-lg-none'}>
               <div className='logo'>
                 <Link to="/">
                    <img 
                       alt='website logo' 
                       src='https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/update-logo-dark1.png'
                    />
                 </Link>
               </div>
              </Col>

                {/* NAVBAR */}

              <Col xs={6} className="navegation">
                  <nav className="navbar navbar-expand-lg">
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon d-flex justify-content-between align-items-center"><MenuIcon /></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                          <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/features">Features</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/">Disabled</NavLink>
                          </li>
                        </ul>
                      </div>
                  </nav>
              </Col>


               {/* SOCIAL LINKS */}

              <Col lg={position ? 4 : 6} className="social__links d-none d-lg-block">
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
        </div>
      </Container>
    </div>
  )
}

export default Navbar