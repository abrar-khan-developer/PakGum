import Div from "@/app/GlobalComponent/Div/Div"
import MainHeading from "@/app/GlobalComponent/Facilities/Headings/MainHeading"
import Header from "./Component/Header"
import Content from "./Component/Content"

import { detail1, certificates1, detail2, certificates2, detail3, certificates3, detail4, certificates4, detail5, certificates5, detail6, certificates6, } from "./Component/CertificationDatta"

function page() {

  return (
    <Div>
        <MainHeading Content={'	Certifications'} />

        <Header obj = {detail1}/>
        <Content certificates={certificates1} />

        <Header obj = {detail2}/>
        <Content certificates={certificates2} />

        <Header obj = {detail3}/>
        <Content certificates={certificates3} />

        <Header obj = {detail4}/>
        <Content certificates={certificates4} />

        <Header obj = {detail5}/>
        <Content certificates={certificates5} />

        <Header obj = {detail6}/>
        <Content certificates={certificates6} />
        
    </Div>
  )
}

export default page

