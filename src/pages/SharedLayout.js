import { Outlet, Link } from 'react-router-dom'
const PageLayout = () => {
  return (
    <main>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
      </nav>
      <Outlet />
      <footer>footer</footer>
    </main>
  )
}

export default PageLayout
