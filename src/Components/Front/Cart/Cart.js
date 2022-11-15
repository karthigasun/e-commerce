import React from "react";

function Cart(props) {
  console.log("props", props.addCart);
  var data = props.addCart;
  return (
    <div key={props.addCart.id}>
      {data.map((item) => {
        <div>
          <h1>{item.price}</h1>
        </div>
      })}
    </div>
  );
}

export default Cart;
