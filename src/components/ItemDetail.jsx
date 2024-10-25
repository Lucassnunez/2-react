import React, {useState, useContext} from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({producto}) => {

  const [cart, setCart] = useState(false)

  const {agregarProducto} = useContext(CartContext)

  const onAdd = (count) => {
    setCart(true)

    agregarProducto(producto, count)
  }

  return (
    <div>
            <h2>{producto.nombre}</h2>
            <img src={producto.img} alt="{producto.img}" />
            <p>{producto.precio}</p>
            <p>{producto.talle}</p>

            {producto.stock == 0 ? <h3>Este producto no se encuentra en stock</h3> : (
              cart 
              ? <Link to={'/cart'}>Ir al carrito</Link> 
              : <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
            )}  
        </div>
  )
}

export default ItemDetail