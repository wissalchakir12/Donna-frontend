import { useEffect, useState } from 'react';
import axios from 'axios';
import Component from '../Components/platCard2';
import './BoutiqueStyle.css';
import { Panier } from '../Components/Panier';

interface Product {
  id: number;
  nom: string;
  prix: number;
  image: string;
  quantity?: number; // Ajout du champ optional quantity pour le panier
}

export const Boutique = () => {
  const [produits, setProduits] = useState<Product[]>([]);
  const [panier, setPanier] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get('http://localhost:8085/produits');
        const produitsData: Product[] = response.data;

        const produitsWithImages = await Promise.all(
          produitsData.map(async (produit) => {
            try {
              const imageResponse = await axios.get(
                `http://localhost:8085/produits/${produit.id}/image`
              );
              
              const base64Image = `data:image/jpeg;base64,${imageResponse.data.trim()}`;
              return { ...produit, image: base64Image };
            } catch (imageError) {
              console.error(`Erreur lors du chargement de l'image du produit ${produit.id}`, imageError);
              return produit;
            }
          })
        );

        setProduits(produitsWithImages);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduits();

    // Charger le panier depuis le localStorage au démarrage
    const storedPanier = JSON.parse(localStorage.getItem('panier') || '[]');
    setPanier(storedPanier);
  }, []);

  const ajouterAuPanier = (produit: Product) => {
    // Vérifiez si le produit est déjà présent dans le panier
    const produitExistant = panier.find(item => item.id === produit.id);

    let updatedPanier;

    if (produitExistant) {
      // Si le produit existe, on met à jour la quantité dans le panier
      updatedPanier = panier.map(item =>
        item.id === produit.id
          ? { ...item, quantity: (item.quantity || 1) + 1 } // Incrémentez la quantité
          : item
      );
    } else {
      // Si le produit n'existe pas, on l'ajoute avec une quantité initiale de 1
      updatedPanier = [...panier, { ...produit, quantity: 1 }];
    }

    setPanier(updatedPanier);
    localStorage.setItem('panier', JSON.stringify(updatedPanier));
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', boxSizing: 'border-box' }}>
      <div className="products" style={{ padding: '10px', boxSizing: 'border-box' }}>
        {produits.map((item: Product) => (
          <Component
            key={item.id}
            name={item.nom}
            image={item.image}
            prix={item.prix}
            id={item.id}
            onClick={() => ajouterAuPanier(item)} 
          />
        ))}
      </div>
      <div className="panier">
        <Panier cartItems={panier} setCartItems={setPanier} /> {/* Passer setCartItems */}
      </div>
    </div>
  );
};
