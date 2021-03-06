import { Outlet, NavLink } from 'react-router-dom'
const PageLayout = () => {
  return (
    <main>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'primary' : 'black')}
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'primary' : 'black')}
        >
          About
        </NavLink>
        <NavLink
          to='/products'
          className={({ isActive }) => (isActive ? 'primary' : 'black')}
        >
          Products
        </NavLink>
      </nav>
      <Outlet />
      <footer>footer</footer>
    </main>
  )
}

export default PageLayout
