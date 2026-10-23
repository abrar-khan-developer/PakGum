
import "./PreFooterSec.css";

// Images Importing
import IsoImage from "@/app/Images/iso-9001.jpg";
import FsscImage from "@/app/Images/fssc-22000.jpg";
import StarImage from "@/app/Images/C3.png";
import HalalImage from "@/app/Images/halal-m.jpg";

// Reusable Component
import Card from "./Card";

const certifications = [
  {
    image: IsoImage,
    title: "ISO 9001:2015",
    description: "Quality Management System certified by SGS",
  },
  {
    image: FsscImage,
    title: "FSSC 22000",
    description: "Food Safety System Certification",
  },
  {
    image: StarImage,
    title: "Certified Compliance",
    description: "Verified international standard mark",
  },
  {
    image: HalalImage,
    title: "Halal / M Verified",
    description: "Compliant with dietary and safety standards",
  },
];

export default function Certifications() {
  return (
    <main className="pg-section">
      <section className="pg-certifications-container">

        <div className="pg-cert-grid">
          {certifications.map((cert) => (
            <Card
              key={cert.title}
              image={cert.image}
              title={cert.title}
              description={cert.description}
            />
          ))}
        </div>
        
      </section>
    </main>
  );
}
