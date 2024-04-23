import { ShortLink, StatisticsCard } from "../components"
import brand from '../assets/images/icon-brand-recognition.svg'
import record from '../assets/images/icon-detailed-records.svg'
import fully from '../assets/images/icon-fully-customizable.svg'

const Statistics = () => {
  const title = 'Advanced statistics'
  const description = 'Track how your links are performing accross the web with our advanced statistics dashboard'
  return (
    <div className="px-8 pt-36 pb-20 bg-neutral ">

      <div className=" text-center">
        <h2 className="font-bold text-3xl">Advanced statistics </h2>
        <p className="">
          Track how your links are performing accross the web with our advanced statistics dashboard
        </p>
      </div>
      <ShortLink />
      <div className="space-y-24">
        <StatisticsCard title={title} description={description} icone={brand} />
        <StatisticsCard title={title} description={description} icone={record} />
        <StatisticsCard title={title} description={description} icone={fully} />
      </div>
    </div>
  )
}

export default Statistics