

const ItemDetail = ({item}) =>{
    
    return (
        
        <div className="container my-5">
            <h3>{item.product}</h3>
            <img src={item.image} alt={item.product} />
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
        </div>
    )
}

export default ItemDetail