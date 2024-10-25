import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc,getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);

    const {idProducto} = useParams()

    useEffect(()=>{

      const nuevoDoc = doc(db,"producto",idProducto)

      getDoc(nuevoDoc)
      .then(res => {
        const data = res.data()
        const nuevoProducto = {id: res.id,...data}
        setProducto(nuevoProducto)
      })
  },[])

  return (
    <div>
    <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer