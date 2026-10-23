"use client"
import './contact.css'

export default function ContactUs() {
  return (
    <div className="contact-section">
      {/* Section Heading */}
      <div className="contact-header">
        <h2>Contact Us</h2>
        <div className="underline"></div>
        <p>Get in touch with us for inquiries, orders, and support.</p>
      </div>

      {/* Main Grid Container */}
      <div className="contact-grid">
        
        {/* Pakistan Office */}
        <div className="contact-card">
          <h3>Pakistan Office</h3>
          <p><strong>Address:</strong> B/30, Estate Avenue, S.I.T.E., Karachi-75700, Pakistan</p>
          <p><strong>Phone:</strong> +92-21-37130671-4, +92-21-32574311-2, 32570172-3</p>
          <p><strong>Fax:</strong> +92-21-32561325, 32561315</p>
          <p><strong>Email:</strong> <a href="mailto:inquiries@pakgum.com">inquiries@pakgum.com</a></p>
        </div>

        {/* China Office */}
        <div className="contact-card">
          <h3>China Office</h3>
          <p><strong>Address:</strong> Room 1208, Ordos Tower, 777 Taolin Road, Pudong New Area, Shanghai P.R. China</p>
          <p><strong>Zip Code:</strong> 200135</p>
          <p><strong>Cellphone:</strong> +86-1360-175-1886</p>
          <p><strong>Email:</strong> <a href="mailto:china@pakgum.com">china@pakgum.com</a></p>
        </div>

        {/* Inquiry Form Box */}
        <div className="contact-card">
          <h3>Send Us a Message</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="name@company.com" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="3" placeholder="Write your message here..." required></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit Inquiry</button>
          </form>
        </div>

      </div>
      
    </div>
  );
}