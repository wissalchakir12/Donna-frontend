// WelcomeMessage.tsx
import React from 'react';
import { motion, Variants } from 'framer-motion';

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './styles.css'; // Assurez-vous que le chemin d'accès est correct

const variants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const WelcomeMessage: React.FC = () => {
  return (
    <>
     <style>
        {`
          .boutique-button {
            background-color: white;
            border: none;
            padding: 5px 7px;
            cursor: pointer;
            color:#AAB396;
            font-size:25px;
            border-radius:5px;
           margin-top :20px;

          }
          .boutique-button:hover {
            background-color: #AAB396;
            color: white;
          }
        `}
      </style>
     
    
    <motion.div
      initial="hidden"  // État initial
      animate="visible"  // État d'animation
      variants={variants}  // Variantes définissant l'animation
      transition={{ duration: 1 }}  // Durée de l'animation
      className="welcome-message"
      
    >
      
      <div >Bienvenue !</div> 
      <div style={{marginTop:'15px'}}>Découvrez l'élégance intemporelle avec <span style={{color:'#AAB396'}}>Donna Elegante.</span> </div>
      <div style={{display:'flex', flexDirection:'row'}}>
      <a><button className="boutique-button">Shop now</button></a>
     
      <div style={{marginLeft:'150px',marginTop:'10px'}}>  
        
         <a style={{marginLeft:'50px'}}  href='https://www.instagram.com/donnaelegante1?igsh=MWFmMWF4YXh2aWJzeA== ' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a style={{marginLeft:'20px'}}href='#' className='me-4 text-reset'>
            <MDBIcon fab icon="whatsapp" />
          </a>
          
        </div>
      </div>
      
   
      
    </motion.div>
     </>
    
  );
};

export default WelcomeMessage;
