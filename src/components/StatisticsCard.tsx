import Icone from "./Icone"


 type IStatisticsCard = {
    title: string,
    description: string, 
    icone: any
 }
const StatisticsCard = ({title, description, icone}: IStatisticsCard) => {
  return (
    <div className="bg-white flex flex-col items-center justify-between pb-16 px-6 text-center lg:text-start rounded-md">
        <Icone image={icone}/>
       <div className="space-y-4">
         <h3 className="font-bold text-2xl">{title}</h3>
         <p>{description} </p>
       </div>
    </div>
  )
}

export default StatisticsCard