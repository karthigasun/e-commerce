import React from 'react'

function Cart(props) {
  console.log(props.addCart , "propsvalue");
  return (
    <div>
      <div>h1
        {props.name}
      </div>
    </div>
  )
}

export default Cart