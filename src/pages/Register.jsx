// src/pages/Register.jsx
export default function Register() {
  return (
    <main className="section">
      <div className="container">
        <h1>Become a member</h1>
        <form
          name="register"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/success"
        >
          <input type="hidden" name="form-name" value="register" />
          <p hidden>
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>

          <label>First name
            <input name="firstName" required />
          </label>

          <label>Last name
            <input name="lastName" required />
          </label>

          <label>Email
            <input type="email" name="email" required />
          </label>

          <button type="submit">Join</button>
        </form>
      </div>
    </main>
  );
}
