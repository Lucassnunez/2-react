import {useState, useEffect} from "react"
import "./ItemListContainer.css"
import ItemList from "../ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {

  const [productos,setProductos] = useState([]);

  const {productType} = useParams()
  useEffect(()=>{

    const fetchData = async () => {
      try {
        const response = await fetch("/productos.json");
        const data = await response.json()
        if (greeting == "") {
          const filteredProducts = data.filter((p) => p.categoria == productType)
          setProductos(filteredProducts)
        }else{
          setProductos(data)
        }
      }catch(error){
          console.log("Error" + error);
      }
    }

    fetchData()

  },[productType])

  return (

    <div>

      <h1>{greeting}</h1>

      <ItemList productos={productos}/>

    </div>
  )
}
export default ItemListContainer;