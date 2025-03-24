import React, {useState} from 'react'
import { saveProduct } from '../api/serverapis'

const CreateProduct = () => {
  
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: ""
  })

  const handleUpdate = (e) => {
    e.preventDefault()
    saveProduct(product)
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
          <input type="text" value={product.image} onChange={(e) => setProduct({...product, image: e.target.value})}/>
        </div>
        <button>Save</button>
      </form>
    </div>
  )
}

export default CreateProduct
