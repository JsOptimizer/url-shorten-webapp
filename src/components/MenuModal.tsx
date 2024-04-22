import ButtonStart from "./ButtonStart"

const MenuModal = () => {
  return (
    <div className=" py-6 px-4 flex flex-col rounded-xl items-center justify-between bg-brand-950 text-white">
        <ul className="leading-10 font-bold text-xl pb-6">
            <li>Features</li>
            <li>Pricing </li>
            <li>Resources</li>
        </ul>
        <hr className="border-1/8 w-full text-neutral"/>
        <ul className="w-full text-center space-y-4 font-bold text-xl py-6">
            <li>Login</li>
            <ButtonStart title={"Sign Up"} />
        </ul>
    </div>
  )
}

export default MenuModal