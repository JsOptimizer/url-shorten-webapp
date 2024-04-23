import { ButtonStart } from "../components"
import backgroundImage from '../assets/images/bg-boost-mobile.svg'

const BoostLink = () => {
  return (
    <div className="space-y-4 py-16 px-6 flex flex-col items-center justify-between bg-brand-950" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h3 className="font-bold text-2xl text-white text-center">Boost your link today</h3>
      <ButtonStart title="Get Started" />
    </div>
  )
}

export default BoostLink