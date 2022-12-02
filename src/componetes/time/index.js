import Card from '../Card'
import './time.css'

const Time = (props) => {
   
    const css = { backgroundColor: props.corSegundaria }
    const borda = { borderColor: props.corPrimaria }
    return (
       (props.jogadores.length > 0) && <section className='Time' style={css}>
            <h3 style={borda}>{props.nome}</h3>
            <div className='jogador'>
                {props.jogadores.map(jogador =>
                    <Card key={jogador.nome}
                    corDeCima={props.corPrimaria}
                    nome={jogador.nome} 
                    maen={jogador.maen} 
                    imagem={jogador.imagem}/>)}
            </div>

        </section>
    )
}

export default Time