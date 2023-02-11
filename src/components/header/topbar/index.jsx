import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './topbar.css';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';

const Item = ({icon , title , subTitle}) => {
     return (
        <Row className='justify-content-center align-items-center'>
          <Col md={3}>
            <div className='icon'>
              {icon}
            </div>
          </Col>
          <Col md={9}>
             <div className='information'>
                <h3 className='title'>{title}</h3>
                <h4 className='subTitle'>{subTitle}</h4>
             </div>
          </Col>
        </Row>
     )
}

const Topbar = () => {
  return (
    <div className='topbar py-4 d-none d-xl-block'>
      <Container>
        <div className='topbar__wrapper'>
          <Row className='justify-content-between align-items-center'>

              {/* WEBSITE LOGO */}
             
            <Col md={6}>
               <div className='logo'>
                 <Link to="/">
                    <img 
                       alt='website logo' 
                       src='https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/update-logo-dark1.png'
                    />
                 </Link>
               </div>
            </Col>

             {/* INFORMATION */}

            <Col md={6}>
              <div className='contact__information'>
                  <Row className='item__wrapper'>
                    <Col md={4} className='item'>
                       <Item 
                           icon={<PinDropOutlinedIcon />} 
                           title='Contact us' 
                           subTitle='101 Montana, UK' 
                       />
                    </Col>
                    <Col md={4} className='item'>
                        <Item 
                           icon={<DraftsOutlinedIcon />} 
                           title='Email us' 
                           subTitle='info@itfirm.com' 
                        />
                    </Col>
                    <Col md={4} className='item'>
                        <Item  
                           icon={<WifiCalling3OutlinedIcon />} 
                           title='Free call' 
                           subTitle='+ (888) 452 1505' 
                        />
                    </Col>
                  </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Topbar