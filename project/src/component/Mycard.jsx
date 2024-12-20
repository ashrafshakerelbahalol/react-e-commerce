import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CounterContext } from './context/CounterContext';

export default function Mycard(props) {
  
    let {productInfo} = props;

    let navigate =useNavigate();

let showDetials=()=>{
  navigate(`/product/${productInfo?.id}`);
}
let{count,increase,decrease}=useContext(CounterContext);
  return (
    <div className="col-sm-6  col-md-3">
    <Card >
      <Card.Img onClick={showDetials}
        variant="top"
        src={productInfo?.srcimage}
      />
      <Card.Body>
        <Card.Title onClick={showDetials}>{productInfo?.productName} </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="container">
          <div className="row g-5">
            <div className="col-6">
              <Button variant="primary" onClick={increase}>{productInfo?.LinkTitle}</Button>
            </div>
           
            
          </div>
        </div>
        
      </Card.Body>
    </Card>
  </div>
  )
}
