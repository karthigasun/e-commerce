import React from 'react'
import Datas from '../../Data/Data';
import{useState,useEffect} from 'react'
import Cart from '../../Front/Cart/Cart';
function Mobile() {
    const[mobile,setMobile]=useState([]);
    //console.log(mobile);
    useEffect(()=>{
        fetch('Datas.json')
        .then(res=>res.json())
        .then(res=>setMobile(res));
    // console.log(setMobile);

        
    },[]);
const [addCart,setAddCart]=useState([]);
console.log("addcart",addCart);
const addCartValue = (ele) =>{

    // if(ele.id!==addCart.id){
    //     // cart.push(cart.id);
    //     // console.log(cart.id , "add");
    //     // console.log(setCart);
        setAddCart([...addCart,ele])
        //console.log(addCart , "add")
    // }
    // else{
    //     return (ele);
    // }
    // console.log(ele , "add");
}



  return (
    <>
    <div id='section'>
        <div className='container product  py-4'>
            <div className='row'>
            {
                Datas.laptops.map((laptop)=>{
                    return (
                        <div className='col-md-6 col-lg-4' key={laptop.id}>
                            <div className='card text-center mb-5'>
                                <img src={laptop.image} alt={laptop.name} className='img-fluid'/>
                                <div className='card-body'>
                                    <h4 className='card-title'>Name:{laptop.name}</h4>
                                    <h5 className='card-text'>Price Rs:{laptop.price}</h5>
                                    <button onClick={()=>addCartValue(laptop)}>Add to Cart</button>
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }
            </div>
            <Cart addCart={addCart}/>
        </div>

    </div>
    </>
  )
}

export default Mobile