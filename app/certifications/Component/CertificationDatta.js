// images importing 
import FSSCLogo from "@/app/Images/certification_logo.jpg";
import IFANCA from "@/app/Images/IFANCA.jpg"
import Orthodox from "@/app/Images/Orthodox.jpg";
import logo_halal from "@/app/Images/logo-halal.gif"
import GMP from "@/app/Images/GMP.png"
import certification_4 from "@/app/Images/certification-4.png"

import Image1 from "@/app/Images/SGS1.jpg";
import Image2 from "@/app/Images/SGS2.jpg";
import HalalCertificate from "@/app/Images/HalalCertificate.jpg"
import StarCertificate from "@/app/Images/StarCertificate.jpg"
import OrganicCertificate from "@/app/Images/OrganicCertificate.jpg"
import GMPB2Certificate  from "@/app/Images/GMPB2Certificate.jpg"
import GMPB2_2Certificate  from "@/app/Images/GMPB2_2Certificate.jpg"
import CertificateHalal  from "@/app/Images/CertificateHalal.jpg"

export const detail1 = {
  logo: FSSCLogo.src,

  desc1:
    "SGS S.A. is a multinational company headquartered in Geneva, Switzerland which provides inspection, verification, testing and certification services and operates over 1,650 offices and laboratories worldwide.IFANCA is one of the world's leading resources for halal information. Halal, when applied to food, is a dietary set of guidelines for Muslims living an Islamic lifestyle. Since 1982, IFANCA is committed to helping halal consumers through research, education and advocacy.",

  desc2:
    "The core services offered by SGS include the inspection and verification of the quantity, weight and quality of traded goods, the testing of product quality and performance against various health, safety and regulatory standards, and to make sure that products, systems or services meet the requirements of standards set by governments, standardization bodies or by SGS customers",

};

export const detail2 = {
  logo: IFANCA.src,

  desc1:
    "IFANCA is one of the world's leading resources for halal information. Halal, when applied to food, is a dietary set of guidelines for Muslims living an Islamic lifestyle. Since 1982, IFANCA is committed to helping halal consumers through research, education and advocacy.",

};
export const detail3 = {
  logo: Orthodox.src,

  desc1:
    "The KOF-K emblem is the internationally recognized trademark of KOF-K Kosher Certification, one of the foremost kosher certification agencies in the world.",

};
export const detail4 = {
  logo: logo_halal.src,

  desc1:
    "Department of Islamic Development Malaysia, or more commonly known by the acronym of its official Malay name -- JAKIM (Jabatan Kemajuan Islam Malaysia) -- is the national-level government institution responsible for halal certification in Malaysia",

};
export const detail5 = {
  logo: GMP.src,

  desc1:
    "GMP+ Good Manufacturing Practices. GMP+ FSA is based on ISO quality management requirements with the integration of a Hazard Analysis and Critical Control Plan (HACCP). The GMP+ certification scheme defines conditions relating to production facilities as well as for storage, transport, trade and monitoring activities.",

};
export const detail6 = {
  logo: certification_4.src,

  desc1:
    "Since the beginning of regulated European Union (EU) organic certification, we serve companies all over the world with a wide range of services including organic certification and the issueance of the Certificate of Inspection (C.O.I.) through TRACES.",

};

// Certificates ka data
export const certificates1 = [
  {
    title: "FSSC 22000",
    category: "Food Safety Management",
    image: Image1,
    description:
      "Food Safety System Certification for food safety management.",
  },
  {
    title: "ISO 9001",
    category: "Quality Management",
    image: Image2,
    description:
      "Quality management system and process certification.",
  },
];

export const certificates2 = [
  {
  title: "Halal Certificate (Guar Gum)",
  category: "Halal Certification",
  image: HalalCertificate,
  description:
    "Halal certification for Guar Gum issued by IFANCA",
},{
  title: "Halal Certificate (Guar Gum)",
  category: "Halal Certification",
  image: HalalCertificate,
  description:
    "Halal certification for Guar Gum issued by IFANCA",
},{
  title: "Halal Certificate (Guar Gum)",
  category: "Halal Certification",
  image: HalalCertificate,
  description:
    "Halal certification for Guar Gum issued by IFANCA",
},
];

export const certificates3 = [
{
  title: "Kosher Certificate (Guar Gum)",
  category: "Kosher Certification",
  image: StarCertificate,
  description:
    "Kosher certification for Guar Gum products.",
},
{
  title: "Kosher Certificate (Guar Gum)",
  category: "Kosher Certification",
  image: StarCertificate,
  description:
    "Kosher certification for Guar Gum products.",
},
];
export const certificates4 =[
  {
    title: "Halal Certificate (Guar Gum - JAKIM)",
    category: "Halal Certification",
    image: CertificateHalal,
    description:
      "Halal certification for Guar Gum issued by JAKIM valid upto 29 April, 2022.",
  }
]

export const certificates5 = [
  {
    title: "GMP+ B2 Certificate (Page 1)",
    category: "Feed Safety Certification",
    image: GMPB2Certificate,
    description:
      "GMP+ B2 feed safety assurance.",
  },
  {
    title: "GMP+ B2 Certificate (Page 2)",
    category: "Feed Safety Certification",
    image: GMPB2_2Certificate, 
    description:
      "GMP+ B2 feed safety assurance certificate.",
}
]

export const certificates6 = [
{
  title: "Organic Certificate",
  category: "Organic Certification",
  image: OrganicCertificate,
  description:
    "Organic certification from Control Union valid upto 25th Dec, 2022.",
}
]