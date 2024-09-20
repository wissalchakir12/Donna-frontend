import React from 'react';
import './Panier.css';

export const Panier: React.FC = () => {
  return (
    <div className="panier-container">
      <div className='WelcomePanier'>Vos articles sélectionnés.</div>
      <div className="panier-content">
        <div className="total-row">
          <span className="total-price">Total :</span>
          <div className="total-price">500 DH</div>
        </div>
        <button  className="btn-commander">Commander</button>
      </div>
    </div>
  );
};
