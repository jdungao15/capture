import {useState} from 'react';
import AboutUs from "./pages/AboutUs.jsx";
import GlobalStyle from "./components/GlobalStyle.jsx";
import Nav from "./components/Nav.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import OurWork from "./pages/OurWork.jsx";
import {Route, Routes} from 'react-router-dom';

function App() {
   const [count, setCount] = useState(0);

   return (
      <div className="App">
         <GlobalStyle/>
         <Nav/>
         <Routes>
            <Route path="/" element={<AboutUs/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/work" element={<OurWork/>}/>
         </Routes>
      </div>
   );
}

export default App;
