import React from "react";
import Button from 'react-bootstrap/Button';

const CartItem = ({producto, eliminarProducto}) => {

    return (
        <div>
            <h2>{producto.producto.nombre}</h2>
            <img src={producto.producto.img} alt={producto.producto.nombre} />
            <p>Cantidad: {producto.cantidad}</p>
            <Button variant="info" onClick={()=> eliminarProducto(producto.producto.id)}>Eliminar producto</Button>
        </div>
    )
}

export default CartItem;