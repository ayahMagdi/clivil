import './workingProcess.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import SectionHeader from '../sectionHeader/SectionHeader';

const Process = ({icon , title , text , number , direction}) => {
    return(
        <Col lg={3} md={6}>
            <div className='step text-center'>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='step__icon d-flex justify-content-center align-items-center'>
                        {icon}
                        <div className={`step__num ${direction} d-flex justify-content-center`}><span>{number}</span></div>
                    </div>
                </div>
                <h3 className='step__title'>{title}</h3>
                <div className='text'>{text}</div>
            </div>
        </Col>
    )
}

const WorkingProcess = () => {
  return (
    <div className='workingProcess'>
       <Container>
         <div className='workingProcess__wrapper'>
            <SectionHeader textAlign='text-center' altTitle='working process' title='our working process how wo work for our customers' />
            <div className='workingProcess__img'>
                <img 
                  alt='workingProcess__img'
                  src='https://demo.casethemes.net/itfirm/wp-content/themes/itsoft/assets/images/process-divider2.png'
                />
            </div>
            <Row className='steps__container align-items-center justify-content-center'>
               <Process 
                  icon={<DesignServicesOutlinedIcon />}
                  number="1"
                  title='Discovery'
                  direction="left"
                  text='Join us in a replay of this webinar to see how to go from the first line.'
               />
               <Process 
                  icon={<EngineeringOutlinedIcon />}
                  number="2"
                  direction="right"
                  title='Planning'
                  text='When we receive your message. Our support team will check the information.'
               />
               <Process 
                  icon={<ArchitectureOutlinedIcon />}
                  number="3"
                  direction="left"
                  title='Execute'
                  text='Payment has never been so easy. We use reliable and secure payment services.'
               />
               <Process 
                  icon={<ApartmentOutlinedIcon />}
                  number="4"
                  direction="right"
                  title='Deliver'
                  text='Your privacy will be best guaranteed. Services are paid for through Payoneer.'
               />
            </Row>
         </div>
       </Container>
    </div>
  )
}

export default WorkingProcess