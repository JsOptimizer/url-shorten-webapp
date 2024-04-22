type IICone = {
    image : string
}
const Icone = ({image}: IICone) => {
  return (
    <div className="bg-brand-950 w-fit flex items-center shadow-sm rounded-full relative -top-12 h-24 px-7 py-8">
        <img src={image} alt="Icone" />
    </div>
  )
}

export default Icone