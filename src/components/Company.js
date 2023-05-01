import React from 'react';

const Company = () => {
  const [company, setCompany] = React.useState({
    name: 'My Company',
    description: 'We are a company that specializes in providing high-quality products and services to our customers.',
    founded: 2010,
    location: 'New York City',
    employees: 50,
    website: 'https://www.mycompany.com',
  });

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <ul>
        <li>Founded: {company.founded}</li>
        <li>Location: {company.location}</li>
        <li>Number of Employees: {company.employees}</li>
        <li>Website: <a href={company.website}>{company.website}</a></li>
      </ul>
    </div>
  );
}

export default Company;
