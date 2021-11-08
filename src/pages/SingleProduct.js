import { Link, useParams } from 'react-router-dom'
import products from '../data'
const SingleProducts = () => {
  const { productId } = useParams()
  const product = products.find((product) => product.id === productId)
  const { image, name } = product

  return (
    <div>
      <img src={image} style={{ width: '200px', height: '150px' }} />
      <h5>{name}</h5>
      <Link to='/products'>back to products</Link>
    </div>
  )
}

export default SingleProducts
