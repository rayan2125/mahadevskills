import React from "react";
import Home from "../Pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Aboutus from "../Pages/Aboutus";
import OurTeam from "../Pages/OurTeam";
import Cources from "../Pages/Cources";
import Blog from "../Pages/Blog";
import Certificates from "../Pages/Certificate";
import Contact from "../Pages/Contact";
const Routers=()=>{
    return(
        <Router>
         
         {/* Header */}
          <Header/>
          <Routes>
            <Route path='/' exact element={<Home />}  />
            <Route path='/about-us' exact element={<Aboutus />}  />
            <Route path='/our-team' exact element={<OurTeam />}  />
            <Route path='/cources' exact element={<Cources />}  />
            <Route path='/blog' exact element={<Blog />}  />
            <Route path='/certificate' exact element={<Certificates />}  />
            <Route path='/contact' exact element={<Contact />}  />
            
            
          </Routes>
          <Footer/>
          {/* footer */}
         </Router>
    )
}

export default Routers