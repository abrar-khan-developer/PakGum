import Div from "@/app/GlobalComponent/Div/Div"
import MainHeading from "@/app/GlobalComponent/Facilities/Headings/MainHeading"
import SubHeading from "@/app/GlobalComponent/Facilities/Headings/SubHeading"
import BulletList from '@/app/GlobalComponent/Facilities/BulletList/BulletList'
import Banner from "@/app/GlobalComponent/Facilities/Card/Banner"
import DoubleCard from "@/app/GlobalComponent/Facilities/Card/DoubleCard"
import CardRow from "@/app/GlobalComponent/Facilities/Card/CardRow"

import './page.css'

// images imported
import physic from '../../Images/facilities/Physical.jpg'
import chemical from '../../Images/facilities/chemical.png'
import Micro from '../../Images/facilities/Micro.jpg'
import Sample_Storage from '../../Images/facilities/Sample_Storage.jpg'
import Calibration from '../../Images/facilities/IMG_4105.jpg'
import PSL from '../../Images/PSL.png'
import PSL2 from '../../Images/PSL.jpg'


function page() {
 
      const LabData = [
      { id: 1, imageSrc: physic.src, altText: "Physical Lab", title: "Physical Lab" },
      { id: 2, imageSrc: Micro.src, altText: "Micro Lab", title: "Micro Lab" },
      { id: 3, imageSrc: chemical.src, altText: "Chemical Lab", title: "Chemical Lab" },
    ];

    const ChemicalLabData = [
           { id: 2, imageSrc: Calibration.src, altText: "Calibration", title: "Calibration" },
           { id: 3, imageSrc: Sample_Storage.src, altText: "Sample Storage", title: "Sample Storage" },
    ]

  return (
    <Div>
        <MainHeading Content="Quality Control at all Stages of the Process" />

        <SubHeading Content="Raw material Inspection" />
        <BulletList items={[
          "Annual surveys of guar growing areas, and daily contact with traders",
          "Supplier evaluation and monitoring",
          "Inspected at unloading (100% sampling)",
          "All inspection/rejection is recorded and is the basis of supplier performance",
        ]} /> 
        <Banner />

         <SubHeading Content="Production Support Laboratory" />
         <BulletList items={[
            "Production Support Laboratory running 24/7 continuously monitors in-process material",
            "ASTM class (certified) sieves used in our particle size testing machines",
            "Brookfield viscometers (Digital and Analogue)"
          ]} />
        <DoubleCard
          firstImage={PSL.src}
          secondImage={PSL2.src}
          banner="Quality Control Laboratories for Final Inspection"
       />

       <SubHeading Content="World class laboratories and test equipment" />

        <ul className="quality-bullet-list">
          <li>Our measuring and test equipment is calibrated at regular pre-defined intervals traceable to international standards</li>
          <li>In-house calibration facility as well as external calibration minimizes downtime</li>
          <li>Production Support Laboratory running 24/7 continuously monitors in-process material</li>
          <li>Quality Control laboratories for final inspection

          <ul className="quality-sub-bullet-list">
              <li>Isolated from production</li>
              <li>Microbiology laboratory (Following FDA/AOAC and customer specified methods)</li>
              <li>Physical laboratory (Following FCC/FAO/ISO and customer specified methods)</li>
              <li>Chemical Laboratory (Following FCC/FAO/ISO and customer specified methods)</li>
          </ul>
          </li>
          <li>Our products conform to the US Food Chemical Codex requirements and those of the Food and Agriculture Organization of the United Nations</li>
        </ul>

       <CardRow arr={LabData} />
       <CardRow arr={ChemicalLabData} />

    </Div>
  )
}

export default page
