import React from 'react'
import {useState,useEffect} from "react";
import Datas from '../../Data/Data';
import './Lap.css'

function Lap() {
    const[lap,setLap]=useState([]);
    // console.log(lap);
    useEffect(()=>{
        fetch('Datas.json')
        .then(res=>res.json())
        .then(res=>setLap(res));
        
    },[]);


  return (
    <>
    <div id='section'>
        <div className='container product py-4'>
            <div className='row'>
            {
                Datas.mobiles.map((mobile)=>{
                    return (
                        <div className='col-md-6 col-lg-4' key={mobile.id}>
                            <div className='card text-center mb-5 color'>
                                <img src={mobile.image} alt={mobile.name} className='img-fluid'/>
                                <div className='card-body'>
                                    <h4 className='card-title'>Name:{mobile.name}</h4>
                                    <h5 className='card-text'>Price Rs:{mobile.price}</h5>
                                    <button>Add to Cart</button>
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

export default Lap