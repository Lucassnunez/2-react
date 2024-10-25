import {useState, useEffect} from "react"
import "./ItemListContainer.css"
import ItemList from "../ItemList"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import { collection,getDocs,query,where } from "firebase/firestore"


const ItemListContainer = () => {

  const [productos,setProductos] = useState([]);

  const {productType} = useParams()

  useEffect(()=>{

    const misProductos = 
    productType ?
    query(collection(db, "producto"),where("categoria","==",productType))
    :
    collection(db, "producto")

    getDocs(misProductos)
    .then((res) => {
      const nuevosProductos = res.docs.map((doc) => {
        const data = doc.data()
        return {id: doc.id,...data}
      })
      setProductos(nuevosProductos)
    })

  },[productType])
    
  return (
    
    <div>

      <h1>Bienvenidos a Indumentaria LN</h1>

      <ItemList productos={productos}/>

    </div>
  )
}

export default ItemListContainer