import { Link } from "react-router-dom"

const Item = ( {item} ) => {

    return (
        <div className='col-3 m-2'>
            <img src={item.image} alt={item.product}></img>
            <h4>{item.product}</h4>
            <p>{item.description}</p>
            <p>Precio: <strong>${item.price}</strong></p>
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver detalle</Link>
        </div>
    )
}

export default Item