import React, {useContext} from 'react'
import "./CartWidget.css"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {

  const {cantidadProducto} = useContext(CartContext)
  
  return (
    <div>
      <Link to={'/cart'}>
        <img className='carrito' src="./assets/img/carrito.png" alt="" />
      </Link>

        <p>{cantidadProducto() == 0 ? null : cantidadProducto()}</p>
    </div>
  )
}

export default CartWidget