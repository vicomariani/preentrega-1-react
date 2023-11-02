
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent'; 
import './index.css';
import ItemListContainer from './components/ItemListContainer/ItemListcontainer';
function App() {

  return <div>
    <NavBarComponent />
    <ItemListContainer greeting="¡Bienvenidos al paraíso de las plantas!" />
  </div>;
}

export default App;
