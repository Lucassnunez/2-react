import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from './CartItem'
import Button from 'react-bootstrap/Button';


const Cart = () => {

    const {cart,vaciarCarrito,eliminarProducto,totalCarrito} = useContext(CartContext)

    return (
        <div>
            
            {cart.length == 0
            ?
            <>
            <h1>El carrito está vacío</h1>
            <Link to={"/"}>Ir al inicio</Link>
            </>

            :

            <>
            <h1>Mi carrito</h1>

            {cart.map((p)=>(
                <CartItem key={p.producto.id} producto={p} eliminarProducto={eliminarProducto}/>
            ))}
            

            <p>Total: ${totalCarrito()}</p>

            <Button variant="danger" onClick={vaciarCarrito}>Vaciar carrito</Button>

            <Link to={"/checkout"}>
                    Completar compra
            </Link>

            </>


        }

        </div>
    );
};

export default Cart;