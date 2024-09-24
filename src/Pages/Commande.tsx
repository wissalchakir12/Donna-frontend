import React from 'react'
import './Styles/Commande.css';
import Input from '../Components/Input';

export const Commande = () => {
  return (
    <div className='main'>
        <div className='text'>
          <div>CONFIRMEZ <img style={{overflow:'hidden', width:'14rem'}} src="src/assets/rays.png"/></div> VOTRE COMMANDE
        </div>
        <div className='form'>
          <div className="field">
            <p>Nom</p>
            <p>Prenom</p>
            <p>Telephone</p>
            <p>Mail</p>
            <p>Adresse</p>
          </div>
          <div className="inputs">
            <Input width={70} type='text'/>
            <Input width={70} type='text'/>
            <Input width={50} type='phone'/>
            <Input width={80} type='mail'/>
            <Input width={110} type='text'/>
          </div>
        </div>
        <p className='total'>Total :</p>
        <button className='confirm'>Confirmer</button>
    </div>
    
  )
}
