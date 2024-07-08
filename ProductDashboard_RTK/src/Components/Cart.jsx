import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Button } from 'react-bootstrap';
import { remove } from '../store/CartSlice';
import { useDispatch } from 'react-redux';
const Cart = () => {
  const dispatch= useDispatch();

  const products= useSelector(state => state.cart);


  // remove the item 

  const removetoCart = (id) => {
    dispatch(remove(id));

  }


  const cards= products.map((product) => (
    <div className='col-md-12' style={{margin: '10px'}}>
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
  <Button variant="danger" onClick={() => removetoCart(product.id) }>Remove Item</Button>


  </Card.Footer>
</Card>

    </div>

));




  


  
  return (
    <>
    <h2>Cart</h2>

    <div className='row'>
      {cards}
    </div>

   
    </>
  )
}

export default Cart