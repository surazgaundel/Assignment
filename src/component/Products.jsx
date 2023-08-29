import React from 'react'
import { useProductContext } from '../context/ProductContext'
import Product from './Product';
export default function Products() {
    const {categoryProduct}=useProductContext();
    console.log(categoryProduct);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {categoryProduct.map(product =>{
            return(<Product key={product.id} {...product}/>)
        })}
    </div>
  )
}
