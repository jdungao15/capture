import {useState} from 'react';
import AboutUs from "./pages/AboutUs.jsx";
import GlobalStyle from "./components/GlobalStyle.jsx";
import Nav from "./components/Nav.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import OurWork from "./pages/OurWork.jsx";
import {Route, Routes, useLocation} from 'react-router-dom';
import MovieDetail from "./pages/MovieDetail.jsx";
//Animation
import {AnimatePresence} from "framer-motion";

function App() {
   const location = useLocation();
   return (
      <div className="App">
         <GlobalStyle/>
         <Nav/>
         <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
               <Route path="/*">
                  <Route index element={<AboutUs/>}/>
                  <Route path="contact" element={<ContactUs/>}/>
                  <Route path="work" element={<OurWork/>}/>
                  <Route path="work/:id" element={<MovieDetail/>}/>

               </Route>
            </Routes>
         </AnimatePresence>
      </div>
   );
}

export default App;
