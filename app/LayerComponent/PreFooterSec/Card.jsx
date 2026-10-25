import './Card.css'
export default function Card({ image, title, description }) {
  return (
    <div className="pg-cert-card">
      <div className="pg-cert-img-box">
        <img src={image.src || image} alt={title} />
      </div>

      <div className="pg-cert-info">
        <strong>{title}</strong>
        <small>{description}</small>
      </div>
    </div>
  );
}
