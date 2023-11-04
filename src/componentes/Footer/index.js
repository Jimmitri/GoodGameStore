import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import Mapa from '../../images/mapa.PNG';


export const Footer = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <footer>
      <div className='Redes'>
        <div className='redes'>
          <h3 className='t'>CONTACTENOS POR</h3>
          <a href='https://web.facebook.com/' target='_blank' rel='noreferrer' className='i'>
            <ion-icon name="logo-facebook" ></ion-icon>
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href='https://web.whatsapp.com/' target='_blank' rel='noreferrer'>
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
        </div>
        <div className='enlaces'>
          <h3 className='t'>CONOCENOS!</h3>
          <Link to='/AcercaDe' onClick={handleScroll}>
            <h3 className='d'>Conoce más sobre nosotros</h3>
          </Link>
          <Link to='/TerminosyCondiciones' onClick={handleScroll}>
            <h3 className='d'>Terminos y Condiciones</h3>
          </Link>
        </div>
        <div className='mapa'>
          <h3 className='t'>NOS UBICAMOS EN</h3>
          <h3 className='y'>Jr. Iquique 127, Lima 15082</h3>
          <a href='https://www.google.com/maps/place/UNFV+Facultad+De+Ingenier%C3%ADa+Electr%C3%B3nica+e+Inform%C3%A1tica+-+Anexo+8/@-12.0513654,-77.0442403,18z/data=!4m6!3m5!1s0x9105c8cff13d4e3f:0x97427793910d7b1a!8m2!3d-12.0522233!4d-77.0439246!16s%2Fg%2F1td01k6g?authuser=0&entry=ttu/' target='_blank' rel='noreferrer'>
            <img src={Mapa} alt='ubicacion'/>
          </a>
        </div>
      </div>
    </footer>
  )
}
