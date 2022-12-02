import './cTexto.css'




function CText(props) {
    const escrevendo = (evento) => {
        props.alterando(evento.target.value)
    }
    return (
        <div className="campo">
            <label>
                {props.label}   
            </label>
            <input value={props.valor} onChange={escrevendo} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CText