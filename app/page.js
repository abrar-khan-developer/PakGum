import HeroSlider from "./HomeComponent/Sliders/HeroSlider";
import Div from "./GlobalComponent/Div/Div";
import Product from '@/app/HomeComponent/Product/Product';
import About from "./HomeComponent/About/About";
import Contact from "./HomeComponent/Contact/Contact";

export default function Home() {
  return (
    <Div>
      <HeroSlider />
      <Product />
      <About />
      <Contact />

    </Div>
  );
}
