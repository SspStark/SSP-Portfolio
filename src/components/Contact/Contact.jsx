import './Contact.css'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    formData.append('access_key', 'b7fc13ca-07cf-484f-867a-15c669e80f73')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      alert(data.message)
    } else {
      alert(data.message)
    }
  }

  return (
    <div id="contact" className="contact">
      <h1>Get in Touch</h1>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let&#39;s talk</h1>
          <p>
            I&#39;m currently available to take on new projects and kick-start
            my career. If you have any exciting opportunities or projects
            you&#39;d like me to be a part of, feel free to reach out. I&#39;m
            ready to learn, grow, and contribute to meaningful projects. You can
            contact me anytime.
          </p>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            required
          />
          <label>Write your message</label>
          <textarea
            rows="7"
            placeholder="How can i help you ?"
            name="message"
            required
          ></textarea>
          <button type="submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
