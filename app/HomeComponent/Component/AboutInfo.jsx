import Link from "next/link";

import Card from "../Component/Card";
import '../Component/AboutInfo.css'

export default function AboutInformation({
  label = "ABOUT OUR COMPANY",
  heading = "Quality, experience and trust.",
  description,
  features = [],
  buttonText = "Discover Our Company",
  buttonHref = "/about",
  showButton = true,
}) {

  return (
    <div className="pg-about-text">
      <span className="pg-label">{label}</span>

      <h2>{heading}</h2>

      <p className="pg-description">{description}</p>

      <div className="pg-features">
        {features.map((feature) => (
          <Card
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      {showButton && (
        <Link href={buttonHref} className="pg-button">
          {buttonText} <span>→</span>
        </Link>
      )}
      
    </div>
  );
}