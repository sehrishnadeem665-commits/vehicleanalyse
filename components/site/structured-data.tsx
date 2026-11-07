export function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vehicle Analyse',
    description:
      '100% digital vehicle analysis and report services for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes. No physical vehicle inspection is provided.',
    url: 'https://vehicleanalyse.com',
    telephone: '+442079460958',
    email: 'info@vehicleanalyse.com',
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What kind of service does Vehicle Analyse provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vehicle Analyse provides 100% digital vehicle analysis and report services. We do not carry out physical vehicle inspections.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which vehicle types are covered?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Available digital reports cover cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes. The information available depends on the selected report and vehicle.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you physically inspect or test vehicles?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The service is 100% digital. There is no vehicle visit, workshop appointment, hands-on inspection, or physical testing.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I order a digital report?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Choose a report package, enter your contact and vehicle details, and complete your order online. A confirmation is sent after your order is submitted.',
        },
      },
      {
        '@type': 'Question',
        name: 'How will I receive my report?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your selected digital report is delivered by email. The applicable report details and delivery information are provided with your order.',
        },
      },
      {
        '@type': 'Question',
        name: 'What information is included?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The report content depends on the service selected and the information available for the vehicle. It is a digital analysis, not a physical condition assessment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does the report certify a vehicle’s condition?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. A digital report is provided for information and does not certify the physical condition, safety, or roadworthiness of a vehicle.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use the report when considering a purchase?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The report may help you review available vehicle information as part of your decision. It does not replace a physical inspection or professional advice.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which digital report should I choose?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Choose from the available pre-purchase, safety, diagnostic data, MOT and emissions history, caravan and motorhome, or EV and hybrid report options.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does a caravan or motorhome report involve a site visit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The caravan and motorhome report is digital and does not include an on-site habitation or systems inspection.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
