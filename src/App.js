
import { useState } from 'react';
import Banner from './componetes/Banner/Banner';
import Formulario from './componetes/Formulario';
import Rodape from './componetes/Rodape/rodape';


import Time from './componetes/time';


function App() {
  
  const mebros =[ {
    nome:'TOP lane',
    corForte:'#FFBA05',
    corFraca:'#FFF5D9'
  },
  {
    nome:'JUNGlE lane',
    corForte:'#57c278',
    corFraca:'#d9f7e9',
  },
  {
    nome:'MID lane',
    corForte:'#82CFFA',
    corFraca:'#E8F8FF',
  },
  {
    nome:'SUPORTE',
    corForte:'#DB6EBF',
    corFraca:'#FAE9F5',
  },
  {
    nome:'AD Carry',
    corForte:'#E06B69',
    corFraca:'#FDE7E8',
  }
]
   const[jogadores, setJogadores]=useState([])
   const aoNovoJogadorAdicinado =(jogador)=>{
    console.log(jogador)
    setJogadores([...jogadores, jogador])
   }
   return ( 
    <div className="App">
      <Banner/>
      <Formulario 
      funçao={mebros.map(opiçao=>opiçao.nome)} 
      aoJogadorCadastrado={jogador=>aoNovoJogadorAdicinado(jogador)} /> 
      
      {mebros.map(time=><Time
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corForte} 
      corSegundaria={time.corFraca}
      jogadores={jogadores.filter(jogador=>jogador.funçao==time.nome)}
      />)}
      <Rodape/>
      
    </div>
  );
}

export default App;
