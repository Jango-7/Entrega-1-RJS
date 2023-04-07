import { Link, useNavigate } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({item}) =>{

    // ==== contexto
    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate (-1)
    }

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }
        
        agregarAlCarrito(newItem)
    }

    
    return (
        
        <div className="container my-5">
            <h3>{item.product}</h3>
            <img src={item.image} alt={item.product} />
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>

            {
                isInCart(item.id)
                    ? <Link to="/cart" className="btn btn-success">Finalizar compra</Link>
                    : <ItemCount
                        max={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        handleAgregar={handleAgregar}
                    />
            }

            <br/>
            <button onClick={handleVolver} className="btn btn-primary">Volver</button>
        </div>
    )
}

export default ItemDetail