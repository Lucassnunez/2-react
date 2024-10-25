import React, { useContext, useState } from 'react'
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import { CartContext } from '../context/CartContext'
import { db } from '../firebase/config'
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';

const Checkout = () => {
  const { cart, totalCarrito, cantidadProducto, vaciarCarrito } = useContext(CartContext)

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [email, setEmail] = useState("")
  const [telefono, setTelefono] = useState("")
  const [direccion, setDireccion] = useState("")
  const [error, setError] = useState("")
  const [ordenId, setOrdenId] = useState("")

  const manejadorFormulario = async (event) => {
    event.preventDefault();
    if (!nombre || !apellido || !email || !telefono || !direccion) {
      setError("Completar los campos faltantes");
      return;
    }

    const orden = {
      items: cart.map((producto) => ({
        id: producto.producto.id,
        nombre: producto.producto.nombre,
        cantidad: producto.cantidad,
      })),
      total: totalCarrito(),
      fecha: new Date(),
      nombre,
      apellido,
      email,
      telefono,
    };

    try {
      await Promise.all(
        orden.items.map(async (productoOrden) => {
          const productoRef = doc(db, "producto", productoOrden.id);
          const productoDoc = await getDoc(productoRef);
          const stockActual = productoDoc.data().stock;

          await updateDoc(productoRef, {
            stock: stockActual - productoOrden.cantidad,
          });
        })
      );

      const docRef = await addDoc(collection(db, "ordenes"), orden);
      setError("");
      setOrdenId(docRef.id);

      Swal.fire({
        title: "Compra completada",
        text: "Gracias por tu compra",
        icon: "success",
      }).then(() => {
        vaciarCarrito();
      });
    } catch (error) {
      setError("Se produjo un error al ejecutar la compra");
    }
  };




  return (
    <div>
      <h1>Ingresa tus datos</h1>

      <form onSubmit={manejadorFormulario}>
        {cart.map((producto) => (
          <div key={producto.producto.id}>
            <p>
              {""}
              {producto.producto.nombre} x {producto.cantidad} =
              {producto.producto.precio * producto.cantidad}
            </p>
          </div>
        ))}

        <div>      
          <div>
            <label htmlFor=''>Nombre</label>
            <input type='text' onChange={(e) => setNombre(e.target.value)} />
          </div>

          <div>
            <label htmlFor=''>Apellido</label>
            <input type='text' onChange={(e) => setApellido(e.target.value)} />
          </div>

          <div>
            <label htmlFor=''>Email</label>
            <input type='text' onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label htmlFor=''>Telefono</label>
            <input type='text' onChange={(e) => setTelefono(e.target.value)} />
          </div>

          <div>
            <label htmlFor=''>Direccion</label>
            <input type='text' onChange={(e) => setDireccion(e.target.value)} />
          </div>

          <Button variant="outline-success" type='submit'>Confirmar compra</Button>

          {error && <p>{error}</p>}

          {ordenId && (
            <strong>Gracias por tu compra, tu ID de orden es: {ordenId}</strong>
          )}

        </div>
      </form>
    </div>
  )
}

export default Checkout