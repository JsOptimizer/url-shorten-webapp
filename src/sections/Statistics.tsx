import { ShortLink, StatisticsCard } from "../components"
import brand from '../assets/images/icon-brand-recognition.svg'
import record from '../assets/images/icon-detailed-records.svg'
import fully from '../assets/images/icon-fully-customizable.svg'

const Statistics = () => {
  const title = 'Advanced statistics'
  const description = 'Track how your links are performing accross the web with our advanced statistics dashboard'
  return (
    <div className=" px-8 pb-20 bg-neutral ">
      <div className="relative -top-[76px]"> 
        <ShortLink />
      </div>
      <div className="text-center">
        <h2 className="font-bold text-3xl bg">Advanced statistics </h2>
        <p className="pt-4">
          Track how your links are performing accross the web with our advanced statistics dashboard
        </p>
      </div>
      <div className="mt-20 flex flex-col items-center lg:grid grid-cols-3">
        <div className=" lg:flex justify-center items-center">
          <StatisticsCard title={title} description={description} icone={brand} />
          <div className="hidden w-12 lg:flex flex-col border-brand border-b-8"></div>
        </div>
        <div className=" lg:hidden border-r-8 border-brand h-24  content-center"></div>
        <div className="lg:mt-14 lg:flex justify-center items-center">
          <StatisticsCard title={title} description={description} icone={record} />
          <div className="hidden w-12 lg:flex flex-col border-brand border-b-8"></div>
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