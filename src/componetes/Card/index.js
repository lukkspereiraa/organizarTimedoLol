import'./Carde.css'

const Card=({nome,maen,imagem,corDeCima})=>{
   


    return(<div className='card'>
    
        <div className='parteDeCims' style={{backgroundColor:corDeCima}}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='parteDeBaixo'>
            <h4>{nome}</h4>
            <h5>{maen}</h5>
        </div>
    </div>

    )
}

export default Card