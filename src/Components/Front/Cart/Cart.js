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

          <div key={item.id} className="col-lg-12">
              <div className="cart-item d-flex justify-content-between">
              <div className="imge">
                <img src={item.image} className="img-fluid"/>
              </div>
              <div>{item.name}</div>
              <div>{item.price}</div>
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
