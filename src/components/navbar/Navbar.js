import './Navbar.css'
import {CartWidget} from '../CardWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const Navbar = () => {
    const { cart } = useContext(CartContext)

    return (

        <header className="header">
            <div className="headerContainer">
                <Link to='/'>
                <img src='./img/logo.png' alt="logo" className='headerLogo'/>
                </Link>

                <nav className="navbar">
                    <Link to="/" className="navbarLink">Inicio</Link>
                    <Link to="/productos/Instrument" className="navbarLink">Instrumentos</Link>
                    <Link to="/productos/Amplifier" className="navbarLink">Amplificadores</Link>
                    <Link to="/productos/Pedal" className="navbarLink">Pedales</Link>
                    <Link to="/contacto" className="navbarLink">Contacto</Link>
                    
                    { cart.length > 0 && <CartWidget /> }
                    
                </nav>


            </div>
        </header>

    )
}