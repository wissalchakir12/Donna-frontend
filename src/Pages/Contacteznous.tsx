import React from 'react';
import './Styles/Contacteznous.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWhatsapp ,faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Contacteznous = () => {
  return (
    <div className='Contact'>
      <div className='txt'>Contact Us</div>
      <div className='cadre'>
        <div className='wtsp'> 
          <a style={{textDecoration:'none'}} href="https://wa.me/212764019413?text=Bonjour!" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon style={{marginTop:'5px',fontSize:'25px',color:'#B5CFB7',marginLeft:'2vw'}} icon={faWhatsapp} />
            <span style={{marginLeft:'1.5vw',fontSize:'20px',color:'#987070'}}>Sur Whatssap : <span style={{marginLeft:'10vw'}}>+212764019413</span> </span>
            </a>
        </div>
        <div className='insta'>
           <a style={{textDecoration:'none'}} href='https://www.instagram.com/donnaelegante1?igsh=MWFmMWF4YXh2aWJzeA=='>
            <FontAwesomeIcon style={{marginTop:'5px',fontSize:'25px',color:'#B5CFB7',marginLeft:'2vw'}} icon={faInstagram} />
            <span style={{marginLeft:'1.5vw',fontSize:'20px',color:'#987070'}}> Sur Instagram : <span style={{marginLeft:'10vw'}}>donnaelegante1</span> </span>
          </a>
        </div>
        <div className='mail'>
          <a   style={{textDecoration:'none'}} href="mailto:d56145759@gmail.com?subject=Demande%20de%20contact&body=Bonjour!%20Je%20souhaite%20plus%20d'informations.">
          <FontAwesomeIcon style={{marginTop:'5px',fontSize:'25px',color:'#B5CFB7',marginLeft:'2vw'}} icon={faEnvelope} />
          <span style={{marginLeft:'1.5vw',fontSize:'20px',color:'#987070'}}> Sur Mail : <span style={{marginLeft:'10vw'}}>d56145759@gmail.com</span> </span>
          </a>
          
        </div>

    

      </div>
      
    </div>
  );
};
