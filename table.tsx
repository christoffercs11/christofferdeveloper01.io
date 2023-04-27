import React from 'react';
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

type Props = {
  data: Pokemon[];
};

const Table = ({ data }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>HP</th>
          <th>Attack</th>
          <th>Defense</th>
          <th>Speed</th>
        </tr>
      </thead>
      <tbody>
        {data.map((pokemon) => (
          <tr key={pokemon.id}>
            <td>{pokemon.id}</td>
            <td>{pokemon.name.english}</td>
            <td>{pokemon.type.join(', ')}</td>
            <td>{pokemon.base.HP}</td>
            <td>{pokemon.base.Attack}</td>
            <td>{pokemon.base.Defense}</td>
            <td>{pokemon.base.Speed}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;