import React from 'react';
import list from "../Data";
import Cards from './Cards';
const Amazon = ({data,click,cart,setCart}) => {
  return (
    <section>
{
      click==0?(

        list.map((item)=>(
            
            <Cards item={item} key={item.id} cart={cart} setCart={setCart}/>    
            
        ))

      ):(

        data.map((item)=>(
            
            <Cards item={item} key={item.id} cart={cart} setCart={setCart}/>       
        ))

      )
        }
    </section>
  )
}

export default Amazon
