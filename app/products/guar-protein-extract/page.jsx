import Paragraph from '@/app/GlobalComponent/Facilities/Paragraph/Paragraph'
import Div from "@/app/GlobalComponent/Div/Div"
import MainHeading from "@/app/GlobalComponent/Facilities/Headings/MainHeading"
import Banner from '@/app/GlobalComponent/Facilities/Card/Banner'
import { Card } from '@/app/GlobalComponent/Facilities/Card/Card'

// import images
import TGPE from '../../Images/facilities/TGPE.jpg'
import Farms from '../../Images/facilities/Store_in_faci/Farms.jpg'
import Cow from '../../Images/facilities/Store_in_faci/Cow.jpg'

import './page.css'

function page() {
  return (
    <Div>

      <MainHeading Content={'	Guar Protein Extract (Guar Meal)'} />

      <Paragraph text = {"Guar is a valuable source of protein. Thus Guar Protein Extract is widely used in the production of cattle and poultry feed throughout the world."} /> 

      <Banner 
        src={TGPE.src}
      />

      <div className='farms-container'>
          <Card
            key={3}
            imageSrc={Farms.src}
            altText="Poultry Farms"
            title="Poultry Farms"
          />
          <Card
            key={4}
            imageSrc={Cow.src}
            altText="Cattle Farms"
            title="Cattle Farms"
          />
      </div>
    </Div>
  )
}

export default page
