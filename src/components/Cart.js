import React, {useState } from 'react'
import "../styles/Carts.css"

const Cart = ({cart,setCart,handleChange}) => {
    const handleRemove=(id)=>{
        const index=cart.findIndex((product)=>product.id===id);
        if(index>=0){
          cart.splice(index,1)
          setCart([...cart])
        }
    }
    
  return (
    <article>
        {
            cart?.map((item)=>(
                <div className='cart-box' key={item.id}>
                 <div className='cart-img'>
                    <img src={item.image}/>
                    <p>{item.name}</p>
                    </div>  
                    <div>
                        <button onClick={()=>handleChange(item,+1)}>Add Item</button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item,-1)}>Decrease Item</button>
                    </div>
                    <div className="remove">
                        <span>{item.price}</span>  
                        <button onClick={()=>handleRemove(item.id)}>Remove Item</button>  
                    </div> 
                </div>
            ))

        }   
    </article>
  )
}

export default Cart
