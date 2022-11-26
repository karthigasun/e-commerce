import React from 'react'
import Datas from '../../Data/Data';
import { useSelector,useDispatch } from 'react-redux';
import { update } from '../../Redux/Action';
import './Lap.css'
import "../../../Components/Style.css"
function Lap() {
    const state=useSelector((state)=>state);
    const dispatch=useDispatch()
    console.log(state);
    
    const addCart=(item)=>{
        dispatch(update(item))
    }

  return (
    <>
    <div id='section'>
        <div className='container product py-4'>
            <div className='row'>
            {
                Datas.mobiles.map((mobile)=>{
                    return (
                        <div className='col-md-6 col-lg-4' key={mobile.id}>
                            <div className='card text-center mb-5 color card-cir'>
                                <img src={mobile.image} alt={mobile.name} className='img-fluid'/>
                                <div className='card-body'>
                                    <h4 className='card-title'>Name:{mobile.name}</h4>
                                    <h5 className='card-text'>Price Rs:{mobile.price}</h5>
                                    <button onClick={()=>addCart(mobile)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>

    </div>
    </>
  )
}

export default Lap;