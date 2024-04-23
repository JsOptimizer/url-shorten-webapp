type IAddLink = {
    link : string,
    newLink : string,
    bgColor : any,
    buttonText : string
}

const AddLink = ({link, newLink, bgColor, buttonText} : IAddLink) => {
  return (
    <div className="w-full p-4 bg-white mt-6 rounded-md space-y-4">
        <p className="">{link}</p>
        <hr className="text-neutral border-1/2" />
        <p className="text-brand">{newLink}</p>
        <button className={`text-center text-white rounded-md font-bold  px-4 py-2 w-full ${bgColor}`} >{buttonText}</button>

    </div>
  )
}

export default AddLink