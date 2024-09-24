import React from 'react';
import './Styles/AboutUsStyles.css'; // Assure-toi que le chemin vers le fichier CSS est correct

export const AboutUs: React.FC = () => {
  return (
    <div className="aboutUsContainer">
      <div className="aboutUsContent">
        <div className="aboutUsImage">
          <img src='src/assets/aboutus3.jpg' alt="About Us" />
        </div>
        <div className="aboutUsSection">
          <h1 className="aboutUsTitle">Qui sommes-nous ?</h1>
          <p className="aboutUsText">
            Chez Donna Elegante, nous croyons que chaque femme mérite de se sentir belle et confiante. Fondée avec la passion de proposer des vêtements tendance et raffinés, notre boutique est dédiée à offrir une mode intemporelle qui met en valeur la féminité et le style unique de chacune.
            <br />
            Nos pièces, sélectionnées avec soin, allient qualité et confort, pour s'adapter à toutes les occasions. Donna Elegante est la destination idéale pour exprimer votre élégance au quotidien.
            <br />
            Découvrez notre collection et laissez-vous inspirer. L'élégance est à portée de main chez Donna Elegante.
            <br />
            Bienvenue
          </p>
        </div>
      </div>
    </div>
  );
}
