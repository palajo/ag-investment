import axios from 'axios';

export const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer e90fbda01a3bc912c937c65eb61aab9a42fa5969f0c565415681a60a57121e286e514a8ff6f1cc5cb149f9b3a84c1f2eecb4e7d6aefe80477bca1eb63c3a228d907b9d9b892148e2f8b6640ae21b2b95bf67a912da3abc7b938074889bc96977e88233f0ba2f1bb59531c50a3e2ea6af8e3311eedc57b4b2afc0885d824d1662'
};

export const fetchContent = async (path, headers) => {
  const res = await axios.get(`https://api.ak-investment.pl/api/${path}`, headers);
  return res.data.data.attributes;
};

export const strapiImage = (url) => {
  return `https://api.ak-investment.pl${url}`
}

export const HomepageConfig = {
  headers: headers,
  params: {
    'populate[0]=': 'HeroBanner',
    'populate[1]=': 'Vacancies',
    'populate[2]=': 'Vacancies.Vacancies',
    'populate[3]=': 'Vacancies.Vacancies.Icon',
    'populate[4]=': 'Vacancies.Vacancies.Benefits',
    'populate[5]=': 'Vacancies.Vacancies.Benefits.Icon',
    'populate[6]=': 'Slider',
    'populate[7]=': 'Slider.ImageGallery',
    'populate[8]=': 'About',
    'populate[9]=': 'Partners',
    'populate[10]=': 'Partners.PartnerLogos',
    'populate[11]=': 'EmploymentSteps',
    'populate[12]=': 'EmploymentSteps.Step',
    'populate[13]=': 'Contacts',
    'populate[14]=': 'Contacts.Contact',
    'populate[15]=': 'Contacts.Contact.Icon',
    'populate[16]=': 'Callback',
  }
}

export const GeneralConfig = {
  headers: headers,
  params: {
    'populate[0]=': 'Logo',
    'populate[1]=': 'LogoWhite',
    'populate[2]=': 'HeaderContacts',
    'populate[3]=': 'HeaderContacts.Contact',
    'populate[4]=': 'FooterContacts',
    'populate[5]=': 'FooterContacts.Contact',
    'populate[6]=': 'FooterContacts.Contact.Icon',
  }
}

export const ApplyConfig = {
  headers: headers,
  params: {
    'populate=': '*',
  }
}