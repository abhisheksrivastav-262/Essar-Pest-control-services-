export interface Review {
  id: string;
  authorName: string;
  location: string;
  rating: number;
  serviceType: string;
  comment: string;
  date: string;
  verified: boolean;
}

export const customerReviews: Review[] = [
  {
    id: 'rev-1',
    authorName: 'Rohan Mehta',
    location: 'DLF Phase 5, Gurgaon',
    rating: 5,
    serviceType: 'Subterranean Termite Treatment',
    comment: 'Nexora team did a fantastic job with drill-and-fill termite treatment in our 4BHK apartment. Odorless chemicals, neat cement putty touch-up, and very polite technicians in clean uniform. Highly recommended!',
    date: 'July 2026',
    verified: true
  },
  {
    id: 'rev-2',
    authorName: 'Priya Narang',
    location: 'Sector 56, Gurgaon',
    rating: 5,
    serviceType: 'Herbal Cockroach Gel Service',
    comment: 'We were struggling with tiny German roaches in kitchen cabinets for months. One session of Nexora gel baiting solved the entire problem without having to empty out the pantry dishes. 10/10!',
    date: 'June 2026',
    verified: true
  },
  {
    id: 'rev-3',
    authorName: 'Amitav Ghosh',
    location: 'Cyber Hub Restaurant Owner, Gurgaon',
    rating: 5,
    serviceType: 'Commercial Restaurant Hygiene Plan',
    comment: 'Managing audit compliance for a 120-cover restaurant in Cyber Hub requires absolute pest discretion. Nexora handles late-night monthly servicing, provides FSSAI logbooks, and keeps us 100% audit compliant.',
    date: 'July 2026',
    verified: true
  },
  {
    id: 'rev-4',
    authorName: 'Kavita Deshmukh',
    location: 'Sohna Road, Gurgaon',
    rating: 5,
    serviceType: 'Bed Bug Thermal Blast',
    comment: 'Got bed bugs after a long vacation. Nexora dispatched team within 3 hours. The steam blast + dual spray eliminated every single bug. Slept like a baby the same night!',
    date: 'May 2026',
    verified: true
  },
  {
    id: 'rev-5',
    authorName: 'Sanjay Aggarwal',
    location: 'Sheetla Colony, Gurgaon',
    rating: 5,
    serviceType: 'Full House General Pest Shield',
    comment: 'Local Gurgaon company with professional corporate standards. Extremely affordable ₹999 annual home service package. Technicians arrived exactly on time.',
    date: 'July 2026',
    verified: true
  }
];
