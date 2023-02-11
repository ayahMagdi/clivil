import './sectionHeader.css'

const SectionHeader = ({textAlign , altTitle , title}) => {
  return (
    <div className={`section__header ${textAlign}`}>
        <h3 className='alt__title text-uppercase'>{altTitle}</h3>
        <h2 className='title text-text-uppercase'>{title}</h2>
     </div>
  )
}

export default SectionHeader