import { Outlet, NavLink } from 'react-router-dom'

const Dashboard = ({ setCurrentUser }) => {
  return (
    <main
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        columnGap: '2rem',
      }}
    >
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <NavLink
          to=''
          className={({ isActive }) => (isActive ? 'primary' : 'black')}
        >
          Stats
        </NavLink>

        <NavLink
          to='about'
          className={({ isActive }) => (isActive ? 'primary' : 'black')}
        >
          About
        </NavLink>
        <NavLink
          to='profile'
          className={({ isActive }) => (isActive ? 'primary' : 'black')}
        >
          Profile
        </NavLink>
        <button onClick={() => setCurrentUser(null)} className='btn'>
          logout
        </button>
      </nav>
      <Outlet />
    </main>
  )
}

export default Dashboard
