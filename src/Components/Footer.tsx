import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const App: React.FC = () => {
  return (
    <MDBFooter style={{ backgroundColor: 'white '}} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span style={{fontWeight:'bold'}}>Connectez-vous avec nous sur les réseaux sociaux :</span>
        </div>

        <div>
          
          <a href='https://www.instagram.com/donnaelegante1?igsh=MWFmMWF4YXh2aWJzeA== ' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon fab icon="whatsapp" />
          </a>
          
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Donna Elegante
              </h6>
              <p>
              Découvrez les dernières tendances en matière de mode et de textile. 
              Qualité supérieure et design à des prix compétitifs pour toute femme.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Produits</h6>
              <p>
                
                  Robes
               
              </p>
              <p>
               
                  Ensembles
               
              </p>
              <p>
                
                  Chemises
               
              </p>
              
            </MDBCol>

         

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Casablanca, Maroc
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                d56145759@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 212 764019413
              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'white' }}>
        © 2024 Copyright:
        <a style={{textDecoration:'none'}} className='text-reset fw-bold'>
          Donna Elegante
        </a>
      </div>
    </MDBFooter>
  );
};

export default App;
