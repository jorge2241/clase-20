

/* 
TODO COMPONENTE RECIBE: props (propiedades) 
Las props siempre seran de tipo de dato objeto
La responsabilidad de un componente es mostrar/renderizar cierta pieza/parte/componente de la pagina
Lo QUE DIFERENCIA a un componente de una funcion es que el COMPONENTE retorna JSX
Y no se INVOCA se INSTANCIAN con la sintaxis "as a component"
*/
function ProductCard (props){
   
    let descuento_badge = null

    if (props.descuento && props.descuento > 0){

        descuento_badge = <span>%{props.descuento} OFF</span>
    }
   
    return (
        <div>
            <h2>Tv samsung 42"</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam accusamus qui iste tempore eius corporis nemo deserunt eaque nostrum, mollitia quasi! Ea tenetur nesciunt aperiam incidunt rerum voluptate, tempore labore.</p>
            
            <span>Precio: ${props.precio} ARS</span>
            
            <button>Comprar</button>
        </div>
    )
}
export default ProductCard