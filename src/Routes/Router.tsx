import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { AboutUs } from "../Pages/AboutUs";
import { Boutique } from "../Pages/Boutique";
import { Commande } from "../Pages/Commande";
import { Contacteznous } from "../Pages/Contacteznous";


const Router = () => {
    return (
      <>
        <BrowserRouter>
          <Routes>
          <Route index element={<Home />} />
          <Route path="Boutique" element={<Boutique/>}/>
          <Route path="/AboutUs" element={<AboutUs />}/>
          <Route path="/Commande" element={<Commande />}/>
          <Route path="/Contacteznous" element={<Contacteznous />}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  };
  
  export default Router;