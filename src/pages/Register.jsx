import { useState } from 'react'

const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')

export default function Register() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    'bot-field': ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form['bot-field']) return

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'register',      // must match name="register"
        ...form
      })
    })

    window.location = '/success'
  }

  return (
    <main className="section">
      <div className="container">
        <h1>Become a member</h1>
        <form
          name="register"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="register" />

          <p hidden>
            <label>Don’t fill this out: <input name="bot-field" onChange={handleChange} /></label>
          </p>

          <label>
            First name
            <input name="firstName" value={form.firstName} onChange={handleChange} required />
          </label>

          <label>
            Last name
            <input name="lastName" value={form.lastName} onChange={handleChange} required />
          </label>

          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>

          <button type="submit">Join</button>
        </form>
      </div>
    </main>
  )
}
