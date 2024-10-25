import React, { useState, createContext } from "react";
import Swal from 'sweetalert2';


export const CartContext = createContext()

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const agregarProducto = (producto, cantidad) => {

    const productoExistente = cart.find(prod => prod.producto.id == producto.id)

    if (!productoExistente) {
      setCart([...cart, { producto, cantidad }])
    } else {
      const nuevoCart = [...cart]
      nuevoCart[productoExistente].cantidad += cantidad
      setCart(nuevoCart)
    }

  }

  const eliminarProducto = (productoId) => {
    const nuevoCart = cart.filter(item => item.producto.id !== productoId)
    Swal.fire("Producto eliminado del carrito");
    setCart(nuevoCart)
  }

  const vaciarCarrito = () => {

    setCart([]);
  }


  const cantidadProducto = () => {
    const totalQuantity = cart.reduce((total, item) => total + item.cantidad, 0)
    return totalQuantity
  }

  const totalCarrito = () => {
    const totalPrecio = cart.reduce((total, item) => total + (item.producto.precio * item.cantidad), 0)
    return totalPrecio
  }

  return (
    <CartContext.Provider value={{
      cart,
      agregarProducto,
      eliminarProducto,
      vaciarCarrito,
      cantidadProducto,
      totalCarrito,
    }}>
      {children}
    </CartContext.Provider>
  )

}

export default CartProvider