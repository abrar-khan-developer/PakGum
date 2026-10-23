import Div from "@/app/GlobalComponent/Div/Div"
import MainHeading from "@/app/GlobalComponent/Facilities/Headings/MainHeading"
import BulletList from '@/app/GlobalComponent/Facilities/BulletList/BulletList'
import CardRow from "@/app/GlobalComponent/Facilities/Card/CardRow"


import './page.css'

// image importing 
import F1 from '../../Images/facilities/Store_in_faci/F1.png'
import F2 from '../../Images/facilities/Store_in_faci/F2.png'
import F3 from '../../Images/facilities/Store_in_faci/F3.png'
import F4 from '../../Images/facilities/Store_in_faci/F4.png'



function page() {
     const FireData = [
          { id: 1, imageSrc: F1.src, altText: "Physical Lab", title: "Fire Hose Box"},
          { id: 2, imageSrc: F2.src, altText: "Micro Lab", title : "Fire Hydrant Pipeline"  },
          { id: 3, imageSrc: F3.src, altText: "Chemical Lab", title: "Fire Hydrant System" },
        ];

  return (
    <Div>

      <MainHeading Content={'Fire Fighting System'} />

      <BulletList items={[
          "Auto start fire hydrant system. Pressure is maintained in pipelines",
          "Regular monitoring ensures proper functionality",
          "Training for fire fighting is provided to all personnel irrespective of age or sex",
          "Regular simulations and drills are carried out to ensure equipment is functional and personnel are adequately trained",
        ]} />

      <CardRow arr={FireData}/>

      <div className="fire-image-wrapper">
          <img 
            src= {F4.src}
            alt="Quality Control Process - Sampling & Inspection" 
            className="fire-process-img"
          />
          <div className="fire-card-title">Fire Drills & fire fighting training</div>
      </div>

    </Div>
  )
}

export default page
