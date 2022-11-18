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
            <div className='col-12 d-flex' key={item.id}>
                            <div className='d-flex justify-content-between'>
                                <div className="card text-center-mb-5">
                                <img src={item.image} alt={item.name} className='img-fluid'/>
                                </div>
                                <div className='card-body'>
                                    <h4 className='card-title'>Name:{item.name}</h4>
                                    <h5 className='card-text'>Price Rs:{item.price}</h5>
                                    {/* <button onClick={()=>addCart(laptop)}>Add to Cart</button> */}
                                </div>
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
