export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  salaryRange: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

export const openPositions: JobPosition[] = [
  {
    id: 'tech-gurgaon',
    title: 'Certified Pest Control Specialist / Technician',
    department: 'Field Service Operations',
    location: 'Gurgaon HQ (Sector 5)',
    type: 'Full-time',
    salaryRange: '₹22,000 - ₹32,000 / month + Performance Bonus',
    experience: '1 - 3 Years in Home Services',
    summary: 'Perform inspect-drill-treat pest management protocols across residential flats, luxury villas, and commercial premises in Gurgaon NCR.',
    responsibilities: [
      'Conduct site inspections for termites, cockroaches, rodents, and bed bugs.',
      'Mix and apply eco-friendly EPA-approved chemical formulations safely.',
      'Maintain clear digital job cards and explain preventive advice to homeowners.',
      'Adhere strictly to personal protective equipment (PPE) safety standards.'
    ],
    requirements: [
      'Minimum 10th/12th Pass or Vocational Diploma in Agriculture/Biology.',
      'Valid two-wheeler driving license (bike provided or petrol allowance).',
      'Punctual, polite customer manner and basic Hindi/English communication.'
    ]
  },
  {
    id: 'route-mgr',
    title: 'Route Operations Manager - Gurgaon East',
    department: 'Operations',
    location: 'Gurgaon (DLF & Golf Course Road)',
    type: 'Full-time',
    salaryRange: '₹35,000 - ₹50,000 / month',
    experience: '3 - 5 Years in Logistics / Route Management',
    summary: 'Oversee daily technician dispatch schedules, stock inventory management, and high-value client relationship audits.',
    responsibilities: [
      'Manage daily dispatch routes for a team of 15+ field technicians.',
      'Ensure 100% on-time arrival and quality spot audits in luxury high-rises.',
      'Monitor chemical stock inventory levels at Sector 5 central warehouse.'
    ],
    requirements: [
      'Bachelor’s degree in Operations, Management, or related field.',
      'Prior experience in logistics, home services, or facility management.',
      'Proficiency in smartphone app dispatch systems and MS Excel.'
    ]
  },
  {
    id: 'csr-gurgaon',
    title: 'Customer Service & Booking Representative',
    department: 'Customer Care & Sales',
    location: 'Gurgaon HQ (Sheetla Colony)',
    type: 'Full-time',
    salaryRange: '₹20,000 - ₹28,000 / month',
    experience: '1+ Years in Call Center / Customer Care',
    summary: 'Handle inbound customer inquiries, book inspection appointments, and resolve post-service queries.',
    responsibilities: [
      'Answer incoming customer calls on 8368334476 helpline promptly.',
      'Explain Nexora pest treatment packages and book technician visits.',
      'Follow up with existing clients for annual warranty renewals.'
    ],
    requirements: [
      'Fluent in spoken Hindi and conversational English.',
      'Friendly phone etiquette and fast computer typing skills.',
      'High school diploma or Bachelor degree.'
    ]
  },
  {
    id: 'commercial-sales',
    title: 'Commercial Key Account Executive',
    department: 'B2B Sales',
    location: 'Gurgaon & Delhi NCR',
    type: 'Full-time',
    salaryRange: '₹40,000 - ₹65,000 / month + Uncapped Commission',
    experience: '2 - 4 Years in B2B Facility Management Sales',
    summary: 'Drive B2B growth by securing annual pest management contracts with restaurants, hotels, hospitals, and corporate office parks.',
    responsibilities: [
      'Pitch Nexora Integrated Pest Management (IPM) to restaurant managers and facility directors.',
      'Conduct commercial site surveys and draft technical proposal quotes.',
      'Ensure FSSAI/HACCP audit documentation compliance for corporate clients.'
    ],
    requirements: [
      'Proven track record in B2B service sales in NCR region.',
      'Strong negotiation and relationship-building skills.',
      'Own vehicle for client site visits.'
    ]
  }
];
