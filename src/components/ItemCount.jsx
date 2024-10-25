import React, {useState} from "react";
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';


const ItemCount = ({initial,stock,onAdd}) => {

    const [contador, setContador] = useState(1);

    const decrementar = () => {
        if(contador > initial){
            setContador(contador-1)
        }
    }

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador+1)
        }
    }

    const agregarCarrito = () => {
        onAdd(contador)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Producto agregado al carrito",
            showConfirmButton: false,
            timer: 1500
          });
    }


    return (
        <div>
            <p>{contador}</p>
            <Button variant="outline-danger" onClick={decrementar}>-</Button>
            <Button variant="outline-primary" onClick={agregarCarrito}>Agregar al carrito</Button>
            <Button variant="outline-success" onClick={incrementar}>+</Button>
        </div>
    )

}

export default ItemCount