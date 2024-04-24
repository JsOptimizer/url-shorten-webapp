import { useState } from 'react'
import backgroundImageM from '../assets/images/bg-shorten-mobile.svg'
import backgroundImageD from '../assets/images/bg-shorten-desktop.svg'

import AddLink from './AddLink'
const ShortLink = () => {
  const mobile = false
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const [listLink, setListLink] = useState<string []>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (event: any) => {
    setInput(event.target.value)
    setError('')
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (input === '') {
      setError('Please enter a link')
    } else {
      setListLink([...listLink, input]);
      setInput('')
      setSubmitted(true)
    }
  }
  return (
    <div>
      <form className="lg:flex bg-brand-950 lg:h-32 shadow-md p-4 rounded-md space-y-4 lg:space-y-0 w-full lg:gap-x-4 justify-between items-center lg:px-12 " style={{ backgroundImage: mobile? `url(${backgroundImageM})` : `url(${backgroundImageD})`}} >
        <div className='lg:w-[75%]'>
          <input value={input} onChange={handleChange} className={`h-14 outline-none rounded-md w-full border px-4 py-2 ${error ? 'border-secondary' : ''}`} type="text" placeholder='Shorten a link here...' />
          {
            error && <p className='text-secondary'>{error}</p>
          }
        </div>
        <div className='lg:w-[25%] '>
          <button onClick={handleSubmit} className='h-14 border rounded-md bg-brand hover:opacity-60 font-bold text-xl text-white px-4 py-2 text-center w-full'>Shorten it!</button>
        </div>
      </form>
      {
        submitted && listLink.map((link, index) => (
          <AddLink key={index} link={link} newLink={'http://test.com'} />
        ))
      }
    </div>

  )
}

export default ShortLink