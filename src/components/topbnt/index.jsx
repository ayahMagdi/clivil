import './scrollTop.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useState , useEffect} from 'react'

const ScrollTop = () => {

    const [show , setShow] = useState(false)

  const currentScroll = () => {
      const windowScroll = document.documentElement.scrollTop
      windowScroll >= 500 ? setShow(true) : setShow(false)
  }
  
  useEffect(() => {
    window.addEventListener("scroll", currentScroll);
    return () => {
      window.removeEventListener("scroll", currentScroll);
    };
  });

  const handleClick = () => {
    window.scrollTo(0 ,0)
  }

  return (
    <div 
       className={`scroll__top d-flex align-items-center justify-content-center ${!show && 'd-none'}`}
       onClick={handleClick}
    >
        <button type='button' className='btn scroll__btn'><KeyboardArrowUpIcon /></button>
    </div>
  )
}

export default ScrollTop