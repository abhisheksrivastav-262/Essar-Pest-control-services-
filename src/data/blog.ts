export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Home Tips' | 'Commercial Hygiene' | 'Seasonal Guides' | 'Termite Prevention';
  publishDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  readTime: string;
  imageUrl: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      bulletPoints?: string[];
    }[];
    conclusion: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'monsoon-pest-control-tips-gurgaon',
    title: 'Essential Monsoon Pest Control Tips for Gurgaon Homeowners',
    excerpt: 'Humidity and water stagnation during monsoons bring a surge in mosquitoes, termites, and cockroaches. Here is how to keep your home safe.',
    category: 'Seasonal Guides',
    publishDate: 'August 2, 2026',
    author: {
      name: 'Vikram Singh',
      role: 'Head of Technical Operations',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80'
    },
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80',
    content: {
      intro: 'The monsoon season brings welcome relief from Gurgaon intense summer heat, but it also creates ideal breeding grounds for common pests. Increased humidity, rain puddles, and moist soil drive termites into subterranean wooden structures, mosquitoes into balconies, and cockroaches indoors looking for dry shelter.',
      sections: [
        {
          heading: '1. Eliminate Stagnant Water Puddles',
          body: 'Aedes mosquitoes that spread Dengue and Chikungunya breed in tiny pools of clean water trapped in flowerpot saucers, AC drainage trays, and rooftop corners.',
          bulletPoints: [
            'Inspect balcony planters daily and pour out standing water.',
            'Ensure outdoor AC condensate pipes drain directly into waste gullies.',
            'Keep overhead tank lids sealed tightly with gasket covers.'
          ]
        },
        {
          heading: '2. Seal Wall Skirting & Kitchen Drainage Crevices',
          body: 'Cockroaches enter kitchens through open floor traps and gaps between wall tiles. Applying non-toxic gel baits before heavy monsoons establishes a protective shield.'
        },
        {
          heading: '3. Inspect Wooden Doors & Furniture for Termite Mud Tubes',
          body: 'High air moisture content softens wood cellulose. Look out for translucent wings shed near door frames or fine mud channels creeping along skirting boards.'
        }
      ],
      conclusion: 'By practicing proactive dampness control and arranging a pre-monsoon professional home pest inspection with Nexora Pest Management, you can enjoy a safe, pest-free rainy season.'
    }
  },
  {
    slug: 'ultimate-termite-protection-guide-gurgaon',
    title: 'The Ultimate Termite Protection Guide for High-Rise Apartments',
    excerpt: 'Think termites only affect villas and ground floors? Discover how subterranean termites invade 14th-floor luxury apartments in Gurgaon.',
    category: 'Termite Prevention',
    publishDate: 'July 24, 2026',
    author: {
      name: 'Dr. Anita Sharma',
      role: 'Senior Entomologist & Technical Advisor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80',
    content: {
      intro: 'A common misconception among Gurgaon apartment buyers in DLF Phase 5 and Golf Course Extension is that high-rise flats are immune to termite attacks. In reality, termites travel up electrical conduit pipes, plumbing shafts, and concrete wall cracks to reach upper floors.',
      sections: [
        {
          heading: 'Why High-Rise Flats Face Unique Termite Risks',
          body: 'Subterranean termites travel along vertical plumbing and electrical riser shafts in modern multi-story buildings, infiltrating wooden modular kitchens, wardrobes, and wooden flooring.'
        },
        {
          heading: 'Key Early Warning Indicators',
          body: 'Watch out for blistered wooden laminate floors, hollow sounds when tapping door frames, and translucent winged swarmers shedding wings near balcony doors during evening hours.'
        },
        {
          heading: 'Professional Drill-Fill-Seal Barrier Solution',
          body: 'Spot sprays on wood surfaces only target 5% of active termites. Nexora uses precision drill-inject termiticide treatment along wall junctions to destroy subterranean queens.'
        }
      ],
      conclusion: 'Protect your valuable interior wood investments with Nexora 3-Year & 5-Year anti-termite warranty guarantees.'
    }
  },
  {
    slug: 'commercial-pest-audit-compliance-food-industry',
    title: 'Mastering Commercial Pest Audits in Food Processing & Restaurants',
    excerpt: 'FSSAI and HACCP guidelines require zero-tolerance pest compliance for restaurants and cloud kitchens. Here is our step-by-step audit readiness checklist.',
    category: 'Commercial Hygiene',
    publishDate: 'June 18, 2026',
    author: {
      name: 'Rajesh Kumar',
      role: 'Commercial Operations Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    content: {
      intro: 'In the competitive food service industry across Gurgaon Cyber Hub and Sector 29, a single pest sighting can result in FSSAI penalties, loss of license, and catastrophic brand reputational damage.',
      sections: [
        {
          heading: '1. Maintain Updated Service Trend Logs',
          body: 'Third-party auditors review detailed pest sighting logs, MSDS safety datasheets, and floor plan bait station maps.'
        },
        {
          heading: '2. Enforce Insect Light Trap (ILT) Maintenance',
          body: 'Fly catchers must be positioned away from direct prep counters, with UV lamps replaced every 9 to 12 months.'
        },
        {
          heading: '3. Integrated Pest Management (IPM) Exclusion',
          body: 'Install air curtains above entrance doors, brush seals under rear kitchen doors, and mesh guards over floor drain outlets.'
        }
      ],
      conclusion: 'Nexora Pest Management delivers audit-ready documentation and discrete night-shift services for over 150 commercial clients across Delhi NCR.'
    }
  },
  {
    slug: 'natural-vs-chemical-pest-control-safety-pets-kids',
    title: 'Pet & Kid-Safe Pest Control: What Homeowners Must Know',
    excerpt: 'Is chemical pest control safe for toddlers and indoor pets? Learn how Nexora uses eco-friendly, EPA-approved odourless formulations.',
    category: 'Home Tips',
    publishDate: 'May 30, 2026',
    author: {
      name: 'Vikram Singh',
      role: 'Head of Technical Operations',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80'
    },
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    content: {
      intro: 'When scheduling home pest management, family safety is the highest priority. Homeowners often wonder if chemical treatments will leave harmful fumes or endanger pets and young children.',
      sections: [
        {
          heading: 'Odorless Gel Baits vs. Old-Fashioned Harsh Sprays',
          body: 'Nexora utilizes advanced gel matrix technology target-applied inside cracks, completely avoiding air contamination or toxic fumes.'
        },
        {
          heading: 'Micro-Encapsulated Synthetic Pyrethroids',
          body: 'Derived from natural chrysanthemum flower extracts, our indoor spray treatments target cold-blooded insect nervous systems while remaining safe for warm-blooded humans and dogs once dry.'
        }
      ],
      conclusion: 'Enjoy total pest protection without having to vacate your home or worry about your loved ones.'
    }
  }
];
