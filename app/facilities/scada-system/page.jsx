import Div from "@/app/GlobalComponent/Div/Div"
import MainHeading from "@/app/GlobalComponent/Facilities/Headings/MainHeading"
import BulletList from '@/app/GlobalComponent/Facilities/BulletList/BulletList'
import { Card } from "@/app/GlobalComponent/Facilities/Card/Card"

import './page.css'

// image importing 
import SD1 from '../../Images/facilities/Store_in_faci/SD1.png'
import SD2 from '../../Images/facilities/Store_in_faci/SD2.jpg'
import SD3 from '../../Images/facilities/Store_in_faci/SD3.jpg'

function page() {
  return (
    <Div>

      <MainHeading Content={'Supervisory Control And Data Acquisition (SCADA) system'} />

      <BulletList items={[
          "Computer controlled machinery",
          "Process control parameters are monitored by trained personnel as well as computers",
          "Statistical Process Control (SPC) techniques used to ensure processes are in control",
        ]} />

        <div className='scada-banner'>
            <Card
              key={1}
              imageSrc={SD1.src}
              altText={"khan"}
            />
            <Card
              key={2}
              imageSrc={SD2.src}
              altText={"khan"}
            />
            <Card
              key={3}
              imageSrc={SD3.src}
              altText={"khan"}
            />
        </div>

    </Div>
  )
}

export default page
