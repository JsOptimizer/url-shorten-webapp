import { ShortLink, StatisticsCard } from "../components"
import brand from '../assets/images/icon-brand-recognition.svg'
import record from '../assets/images/icon-detailed-records.svg'
import fully from '../assets/images/icon-fully-customizable.svg'

const Statistics = () => {
  const title = 'Advanced statistics'
  const description = 'Track how your links are performing accross the web with our advanced statistics dashboard'
  return (
    <div className=" px-8 pb-20 bg-neutral ">     
      <div className="relative -top-[76px]"> {/* Ajoute une marge négative pour l'espace en haut */}
        <ShortLink />
      </div>
      <div className="text-center">
        <h2 className="font-bold text-3xl bg">Advanced statistics </h2>
        <p className="pt-4">
          Track how your links are performing accross the web with our advanced statistics dashboard
        </p>
      </div>
      <div className="mt-20 flex flex-col items-center lg:grid lg:gap-x-8 grid-cols-3">
        <StatisticsCard title={title} description={description} icone={brand} />
        <div className="lg:hidden border-r-8 border-brand h-24  content-center"></div>
        <div className="lg:mt-14">
          <StatisticsCard title={title} description={description} icone={record} />
        </div>
        <div className="lg:hidden border-r-8 border-brand h-24  content-center"></div>
        <div className="lg:mt-28">
          <StatisticsCard title={title} description={description} icone={fully} />
        </div>
      </div>
    </div>
  )
}

export default Statistics