import { FooterLink, MediaIcons } from '../components'
const Footer = () => {
  return (
    <div className='py-12 bg-neutral-950'>
      <div className='text-center'>
        <p className='text-3xl text-white font-bold'>Shortly</p>
      </div>
      <FooterLink title={'Features'}>
        <div className='leading-8'>
          <li className='text-neutral text-center'>Link Shortening</li>
          <li className='text-neutral text-center'>Branded Links</li>
          <li className='text-neutral text-center'>Analytics</li>
        </div>
      </FooterLink>
      <FooterLink title={'Resources'}>
        <div className='leading-8'>
          <li className='text-neutral text-center'>Blog</li>
          <li className='text-neutral text-center'>Developers</li>
          <li className='text-neutral text-center'>Support</li>
        </div>
      </FooterLink>
      <FooterLink title={'Company'}>
        <div className='leading-8'>
          <li className='text-neutral text-center'>About</li>
          <li className='text-neutral text-center'>Our team</li>
          <li className='text-neutral text-center'>Careers</li>
          <li className='text-neutral text-center'>Contact</li>
        </div>
      </FooterLink>
        <MediaIcons />
  
    </div>
  )
}

export default Footer