import './App.css';
import NavBar from './components/NavBar';
import useFetch from './hooks/useFetch';

function App() {
  const [searchData] = useFetch(); 

  return (
    <div className="App container mt-4">
      <NavBar></NavBar>
      <h1 className="text-center mb-4">TIENDA POKÉMON</h1>
      <div className="row">
        {searchData.map((pokemon, index) => (
          <div className="col-12 col-md-4 mb-4" key={index}>
            <div className="carta card border-1 border-success p-2 mb-2 border-opacity-25 bg-transparent">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                className="card-img-top"
                alt={pokemon.name}
              />
              <div className="card-body text-center">
                <h5>{pokemon.name}</h5>
                <button className="boton">Comprar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
