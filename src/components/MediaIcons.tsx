import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import instagram from '../assets/images/icon-instagram.svg'

const MediaIcons = () => {
  return (
    <div className='flex gap-x-6 items-center py-12 justify-center'>
        <img src={facebook} alt="Logo facebook" />
        <img src={twitter} alt="Logo twitter" />
        <img src={pinterest} alt="Logo pinterest" />
        <img src={instagram} alt="Logo instagram" />    
    </div>
  )
}

export default MediaIcons