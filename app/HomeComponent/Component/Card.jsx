import './Card.css'

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="pg-feature">
      <span className="pg-icon">{icon}</span>
      <div>
        <strong>{title}</strong>
        <small>{description}</small>
      </div>
    </div>
  );
}