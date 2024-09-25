import React from 'react'
import './Styles/Commande.css';
import Input from '../Components/Input';

export const Commande = () => {
  return (
    <>
      
      <div className='main'>
        <img src="src/assets/leaf1.png" className='leaf1'/>
        <img src="src/assets/leaf2.png" className='leaf2'/>
        <img src="src/assets/leaf3.png" className='leaf3'/>
          <div className='text'>
            <div>CONFIRMEZ <img style={{overflow:'hidden', width:'14rem'}} src="src/assets/rays.png"/></div> VOTRE COMMANDE
          </div>
          <div className='form'>
            <div className="field">
              <p>Nom Complet</p>
              <p>Telephone</p>
              <p>Mail</p>
              <p>Adresse</p>
            </div>
            <div className="inputs">
              <Input placeholder='Nom Complet' width={70} type='text' className='name'/>
              <Input placeholder='Telephone' width={50} type='phone' className='phone'/>
              <Input placeholder='Email' width={80} type='mail' className='mail'/>
              <Input placeholder='Adresse' width={80} type='text' className='adresse'/>
            </div>
          </div>
          <p className='total'>Total : </p>
          <button className='confirm'>Confirmer</button>
      </div>
    </>
  )
}
