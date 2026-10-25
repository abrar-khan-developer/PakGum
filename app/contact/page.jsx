import './contact.css'

import Form from './component/Form';
import ContactCard from './component/ContactCard';

export default function ContactUs() {

    const pakistanOffice = {
      title: "Pakistan Office",
      details: [
        { label: "Address", value: "B/30, Estate Avenue, S.I.T.E., Karachi-75700, Pakistan" },
        { label: "Phone", value: "+92-21-37130671-4, +92-21-32574311-2, 32570172-3" },
        { label: "Fax", value: "+92-21-32561325, 32561315" },
      ],
      email: "inquiries@pakgum.com"
    };

    const chinaOffice = {
      title: "China Office",
      details: [
        { label: "Address", value: "Room 1208, Ordos Tower, 777 Taolin Road, Pudong New Area, Shanghai P.R. China" },
        { label: "Zip Code", value: "200135" },
        { label: "Cellphone", value: "+86-1360-175-1886" },
      ],
      email: "china@pakgum.com"
    };
    
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
        
        <ContactCard 
          title = {pakistanOffice.title}
          details={pakistanOffice.details}
          email={pakistanOffice.email}
        />

        <ContactCard 
          title = {chinaOffice.title}
          details={chinaOffice.details}
          email={chinaOffice.email}
        />

        <Form />

      </div>
      
    </div>
  );
}