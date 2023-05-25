import { useState } from 'react'
import AboutUs from "./pages/AboutUs.jsx";
import GlobalStyle from "./components/GlobalStyle.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="App">
        <GlobalStyle/>
       <AboutUs/>
     </div>
  )
}

export default App
