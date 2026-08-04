export interface LocationArea {
  id: string;
  name: string;
  isHeadquarters?: boolean;
  type: 'Gurgaon Sector' | 'Gurgaon Locality' | 'NCR City';
  description: string;
  servicedNeighborhoods: string[];
  responseDelay: string;
  imageUrl: string;
}

export const locationsData: LocationArea[] = [
  {
    id: 'gurgaon-sector-5',
    name: 'Sector 5 & Sheetla Colony (HQ)',
    isHeadquarters: true,
    type: 'Gurgaon Sector',
    description: 'Our central operational headquarters. Providing rapid 30-minute emergency dispatch across Sheetla Mata Road, Sector 4, 5, 6, and Old Gurgaon.',
    servicedNeighborhoods: ['Sheetla Colony', 'Sector 5 Block A/B/C', 'Sector 4', 'Sector 6', 'Railway Road Gurgaon'],
    responseDelay: '30-45 mins (Same-day dispatch)',
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'dlf-phase-1-5',
    name: 'DLF Phase 1, 2, 3, 4 & 5',
    type: 'Gurgaon Locality',
    description: 'Premium anti-termite, cockroach gel, and lawn mosquito misting services for villas and luxury high-rise apartments.',
    servicedNeighborhoods: ['DLF Phase 1-5', 'Hamilton Court', 'The Crest', 'Magnolias', 'Aralias', 'DLF Cyber City'],
    responseDelay: 'Within 2 hours',
    imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'sohna-road',
    name: 'Sohna Road & Sector 47 - 50',
    type: 'Gurgaon Sector',
    description: 'Comprehensive residential society pest protection and commercial office park hygiene services.',
    servicedNeighborhoods: ['Vipul World', 'Malibu Towne', 'Sector 47', 'Sector 48', 'Sector 49', 'Sector 50'],
    responseDelay: 'Within 2 hours',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'golf-course-road',
    name: 'Golf Course Road & Extension',
    type: 'Gurgaon Locality',
    description: 'Specialized subterranean termite barriers and quarterly roach control for luxury gated communities.',
    servicedNeighborhoods: ['Sector 54', 'Sector 55', 'Sector 56', 'Golf Course Extension', 'Sector 65', 'Sector 67'],
    responseDelay: 'Within 2 hours',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'cyber-city-udyog-vihar',
    name: 'Cyber City & Udyog Vihar',
    type: 'Gurgaon Locality',
    description: 'Commercial corporate office pest management, rodent baiting, and FSSAI compliance auditing.',
    servicedNeighborhoods: ['Cyber Hub', 'Udyog Vihar Phase I-V', 'DLF City Phase III', 'Ambience Island'],
    responseDelay: 'Rapid 1-hour commercial dispatch',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'new-gurgaon-sector-80-95',
    name: 'New Gurgaon (Sectors 81 - 95)',
    type: 'Gurgaon Sector',
    description: 'Pre-construction and post-construction termite treatments for newly handed-over residential societies.',
    servicedNeighborhoods: ['Sector 82', 'Sector 83', 'Sector 84', 'Sector 86', 'Sector 90', 'Sector 92', 'Sector 95'],
    responseDelay: 'Same-day service',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'delhi-ncr',
    name: 'South & West Delhi',
    type: 'NCR City',
    description: 'Residential flat anti-bed bug and termite treatment across Vasant Kunj, Saket, Dwarka, and Janakpuri.',
    servicedNeighborhoods: ['Dwarka Sub City', 'Vasant Kunj', 'Saket', 'Chattarpur', 'Punjabi Bagh'],
    responseDelay: 'Scheduled within 4 hours',
    imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'noida-greater-noida',
    name: 'Noida & Greater Noida',
    type: 'NCR City',
    description: 'Apartment herbal cockroach gel baiting and society mosquito fogging.',
    servicedNeighborhoods: ['Noida Sector 62', 'Noida Expressway', 'Greater Noida West', 'Sector 137'],
    responseDelay: 'Same-day booking available',
    imageUrl: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'faridabad',
    name: 'Faridabad',
    type: 'NCR City',
    description: 'Industrial warehouse rodent exclusion and residential home pest control.',
    servicedNeighborhoods: ['Sector 15', 'Sector 21', 'Mathura Road Industrial Area', 'Greater Faridabad'],
    responseDelay: 'Same-day booking available',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'manesar',
    name: 'IMT Manesar',
    type: 'NCR City',
    description: 'Industrial manufacturing plant pest management, bird netting, and rodent control.',
    servicedNeighborhoods: ['IMT Manesar Sector 1-8', 'NSG Campus', 'Panchgaon'],
    responseDelay: 'Rapid commercial response',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
  }
];
