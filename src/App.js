import React from 'react'
import Header from './Components/Front/Header/Header'
import Lap from './Components/Back/Lap/Lap'
import Mobile from './Components/Back/Mobiles/Mobile'
import Tv from './Components/Back/Tv/Tv'
import Cart from './Components/Front/Cart/Cart'
import Error from './Components/Front/Error'
import {Routes,Route} from 'react-router-dom'
import All from './Components/Front/All'

function App() {
  return (
    <div>
      <Header/>
        <Routes>
            <Route path='/' element={<All/>}></Route>
            <Route path='/mobile' element={<Mobile/>}></Route>
            {/* <Route path='/lap' element={<Lap/>}></Route> */}
            {/* <Route path='/tv' element={<Tv/>}></Route> */}
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/*' element={<Error/>}></Route>
        </Routes>
    </div>
  )
}

export default App