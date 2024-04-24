import { useState } from "react"

type IAddLink = {
  link: string,
  newLink: string,
}

const AddLink = ({ link, newLink }: IAddLink) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  return (
    <div className="w-full lg:text-xl lg:flex justify-between items-center lg:px-6 lg:py-2 p-4 lg:space-y-0 bg-white mt-6 rounded-md space-y-4">
      <div>
        <p className="">{link}</p>
        <hr className="lg:hidden text-neutral border-1/2" />
      </div>
      <div className="lg:flex items-center lg:gap-x-5 lg:space-y-0  space-y-2">
        <p className="text-brand">{newLink}</p>
        <button onClick={()=> {setIsCopied(!isCopied)}} className={`text-center w-full lg:w-32 text-white rounded-md font-bold  px-4 py-2 ${isCopied ? 'bg-brand-950' : 'bg-brand hover:opacity-60'}`} >{
          isCopied? 'Copied !' : 'Copy'
        }</button>
      </div>
    </div>
  )
}

export default AddLink