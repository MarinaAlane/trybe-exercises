import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';

const estouAprendendo = (conteudo) => {
  // eslint-disable-next-line no-undef
  return(<h2> Estou aprendendo {conteudo}</h2>)
}

class App extends React.Component  {
  render () {
    return (
      <div>  
       <HelloWorld />
       {estouAprendendo('React')}
        <span> Meu primeiro app react</span>
      </div>
    );
  }
}

export default App;
