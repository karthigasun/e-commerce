import React from 'react'
import Datas from '../../Data/Data';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../Redux/Action';
import "../../../Components/Style.css"
function Mobile() {
const state=useSelector((state)=>state);
const dispatch=useDispatch()
console.log(state);

const addCart=(item)=>{
    dispatch(update(item))
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
                            <div className='card text-center mb-5 card-cir'>
                                <img src={laptop.image} alt={laptop.name} className='img-fluid'/>
                                <div className='card-body card-item'>
                                    <h4 className='card-title'>Name:{laptop.name}</h4>
                                    <h5 className='card-text'>Price Rs:{laptop.price}</h5>
                                    <button onClick={()=>addCart(laptop)}>Add to Cart</button>
                                </div>
                            </div> 
                        </div>
                    )
                })
            }
            </div>
            {/* <Cart addCart={addCart}/> */}
        </div>

    </div>
    </>
  )
}

export default Mobile