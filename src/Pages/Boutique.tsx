import { useEffect, useState } from 'react';
import axios from 'axios';
import Component from '../Components/platCard2';

interface Product {
    id : number,
    nom : string,
    prix: number,
    image : string
}

export const Boutique = () => {
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get('http://localhost:8085/Produit');
        setProduits(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduits();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      {produits.map((item:Product) => (
        <Component
          key={item.id}
          name={item.nom}
          image={item.image}
          prix={item.prix}
          id={item.id}
          onClick={() => { /* Fonction pour gérer le clic */ }}
        />
      ))}
    </div>
  );
};
