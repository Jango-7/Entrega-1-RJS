import './Navbar.css'
import {CartWidget} from '../CardWidget/CartWidget'

export const Navbar = () => {

    return (

        <header className="header">
            <div className="headerContainer">
                {/* <h1 className="headerLogo">Logo</h1> */}
                <img src='./img/logo.png' alt="logo" className='headerLogo'/>

                <nav className="navbar">
                    <a href="#" className="navbarLink">Instrumentos</a>
                    <a href="#" className="navbarLink">Pedales</a>
                    <a href="#" className="navbarLink">Amplificadores</a>

                    <CartWidget />
                </nav>


            </div>
        </header>

    )
}