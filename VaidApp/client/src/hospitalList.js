import React from 'react';

const HospitalList = () => {
  const hospitals = [
    {
      name: 'Bowring & Lady Curzon Hospital',
      address: 'Near Shivajinagar Bus Stand, Cantonment Area, Bengaluru - 560001',
      contact_number: '25591325 / 25591362',
      disease_specialties: 'General Medicine, Surgery, Obstetrics, etc.'
    },
    {
      name: 'Central Leprosorium',
      address: 'Near Binny Mill, 1st Cross, Magadi Road, Behind City Railway Station, Bengaluru - 560023',
      contact_number: '23350239 / 23330239',
      disease_specialties: 'Leprosy Treatment'
    },
    {
      name: 'ESI Hospital, Basavangudi',
      address: 'North Anjaneya Temple Street, Basavanagudi, Bengaluru - 560004',
      contact_number: '6673554',
      disease_specialties: 'General Medicine, Surgery'
    },
    {
      name: 'ESI Hospital, Indiranagar',
      address: 'HAL II Stage, Indiranagar, Bengaluru - 560038',
      contact_number: '2526993 / 25266994',
      disease_specialties: 'General Medicine, Surgery'
    },
    {
      name: 'ESI Hospital, Rajajinagar',
      address: '3rd Block, Rajajinagar, Bengaluru - 560010',
      contact_number: '23324112',
      disease_specialties: 'General Medicine, Surgery'
    },
    {
      name: 'Epidemic Diseases Hospital',
      address: 'Bayapanahalli, Old Madras Road, Bengaluru - 560038',
      contact_number: '25510258 / 25510252 / 25519252',
      disease_specialties: 'Infectious Diseases'
    },
    {
      name: 'General Hospital, Jayanagar',
      address: '4th T Block, Opposite Sagar Hotel, Jayanagar, Bengaluru',
      contact_number: '26345711 / 26530633',
      disease_specialties: 'General Medicine, Surgery'
    },
    {
      name: 'General Hospital, Palace Guttahalli',
      address: '5th Cross Road, Palace Guttahalli, Bengaluru',
      contact_number: '26345711',
      disease_specialties: 'General Medicine, Surgery'
    },
    {
      name: 'Govt. TB and CD Hospital',
      address: 'Old Madras Road, Indira Nagar, Bengaluru',
      contact_number: '25281245',
      disease_specialties: 'Tuberculosis and Chest Diseases'
    },
    {
      name: 'Haji Sir Ismail Sait Ghosha Hospital',
      address: 'Indian Express, Venkataswamy Road, Shivaji Nagar, Bengaluru - 560051',
      contact_number: '22866529',
      disease_specialties: 'General Medicine, Surgery'
    },
    {
      name: 'Indira Gandhi Institute of Child Health',
      address: 'South Hospital Complex, Near NIMHANS, Dharmaram College, Bengaluru - 560029',
      contact_number: '26342421 / 26343143',
      disease_specialties: 'Pediatrics, Child Health'
    },
    {
      name: 'Jayadeva Institute of Cardiology',
      address: '9th Block, Jayanagar, Bannerghatta Road, Bengaluru - 560069',
      contact_number: '26534600',
      disease_specialties: 'Cardiology'
    },
    {
      name: 'K.C. General Hospital',
      address: '#89, 5th Cross, Near Malleswaram Police Station, Malleswaram, Bengaluru',
      contact_number: '23343791 / 23341771',
      disease_specialties: 'General Medicine, Surgery'
    },
    {
      name: 'Kidwai Memorial Institute of Oncology',
      address: 'Hosur Road, Bengaluru - 560029',
      contact_number: '26560708 / 26560722 / 26560723',
      disease_specialties: 'Oncology'
    },
    {
      name: 'Lady Willington State T.B Centre',
      address: 'Near Cubbon Park, Bengaluru',
      contact_number: '22865538',
      disease_specialties: 'Tuberculosis Treatment'
    },
    {
      name: 'Minto Ophthalmic Hospital',
      address: 'Chamrajpet, Bengaluru',
      contact_number: '26615678',
      disease_specialties: 'Ophthalmology'
    },
    {
      name: 'SDS Tuberculosis Sanatorium',
      address: 'Near Hosur Road, Bengaluru',
      contact_number: '26560708',
      disease_specialties: 'Tuberculosis and Chest Diseases'
    },
    {
      name: 'Victoria Hospital',
      address: 'K.R. Road, Bengaluru',
      contact_number: '22865538',
      disease_specialties: 'General Medicine, Surgery'
    },
    {
      name: 'Vani Vilas Women and Children Hospital',
      address: 'K.R. Road, Bengaluru',
      contact_number: '22865538',
      disease_specialties: 'Obstetrics, Gynecology, Pediatrics'
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Bengaluru Government Hospitals</h1>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'left'
            }}
          >
            <th style={{ padding: '12px 15px' }}>Hospital Name</th>
            <th style={{ padding: '12px 15px' }}>Address</th>
            <th style={{ padding: '12px 15px' }}>Contact Number</th>
            <th style={{ padding: '12px 15px' }}>Disease Specialties</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f1f1f1'}
              onMouseOut={(e) => e.target.style.backgroundColor = index % 2 === 0 ? '#f9f9f9' : '#ffffff'}
            >
              <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>
                {hospital.name}
              </td>
              <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>
                {hospital.address}
              </td>
              <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>
                {hospital.contact_number}
              </td>
              <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>
                {hospital.disease_specialties}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HospitalList;
