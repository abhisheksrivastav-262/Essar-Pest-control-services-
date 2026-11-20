export interface Pest {
  slug: string;
  name: string;
  scientificName: string;
  category: 'Insects' | 'Rodents' | 'Crawling' | 'Flying';
  tagline: string;
  shortHook: string;
  primarySeason: string;
  dangerLevel: 'Low' | 'Moderate' | 'High' | 'Severe';
  imageUrl: string;
  description: string;
  appearance: string;
  behavior: string;
  whyItsAProblem: string[];
  signsOfInfestation: string[];
  treatmentProcess: {
    step: number;
    title: string;
    description: string;
  }[];
}

export const pestsData: Pest[] = [
  {
    slug: 'termites',
    name: 'Subterranean Termites (Deemak)',
    scientificName: 'Isoptera (Subterranean & Drywood)',
    category: 'Insects',
    tagline: 'Protect Your Wooden Structure from Silent Destruction',
    shortHook: 'Destructive wood-boring insects capable of causing severe structural damage quietly over time.',
    primarySeason: 'Monsoon & Post-Monsoon (July - November)',
    dangerLevel: 'Severe',
    imageUrl: '/images/pests/Subterranean Termites (Deemak).png',
    description: 'Termites, commonly referred to as "deemak" in India, are among the most economically destructive pests in Gurgaon and NCR. Subterranean termites construct mud tubes to traverse from soil into structural wood, consuming cellulose 24 hours a day.',
    appearance: 'Creamy white to light brown body, 4-10 mm long, soft-bodied with straight antennae. Swarmers have clear equal-sized wings.',
    behavior: 'Live in massive subterranean colonies of up to several million members. They thrive in damp, soil-contact conditions and hollow out wooden doors, window frames, furniture, and wall structures.',
    whyItsAProblem: [
      'Causes irreversible structural timber damage amounting to lakhs of rupees.',
      'Hidden destruction inside walls, door frames, and wooden flooring until collapse.',
      'Swarming winged adults infest surrounding wooden assets rapidly during humid weather.'
    ],
    signsOfInfestation: [
      'Mud tubes on exterior foundations, skirting boards, or internal walls.',
      'Hollow-sounding wooden doors, wardrobes, or staircase railings.',
      'Discarded translucent wings near windowsills and light fixtures.',
      'Blistered paint or fine sawdust-like frass accumulating under furniture.'
    ],
    treatmentProcess: [
      {
        step: 1,
        title: 'Comprehensive Drill-Inject Inspection',
        description: 'Our certified technicians conduct ultrasonic & moisture scanning along wall skirting, wooden fixtures, and foundation perimeter.'
      },
      {
        step: 2,
        title: 'Chemical Barrier Creation (DRILL-FILL-SEAL)',
        description: 'Precision drilling at 45-degree angles every 1 foot along wall floor junctions, injecting non-repellent termiticide (Bayer Premise / Agenda) directly into subterranean channels.'
      },
      {
        step: 3,
        title: 'Follow-up & Guarantee Audit',
        description: "Transparent sealing with color-matched cement putty, followed by quarterly inspections under our 3-Year / 5-Year Essar Pest Control Anti-Termite Warranty."
      }
    ]
  },
  {
    slug: 'german-cockroach',
    name: 'German Cockroach',
    scientificName: 'Blattella germanica',
    category: 'Crawling',
    tagline: 'Odorless Kitchen & Pantry Roach Eradication',
    shortHook: 'Small, rapidly multiplying kitchen pests carrying salmonella and contaminating food pantries.',
    primarySeason: 'Year-Round (Peak Spring & Summer)',
    dangerLevel: 'High',
    imageUrl: '/images/pests/German Cockroach.png',
    description: 'German cockroaches are the most frequent kitchen pest in Gurgaon apartments and restaurant pantries. They hide inside cabinet hinges, microwave motors, and under sink plumbing.',
    appearance: 'Tan to light brown body, 12-15 mm long, with two parallel dark stripes running along the head shield.',
    behavior: 'Nocturnal scavengers that nest close to moisture and food sources in warm indoor environments.',
    whyItsAProblem: [
      'Contaminates open food and preparation surfaces with pathogenic bacteria.',
      'Triggers severe allergic reactions and asthmatic attacks in young children.',
      'Emits unpleasant musty odors and stains wall crevices.'
    ],
    signsOfInfestation: [
      'Visible small roaches scurrying when kitchen lights are turned on.',
      'Fine pepper-like black droppings inside cabinet drawers.',
      'Egg capsules (oothecae) hidden in furniture corners.'
    ],
    treatmentProcess: [
      {
        step: 1,
        title: 'Herbal Gel Matrix Baiting',
        description: 'Target dots of non-repellent cascading gel applied inside cabinet hinges and appliance motors.'
      },
      {
        step: 2,
        title: 'Micro-Emulsion Crevice Spray',
        description: 'Treating floor drain junctions and pipe voids with eco-friendly odorless synthetic pyrethroids.'
      },
      {
        step: 3,
        title: 'Sanitation Audit',
        description: 'Deploying sticky monitoring traps and providing client guidance on sealing entry cracks.'
      }
    ]
  },
  {
    slug: 'bed-bugs',
    name: 'Bed Bugs',
    scientificName: 'Cimex lectularius',
    category: 'Crawling',
    tagline: 'Guaranteed 100% Sleep Peace Restored',
    shortHook: 'Nocturnal blood-suckers causing intense itching, sleep deprivation, and skin rashes.',
    primarySeason: 'Year-Round (Thrives in AC Controlled Bedrooms)',
    dangerLevel: 'High',
    imageUrl: '/images/pests/Bed Bugs.png',
    description: 'Bed bugs hitchhike into homes via luggage, public transport, or second-hand furniture. They hide in mattress seams, bed frames, electrical outlets, and headboards, feeding on human blood while sleeping.',
    appearance: 'Small, flat, reddish-brown wingless oval insects (4-5 mm), swelling and turning bright red after feeding.',
    behavior: 'Hide during daylight in ultra-thin cracks within 8 feet of sleeping areas. Extremely resilient, surviving up to a year without feeding.',
    whyItsAProblem: [
      'Causes painful, itchy red welts and secondary skin infections from scratching.',
      'Disrupts healthy sleep cycle leading to chronic fatigue and mental stress.',
      'Spreads rapidly across adjacent bedrooms, sofas, and apartment units.'
    ],
    signsOfInfestation: [
      'Rusty or reddish blood spots on bedsheets, pillowcases, and mattresses.',
      'Dark spots of bed bug excrement along mattress seams and bed slats.',
      'Sweet, sickly musty odor in heavily infested bedrooms.'
    ],
    treatmentProcess: [
      {
        step: 1,
        title: 'Thermal & Chemical Steam Blast',
        description: 'High-temperature dry steam application to mattresses, headboards, and upholstery to instantly kill eggs and adults.'
      },
      {
        step: 2,
        title: 'Dual Synthetic Pyrethroid Spray',
        description: 'Targeted spot treatment of skirting boards, electrical switchboards, and bed frame crevices.'
      },
      {
        step: 3,
        title: 'Mandatory Day-14 Follow-up',
        description: 'Secondary inspection and booster treatment to eliminate any newly hatched nymphs.'
      }
    ]
  },
  {
    slug: 'rodents',
    name: 'Roof Rats & Bandicoots (Rattus rattus)',
    scientificName: 'Rattus rattus & Bandicota indica',
    category: 'Rodents',
    tagline: 'Stop Cable Gnawing, Wire Fires & Contamination',
    shortHook: 'Agile pests capable of chewing electrical wiring, structural pipes, and spreading leptospirosis.',
    primarySeason: 'Winter & Rainy Months (Seeking Warmth Indoors)',
    dangerLevel: 'Severe',
    imageUrl: '/images/pests/Roof Rats & Bandicoots (Rattus rattus).png',
    description: 'Rats and mice pose serious safety hazards in Gurgaon high-rises and commercial buildings by chewing live electrical wiring, causing short circuits and fires.',
    appearance: 'Rats are 15-25 cm with long tails; bandicoots are large heavy rodents up to 40 cm.',
    behavior: 'Constant gnawers because their incisors never stop growing. Highly intelligent, nocturnal, and adept at climbing pipes and false ceilings.',
    whyItsAProblem: [
      'Presents catastrophic fire risks by chewing electrical and internet wiring.',
      'Destroys stored food grain, sofa stuffing, and office documentation.',
      'Transmits fatal infections like leptospirosis, hantavirus, and rat-bite fever.'
    ],
    signsOfInfestation: [
      'Dark capsule-shaped droppings along walls, kitchen cupboards, or false ceilings.',
      'Scratching noises above ceilings or behind drywalls at night.',
      'Gnaw marks on plastic containers, wooden doors, or wiring harnesses.'
    ],
    treatmentProcess: [
      {
        step: 1,
        title: 'Rodent Exclusion & Audit',
        description: 'Identification of entry points (drain outlets, AC pipe gaps, ceiling voids) and structural sealing guidance.'
      },
      {
        step: 2,
        title: 'Multi-Catch Trapping & Bait Stations',
        description: 'Deployment of tamper-resistant external bait stations with anticoagulant blocks and internal glue boards.'
      },
      {
        step: 3,
        title: 'Sanitization & Removal Protocol',
        description: 'Safe collection of captured rodents, odor neutralization, and bio-hygiene sanitization.'
      }
    ]
  },
  {
    slug: 'american-cockroach',
    name: 'American Cockroach',
    scientificName: 'Periplaneta americana',
    category: 'Crawling',
    tagline: 'Sewer & Drainage Roach Flushing Protocol',
    shortHook: 'Large reddish-brown sewer roaches invading bathrooms and commercial drain shafts.',
    primarySeason: 'Summer & Monsoon',
    dangerLevel: 'High',
    imageUrl: '/images/pests/American Cockroach.png',
    description: 'American cockroaches thrive in Gurgaon drainage pipelines, sewage manholes, and dark basements. They fly into apartment windows during humid summer nights.',
    appearance: 'Large reddish-brown body (35-40 mm) with a yellowish band behind the head shield and fully developed wings.',
    behavior: 'Prefers dark, damp areas like sewer gullies, boiler rooms, and basement storage voids.',
    whyItsAProblem: [
      'Vectors for E. coli, Dysentery, and Cholera pathogens from sewers.',
      'Capable of short-distance flight into balcony doors and windows.',
      'Creates high distress due to large physical size.'
    ],
    signsOfInfestation: [
      'Large roaches emerging from floor traps or balcony drains at night.',
      'Cylindrical droppings with ridged sides around drainage pipes.'
    ],
    treatmentProcess: [
      {
        step: 1,
        title: 'Drainage Trench Flushing',
        description: 'Injecting residual micro-emulsion sprays into main drainage traps and shaft gullies.'
      },
      {
        step: 2,
        title: 'Perimeter Barrier Treatment',
        description: 'Applying long-lasting residual barrier along outdoor building foundations.'
      },
      {
        step: 3,
        title: 'Drain Mesh Guidance',
        description: 'Recommending stainless steel drain covers and sealing wall pipe entry gaps.'
      }
    ]
  },
  {
    slug: 'house-mouse',
    name: 'House Mouse',
    scientificName: 'Mus musculus',
    category: 'Rodents',
    tagline: 'Precision Trapping & Kitchen Pantry Shield',
    shortHook: 'Tiny, fast-moving mice that nest inside kitchen cabinets and electrical appliances.',
    primarySeason: 'Year-Round (Seeking Indoor Food Sources)',
    dangerLevel: 'High',
    imageUrl: '/images/pests/House Mouse.png',
    description: 'House mice squeeze through gaps as small as a pencil eraser (6 mm). They contaminate stored pantry food and ruin upholstery.',
    appearance: 'Small dusty gray-brown body (5-10 cm) with large ears, small eyes, and a hairless tail.',
    behavior: 'Curious, fast breeders that construct nests from shredded paper, fabric, and insulation.',
    whyItsAProblem: [
      'Nibbles food packages, spreading bacteria via urine and droppings.',
      'Chews delicate furniture fabric, carpets, and internal wiring.',
      'Multiplies rapidly with up to 10 litters per year.'
    ],
    signsOfInfestation: [
      'Tiny rod-shaped droppings (3-6 mm) near food boxes.',
      'Shredded paper or cloth nests inside dark storage closets.'
    ],
    treatmentProcess: [
      {
        step: 1,
        title: 'Interior Glue Board Deployment',
        description: 'Placing non-toxic sticky boards along run paths behind appliances and cabinets.'
      },
      {
        step: 2,
        title: 'Gap Sealing Exclusion',
        description: 'Sealing pipe entry holes with copper mesh and silicone sealant.'
      },
      {
        step: 3,
        title: 'Follow-Up Inspection',
        description: 'Clearing trapped mice and inspecting food storage pantries.'
      }
    ]
  },
  {
    slug: 'ants',
    name: 'Red Fire Ants & Carpenter Ants',
    scientificName: 'Monomorium pharaonis & Camponotus',
    category: 'Crawling',
    tagline: 'Target the Queen for Complete Nest Elimination',
    shortHook: 'Relentless marching columns invading pantries, sweets, and potted plant root systems.',
    primarySeason: 'Summer & Early Spring',
    dangerLevel: 'Moderate',
    imageUrl: '/images/pests/Red Fire Ants & Carpenter Ants.png',
    description: 'Sugar ants, black crazy ants, and carpenter ants construct extensive satellite nests beneath kitchen tiles, garden soil, and wooden window frames.',
    appearance: 'Tiny (1.5mm - 12mm) black, red, or brown bodies with distinct constricted waists and elbowed antennae.',
    behavior: 'Highly organized social insects that follow chemical pheromone trails from exterior nests into indoor kitchens.',
    whyItsAProblem: [
      'Contaminates kitchen food preparation areas and food packages.',
      'Carpenter ants weaken moist structural timber by excavating galleries.',
      'Painful stings from red fire ants in gardens and balconies.'
    ],
    signsOfInfestation: [
      'Long organized lines of ants moving along walls, baseboards, or countertops.',
      'Piles of fine sand or wood shavings near wall gaps or garden soil.',
      'Swarmers with wings appearing near light fixtures inside rooms.'
    ],
    treatmentProcess: [
      {
        step: 1,
        title: 'Pheromone Trail Destruction',
        description: 'Applying non-repellent barrier spray along outdoor foundation perimeters and window tracks.'
      },
      {
        step: 2,
        title: 'Colony Baiting System',
        description: 'Distributing micro-encapsulated ant bait gels that worker ants carry back to poison the queen.'
      },
      {
        step: 3,
        title: 'Nest Eradication Check',
        description: 'Sealing entry cracks with specialized silicone sealant to prevent new colony formation.'
      }
    ]
  },
  {
    slug: 'mosquitoes',
    name: 'Mosquitoes (Aedes & Anopheles)',
    scientificName: 'Aedes aegypti & Anopheles stephensi',
    category: 'Flying',
    tagline: 'Dengue & Chikungunya Shield for Home & Lawns',
    shortHook: 'Disease vectors spreading Dengue, Malaria, and Chikungunya in residential societies.',
    primarySeason: 'Monsoon & Post-Monsoon (August - November)',
    dangerLevel: 'Severe',
    imageUrl: '/images/pests/Mosquitoes (Aedes & Anopheles).png',
    description: 'Mosquito breeding skyrockets during Gurgaon monsoons in stagnant rainwater trapped on rooftops, lawn planters, and drainage ditches.',
    appearance: 'Slender flying insects (3-6 mm) with long legs, narrow wings, and piercing mouthparts (proboscis).',
    behavior: 'Females require blood meals for egg development. Aedes bites during daytime, while Anopheles strikes after dusk.',
    whyItsAProblem: [
      'Spreads dangerous tropical infections: Dengue fever, Chikungunya, and Malaria.',
      'Causes intense skin itching, swelling, and sleepless nights for infants.',
      'Renders balconies, backyards, and society lawns unusable.'
    ],
    signsOfInfestation: [
      'High density of flying mosquitoes in shaded balcony corners and under furniture.',
      'Wriggling mosquito larvae visible in water containers, plant saucers, or drains.'
    ],
    treatmentProcess: [
      {
        step: 1,
        title: 'Larvicidal Water Treatment',
        description: 'Dosing stagnant water bodies with eco-friendly Temephos / Bti granules to kill mosquito larvae instantly.'
      },
      {
        step: 2,
        title: 'Thermal Fogging & Cold ULV Misting',
        description: 'Conducting outdoor thermal fogging and indoor odorless cold misting to knock down adult mosquitoes.'
      },
      {
        step: 3,
        title: 'Residual Wall Coating',
        description: 'Applying long-lasting micro-encapsulated synthetic pyrethroids on dark wall surfaces where mosquitoes rest.'
      }
    ]
  },
  {
    slug: 'house-fly',
    name: 'House Fly & Fruit Fly',
    scientificName: 'Musca domestica & Drosophila',
    category: 'Flying',
    tagline: 'Kitchen Sanitation & Fly Trap Protocol',
    shortHook: 'Filth-inhabiting flies carrying foodborne bacteria into kitchens and dining halls.',
    primarySeason: 'Summer & Monsoon',
    dangerLevel: 'Moderate',
    imageUrl: '/images/pests/House Fly & Fruit Fly.png',
    description: 'Flies breed in decaying organic garbage, outdoor drain traps, and overripe fruit, carrying disease organisms on their hairy legs.',
    appearance: 'House flies are gray (6-7 mm) with four dark stripes; fruit flies are tiny tan flies (3 mm) with red eyes.',
    behavior: 'Attracted to open food, rotten garbage, and moist drains, reproducing rapidly in warm weather.',
    whyItsAProblem: [
      'Transmits typhoid, cholera, dysentery, and food poisoning bacteria.',
      'Causes immediate FSSAI audit penalties for food service establishments.',
      'Annoys diners and family members in eating spaces.'
    ],
    signsOfInfestation: [
      'Flies hovering around kitchen trash bins or food prep counters.',
      'Dark specks of fly vomit/excrement on light fixtures and walls.'
    ],
    treatmentProcess: [
      {
        step: 1,
        title: 'Insect Light Trap (ILT) Installation',
        description: 'Mounting UV glue-board fly catchers away from direct food prep counters.'
      },
      {
        step: 2,
        title: 'Organic Drain Flushing',
        description: 'Treating kitchen floor traps with bio-enzymatic drain cleaners to eliminate fly breeding sludge.'
      },
      {
        step: 3,
        title: 'Air Curtain & Door Mesh Guidance',
        description: 'Advising on fly mesh screens and high-velocity air barrier curtains for commercial entrances.'
      }
    ]
  },
  {
    slug: 'stinging-insects',
    name: 'Wasps & Honey Bees',
    scientificName: 'Vespidae & Apis dorsata',
    category: 'Flying',
    tagline: 'Safe Wasp Nest Removal for Balconies & Rooftops',
    shortHook: 'Aggressive stinging insects building paper nests or hives on apartment balconies.',
    primarySeason: 'Spring & Summer',
    dangerLevel: 'High',
    imageUrl: '/images/pests/Wasps & Honey Bees.png',
    description: 'Yellow jackets, hornets, and honeybees frequently build large comb nests under high-rise balcony ledges and window overhangs in Gurgaon complexes.',
    appearance: 'Black and yellow striped bodies (10-25 mm) with powerful stings and thin waists.',
    behavior: 'Defends nests aggressively when humans come close. Can sting multiple times repeatedly.',
    whyItsAProblem: [
      'Multiple stings cause severe pain, facial swelling, and life-threatening anaphylactic shock.',
      'Blocks balcony usage, window opening, and rooftop solar panel access.',
      'Presents dangerous hazards to children playing in high-rise balconies.'
    ],
    signsOfInfestation: [
      'Visible grey paper mud nests attached to balcony ceilings or air conditioner brackets.',
      'Frequent wasps buzzing around outdoor lighting or flower boxes.'
    ],
    treatmentProcess: [
      {
        step: 1,
        title: 'Night Protection Suit Deployment',
        description: 'Technicians wearing heavy protective suits approach nests during low-activity hours.'
      },
      {
        step: 2,
        title: 'Instant Knockdown Aerosol Blast',
        description: 'Direct injection of high-pressure quick-freeze aerosol to neutralize nest inhabitants.'
      },
      {
        step: 3,
        title: 'Complete Removal & Deterrent Spray',
        description: 'Physical scraping of nest anchor points and treating surfaces with residual repelling agents.'
      }
    ]
  },
  {
    slug: 'spiders',
    name: 'Spiders & Cobweb Removal',
    scientificName: 'Araneae (Huntsman & Cellar Spiders)',
    category: 'Crawling',
    tagline: 'Keep Walls, Ceilings & Storage Clean & Web-Free',
    shortHook: 'Eight-legged arachnids creating unsightly cobwebs and hunting prey in neglected corners.',
    primarySeason: 'Spring & Autumn',
    dangerLevel: 'Low',
    imageUrl: '/images/pests/Spiders & Cobweb Removal.png',
    description: 'While most local Indian spider species are non-lethal, their webs create a dirty, unkempt atmosphere in homes and commercial offices.',
    appearance: 'Eight legs, two body segments (cephalothorax and abdomen), ranging from 5mm to 50mm.',
    behavior: 'Predatory hunters that spin silk webs near ceiling corners, lighting fixtures, and behind curtains.',
    whyItsAProblem: [
      'Dust-collecting cobwebs spoil interior decor aesthetics.',
      'Accidental bites can cause localized skin swelling or mild pain.',
      'Indicates the presence of other secondary insect infestations serving as prey.'
    ],
    signsOfInfestation: [
      'Visible webs spun across ceiling corners, windowframes, and air vents.',
      'Egg sacs attached to dark storage boxes or curtain rods.'
    ],
    treatmentProcess: [
      {
        step: 1,
        title: 'Mechanical Web Removal',
        description: 'High-reach vacuuming and web clearing from high ceilings and light fixtures.'
      },
      {
        step: 2,
        title: 'Corner Crevice Chemical Spray',
        description: 'Applying odorless residual spray to spider harborages and wall junctions.'
      },
      {
        step: 3,
        title: 'Prey Control Integration',
        description: 'Eliminating flies and mosquitoes to starve out remaining spider populations.'
      }
    ]
  },
  {
    slug: 'ticks',
    name: 'Ticks & Pet Parasites',
    scientificName: 'Rhipicephalus sanguineus (Brown Dog Tick)',
    category: 'Crawling',
    tagline: 'Protect Your Pets & Family from Parasitic Infestations',
    shortHook: 'Blood-sucking parasites targeting dogs, cats, and humans in gardens and indoor carpets.',
    primarySeason: 'Warm & Humid Months (May - October)',
    dangerLevel: 'High',
    imageUrl: '/images/pests/Ticks & Pet Parasites.png',
    description: 'Ticks cling onto pet fur during walks in society parks, entering apartments and multiplying in carpet fibers and furniture seams.',
    appearance: 'Small, flat oval arachnids (3-5 mm) that expand into rounded engorged blue-gray balls when blood-fed.',
    behavior: 'Climb tall grass blades ("questing") waiting to latch onto passing animal hosts.',
    whyItsAProblem: [
      'Transmits pet illness including Tick Fever (Ehrlichiosis) and Lyme Disease.',
      'Causes severe skin irritation, anemia in puppies, and human bite reactions.',
      'Lays up to 4,000 eggs inside carpet fibers and baseboard cracks.'
    ],
    signsOfInfestation: [
      'Ticks found attached to dog ears, paws, or neck folds.',
      'Small dark specks crawling on bed sheets, walls, or pet bedding.'
    ],
    treatmentProcess: [
      {
        step: 1,
        title: 'Upholstery & Floor Deep Spray',
        description: 'Application of targeted acaricide treatments across pet sleeping areas, carpets, and baseboards.'
      },
      {
        step: 2,
        title: 'Garden Lawn Treatment',
        description: 'Spraying perimeter shrubs and grass borders where pets walk.'
      },
      {
        step: 3,
        title: 'Veterinary Coordination Guidance',
        description: 'Aligning home treatment timing with veterinary anti-tick oral/topical spot-on application.'
      }
    ]
  }
];
