
import { useState } from 'react'
import Botao from '../Botao'
import CText from '../cText/cText'
import Lista from '../Lista'
import './forms.css'
const Formulario = (props) => {
   
   const [nome,  setNome]=useState('')
   const [maen,  setMaen]=useState('')
   const [imagem, setImahem]=useState('')
   const [funçao, setFunçao]=useState('')
   
   const clik=(evento)=>{
    evento.preventDefault()    
 props.aoJogadorCadastrado({
    nome,
    maen,
    imagem,
    funçao,
 })
    setNome('')
    setMaen('')
    setFunçao('')
    setImahem('')}

    return (
        <section className='Formulario'>
            <form onSubmit={clik}>
                <h2>Prencha os dados para criar um CARD do jogador</h2>
                <CText 
                obrigatorio={true} 
                label='Nick'  
                placeholder='Digite o Nike do jogador'
                valor={nome}
                alterando={valor => setNome(valor)} />
               
                <CText 
                obrigatorio={true}
                label='Maen' 
                placeholder='Digite o principal campeao do jogador'
                valor={maen}
                alterando={valor => setMaen(valor)}
                 />
                
                <CText 
                label='Imagen' 
                placeholder='Indique o caminho da imagem'
                valor={imagem}
                alterando={valor => setImahem(valor)} />
               
                <Lista 
                obrigatorio={true}  
                label='Funçao' 
                itens={props.funçao}
                valor={funçao}
                escrevendo={valor => setFunçao(valor)}/>
                
                <Botao texto='criar card'/>
            </form>
        </section>
    )
}
export default Formulario