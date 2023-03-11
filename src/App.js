import Barra from './Components/Barra';
import Piedepagina from './Components/Piedepagina';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import React from 'react';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import Home from './Views/Home';
import Busqueda from './Views/Busqueda';
import Pokemon from './Views/Pokemon';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Barra></Barra>
        <Routes>
          <Route path="/" element={<Home></Home>}>Home</Route>
          <Route path="/pokemones" element={<Busqueda></Busqueda>}></Route>
          <Route path="/pokemones/:id" element={<Pokemon></Pokemon>}>Pokemones</Route>
          <Route path="*" element={<div>¡¡Error!!</div>}></Route>
        </Routes>
        <Piedepagina></Piedepagina>
      </BrowserRouter>
    </div>
  );
}

export default App;
