import { Navbar } from './components/navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Instrumentos from './components/Instrumentos/Instrumentos';
import Amplificadores from './components/Amplificadores/Amplificadores';
import Pedales from './components/Pedales/Pedales';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

//import './App.css'

function App() {
  return (

    <BrowserRouter>

    <Navbar />

    <Routes>
      <Route path="/" element={ <ItemListContainer /> } />
      <Route path="/productos/:categoryId" element={ <ItemListContainer /> } />
      <Route path="/detail/:itemId" element={ <ItemDetailContainer /> } />
      <Route path="/Instrument" element={ <Instrumentos /> } />
      <Route path="/Amplifier" element={ <Amplificadores /> } />
      <Route path="/Pedal" element={ <Pedales /> } />
      <Route path="*" element={ <Navigate to='/' /> } />
    </Routes>

    </BrowserRouter>

  );
}

export default App;
