import React from 'react';
import './AboutUsStyles.css'; // Assure-toi que le chemin vers le fichier CSS est correct

export const AboutUs = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        minHeight: '0',
      }}>
        <div className="aboutUsImage" style={{ width: '50%', minHeight: '100%' }}>
          <img src='src/assets/aboutus3.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          backgroundColor: 'rgba(201, 215, 221,0.5)',
          padding: '50px 20px',
          boxSizing: 'border-box',
          justifyContent: 'center',
          alignItems: 'center'
        }} className="aboutUsSection">
          <div style={{ fontWeight: 'bold', fontFamily: 'Cormorant Garamond', fontStyle: 'italic', textAlign: 'center', width: '100%' }}>
            <h1 className="aboutUsTitle">Qui sommes-nous?</h1>
          </div>
          <p className="aboutUsText">
            Chez Donna Elegante, nous croyons que chaque femme mérite de se sentir belle et confiante. Fondée avec la passion de proposer des vêtements tendance et raffinés, notre boutique est dédiée à offrir une mode intemporelle qui met en valeur la féminité et le style unique de chacune.

            <br />Nos pièces, sélectionnées avec soin, allient qualité et confort, pour s'adapter à toutes les occasions. Donna Elegante est la destination idéale pour exprimer votre élégance au quotidien.

            Découvrez notre collection et laissez-vous inspirer. L'élégance est à portée de main chez Donna Elegante.
            <br />
            Bienvenue
          </p>
        </div>
      </div>
    </div>
  );
}
