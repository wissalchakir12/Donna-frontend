import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { AboutUs } from "../Pages/AboutUs";



const Router = () => {
    return (
      <>
        <BrowserRouter>
          <Routes>
          <Route index element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  };
  
  export default Router;