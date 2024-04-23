import backgroundImage from '../assets/images/bg-boost-mobile.svg'
const ShortLink = () => {
  return (
    <div className="bg-brand-950 shadow-md p-4 rounded-md space-y-4 w-full relative h-36 -top-[315px]" style={{backgroundImage: `url(${backgroundImage})`}} >
       <div className=''>
            <input className='rounded-md w-full border px-4 py-2' type="text" placeholder='Shorten a link here...' />
        </div> 
        <div className=''>
            <button className='border rounded-md bg-brand font-bold text-xl text-white px-4 py-2 text-center w-full'>Shorten it!</button>
        </div>  
    </div>
  )
}

export default ShortLink