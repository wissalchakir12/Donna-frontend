import React, { useState } from 'react';
import './Panier.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faAngleUp, faAngleDown, faTrash } from '@fortawesome/free-solid-svg-icons';

interface Product {
  id: number;
  nom: string;
  prix: number;
  image: string;
  quantity?: number; // Ajout de quantity pour chaque produit
}

interface PanierProps {
  cartItems: Product[];
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>; // Ajout de setCartItems pour mettre à jour le panier
}

export const Panier: React.FC<PanierProps> = ({ cartItems, setCartItems }) => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(() =>
    cartItems.reduce((acc, item) => {
      acc[item.id] = item.quantity || 1;
      return acc;
    }, {} as { [key: number]: number })
  );

  // Fonction pour ajouter un article au panier ou augmenter la quantité
  const addToCart = (product: Product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
      // Si le produit existe déjà, on augmente la quantité
      const updatedCartItems = cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
      setCartItems(updatedCartItems);
      localStorage.setItem('panier', JSON.stringify(updatedCartItems));
    } else {
      // Si le produit n'existe pas, on l'ajoute avec une quantité initiale de 1
      const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(updatedCartItems);
      localStorage.setItem('panier', JSON.stringify(updatedCartItems));
    }
  };

  const handleIncrement = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
    const updatedCartItems = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('panier', JSON.stringify(updatedCartItems));
  };

  const handleDecrement = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
    const updatedCartItems = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) }
        : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('panier', JSON.stringify(updatedCartItems));
  };

  const handleRemove = (id: number) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('panier', JSON.stringify(updatedCartItems));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const quantity = quantities[item.id] || item.quantity || 1;
    return total + item.prix * quantity;
  }, 0);

  return (
    <div className="panier-container">
      <div className="WelcomePanier">Vos articles sélectionnés.</div>

      {cartItems.length === 0 ? (
        <div className="panier-content" style={{ justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faBasketShopping} className="fadeIn" style={{ fontSize: '5rem', borderRadius: '70%', color: 'black' }} />

            <p className='fadeIn' style={{ fontWeight: 'bolder' }}>Votre panier est vide</p>
          </div>
        </div>
      ) : (
        <div className="panier-content">
          <div className="cart-items-list">
            {cartItems.slice().reverse().map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.nom} className="cart-item-image" />
                <div className="quantite">
                  <button className="buttonquantity" onClick={() => handleDecrement(item.id)}>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                  <input
                    type="text"
                    value={quantities[item.id] || item.quantity || 1}
                    readOnly
                    style={{ width: '30px', textAlign: 'center', backgroundColor:'white', color:'black', border:'none' }}
                  />
                  <button className="buttonquantity2" onClick={() => handleIncrement(item.id)}>
                    <FontAwesomeIcon icon={faAngleUp} />
                  </button>
                </div>
                <div className="cart-item-details">
                  <div className="itemName">{item.nom}</div>
                  <div className="itemTotalPrice">{item.prix * (quantities[item.id] || item.quantity || 1)} DH</div>
                  <button className="remove-item-button" style={{marginRight:'95px',color:'#c09a9a', backgroundColor:'rgb(231, 231, 231)', border:'none', borderRadius:'7px'}} onClick={() => handleRemove(item.id)}>
                    <FontAwesomeIcon icon={faTrash} style={{backgroundColor:'rgb(231, 231, 231)'}}/> Supprimer
                  </button>
                </div>
              </div>
            ))}

            <div className="total-row">
              <span className="total-price">Total :</span>
              <div className="total-price">{totalPrice} DH</div>
            </div>
          </div>
        </div>
      )}

      <div className="part2">
       <a href="/Commande"><button className="btn-commander">Commander</button></a> 
      </div>
    </div>
  );
};
