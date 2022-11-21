import React from "react";
import { useSelector } from 'react-redux';

function Cart() {
  const state=useSelector((state)=>state);
  return (
    <>
    <div className="section">
      <div className="container">
        <div className="row">
      {state.user.map((item)=>{
        return(
            <div className='col-12' key={item.id}>
                            <div className='single-item d-flex justify-content-between'>
                                <div>
                                  <img src={item.image} className="img-fluid" alt={item.name}/>
                                  <h4>{item.name}</h4>
                                  <h4>{item.price}</h4>
                                </div>
                                <div><input type="number" min="1"/></div>
                                <div></div> 
                            </div> 
                        </div>
        )
      })}
    </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
