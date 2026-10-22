import HeroSlider from "./HomeComponent/Sliders/HeroSlider";
import Div from "./GlobalComponent/Div/Div";
import Product from '@/app/HomeComponent/Product/Product'

export default function Home() {
  return (
    <Div>
      <HeroSlider />
      <Product />

    </Div>
  );
}
