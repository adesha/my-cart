import React from 'react';
import Product from './Product';
// export default function ProductList({product}) {
export default function ProductList(props) {
    console.log(props)
  return (
    props.productList.length>0?
      props.productList.map((product,i)=>{
        return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} index={i} decrementQuantity={props.decrementQuantity} 
        removeItem={props.removeItem}/>
      })
      : <h1>Add Products to the carts</h1>
  )
}
