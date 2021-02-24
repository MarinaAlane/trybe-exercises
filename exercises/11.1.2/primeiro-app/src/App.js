import React from 'react';
import './App.css';

const listas= ['levantar', 'escovar os dentes', 'tomar café'];

class App extends React.Component {
  render() {
    return (
      <ul>{ listas.map(listas => <li className='listas'>{ listas } </li>) } </ul>
    )
  }
}


export default App;
