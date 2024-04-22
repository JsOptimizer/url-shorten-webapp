import logo from '../assets/images/logo.svg'
import working from '../assets/images/illustration-working.svg'
import { useState } from 'react'
import { MenuModal } from '../components'

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const menuStatus = !isOpen ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="font-bold w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 text-secondary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
    )
    return (
        <div>
            <div className=" flex justify-between items-center p-6">
                <img src={logo} alt="Logo" />
                <button onClick={() => setIsOpen(!isOpen)}>
                    {menuStatus}
                </button>
            </div>
             {
                    isOpen && <MenuModal />
                }
            <div className='pl-4'>
                <img src={working} alt="Working illustration" />
            </div>
        </div>
    )
}

export default Header