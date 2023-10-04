import './App.css'
import { BrowserRouter,Routes, Route } from "react-router-dom";

import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import IndexPage from './pages/IndexPage';
import NosotrosPage from './pages/NosotrosPage';
import ServiciosPage from './pages/ServiciosPage';
import TrabajosPage from './pages/TrabajosPage';
import ContactoPage from './pages/ContactoPage';


function App() {
  return(
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<IndexPage />}/>
        <Route path="/Nosotros" element ={<NosotrosPage />} />
        <Route path="/Servicios" element={<ServiciosPage />} />
        <Route path="/Trabajos" element={<TrabajosPage />} />
        <Route path="/Contacto" element={<ContactoPage />} />
      </Routes>
      </BrowserRouter>
      
      <Footer/>
    
    </div>
  )
}

export default App;
