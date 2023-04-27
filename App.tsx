import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './table';
import './tableStyles.css';

type Pokemon = {
  id: number;
  name: {
    english: string;
  };
  type: string[];
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    Speed: number;
  };
};

const App = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get<Pokemon[]>(
        'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json'
      );
      setPokemonData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '600px', width: '100%' }}>
      <h1 className="table-title">Lista de Pokémons</h1>
        <Table data={pokemonData} />
      </div>
    </div>
  );
  
};

export default App;
