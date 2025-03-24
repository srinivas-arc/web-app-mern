import React, { useEffect, useState } from 'react'
import { deleteProduct, fetchProducts } from '../api/serverapis'
import {Link } from "react-router-dom";


const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {

    const fetchData = async () => {
        try {
          const result = await fetchProducts()
          setProducts(result.data)
        }catch(error) {
          console.log('Error fetching products ', error.message)
        }
      }

    fetchData()
  }, [])
  
  const handleDelete = async (id) => {
    try {
      const res = await deleteProduct(id);
    }catch(error) {
      console.log("Error in deleting data ", error.message)
    }
  }

  return (
    <div>
      This is the product page
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            products.map((product) => (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img src={product.image} alt={product.image} /></td>
                <Link to = {`/updateProduct?productId=${product._id}`}>
                  <button>Update</button>
                </Link>
                <button onClick={() => handleDelete(product._id)}>Delete</button>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>

  )
}

export default Products
