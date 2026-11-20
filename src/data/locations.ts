export interface LocationArea {
  id: string;
  name: string;
  isHeadquarters?: boolean;
  type: string;
  description: string;
  servicedNeighborhoods: string[];
  responseDelay: string;
  imageUrl: string;
}

export const locationsData: LocationArea[] = [
  {
    id: 'malad-west-hq',
    name: 'Malad West & Malvani (Office HQ)',
    isHeadquarters: true,
    type: 'Operational Central Hub',
    description: 'Our central operational office at Gate no-7, N C C, Shop No 17, Plot No- 8, Malvani Rd, Malvani, Malad West, Mumbai, Maharashtra 400095. Providing rapid 30-minute emergency dispatch for Gel Treatment, Rodent, Mosquito, Honey Bees, General Pest Management & Termite Treatment.',
    servicedNeighborhoods: ['Malvani', 'Malad West', 'Malad East', 'Mindspace', 'Chincholi Bunder', 'Marve Road', 'Orlem'],
    responseDelay: '30-45 mins (Immediate dispatch)',
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'andheri-east-west',
    name: 'Andheri East & Andheri West',
    type: 'Commercial & Residential Zone',
    description: 'Specialized commercial corporate office pest management, restaurant hygiene, residential apartment cockroach gel, and society termite treatments.',
    servicedNeighborhoods: ['MIDC Andheri', 'Chakala', 'Marol', 'Sakinaka', 'Lokhandwala Complex', 'Versova', 'DN Nagar'],
    responseDelay: 'Within 1 hour',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'goregaon-east-west',
    name: 'Goregaon East & Goregaon West',
    type: 'Residential & Business Hub',
    description: 'Complete anti-termite barriers, herbal roach gel baiting, bed bug steam treatment, and society general pest control.',
    servicedNeighborhoods: ['Aarey Colony', 'Goregaon Hub', 'Film City Road', 'Bangur Nagar', 'Oshiwara', 'Jawahar Nagar'],
    responseDelay: 'Within 1-2 hours',
    imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'powai-chandivali',
    name: 'Powai & Chandivali',
    type: 'Society & Commercial Tech Park',
    description: 'Comprehensive residential society pest protection, IT park commercial pest control, and lake-side mosquito misting.',
    servicedNeighborhoods: ['Hiranandani Gardens', 'IIT Bombay Area', 'Chandivali Farm Road', 'Saki Vihar Road'],
    responseDelay: 'Within 2 hours',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'malad-kandivali',
    name: 'Malad & Kandivali',
    type: 'Industrial & Residential Sector',
    description: 'Warehouse rodent exclusion, industrial factory pest management, and residential tower pest protection packages.',
    servicedNeighborhoods: ['Malad West Link Road', 'Mindspace', 'Chincholi Bunder', 'Kandivali East Thakur Village', 'Mahavir Nagar'],
    responseDelay: 'Within 2 hours',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'borivali-dahisar',
    name: 'Borivali & Dahisar',
    type: 'Residential & Society Coverage',
    description: 'Home pest protection plans, anti-termite drill barriers, and society monthly maintenance contracts.',
    servicedNeighborhoods: ['Borivali West IC Colony', 'Shimpoli', 'Borivali East', 'Dahisar East & West'],
    responseDelay: 'Same-day booking',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bandra-santacruz-vile-parle',
    name: 'Vile Parle, Santacruz & Bandra',
    type: 'Hospitality & Premium Residential',
    description: 'Zero-odor restaurant & cafe hygiene compliance, hotel pest management, and luxury villa treatments.',
    servicedNeighborhoods: ['Vile Parle East & West', 'Santacruz', 'Bandra West', 'Bandra Kurla Complex (BKC)', 'Pali Hill'],
    responseDelay: 'Rapid 1-hour dispatch',
    imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bhiwandi-thane-warehouse',
    name: 'Thane & Warehouse Logistics Hubs',
    type: 'Industrial & Warehouse Zone',
    description: 'Industrial warehouses, FMCG storage godowns, factory pest control, and rodent burrow exclusion barriers.',
    servicedNeighborhoods: ['Wagle Estate Thane', 'Ghopbunder Road', 'Logistics Parks', 'Godown Clusters'],
    responseDelay: 'Scheduled commercial dispatch',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
  }
];
