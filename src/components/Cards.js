import React from 'react'
import "../styles/Cards.css"


const Cards = ({item,cart,setCart}) => {

    const {name,price,image}=item;
   const handleClick=(item)=>{
    const index=cart.findIndex((product)=>product.id===item.id);
    if(index>=0){
      cart.splice(index,1)
      setCart([...cart])
    }
    else{
      setCart([...cart,item])
    }
    
   }
    const button=(product)=>{
      const index=cart.findIndex((item)=>item.id===product.id)
     return index>=0
    }
  return (
    
    <div className='cards'>
      <div className='image-box'>
        <img src={image} alt="not show"/>
      </div>
      <div className='details'>
        <h3>{name}</h3>
        <p>Price=Rs {price}</p>
        <button onClick={()=>handleClick(item)}>{button(item)?"Remove Cart":"Add to cart"}</button>
      </div>
    </div>
   
  )
}

export default Cards
