import React, { useState ,useEffect} from 'react'
import Datas from '../../Data/Data';

function Tv() {
  const [tv,setTv]=useState([]);
  // console.log(tv);
  useEffect(()=>{
    fetch('Datas.json')
    .then(res=>res.json())
    .then(res=>setTv(res))
  })

  return (
    <>
    <div id='section'>
      <div className='container  py-4'>
        <div className='row'>
          {
            Datas.tv.map((tv1)=>{
              return(
                <div className='col-md-6 col-lg-4' key={tv1.id}>
                  <div className='card mb-5 text-center'>
                    <img src={tv1.image} alt={tv1.name} className='card-img-top'/>
                    <div className='card-body'>
                      <h4 className='card-title'>Name:{tv1.name}</h4>
                      <h5 className='card-text'>Price Rs:{tv1.price}</h5>
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

export default Tv