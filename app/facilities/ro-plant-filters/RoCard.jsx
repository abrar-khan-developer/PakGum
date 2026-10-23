"use client"
import './RoCard.css';


export default function RoCard({ arr = LabData }) {
  return (
    <div className="card-grid-container">
      {arr.map((item) => (
        <div key={item.id} className="modern-card">
          {/* Image Section */}
          <div className="card-image-wrapper">
            <img
              src={item.imageSrc}
              alt={item.altText}
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/600x450/004d1a/ffffff?text=${encodeURIComponent(item.title)}`;
              }}
            />
            <div className="card-overlay" />
          </div>

          {/* Content & Title Section */}
          <div className="card-content">
            {item.subtitle && <span className="card-badge">{item.subtitle}</span>}
            <h3 className="card-title">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}