type IButtonStart = {
    title : string
}
const ButtonStart = ({title} : IButtonStart) => {
    return (
        <button className="px-8 rounded-full bg-brand text-white font-bold text-xl py-3">{title}</button>
    )
}

export default ButtonStart