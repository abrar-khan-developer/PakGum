import "./Product.css";

// Image importing
import GuarSeedImage from "@/app/Images/Guar.jpg";
import GuarSplitsImage from "@/app/Images/Split.jpg";
import GuarMealImage from "@/app/Images/Meal.jpg";
import GuarPowderImage from "@/app/Images/Powder.jpg";

const products = [
  {
    name: "Guar Seed",
    image: GuarSeedImage,
  },
  {
    name: "Guar Splits",
    image: GuarSplitsImage,
  },
  {
    name: "Guar Gum Powder",
    image: GuarPowderImage,
  },
  {
    name: "Guar Meal",
    image: GuarMealImage,
  },
];

export default function Product() {
  return (
    <div className="pg-circle-container">
      {products.map((product) => (
        <div className="pg-product-item" key={product.name}>
          <div className="pg-image-wrap">
            <img
              src={product.image.src || product.image}
              alt={product.name}
            />
          </div>

          <h3 className="pg-product-name">
            {product.name}
          </h3>
        </div>
      ))}
    </div>
  );
}
