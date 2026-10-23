import "./page.css";


import MainImg from '@/app/HomeComponent/Component/MainImg'
import AboutInfo from '@/app/HomeComponent/Component/AboutInfo'


// import Images 
import our_values from '@/app/Images/our_values.png';


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
    <main className="pg-main-about"> 

        {/* <AboutInfo /> */}
          <AboutInfo
             description={description}
             features={features}
         />

        <MainImg
          image={our_values}
          width="70%"
          height="95vh"
        />
        
    </main>
  );
}