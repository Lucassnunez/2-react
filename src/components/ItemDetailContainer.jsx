import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);

    const {idProducto} = useParams()
    useEffect(()=>{

        const fetchData = async () => {
          try {
            const response = await fetch("/productos.json");
            const data = await response.json()
            const catalogo = data.find((p)=>p.id == idProducto)
            setProducto(catalogo)
          }catch(error){
              console.log("Error" + error);
          }
        }

        fetchData()

      },[])

  return (
    <div>
    <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer;