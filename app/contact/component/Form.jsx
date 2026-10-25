"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css'

function Form() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg("");

    // EmailJs Credentials
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;   // Service Id In Email Service Option
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE;  // Template Id In Email Template Option
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;    // Publick Key In Account Option 
    console.log(SERVICE_ID,TEMPLATE_ID,PUBLIC_KEY)

    // EmailJs Library Settup Code
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then((result) => {
            setLoading(false);
            setStatusMsg("Message sent successfully!");
            formRef.current.reset(); // Form clear Ky Ly
        }, (error) => {
            setLoading(false);
            setStatusMsg("Failed to send message. Please try again.");
            console.error("EmailJS Error:", error);}
        );
  };

  return (
    <div className="contact-card">
        <h3>Send Us a Message</h3>

        <form ref={formRef} onSubmit={sendEmail}>
            
            <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="user_name" placeholder="Full Name" required />
            </div>

            <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="user_email" placeholder="name@company.com" required />
            </div>

            <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="3" placeholder="Write your message here..." required></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Submit Inquiry"}
            </button>

            {statusMsg && <p className="status-message" style={{ marginTop: '10px', fontWeight: 'bold' }}>{statusMsg}</p>}

        </form>

    </div>
  )
}

export default Form