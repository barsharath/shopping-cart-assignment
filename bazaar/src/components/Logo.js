import { Image } from 'react-bootstrap';
import logo2x from '../static/images/logo_2x.png';
import logoSmall from '../static/images/logo.png';

const Logo = () => {
  return (
    <>
      <Image src={logo2x} alt="Logo" className="w-100 d-none d-md-block" />
      <Image src={logoSmall} alt="LogoSmall" className='w-100 d-xs-block d-sm-block d-md-none' />
      
    </>
  )
}

export default Logo;