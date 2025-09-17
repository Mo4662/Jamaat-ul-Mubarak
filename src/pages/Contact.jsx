import { useState } from 'react'

const encode = (data) =>
  Object.keys(data).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k])).join('&')

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'', 'bot-field':'' })

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form['bot-field']) return
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form })
    })
    window.location = '/success'
  }

  return (
    <main className="section">
      <div className="container">
        <h1>Contact us</h1>
        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <p hidden><label>Don’t fill this out: <input name="bot-field" onChange={handleChange} /></label></p>

          <label>Name <input name="name" value={form.name} onChange={handleChange} required /></label>
          <label>Email <input type="email" name="email" value={form.email} onChange={handleChange} required /></label>
          <label>Message <textarea name="message" rows="5" value={form.message} onChange={handleChange} required /></label>

          <button type="submit">Send</button>
        </form>
      </div>
    </main>
  )
}
