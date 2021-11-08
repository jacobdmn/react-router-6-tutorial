import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
      <h5>home page</h5>
      <Link to='/login'>Login Here</Link>
    </div>
  )
}

export default Home
