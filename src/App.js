import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import useFetch from './hooks/useFetch';


function App() {
  const [searchData] = useFetch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < searchData.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div className="App container mt-4">
      <NavBar></NavBar>
      <h1 className="text-center mb-4">TIENDA POKÉMON</h1>
      <div className="row">
        {searchData.slice(currentIndex, currentIndex + itemsPerPage).map((pokemon, index) => (
          <div className="col-12 col-md-4 mb-4" key={index}>
            <div className="carta card border-1 border-success p-2 mb-2 border-opacity-25 bg-transparent">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentIndex + index + 1}.png`}
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
      <div className="d-flex justify-content-between mt-4">
        <button onClick={handlePrev} disabled={currentIndex === 0} className="btn btn-primary">
          Anterior
        </button>
        <button onClick={handleNext} disabled={currentIndex + itemsPerPage >= searchData.length} className="btn btn-primary">
          Siguiente
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;