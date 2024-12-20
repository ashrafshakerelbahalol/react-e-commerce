import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import { productarr } from '../model/productarr'
import Mycard from './Mycard'

export default function Products() {
  const filtered1 = productarr.filter((product) => {
    return product.category === 'cloth'
  })
  const filtered2 = productarr.filter((product) => {
    return product.category === 'phone'
  })
  const filtered3 = productarr.filter((product) => {
    return product.category === 'car'
  })
  const filtered4 = productarr.filter((product) => {
    return product.category === 'tool'
  })
  let [fileritemarr, setFileritem] = useState({
    fileritem: filtered1,
  })

  let clothselection = () => {
    setFileritem({
      fileritem: filtered1,
    })
  }
  let toolselection = () => {
    setFileritem({
      fileritem: filtered4,
    })
  }
  let carselection = () => {
    setFileritem({
      fileritem: filtered3,
    })
  }
  let phoneselection = () => {
    setFileritem({
      fileritem: filtered2,
    })
  }


  return (
    <div className="mb-5">
      <div className="p-5  text-center ">
        <h1 className="text-secondary">producets</h1>
        <p>we are here for you</p>
      </div>
      <div className="container m-2  text-center">
        <button onClick={clothselection} className="btn btn-info ">
          clothes
        </button>{' '}
        <button onClick={phoneselection} className="btn btn-info ">
          phone
        </button>{' '}
        <button onClick={carselection} className="btn btn-info">
          cars
        </button>{' '}
        <button onClick={toolselection} className="btn btn-info">
          makeup
        </button>{' '}
      </div>
      <div className="container">
        <div className="row g-3">
          {fileritemarr.fileritem.map((product) => {
            return <Mycard productInfo={product} key={product.id} />
          })}
        </div>
      </div>
    </div>
  )
}
