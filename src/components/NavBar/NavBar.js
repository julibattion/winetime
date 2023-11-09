import CartWidget from "../CartWidget/CartWidget";
import Logo from "../CartWidget/assets/logo.png"
import Estilos from '../css/App.module.css';

const NavBar = () =>{
    return(
        <nav>
            <div className={Estilos.logo}>
                <img src={Logo} className={Estilos.wine} alt="cart-widget"/>
            </div>
            <div className={Estilos.cart}>
            <div><CartWidget/></div>
            </div>
            
            <div className={Estilos.categorias}>
                <a className={Estilos.navbar} href="./NavBar.js">Home</a>
                <a className={Estilos.navbar} href="./NavBar.js">Productos</a>
                <a className={Estilos.navbar} href="./NavBar.js">Sucursales</a>
                <a className={Estilos.navbar} href="./NavBar.js">Contacto</a>
                
            </div>
        </nav>
    )
}

export default NavBar;