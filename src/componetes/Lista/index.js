import './Lista.css'
const Lista = (props) => {

    return (
        <div className='Lista'>
            <label>{props.label}</label>
            <select onChange={evento =>props.escrevendo(evento.target.value)} required={props.obrigatorio} value={props.valor} >
                <option value=""></option>
                 {props.itens.map(item=>{
                 return <option key={item}>{item}</option>
                 })}
                  </select>
        </div>
    )
}
export default Lista