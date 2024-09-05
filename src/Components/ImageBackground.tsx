import React from 'react';
import backgroundImage from '../assets/back5.jpg';
import WelcomeMessage from './Welcome';
import Navbar from './Navbar';

export const ImageBackground = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Appliquez l'image de fond
        backgroundSize: 'cover', // Ajustez la taille de l'image
        backgroundPosition: 'center', // Centrez l'image
        width: '99vw', // Assurez-vous que la largeur est correcte
        height: '100vh', // Assurez-vous que la hauteur est correcte
        backgroundRepeat: 'no-repeat', // Évitez la répétition de l'image
        
       
       
       
        
      }}
     
      
    >
      
      <WelcomeMessage />
    </div>
  );
};
