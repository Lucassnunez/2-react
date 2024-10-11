import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = ({ producto }) => {
    return (
        <Link to={'/tienda'}>
            <div key={producto.id} className="tarjetas-container">
                <h2>{producto.nombre}</h2>
                <img className="catalogo" src={producto.img} alt="{producto.img}" />
            </div>
        </Link>
    )
}
export default Item