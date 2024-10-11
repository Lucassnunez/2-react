import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {
 
  return (
    <div>
            <h2>{producto.nombre}</h2>
            <img src={producto.img} alt="{producto.img}" />
            <p>{producto.precio}</p>
            <p>{producto.talle}</p>
            <ItemCount initial={1} stock={producto.stock}/>
        </div>
  )
}

export default ItemDetail