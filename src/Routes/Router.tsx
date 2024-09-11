import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { AboutUs } from "../Pages/AboutUs";
import { Boutique } from "../Pages/Boutique";


const Router = () => {
    return (
      <>
        <BrowserRouter>
          <Routes>
          <Route index element={<Home />} />
          <Route path="Boutique" element={<Boutique/>}/>
          <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  };
  
  export default Router;