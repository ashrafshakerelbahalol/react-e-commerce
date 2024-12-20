import React from 'react'
import { useParams } from 'react-router-dom'

import { productarr } from '../model/productarr';


export default function Productdetials() {
    let {id} =useParams();
    let  product =productarr.find((product)=>product.id===id)
  return (
    <div className=' p-5 m-5 'style={{border:"3px black solid"}}>
      <h1 className='text-primary'>Product detials :- {product.productName}</h1>
      <div className='container d-flex'>
        <div className='row'>
      <div className='col-lg-5 '>
        <img  src={product?.srcimage} style={{width:"300px"}} />
        <p className='text-primary fs-4 mt-5'>{product.productName}</p>
      </div>

      <div className='col-lg-5 text-dark fs-4 mt-5 '>
        
        <p >{product.productName}</p>
        <p > Lorem ipsum dolor sit, amet consectetur
         adipisicing elit. At, sunt enim. Praesentium dignissimos suscipit tempora a mollitia quia 
        aliquam natus nam rem vero. Animi quam delectus unde sint et eveniet.</p>
      </div>
</div>
    </div>
    </div>
  )
}
