type IButtonStart = {
    title : string
}
const ButtonStart = ({title} : IButtonStart) => {
    return (
        <button className="w-full rounded-full bg-brand text-white font-bold text-xl px-6 py-3">{title}</button>
    )
}

export default ButtonStart