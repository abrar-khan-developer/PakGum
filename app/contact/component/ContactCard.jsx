import './ContactCard.css'

const ContactCard = ({ title, details, email }) => {
  return (
    <div className="contact-card">
      <h3>{title}</h3>

      {/* Har detail ko map karke render karega */}
      {details.map((item, index) => (
        <p key={index} dir="ltr">
          <strong>{item.label}:</strong> {item.value}
        </p>
      ))}

      {/* Email hamesha anchor link ke sath aayega */}
      {email && (
        <p>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      )}
    </div>
  );
};

export default ContactCard;