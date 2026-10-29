export function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Vehicle Analyse',
    description:
      'Vehicle inspections for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes, including pre-purchase, safety, diagnostic, and habitation checks.',
    url: 'https://checkmyvan.com',
    telephone: '+442079460958',
    email: 'info@vehicleanalyse.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '24 Meridian Way',
      addressLocality: 'London',
      postalCode: 'SW18 4QL',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.45,
      longitude: -0.2,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '17:00',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    priceRange: '£49–£169',
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What types of vehicles do you inspect?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide vehicle-specific inspection services for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in the vehicle inspection?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our vehicle inspections cover key areas of the vehicle to help identify potential issues and give you a clearer understanding of its overall condition.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide on-site inspections?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Inspection availability depends on the selected service and vehicle location. Please check the details of your chosen inspection before placing your order.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I book a vehicle inspection?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simply select your preferred inspection service and complete your order online. Once your order is placed, you will receive a confirmation message with the relevant details.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will I receive an order confirmation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Once you have placed your order, you will receive a confirmation message confirming that your order has been received.',
        },
      },
      {
        '@type': 'Question',
        name: 'How soon will I receive my Digital PDF Report?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You will receive your Digital PDF Inspection Report within 1 hour of placing your order, so you can review the inspection findings promptly.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in the Digital PDF Report?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your Digital PDF Report provides a summary of the inspection findings, highlighting the vehicle’s condition and any issues identified during the inspection.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use the inspection report to negotiate the price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The report can help you identify potential issues and use the inspection findings to support price negotiations with the seller.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which inspection is right for my vehicle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The appropriate inspection depends on your vehicle type and the checks you require. Choose a service that matches your car, motorcycle, van, truck, caravan, campervan, or motorhome.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a habitation check?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A habitation check focuses on the living area of a caravan, campervan, or motorhome, including relevant systems and facilities.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
