import { useEffect, useState } from 'react';
import axios from 'axios';
import Component from '../Components/platCard2';
import './BoutiqueStyle.css'; // Assurez-vous que le fichier CSS est bien importé
import { Panier } from '../Components/Panier';

interface Product {
  id: number;
  nom: string;
  prix: number;
  image: string; // Contiendra l'image encodée en base64
}

export const Boutique = () => {
  const [produits, setProduits] = useState<Product[]>([]);
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
              return produit; // Si l'image échoue, retourner le produit sans image
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
  }, []);
  
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
            onClick={() => {
              /* Fonction pour gérer le clic */
            }}
          />
        ))}
      </div>
      <div className="panier">
        <Panier />
      </div>
    </div>
  );
};
