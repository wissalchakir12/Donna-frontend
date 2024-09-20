import React from 'react';
import { Card } from 'flowbite-react';

interface Props {
  name: string;
  image: string; // Image en base64
  prix: number;
  id: number;
  onClick: () => void;
}

const Component: React.FC<Props> = ({ name, image, prix, id, onClick }) => {
  return (
    <Card style={{ width: '100%', maxWidth: '300px', borderRadius: '20px', margin: '0.5rem', boxSizing: 'border-box' }}>
      <div className="p-4 flex flex-col items-center">
        <img
          src={image} // Utilisation directe de l'image encodée en base64
          alt={name}
          style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '15px' }}
        />
        <h5 className="text-m font-semibold tracking-tight text-black dark:text-white my-4">
          {name}
        </h5>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <span className="text-xl text-black dark:text-white">{prix} MAD</span>
          <a
            
            onClick={onClick}
            style={{ backgroundColor: 'beige', padding: '5px 15px', cursor: 'pointer', borderRadius: '10px', textDecoration: 'none', color: 'black' }}
          >
            Acheter
          </a>
        </div>
      </div>
    </Card>
  );
};

export default Component;
