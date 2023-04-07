import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrash3Fill } from 'react-icons/bs'
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>No hay nada por aquí</h2>
                <hr/>
                <Link to="/" className="btn btn-primary">Regresar al menú principal</Link>
            </div>
        )
    }

    return (
        <div className='container my-5'>

            <h2>Resumen de compra</h2>
            <hr />

            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h4>{prod.product}</h4>
                        <img src={prod.image} alt={prod.product} />
                        <p>Precio total: ${prod.price * prod.cantidad}</p>
                        <small>Cantidad: {prod.cantidad}</small>
                        <br />
                        <button onClick={() => eliminarDelCarrito(prod.id)} className="btn btn-warning"><BsFillTrash3Fill /></button>
                        <hr />
                    </div>
                ))
            }

            <h3>TOTAL: ${totalCompra().toFixed(2)}</h3>
            <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carrito</button>
        </div>
    )
}

export default Cart