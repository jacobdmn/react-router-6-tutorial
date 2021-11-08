import { useNavigate } from 'react-router-dom'

const Login = ({ setCurrentUser }) => {
  const navigate = useNavigate()
  const setUser = () => {
    setCurrentUser({ name: 'john' })
    navigate('/')
  }
  return (
    <div>
      <h5>press button to login</h5>
      <button onClick={setUser} className='btn'>
        login
      </button>
    </div>
  )
}

export default Login
