import "./About.css";


import MainImg from '../Component/MainImg'
import AboutInfo from '../Component/AboutInfo'

// import Images 
import HomeImage from '@/app/Images/About.jpg';


export default function About() {
  const features = [
    {
      id: 1,
      icon: "✓",
      title: "Since 1962",
      description: "Industry experience",
    },
    {
      id: 2,
      icon: "◇",
      title: "Quality Focus",
      description: "Quality production",
    },
    {
      id: 3,
      icon: "◎",
      title: "Global Reach",
      description: "Export experience",
    },
  ]

  const description =
  "Pakistan Gum Industries (Pvt.) Ltd. commenced operations in 1962 as a manufacturer of guar products. Initially producing Guar Splits, the company expanded into Guar Gum manufacturing and textile printing thickeners. Today, PGI products are exported and used globally.";

  return (
    <main className="pg-section">

      <section className="pg-about">

         <MainImg
          image={HomeImage}
          width="100%"
          height="50vh"
        />

        {/* <AboutInfo /> */}
          <AboutInfo
             description={description}
             features={features}
         />
        
      </section>
      
    </main>
  );
}