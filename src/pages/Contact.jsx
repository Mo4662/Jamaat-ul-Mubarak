// src/pages/Contact.jsx
export default function Contact() {
  return (
    <main className="section">
      <div className="container">
        <h1>Contact us</h1>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/success"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>

          <label>Name
            <input name="name" required />
          </label>

          <label>Email
            <input type="email" name="email" required />
          </label>

          <label>Message
            <textarea name="message" rows="5" required />
          </label>

          <button type="submit">Send</button>
        </form>
      </div>
    </main>
  );
}
