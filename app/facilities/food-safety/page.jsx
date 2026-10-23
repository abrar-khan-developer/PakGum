// "use client";
import React from 'react';

import './page.css'

import Div from '@/app/GlobalComponent/Div/Div';
import MainHeading from '@/app/GlobalComponent/Facilities/Headings/SubHeading';
import SubHeading from '@/app/GlobalComponent/Facilities/Headings/SubHeading';
import CardRow from '@/app/GlobalComponent/Facilities/Card/CardRow';
import { Card } from '@/app/GlobalComponent/Facilities/Card/Card';
import BulletList from '@/app/GlobalComponent/Facilities/BulletList/BulletList'


// Images Import
import vacuum_cleaner from '../../Images/facilities/vacuum_cleaner.jpg';
import FOOD1 from '../../Images/facilities/FOOD1.jpg';
import FOOD2 from '../../Images/facilities/FOOD2.jpg';
import FOOD3 from '../../Images/facilities/FOOD3.jpg';





function Page() {

const certificationsList = [
    "ISO 9001:2000 certified Quality Management System",
    "FSSC 22000 Certified Food Safety Program",
    "Kosher Certification by Orthodox Union",
    "Food Safety and Quality Assurance",
    "Regular Internal Audit programs and GMPs (Good Manufacturing Practices) ensure sustainability, continuity and improvement in our systems"
  ];

const handlingData = [
  {
    id: 1,
    imageSrc: FOOD1.src,
    altText: "Splits passing through magnets",
    title: "Splits passing through magnets safely",
  },
  {
    id: 2,
    imageSrc: FOOD2.src,
    altText: "Before storage",
    title: "Product condition before storage checks",
  },
  {
    id: 3,
    imageSrc: FOOD3.src,
    altText: "Safety screens and magnets Prior to packaging",
    title: "Safety screens and magnets before packaging",
  },
];
  

  return (

    <Div>

      
      <div className="top-hero-section">

        <div className="text-section">
          <MainHeading Content="Food Safety and Quality Assurance" />
          
          <p className="description">
            In our quest for continuous improvement, we have established strict quality assurance 
            and quality control measures throughout the life cycle of our products. We conduct 
            inspection and tests from raw material, through production stages, and finally on our 
            finished products prior to dispatch.
          </p>

          <p className="description">
            This helps us prevent defects from the beginning, thus enabling us to meet the 
            requirements of our valued customers. Our production support laboratories and final 
            inspection laboratories use inspection techniques based on those provided by internationally 
            recognized organizations like the <strong>FDA</strong>, <strong>AOAC</strong>, and <strong>ISO</strong>.
          </p>
        </div>

        {/* Right Side: Single Main Image Card */}
        <div className="single-card-section">
          <Card
            key={1}
            imageSrc={vacuum_cleaner.src || vacuum_cleaner}
            altText="Centralized Vacuum Cleaning System"
            title="Centralized Vacuum Cleaning System"
          />
        </div>

      </div>

      <SubHeading Content={'Key Standards & Certifications'} />
      <BulletList items={certificationsList} /> 
      

      <CardRow arr={handlingData} />

    </Div>
  );
}

export default Page;