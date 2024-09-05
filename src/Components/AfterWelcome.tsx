import React from 'react';
import kamio from '../assets/kamio_khder.png';
import paiementKhder from '../assets/paiement_khder.png';
import clothesKhder from '../assets/clothes_khder.png';
import './styles.css'; // Import the CSS file

export const AfterWelcome = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px 20px',
      }}
    >
      <div className="text-container">
        Donna Elegante...
        <div style={{ marginTop: '20px' }}>
          Nos vêtements de qualité, un style unique pour vous, avec un service incomparable et satisfaisant.
        </div>
      </div>
      <div style={{width:'350px'}}></div>
      <div style={{ display: 'flex', flexDirection: 'row',  justifyContent: 'center' }}>
        <div className="icon-container">
          <img src={kamio} alt="Kamio" />
          <div>Livraison rapide dans tout le Maroc</div>
        </div>
        <div className="icon-container">
          <img src={clothesKhder} alt="Clothes" />
          <div>Vêtements de qualité</div>
        </div>
        <div className="icon-container">
          <img src={paiementKhder} alt="Paiement Khder" />
          <div>Paiement à la livraison</div>
        </div>
      </div>
    </div>
  );
};
