import cart from "./assets/carrito-de-compras.png"
import Estilos from '../css/App.module.css';

const CartWidget = () =>{
    return(
            <div className={Estilos.cartWidget}>
                <img src={cart} className={Estilos.img} alt="cart-widget"/>
                0
            </div>
    )
}

export default CartWidget;