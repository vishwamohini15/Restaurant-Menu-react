import React, { useState } from 'react'
import Menu from './menuapi.js'
import Menucard from '../menucard.js'

const Resturent = () => {
const[menudata, setmenudata]=useState(Menu)

const filteritem=(category)=>{
const updatedList=Menu.filter((curelem)=>{
  return curelem.category===category

})

setmenudata(updatedList)
}
  return (
    <>
<nav className='navbar'>
     <div className='btn-group'>
          <button className='btn-group__item' onClick={()=>filteritem("breakfast")}>Breakfast</button>
          <button className='btn-group__item'  onClick={()=>filteritem("lunch")}>Lunch</button>
          <button className='btn-group__item'  onClick={()=>filteritem("evening")}>Evening</button>
          <button className='btn-group__item'  onClick={()=>filteritem("dinner")}>Dinner</button>
          <button className='btn-group__item'  onClick={()=>setmenudata(Menu)}>ALL</button>


     </div>

</nav>

 <Menucard  menudata={menudata}></Menucard>
    </>
  )
}

export default Resturent 