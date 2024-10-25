import React,{useState,useEffect} from 'react';
import './App.css'
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ItemCount from './components/ItemCount';
import CartProvider from './context/CartContext';
import Cart from './components/Cart';
import { getFirestore,collection,getDocs,query,where } from 'firebase/firestore';
import Checkout from './components/Checkout';


const App = () => {

  return (
    <>

    <BrowserRouter>

    <CartProvider>
    
    <NavBar/>

    <Routes>

      <Route path='/' element={<ItemListContainer/>}/>

      <Route path='/producto/:idProducto' element={<ItemDetailContainer/>}/>

      <Route path='/categoria/:productType' element={<ItemListContainer/>}/>

      <Route path='/cart' element={<Cart/>}/>

      <Route path='/checkout' element={<Checkout/>}/>

    </Routes>

    </CartProvider>
    
    </BrowserRouter>
      



    </>
  )
}

export default App