import Div from "@/app/GlobalComponent/Div/Div"
import MainHeading from "@/app/GlobalComponent/Facilities/Headings/MainHeading"
import SubHeading from "@/app/GlobalComponent/Facilities/Headings/SubHeading"
import CardRow from "@/app/GlobalComponent/Facilities/Card/CardRow"

// import images 
import h1 from '../../Images/facilities/h1.jpg'
import h2 from '../../Images/facilities/h2.jpg'
import h3 from '../../Images/facilities/h3.jpg'
import h4 from '../../Images/facilities/h4.jpg'
import h5 from '../../Images/facilities/h5.jpg'
import h6 from '../../Images/facilities/h6.jpg'

function page() {
  const handlingData = [
    { id: 1, imageSrc: h1.src, altText: "Open Mouth", title: "Open Mouth" },
    { id: 2, imageSrc: h2.src, altText: "Valve Type", title: "Valve Type" },
    { id: 3, imageSrc: h3.src, altText: "Bulk Bags", title: "Bulk Bags" },
  ];

  const packagingData = [
    { id: 1, imageSrc: h4.src, altText: "Guar Seed Warehouse", title: "Guar Seed Warehouse" },
    { id: 2, imageSrc: h5.src, altText: "Guar Seed", title: "Guar Seed" },
    { id: 3, imageSrc: h6.src, altText: "Guar (Gum Powder)", title: "Guar (Gum Powder)" },
  ];
  return (
    <Div>
        <MainHeading Content="Handling, Packaging and Storage" />

        <SubHeading Content="Handling" />
        <CardRow arr={handlingData}/>

         <SubHeading Content="Packaging Types" />
        <CardRow arr={packagingData}/>

    </Div>
  )
}

export default page
