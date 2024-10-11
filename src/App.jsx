import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ItemCount from "./components/ItemCount";
import ItemDetail from "./components/ItemDetail"

const App = () => {

  return (
    <>

    <BrowserRouter>

    <NavBar/>

    <Routes>

      <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a Indumentaria LN"}/>}/>

      <Route path='/producto/:idProducto' element={<ItemDetailContainer/>}/>
      <Route path='/categoria/:productType' element={<ItemListContainer greeting={""}/>}/>


    </Routes>

    </BrowserRouter>




    </>
  )
}

export default App;
