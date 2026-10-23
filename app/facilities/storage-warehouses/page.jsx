// "use client"
// import React from 'react'

import Div from "@/app/GlobalComponent/Div/Div"
import MainHeading from "@/app/GlobalComponent/Facilities/Headings/MainHeading"


// import './storage-warehouses.css'

// images
import w11 from '../../Images/facilities/Store_in_faci/w11.png'
import w12 from '../../Images/facilities/Store_in_faci/w12.png'
import w13 from '../../Images/facilities/Store_in_faci/w13.png'
import w21 from '../../Images/facilities/Store_in_faci/w21.png'
import w22 from '../../Images/facilities/Store_in_faci/w22.png'
import CardRow from "@/app/GlobalComponent/Facilities/Card/CardRow"
 
function page() {
  const Data = [
        { id: 1, imageSrc: w11.src, altText: "Physical Lab", title: "Physical Lab" },
        { id: 2, imageSrc: w12.src, altText: "Micro Lab", title: "Micro Lab" },
        { id: 3, imageSrc: w13.src, altText: "Chemical Lab", title: "Chemical Lab" },
      ];
  const Images = [
        { id: 1, imageSrc: w21.src, altText: "Physical Lab",  },
        { id: 2, imageSrc: w22.src, altText: "Micro Lab",  },
       
      ];

  return (
    <Div>
    {/* <div className='store-container'> */}

        <MainHeading Content={'Storage Warehouses'}/>
        <p>	High capacity RCC warehouses capable of storing Raw material (Guar Seed), In-process material (Splits), Finished products (Guar Gum Powder), and by-products (Guar Protein Extract). Entrances equipped with bird prevention curtains</p>
        <CardRow arr={Data} />
         <MainHeading Content={'Finished Goods Warehouse'}/>
        <CardRow arr={Images} />
      
    {/* </div> */}
    </Div>
  )
}

export default page
