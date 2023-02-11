import './services.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import LanOutlinedIcon from '@mui/icons-material/LanOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import SectionHeader from '../sectionHeader/SectionHeader';

const ServContent = ({icon , title, text }) => {
    return (
        <Col className='text-center' lg={4} md={6}>
            <div className='serv__content'>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='serv__icon d-flex justify-content-center align-items-center'>{icon}</div>
                </div>
                <h3 className='serv__title'>{title}</h3>
                <div className='line'></div>
                <p className='text'>{text}</p>
                <button type="button" className="btn serv__btn">Read More <ArrowForwardOutlinedIcon /></button>
            </div>
        </Col>
    )
}

const Services = () => {
  return (
    <div className='services'>
      <Container>
        <div className='services__wrapper'>
            <SectionHeader textAlign='text-center' altTitle='latest services' title='we are offering all kinds of iT solutions services' />
            <Row className='services__content align-items-center justify-content-center'>
                <ServContent 
                   icon={<LaptopMacOutlinedIcon />}
                   title="Software Development"
                   text="Innovative financial marketing program generate leads, retain customers dacc lerate digital financial services."
                />
                <ServContent 
                   icon={<LanOutlinedIcon />}
                   title="IT Management"
                   text="Innovative financial marketing program generate leads, retain customers dacc lerate digital financial services."
                />
                <ServContent 
                   icon={<FolderCopyOutlinedIcon />}
                   title="Data Security"
                   text="Innovative financial marketing program generate leads, retain customers dacc lerate digital financial services."
                />
                <ServContent 
                   icon={<ApartmentOutlinedIcon />}
                   title="Infrastructure Plan"
                   text="Innovative financial marketing program generate leads, retain customers dacc lerate digital financial services."
                />
                <ServContent 
                   icon={<DesignServicesOutlinedIcon />}
                   title="Product Design"
                   text="Innovative financial marketing program generate leads, retain customers dacc lerate digital financial services."
                />
                <ServContent 
                   icon={<LaptopMacOutlinedIcon />}
                   title="Software Engineering"
                   text="Innovative financial marketing program generate leads, retain customers dacc lerate digital financial services."
                />
            </Row>
        </div>
      </Container>
    </div>
  )
}

export default Services