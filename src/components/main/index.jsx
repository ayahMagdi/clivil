import Container from 'react-bootstrap/Container';
import './main.css'

const Main = () => {
  return (
    <div className='main d-flex align-items-center'>
        <Container>
            <div className='main__content'>
                <h3 className='alt__title'>IT SOLUTIONS</h3>
                <h1 className='main__title'>IT Solutions Services For Your Business</h1>
                <p className='text'>We are leading business startup consult providing company all over the world doing over 40 years financial services</p>
                <button type="button" className="btn learn__more">Learn More</button>
            </div>
        </Container>
    </div>
  )
}

export default Main