import { Routes, Route, NavLink } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Clean slate. Routes work. No drama.</p>
    </div>
  )
}
function About() { return <h1>About</h1> }
function Register() { return <h1>Register</h1> }
function Contact() { return <h1>Contact</h1> }

export default function App() {
  const link = ({isActive}) => ({ fontWeight: isActive ? 800 : 600, marginRight: 12 })
  return (
    <>
      <nav style={{padding:12,borderBottom:'1px solid #ddd'}}>
        <NavLink to="/" style={link}>Home</NavLink>
        <NavLink to="/about" style={link}>About</NavLink>
        <NavLink to="/register" style={link}>Register</NavLink>
        <NavLink to="/contact" style={link}>Contact</NavLink>
      </nav>
      <main style={{padding:16}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
    </>
  )
}
