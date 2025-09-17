import { Routes, Route, NavLink } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import Register from './pages/Register.jsx'
import Success from './pages/Success.jsx'

function Home() { return <h1>Home</h1> }
function About() { return <h1>About</h1> }

const link = ({ isActive }) => ({ fontWeight: isActive ? 800 : 600, marginRight: 12 })

export default function App() {
  return (
    <>
      <nav style={{ padding: 12, borderBottom: '1px solid #2a3642' }}>
        <NavLink to="/" style={link}>Home</NavLink>
        <NavLink to="/about" style={link}>About</NavLink>
        <NavLink to="/register" style={link}>Register</NavLink>
        <NavLink to="/contact" style={link}>Contact</NavLink>
      </nav>

      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>
    </>
  )
}

