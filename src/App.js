
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Pokes from './components/Pokes';
import Portada from './components/Portada';
import Separador from './components/Separador';

const Pokemons_API = [
  {id: 1, nombre:'Sableye'},
  {id: 2, nombre:'Vaporeon'},
  {id: 3, nombre:'Gardevoir'},
  {id: 4, nombre:'Mimikyu'},
  {id: 5, nombre:'Gengar'},
  {id: 6, nombre:'Pikachu'},
  {id: 7, nombre:'Charmander'},
  {id: 8, nombre:'Mew'}
]

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <Header 
        texto="Pokedex"
        />

        <Portada/>

        <Separador
          texto="Pokedex random del dia"
        />

        <Pokes 
        texto="Es peligroso andar por la hierba alta sin Pokémon..."
        LDinos={Pokemons_API}/>

        <Footer className="container-footer"
          texto="Equipo 4"
        />
      </div>
    </div>
  );
}

export default App;
