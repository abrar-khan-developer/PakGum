import Paragraph from '@/app/GlobalComponent/Facilities/Paragraph/Paragraph'
import Div from "@/app/GlobalComponent/Div/Div"
import MainHeading from "@/app/GlobalComponent/Facilities/Headings/MainHeading"
import Banner from '@/app/GlobalComponent/Facilities/Card/Banner'


// images importing 
import split from '../../Images/facilities/Store_in_faci/Split.jpg'


function page() {
  return (
    <Div>

      <MainHeading Content={'Splits (double and triple dehusking)'} />

      <Paragraph text = {'Guar Splits, the intermediary product can be further processed or used directly in a variety of applications.'} /> 

      <Banner 
        src={split.src}
      />
      
    </Div>
  )
}

export default page
