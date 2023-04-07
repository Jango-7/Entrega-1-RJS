import { useContext } from 'react'
import './CartWidget.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

    const { totalCantidad } = useContext(CartContext)

    return (

        <Link to="/cart" style={{
            fontSize: '26px',
            color: 'white'
        }}>
            <img src="./img/carrito.png" alt="carrito" className="cart" />
            <span>{totalCantidad()}</span>
        </Link>

    )

}