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
    location: 'Malad West, Mumbai',
    rating: 5,
    serviceType: 'Subterranean Termite Treatment',
    comment: "Essar Pest Control team did a fantastic job with drill-and-fill termite treatment in our 3BHK flat. Odorless chemicals, neat cement putty touch-up, and very polite technicians in clean uniform. Highly recommended!",
    date: 'July 2026',
    verified: true,
  },
  {
    id: 'rev-2',
    authorName: 'Priya Narang',
    location: 'Andheri West, Mumbai',
    rating: 5,
    serviceType: 'Herbal Cockroach Gel Service',
    comment: "We were struggling with tiny German roaches in kitchen cabinets for months. One session of Essar Pest Control gel baiting solved the entire problem without having to empty out the pantry dishes. 10/10!",
    date: 'June 2026',
    verified: true,
  },
  {
    id: 'rev-3',
    authorName: 'Amitav Ghosh',
    location: 'Restaurant Owner, Andheri East',
    rating: 5,
    serviceType: 'Commercial Restaurant Hygiene Plan',
    comment: "Managing audit compliance for our restaurant requires absolute pest discretion. Essar Pest Control handles late-night monthly servicing, provides hygiene logs, and keeps us 100% compliant.",
    date: 'July 2026',
    verified: true,
  },
  {
    id: 'rev-4',
    authorName: 'Kavita Deshmukh',
    location: 'Goregaon East, Mumbai',
    rating: 5,
    serviceType: 'Bed Bug Thermal Blast',
    comment: "Got bed bugs after a trip. Essar Pest Control dispatched a team within 2 hours. The steam blast and dual spray eliminated every single bug. Slept peacefully the same night!",
    date: 'May 2026',
    verified: true,
  },
  {
    id: 'rev-5',
    authorName: 'Sanjay Aggarwal',
    location: 'Housing Society Secretary, Malad West',
    rating: 5,
    serviceType: 'Society & Warehouse General Pest Shield',
    comment: "Professional corporate standards with highly affordable pricing for our entire housing society and basement godowns. Technicians arrived exactly on time with proper gear.",
    date: 'July 2026',
    verified: true,
  },
];
