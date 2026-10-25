import Image from "next/image";

import './MainImg.css'

export default function FactoryImage({
  image,
  // direction = "horizontal",
  width = "45%",
  height = "100px",
  showBadge = true,
}) {
  return (
    <div
      className={`pg-factory`}
      style={{ width, height }}
    >
      <Image
        src={image}
        alt="Pakistan Gum Industries factory"
        fill
        className="pg-factory-img"
        // style={{ objectFit: "cover" }}
      />

      {showBadge && (
        <div className="pg-year">
          <span className="pg-year-icon">▦</span>
          <div>
            <small>Our journey since</small>
            <strong>1962</strong>
          </div>
        </div>
      )}
    </div>
  );
}