import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import { FaPlus, FaMinus } from "react-icons/fa";

function Cart() {
  const state = useSelector((state) => state);

  const decrement=(count)=>{
    console.log(count);
    count = count-1
    
  }
  const increment=()=>{
    
  }
  return (
    <>
      <div className="section mar">
        <div className="container"> 
          <div className="row">
            <table>
              <tr>
                <th>
                  <h4>Product Image</h4>
                </th>
                <th>
                  <h4>Product Name</h4>
                </th>
                <th>
                  <h4>Qty</h4>
                </th>
                <th>
                  <h4>Total Price</h4>
                </th>
              </tr>
              {state.user.map((item) => {
                return (
                  // <div>
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.name} className="tab-img"/>
                    </td>
                    <td>
                      {item.name}
                    </td>
                    <td>
                      <button onClick={()=>decrement(item)}><FaMinus></FaMinus></button>
                      {/* <input type="number" /> */}
                      <span>{item.count}</span>
                      <button onClick={()=>increment()}><FaPlus></FaPlus></button>
                    </td>
                    <td>
                      <h3>Total</h3>
                    </td>
                  </tr>
                );
              })}
            </table>
        </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
