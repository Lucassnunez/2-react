import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    
  return (
    <>
        {
            productos.map((producto)=>{
                return(
                    <Item producto={producto}/>
                )
            })
        }
    </>
  )
}

export default ItemList