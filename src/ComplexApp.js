import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { Login, Dashboard, Stats, Profile, About } from './pages'
import ProtectedRoute from './ProtectedRoute'

const ComplexApp = () => {
  const [currentUser, setCurrentUser] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute currentUser={currentUser}>
              <Dashboard setCurrentUser={setCurrentUser} />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='about' element={<About />} />
          <Route
            path='profile'
            element={<Profile currentUser={currentUser} />}
          />
        </Route>

        <Route
          path='login'
          element={<Login setCurrentUser={setCurrentUser} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default ComplexApp
