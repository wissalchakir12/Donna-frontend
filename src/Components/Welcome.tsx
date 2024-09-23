import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './styles.css'; // Ensure the path is correct

const variants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const WelcomeMessage: React.FC = () => {
  return (
    <>
      <style>
        {`
          .boutique-button {
            background-color: white;
            border: none;
            padding: 10px 15px;
            cursor: pointer;
            color: #AAB396;
            font-size: 18px;
            border-radius: 5px;
            margin-top: 20px;
            transition: all 0.3s ease;
          }
          .boutique-button:hover {
            background-color: #AAB396;
            color: white;
          }
          @media (max-width: 768px) {
            .boutique-button {
              font-size: 16px;
              padding: 8px 12px;
            }
          }
        `}
      </style>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1 }}
        className="welcome-message"
      >
        <div>Bienvenue !</div>
        <div style={{ marginTop: '15px' }}>
          Découvrez l'élégance intemporelle avec <span style={{ color: '#AAB396' }}>Donna Elegante.</span>
        </div>
        <div className="action-container">
          <a href='/Boutique'>
            <button className="boutique-button">Shop now</button>
          </a>
          <div className="social-links">
            <a href='https://www.instagram.com/donnaelegante1?igsh=MWFmMWF4YXh2aWJzeA==' className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" />
            </a>
                <a href="https://wa.me/212764019413?text=Bonjour!" target="_blank" rel="noopener noreferrer" className='me-4 text-reset'> 
                  <MDBIcon fab icon="whatsapp" />
                </a>


          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WelcomeMessage;
