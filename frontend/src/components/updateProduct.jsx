import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchProductById, updateProduct } from '../api/serverapis'

const UpdateProduct = () => {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: ""
  })
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const productId = queryParams.get('productId')

  useEffect(() => {

    const getProductById = async (id) => {
      try {
        const result = await fetchProductById(id)
        setProduct(result.data)
      }catch(error) {
        console.log('Error fetching product ', error.message)
      }
    }
    getProductById(productId)
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault()
    updateProduct(product, productId)
  }
  return (
    <div>
      <form method="post" onSubmit={handleUpdate}>
        <div>
          <p>Name:</p>
          <input type="text" value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})}/>
        </div>
        <div>
          <p>Price:</p>
          <input type="number" value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})}/>
        </div>
        <div>
          <p>Image:</p>
          <img src={product.image} alt = {""}/>
        </div>
        <button>Update</button>
      </form>
    </div>
  )
}

export default UpdateProduct
