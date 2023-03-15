import Navbar from "./components/Navbar";
import './App.css';
import { useState } from "react";
import Cart from "./components/Cart";
import Amazon from "./components/Amazon";
import list from "./Data";

import {BrowserRouter,Routes,Route} from "react-router-dom";

const App=()=> {

  const [cart,setCart]=useState([]);
  const [search,setSearch]=useState([])
  const [click,setClick]=useState(0)
   const Product=()=>{
    setSearch(list.filter(item=>{
      return item
    }))
    setClick(1)
  }

  const lenovo=()=>{
    setSearch(list.filter(item=>{
      return item.name==="Lenovo Laptop"
    }))
    setClick(1)
  }

  const asus=()=>{
    setSearch(list.filter(item=>{
      return item.name==="Asus Laptop"
    }))
    setClick(1)
  }
  const hp=()=>{
    setSearch(list.filter(item=>{
      return item.name==="Hp Laptop"
    }))
    setClick(1)
  }
    const handleChange=(item,d)=>{
    let ind=-1;
    cart.forEach((data,index)=>{
      if(data.id==item.id)
      ind=index;
    });
    const tempArr=cart;
    tempArr[ind].amount+=d;
    if(tempArr[ind].amount===0)
    tempArr[ind].amount=1;
    setCart([...tempArr])
   }
  return (
   <>
   
  <BrowserRouter>
  <div className="app">
  
  <Navbar size={cart.length}/>
 
  
  <div className="nav-search">
  <button className="navsearch2" onClick={Product}>Product</button>
  <button className="navsearch2" onClick={lenovo}>Lenovo</button>
   <button className="navsearch2" onClick={asus}>Asus</button>
  <button className="navsearch2" onClick={hp}>Hp</button>
   <Routes>
   <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}/>
   <Route exact path="/" element={<Amazon className="nav-search3" data={search} click={click} cart={cart} setCart={setCart}/>}/>
   </Routes> 
    </div>
   
   </div>
   </BrowserRouter>

   </>
  );
}

export default App;
