import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/CartSlice';
import { getProducts } from '../store/ProductSlice';
const Products = () => {

    const dispatch= useDispatch();
//   const {data: products}= useSelector(state => state.product);

 const [products, getProducts]=useState([]);


    useEffect(() => {
        // api 
 // dispatch the action the fetchproduct
fetch('https://fakestoreapi.com/products')
.then(data => data.json())
.then(result =>getProducts(result));

       
    }, []);


    // add to cart button 
    const addtoCart =(product) => {
        // dispatch a action 
        dispatch(add(product))

    };

    const cards= products.map((product) => (
        <div className='col-md-3' style={{margin: '10px'}}>
            <Card key={product.id} className="h-100"
            style={{ width: '18rem' ,}}>
                <div className="text-center">
      <Card.Img variant="top" src={product.image} style={{width: '200px' , height : '200px' }} />

                </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         $ {product.price}
        </Card.Text>
        


      </Card.Body>
      <Card.Footer style={{background:'white'}}>
      <Button variant="primary" onClick={() => addtoCart(product)}>Add to Card</Button>


      </Card.Footer>
    </Card>

        </div>

    ));

  return (
    <>
    <h3>Product Dashboard!</h3>
    <div className="row">
        {cards }
    </div>

    
   
    </>
  )
}

export default Products