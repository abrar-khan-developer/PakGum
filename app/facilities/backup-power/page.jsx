import Div from "@/app/GlobalComponent/Div/Div"
import MainHeading from "@/app/GlobalComponent/Facilities/Headings/MainHeading"
import BulletList from '@/app/GlobalComponent/Facilities/BulletList/BulletList'

// image importing 
import g1 from '../../Images/facilities/Store_in_faci/g1.png'
import Banner from "@/app/GlobalComponent/Facilities/Card/Banner"


function page() {
  return (

    <Div>

      <MainHeading Content={'Backup Power Generation and SNG Systems'} />

      <BulletList items={[
          "On-site Power Generators provide adequate power to run the entire plant in the event of power breakdowns",
          "On-site SNG plant generates enough gas to ensure that the entire plant can run in the event of a natural gas outage",
        ]} />

        <Banner src = {g1.src}/>

    </Div>
  )
}

export default page
