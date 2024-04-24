import { ButtonStart } from "../components"
import backgroundImageD from '../assets/images/bg-boost-desktop.svg'
import backgroundImageM from '../assets/images/bg-boost-mobile.svg'


const BoostLink = () => {
  const mobile = false
  return (
    <div className="space-y-4 py-16 px-6 flex flex-col items-center justify-between bg-brand-950" style={{ backgroundImage: mobile? `url(${backgroundImageM})` : `url(${backgroundImageD})`}}>
      <h3 className="font-bold text-2xl text-white text-center">Boost your link today</h3>
      <ButtonStart title="Get Started" />
    </div>
  )
}

export default BoostLink