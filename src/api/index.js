import axios from 'axios';

export const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer af6d76b9af615d7488e7e64ff57c20ab80c0cc19d505219cddb11d88dde1ca8d9a73918e1e92a4d0ded397f3b8b9cf97d969c37c566e88f95487e4152dc1f54d94a41a98742e974264f2bc40e0e897f32e753ea6c545c294e2a910891425bf597b73fb9d8d9ef4b79bbde9e808b47b1c4defc509899d56b4c20f03cc0d44cf85'
};

export const fetchContent = async (path, headers) => {
  const res = await axios.get(`http://localhost:1337/api/${path}`, headers);
  return res.data.data.attributes;
};

export const strapiImage = (url) => {
  return `http://localhost:1337${url}`
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