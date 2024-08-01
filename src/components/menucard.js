import React from 'react'
import './basics/menucard.css'


function  Menucard({menudata}) {
     // console.log(menudata);
  return (
     <>
<section  className='main-card container'>
     {menudata.map((curelem)=>{
          return(
               <>
<div className='carrd-container'  key={curelem.id}>
     <div  className='card'>
          <div className='card-body'>
               <span  className='card-number  card-circle subtle'>{curelem.id}</span>
               {/* <br></br> */}
               <span className='card-author subtle'>{curelem.category}</span>
               <h2  className='card-title'>{curelem.name}</h2>
               <span  className='card-description subtle'>
                    {curelem.description}
               </span>
               <div  className='card-read'>Read</div>
          </div>
          <hr></hr>
          <img src={curelem.image} alt="image"  className='card-media'/>
          <p  className='card-tag  subtle'>Order Now</p>
     </div>
    </div>
    </>
     )
     })}
     </section>

     </>
  )
}

export default Menucard;