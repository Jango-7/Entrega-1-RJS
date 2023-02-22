import { Navbar } from './components/navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

//import './App.css'

function App() {
  return (

    <div>

    <Navbar />
    <ItemListContainer greeting = "Los mejores accesorios para tus instrumentos y lo último en tecnología para que tus producciones estén al más alto nivel" />

    </div>
  );
}

export default App;
