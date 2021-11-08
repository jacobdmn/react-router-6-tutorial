import { Link } from 'react-router-dom'
import products from '../data'
const Products = () => {
  return (
    <div>
      {products.map((product) => {
        return (
          <div style={{ marginBottom: '2rem' }} key={product.id}>
            <h5 style={{ marginBottom: '0' }}>{product.name}</h5>
            <Link to={`/products/${product.id}`}>more info</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Products
