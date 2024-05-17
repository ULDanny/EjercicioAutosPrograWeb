export default function Post(props){
    return (
            <article className="autoInfo">
                <h2>Auto</h2>
                <p>Marca: { props.marca }</p> 
                <p>Modelo: {props.modelo}</p>
                <p>
                    placa { props.placa }
                </p>
            </article>
    )
}