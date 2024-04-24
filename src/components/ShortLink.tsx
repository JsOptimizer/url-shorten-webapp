import { useState } from 'react'
import backgroundImage from '../assets/images/bg-boost-mobile.svg'
import AddLink from './AddLink'
const ShortLink = () => {
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
      <form className="lg:flex bg-brand-950 lg:h-32 shadow-md p-4 rounded-md space-y-4 w-full lg:gap-x-4 justify-between items-center lg:px-12 " style={{ backgroundImage: `url(${backgroundImage})` }} >
        <div className='lg:w-[75%]'>
          <input value={input} onChange={handleChange} className={`h-14  shadow-md rounded-md w-full border px-4 py-2 ${error ? 'border-secondary' : ''}`} type="text" placeholder='Shorten a link here...' />
          {
            error && <p className='text-secondary'>{error}</p>
          }
        </div>
        <div className='lg:w-[25%] '>
          <button onClick={handleSubmit} className='h-14 border rounded-md bg-brand font-bold text-xl text-white px-4 py-2 text-center w-full'>Shorten it!</button>
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