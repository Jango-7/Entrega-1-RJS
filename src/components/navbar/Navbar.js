import './Navbar.css'
import {CartWidget} from '../CardWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {

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
                    
                    <CartWidget />
                </nav>


            </div>
        </header>

    )
}