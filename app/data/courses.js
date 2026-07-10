export const courses = [
  {
    id: "bsc-nautical-science",
    slug: "bsc-nautical-science",
    title: "B.Sc. Nautical Science",
    duration: "3 Years (6 Semesters)",
    type: "Residential Program",
    overview: "B.Sc. Nautical Science is a comprehensive 3-year residential program that covers navigation, cargo operations, meteorology, ship stability, and celestial navigation. It is fully approved by the Directorate General of Shipping (DGS), India, and prepares candidates for a prestigious career as Deck Officers in the Merchant Navy.",
    accreditation: "Approved by the Directorate General of Shipping (DGS), Ministry of Shipping, Government of India. Approval No: TR/A/18/2002",
    department: "Deck Department",
    entranceTest: "IMU-CET (Indian Maritime University Common Entrance Test)",
    commencement: [
      { batch: "August 2026 Intake", status: "Applications Open (Apply via IMU-CET)", active: true },
      { batch: "August 2027 Intake", status: "Applications Open 1st Oct 2026", active: false }
    ],
    eligibility: {
      academic: "Passed 10+2 (or equivalent) with a minimum of 60% aggregate in Physics, Chemistry, and Mathematics (PCM) and a minimum of 50% in English in 10th or 12th standard.",
      age: "Minimum 17 years and maximum 25 years at the time of course commencement (relaxations apply as per government norms for SC/ST and female candidates).",
      medical: "Must be physically fit as per DGS guidelines. Eye sight: 6/6 in each eye without visual aids, no color blindness."
    },
    eligibilityTabs: {
      academic: [
        { text: "Passed 10+2 (or equivalent) with Physics, Chemistry, and Mathematics (PCM).", highlight: false },
        { text: "Minimum of 60% aggregate marks in PCM subjects.", highlight: true },
        { text: "Minimum of 50% marks in English in either 10th or 12th standard.", highlight: true },
        { text: "Must qualify in the IMU-CET exam of the current academic year.", highlight: true }
      ],
      age: [
        { text: "Minimum Age: 17 Years at course commencement.", highlight: false },
        { text: "Maximum Age: 25 Years at course commencement.", highlight: true },
        { text: "Relaxation of 5 years for SC/ST candidates, and 2 years for female candidates.", highlight: false }
      ],
      medical: [
        { text: "Eyesight: 6/6 in each eye without visual aids (unaided).", highlight: true },
        { text: "Color vision: Must be normal (no color blindness, checked using Ishihara charts).", highlight: true },
        { text: "Physical Fitness: Must clear the medical exam by a DGS-approved medical practitioner.", highlight: false }
      ]
    },
    admissionProcess: [
      "Must appear and qualify in the IMU Common Entrance Test (IMU-CET).",
      "Fill online application on the college portal.",
      "Clear PKIMSE AI-proctored entrance test and personal interview.",
      "Undergo medical examination by a DGS-approved medical practitioner."
    ],
    fees: {
      application: "₹1,500",
      tuition: "₹2,20,000 / Year",
      caution: "₹15,000 (Refundable)",
      total: "₹6,75,000 (Total 3 Years)",
      note: "Fee covers Tuition, Accommodation, Boarding (Food), Library, Gym, swimming pool, and Uniforms. Books and exam fees extra.",
      discount: "₹50,000 Scholarship for all Female Candidates across the program duration"
    },
    withdrawalPolicy: {
      schedule: [
        { period: "On or before 30th June 2026", refund: "100% tuition fee refund minus ₹10,000 processing fee" },
        { period: "1st July - 15th July 2026", refund: "80% tuition fee refund, caution deposit fully refunded" },
        { period: "After 15th July 2026", refund: "Caution deposit only. No tuition fee refund." }
      ],
      notes: [
        "Registration & Application fees are strictly non-refundable.",
        "Formal withdrawal requests must be made by the parent/guardian via the online portal.",
        "Refunding is completed within 30 working days from processing of approval."
      ]
    },
    careerPath: "Pre-Sea Cadet -> Deck Cadet (12 Months sea service) -> Third Officer (on clearing Second Mate Exam) -> Second Officer -> Chief Officer -> Captain.",
    careerProgression: [
      { title: "Pre-Sea Cadet", desc: "3-Year Academic Degree program at the academy" },
      { title: "Deck Cadet", desc: "12 Months shipboard sea-service training with structured task book" },
      { title: "Third Officer / Second Officer", desc: "Pass Second Mate CoC exams. Earn ₹1.5L - ₹3L/month" },
      { title: "Chief Officer", desc: "Pass Chief Mate exams and complete required sea time. Earn ₹4L - ₹7L/month" },
      { title: "Captain", desc: "Obtain Master Mariners certificate and take command of international vessels. Earn ₹8L+/month" }
    ],
    subjects: [
      "Navigation & Celestial Navigation",
      "Ship Operations & Cargo Handling",
      "Meteorology & Oceanography",
      "Maritime Laws & Ship Stability",
      "Marine Communication & GMDSS",
      "Seamanship & Collision Prevention"
    ],
    image: "/images/courses/nautical-science.png",
    seoKeywords: ["bsc nautical science admission", "nautical science college in india", "merchant navy courses after 12th science"],
    supporters: ["Maersk Line", "NYK Line", "MSC Shipping", "V-Ships", "Chevron", "Bernhard Schulte", "Synergy Group", "Fleet Management"],
    facilities: [
      { title: "Advanced Bridge Simulator", desc: "Fully immersive 360-degree navigation simulator replicating various ports and weather conditions." },
      { title: "Seamanship & Rigging Lab", desc: "Hands-on training in knots, rope splicing, anchor handling, and rigging." },
      { title: "Survival Wet Pool", desc: "Specifically designed for life raft boarding, life jacket exercises, and helicopter survival training." }
    ]
  },
  {
    id: "btech-marine-engineering",
    slug: "btech-marine-engineering",
    title: "B.Tech Marine Engineering",
    duration: "4 Years (8 Semesters)",
    type: "Residential Program",
    overview: "B.Tech Marine Engineering is a 4-year professional engineering course focused on the design, construction, operation, and maintenance of machinery in ships and other marine structures. The program covers steam and diesel propulsion, marine boilers, auxiliary machinery, electrical systems, and shipboard safety.",
    accreditation: "Approved by the Directorate General of Shipping (DGS), Ministry of Shipping, Government of India. Approval No: TR/A/32/2004",
    department: "Engine Department",
    entranceTest: "IMU-CET (Indian Maritime University Common Entrance Test)",
    commencement: [
      { batch: "August 2026 Intake", status: "Applications Open (Apply via IMU-CET)", active: true },
      { batch: "August 2027 Intake", status: "Applications Open 1st Oct 2026", active: false }
    ],
    eligibility: {
      academic: "Passed 10+2 with a minimum of 60% aggregate in PCM (Physics, Chemistry, Math) and a minimum of 50% in English in 10th or 12th standard.",
      age: "Minimum 17 years and maximum 25 years at course commencement.",
      medical: "Physically fit as per DGS guidelines. Eye sight: up to +/- 2.5 permitted, no color blindness."
    },
    eligibilityTabs: {
      academic: [
        { text: "Passed 10+2 (or equivalent) with Physics, Chemistry, and Mathematics (PCM).", highlight: false },
        { text: "Minimum of 60% aggregate marks in PCM subjects.", highlight: true },
        { text: "Minimum of 50% marks in English in either 10th or 12th standard.", highlight: true },
        { text: "Must qualify in the IMU-CET written exam.", highlight: true }
      ],
      age: [
        { text: "Minimum Age: 17 Years at course commencement.", highlight: false },
        { text: "Maximum Age: 25 Years at course commencement.", highlight: true },
        { text: "Age relaxation for SC/ST and female candidates as per DGS guidelines.", highlight: false }
      ],
      medical: [
        { text: "Eyesight: Up to +/- 2.5 is permitted. Normal color vision is mandatory.", highlight: true },
        { text: "Physical Fitness: Good constitution, free from any physical defects. Standard height/weight check.", highlight: false },
        { text: "Must pass medical test conducted by DGS approved doctors.", highlight: true }
      ]
    },
    admissionProcess: [
      "Qualify in the IMU-CET exam.",
      "Apply through the PKIMSE admissions page.",
      "Pass the PKIMSE academic interview and aptitude assessment.",
      "Pass the DGS-approved medical examination."
    ],
    fees: {
      application: "₹1,500",
      tuition: "₹2,40,000 / Year",
      caution: "₹15,000 (Refundable)",
      total: "₹9,75,000 (Total 4 Years)",
      note: "Fee covers Tuition, Hostel lodging, Messing (Food), Laundry, Library, Gym, swimming pool, and Uniforms. Examination & CDC fees extra.",
      discount: "₹50,000 Scholarship for all Female Candidates across the program duration"
    },
    withdrawalPolicy: {
      schedule: [
        { period: "On or before 30th June 2026", refund: "100% tuition fee refund minus ₹10,000 processing fee" },
        { period: "1st July - 15th July 2026", refund: "80% tuition fee refund, caution deposit fully refunded" },
        { period: "After 15th July 2026", refund: "Caution deposit only. No tuition fee refund." }
      ],
      notes: [
        "Registration & Application fees are strictly non-refundable.",
        "Formal withdrawal requests must be made by the parent/guardian via the online portal.",
        "Refunding is completed within 30 working days from processing of approval."
      ]
    },
    careerPath: "Pre-Sea Junior Engineer -> Fifth Engineer -> Fourth Engineer -> Third Engineer -> Second Engineer -> Chief Engineer.",
    careerProgression: [
      { title: "Junior Engineer (Pre-Sea)", desc: "4-Year Academic Degree program at the academy" },
      { title: "Fifth Engineer / Assistant", desc: "6 Months sea service to earn Watchkeeping certificate" },
      { title: "Fourth / Third Engineer", desc: "Pass Class IV CoC exams. Earn ₹2L - ₹3.5L/month" },
      { title: "Second Engineer", desc: "Pass Class II CoC exams and complete required sea time. Earn ₹4.5L - ₹7.5L/month" },
      { title: "Chief Engineer", desc: "Pass Class I CoC exams to head the entire engineering department on board. Earn ₹9L+/month" }
    ],
    subjects: [
      "Marine Diesel Engines & Gas Turbines",
      "Shipboard Auxiliary Machinery",
      "Electrical Machines & Marine Electronics",
      "Naval Architecture & Ship Construction",
      "Boilers & Steam Engineering",
      "Marine Engineering Drawing & Workshops"
    ],
    image: "/images/courses/marine-engineering.png",
    seoKeywords: ["marine engineering course details", "marine engineering admission", "marine engineering college in india"],
    supporters: ["Maersk Line", "Anglo-Eastern", "Fleet Management", "Synergy Group", "MOL Maritime", "Chevron", "V-Ships", "Executive Ship Management"],
    facilities: [
      { title: "Full Scale Marine Engine Room", desc: "Realistic operational ship engine room with main diesel propulsion and auxiliary generators." },
      { title: "Machine & Lathe Shop", desc: "Extensive machining workshop for cutting, turning, welding, and overhauling machine parts." },
      { title: "Electrical & Electronics Lab", desc: "High-voltage distribution boards, PLCs, marine electronics panels, and motor test beds." }
    ]
  },
  {
    id: "diploma-nautical-science",
    slug: "diploma-nautical-science",
    title: "Diploma in Nautical Science (DNS)",
    duration: "1 Year (2 Semesters) + 18 Months onboard training",
    type: "Sponsorship-Based Program",
    overview: "The 1-year Diploma in Nautical Science (DNS) leads to a B.Sc. Nautical Science degree after completing 18 months of sea-service and passing the structured shipboard training program. DNS is highly sought after because it requires pre-selection sponsorship by a reputed shipping company before the course begins, ensuring 100% placement.",
    accreditation: "Approved by the Directorate General of Shipping (DGS), Ministry of Shipping, Government of India. Approval No: TR/A/15/2001",
    department: "Deck Department",
    entranceTest: "IMU-CET + Shipping Company Selection Process",
    commencement: [
      { batch: "August 2026 Batch", status: "Sponsorship interviews running", active: true },
      { batch: "February 2027 Batch", status: "Applications open 15th Nov 2026", active: false }
    ],
    eligibility: {
      academic: "Passed 10+2 with a minimum of 60% aggregate in PCM OR B.Sc. with Physics/Math/Chemistry (minimum 55% aggregate) OR B.E./B.Tech degree (minimum 50% aggregate). Minimum 50% in English at 10th/12th/Degree level.",
      age: "Maximum 25 years (General category) at the time of course commencement.",
      medical: "Physically fit. Eyesight: 6/6 in both eyes without visual aids, no color blindness."
    },
    eligibilityTabs: {
      academic: [
        { text: "Passed 10+2 with a minimum of 60% aggregate in PCM subjects.", highlight: true },
        { text: "OR Passed B.Sc. with Physics/Maths/Chemistry with minimum 55% aggregate.", highlight: false },
        { text: "OR Passed B.E./B.Tech degree from a recognized university with minimum 50% aggregate.", highlight: false },
        { text: "Minimum 50% marks in English at 10th, 12th, or Degree level.", highlight: true },
        { text: "Must qualify in the IMU-CET exam and obtain Sponsorship from a DGS-approved shipping line.", highlight: true }
      ],
      age: [
        { text: "Maximum Age: 25 Years at the time of course commencement.", highlight: true },
        { text: "Relaxation of 5 years for SC/ST candidates, and 2 years for female candidates.", highlight: false }
      ],
      medical: [
        { text: "Eyesight: 6/6 in both eyes without visual aids. Normal color vision.", highlight: true },
        { text: "Physical Fitness: Free from any physical disabilities, certified fit by DGS panel doctor.", highlight: false }
      ]
    },
    admissionProcess: [
      "Apply and get selected for Sponsorship by a DGS-approved shipping company.",
      "Appear and qualify in the IMU-CET written test.",
      "Complete registration on the PKIMSE application portal.",
      "Clear medical fitness test by an authorized DGS doctor."
    ],
    fees: {
      application: "₹1,000",
      tuition: "₹2,95,000",
      caution: "₹10,000 (Refundable)",
      total: "₹3,05,000",
      note: "Fee covers Tuition, Lodging, Boarding, Uniforms, and pre-sea course materials. 18-month sea-service training is sponsored/stipend-paying.",
      discount: "₹25,000 Female candidate discount"
    },
    withdrawalPolicy: {
      schedule: [
        { period: "Before sponsorship agreement signing", refund: "100% fee refund minus ₹10,000 processing fee" },
        { period: "Post agreement, before batch start", refund: "80% fee refund, shipping company replacement rule applies" },
        { period: "After course start", refund: "Refunds subject to shipping company sponsorship terms. Caution deposit refunded." }
      ],
      notes: [
        "DNS is a highly regulated sponsorship program. Withdrawal rules are coordinated directly with the sponsoring shipping line."
      ]
    },
    careerPath: "1-Year Pre-Sea training -> 18 Months Sea Training (Cadet) -> Pass Second Mate exam -> Third Officer -> Second Officer -> Chief Officer -> Captain.",
    careerProgression: [
      { title: "Pre-Sea Cadet", desc: "1-Year Pre-Sea academic and practical training on campus" },
      { title: "Sponsor Cadet", desc: "18 Months paid onboard training on sponsor's commercial vessels. Stipend: $400 - $800/month" },
      { title: "Third Officer", desc: "Pass Second Mate CoC exams. Sail as deck watchkeeper. Earn ₹2L - ₹3.5L/month" },
      { title: "Chief Officer", desc: "Progressive ranks with sea-time and class exams. Earn ₹5L - ₹7.5L/month" },
      { title: "Captain", desc: "Command container, tanker, or cruise ships globally. Earn ₹9L+/month" }
    ],
    subjects: [
      "Basic Ship Navigation & Compass Rules",
      "General Ship Knowledge & Construction",
      "Meteorology & Celestial Observations",
      "Cargo Work & Seamanship Practices",
      "Practical Chartwork & Bridge Equipment",
      "Marine Communications & Safety Drills"
    ],
    image: "/images/courses/dns.png",
    seoKeywords: ["diploma in nautical science dns", "merchant navy course with placement", "dns sponsorship admission"],
    supporters: ["Maersk Line", "MSC Shipping", "NYK Line", "Synergy Group", "Anglo-Eastern", "Fleet Management", "MOL Maritime", "Bernhard Schulte"],
    facilities: [
      { title: "Simulated Cargo Console", desc: "Detailed cargo pumping and loading computer simulators for tankers and bulk carriers." },
      { title: "Seamanship Mast & Rigging Area", desc: "Full scale outdoor mast and rigging mockup for rope climbs and working at heights." },
      { title: "DGS Approved Lifeboat Station", desc: "On-dock lifeboats with gravity davits for emergency launch drill practices." }
    ]
  },
  {
    id: "graduate-marine-engineering",
    slug: "graduate-marine-engineering",
    title: "Graduate Marine Engineering (GME)",
    duration: "1 Year (Residential)",
    type: "Graduate Program",
    overview: "The 1-year Graduate Marine Engineering (GME) course is a conversion program for Mechanical Engineering graduates to transition into professional Marine Officers. The curriculum covers specialized marine systems, naval engineering, control systems, safety procedures, and extensive hands-on workshop training.",
    accreditation: "Approved by the Directorate General of Shipping (DGS), Ministry of Shipping, Government of India. Approval No: TR/A/40/2005",
    department: "Engine Department",
    entranceTest: "PKIMSE Graduate Aptitude & Interview",
    commencement: [
      { batch: "October 2026 Batch", status: "Admissions open (Seats available)", active: true },
      { batch: "April 2027 Batch", status: "Applications open 1st Jan 2027", active: false }
    ],
    eligibility: {
      academic: "Graduation in B.E./B.Tech Mechanical Engineering, Mechanical & Automation, or Naval Architecture from an AICTE approved institution with a minimum of 50% aggregate marks, and at least 50% marks in English in 10th, 12th or Degree.",
      age: "Maximum 28 years at the time of course commencement.",
      medical: "Physically fit as per DGS merchant shipping rules. Eyesight: up to +/- 2.5 permitted, no color blindness."
    },
    eligibilityTabs: {
      academic: [
        { text: "B.E./B.Tech in Mechanical Engineering, Mechanical & Automation, or Naval Architecture.", highlight: true },
        { text: "Minimum 50% aggregate marks in final year of Graduation.", highlight: true },
        { text: "Minimum 50% marks in English at 10th, 12th, or Degree level.", highlight: true },
        { text: "Graduation college must be approved by AICTE or UGC.", highlight: false }
      ],
      age: [
        { text: "Maximum Age Limit: 28 Years at the time of course commencement.", highlight: true }
      ],
      medical: [
        { text: "Eyesight: Up to +/- 2.5 permitted. No color blindness allowed.", highlight: true },
        { text: "Must clear physical standards prescribed under Merchant Shipping rules.", highlight: false }
      ]
    },
    admissionProcess: [
      "Submit application with mechanical engineering degree credentials.",
      "Shortlisting based on graduation marks.",
      "Clear technical interview and aptitude test.",
      "Pass medical examination by DGS-approved doctor."
    ],
    fees: {
      application: "₹1,500",
      tuition: "₹3,50,000",
      caution: "₹10,000 (Refundable)",
      total: "₹3,60,000",
      note: "Fee covers Tuition, Accommodation, Food, Workshop practices, Uniforms, and DGS exam coordination.",
      discount: "₹25,000 Female candidate discount"
    },
    withdrawalPolicy: {
      schedule: [
        { period: "15 Days prior to course commencement", refund: "100% refund minus ₹15,000 processing fee" },
        { period: "Less than 15 days before commencement", refund: "80% tuition fee refund. Caution deposit returned." },
        { period: "After batch start", refund: "No refund of tuition fees. Caution deposit returned." }
      ],
      notes: [
        "Refunds are only processed if written notice is submitted to the registrar."
      ]
    },
    careerPath: "Junior Engineer -> Fifth Engineer -> Fourth Engineer -> Third Engineer -> Second Engineer -> Chief Engineer.",
    careerProgression: [
      { title: "Pre-Sea Trainee", desc: "1-Year fast-track conversion course at the academy" },
      { title: "Junior Engineer / Fifth Engineer", desc: "6 Months onboard sea-service to earn Watchkeeping certificate" },
      { title: "Fourth Engineer / Third Engineer", desc: "Pass Class IV CoC exams. Earn ₹2L - ₹3.5L/month" },
      { title: "Second Engineer", desc: "Pass Class II CoC exams. Earn ₹4.5L - ₹7.5L/month" },
      { title: "Chief Engineer", desc: "Highest rank in engine room. Manage machinery operations on ocean-going ships. Earn ₹9L+/month" }
    ],
    subjects: [
      "Marine Engines & Auxiliary Machinery",
      "Ship Safety & Fire Fighting",
      "Marine Workshop Practices & Lathe Operations",
      "Automation & Ship Control Systems",
      "Electrical Systems & Generator Maintenance",
      "Refrigeration & Air Conditioning on Ships"
    ],
    image: "/images/courses/marine-engineering.png",
    seoKeywords: ["graduate marine engineering gme", "marine engineering after mechanical", "gme admission 2026"],
    supporters: ["Maersk Line", "V-Ships", "Anglo-Eastern", "Fleet Management", "Synergy Group", "MOL Maritime", "Chevron", "Executive Ship Management"],
    facilities: [
      { title: "Diesel Propulsion Workshop", desc: "Large engine overhauling workspace featuring structural diesel blocks and marine auxiliary gear." },
      { title: "Marine Auxiliary Lab", desc: "Operational boilers, oil-water separators, pumps, and water purifiers for hands-on drills." },
      { title: "Electrical Switchboard Unit", desc: "High voltage breaker panels, generator synchronization consoles, and automation units." }
    ]
  },
  {
    id: "general-purpose-rating",
    slug: "general-purpose-rating",
    title: "General Purpose (GP) Rating",
    duration: "6 Months",
    type: "Pre-Sea Training",
    overview: "GP Rating is a 6-month pre-sea training program approved by the Directorate General of Shipping (DGS), Ministry of Shipping, Government of India. The course provides structured theoretical and practical instruction in General Ship Knowledge (GSK) and Marine Engineering Knowledge (MEK), allowing successful candidates to join merchant ships as Ratings in either the Deck or Engine departments.",
    accreditation: "Approved by the Directorate General of Shipping (DGS), Ministry of Shipping, Government of India. Approval No: TR/A/25/2003",
    department: "Deck & Engine Department (Dual Crew)",
    entranceTest: "PKIMSE Online Entrance Test (Aptitude & Interview)",
    commencement: [
      { batch: "January 2027 Intake", status: "Applications will be Opened on 1st Oct 2026", active: true },
      { batch: "July 2026 Intake", status: "Applications are Closed", active: false }
    ],
    eligibility: {
      academic: "Passed 10th standard with Science and Mathematics as subjects, and a minimum of 40% aggregate marks from a recognized board. Minimum 40% marks in English in 10th standard OR passed a 2-year ITI Course with minimum 50% aggregate marks in the final year.",
      age: "Minimum 17.5 years and maximum 25 years at the time of course commencement.",
      medical: "Physically fit as per DGS Merchant Shipping Rules. Eye sight: 6/6 unaided vision in both eyes, no color blindness."
    },
    eligibilityTabs: {
      academic: [
        { text: "Passed 10th Standard from a recognized central or state board.", highlight: false },
        { text: "Above 40% aggregate in 10th standard with Science & Mathematics as subjects.", highlight: true },
        { text: "Minimum 40% marks in English in the 10th standard exam.", highlight: true },
        { text: "OR Passed 2-Year ITI Course from a DGS-approved/Government institute with minimum 50% aggregate marks in the final year.", highlight: false },
        { text: "Must have scored minimum 40% in English in 10th standard (for ITI entries as well).", highlight: false }
      ],
      age: [
        { text: "Minimum Age Limit: 17.5 Years at course commencement.", highlight: false },
        { text: "Maximum Age Limit: 24 Years (Age limits checked strictly against 10th certificate).", highlight: true },
        { text: "Upper age limit relaxations apply for female candidates and SC/ST as per government directives.", highlight: false }
      ],
      medical: [
        { text: "Eyesight: 6/6 unaided vision in both eyes. Color blindness is not permitted.", highlight: true },
        { text: "Physical Fitness: Free from physical disabilities, standard weight/height ratios, good hearing capacity.", highlight: false },
        { text: "Must be certified fit by a DGS-approved medical practitioner.", highlight: true }
      ]
    },
    admissionProcess: [
      "Submit application via the college portal with academic transcripts.",
      "Aptitude test & physical fitness assessment.",
      "Personal interview and academic credentials review.",
      "Medical certification from an authorized DGS-approved doctor."
    ],
    fees: {
      application: "₹999",
      tuition: "₹2,95,000",
      caution: "₹5,000 (Refundable)",
      total: "₹3,00,999",
      note: "Fee covers Tuition, Accommodation, Food, Workshop practices, Uniforms, and Library access. Books and exit exam fees are extra.",
      discount: "HIMT/PKIMSE is offering a ₹25,000 Discount in Course Fees for all Female Candidates"
    },
    withdrawalPolicy: {
      schedule: [
        { period: "On or before 14th June 2026", refund: "₹10,000 Cancellation Fee (Rest refunded)" },
        { period: "15th June 2026 onwards", refund: "Full Fees Forfeited (No refund)" }
      ],
      notes: [
        "Application Fee is non-refundable.",
        "Refund requests must be submitted via email to admissions@pkimse.edu.in.",
        "Refunds, as applicable based on policy, will be processed within 30 days of receiving the cancellation email.",
        "The refund policy also applies to candidates whose enrollment is cancelled due to failure to clear the IMU-CET, medical exam, or submission of fraudulent documents."
      ]
    },
    careerPath: "Trainee GP Rating -> Ordinary Seaman (OS) -> Able Seaman (AB) -> Bosun -> Chief Cook or Officer ranks (upon clearing watchkeeping examinations and sea-time).",
    careerProgression: [
      { title: "Trainee GP Rating", desc: "6-Month Pre-Sea residential training at the academy" },
      { title: "Ordinary Seaman (OS)", desc: "Join vessel as trainee rating. Earn CDC & Sea-service. Earn $300 - $600/month" },
      { text: "After 9-12 Months onboard sea service and watchkeeping assessment...", highlight: false },
      { title: "Able Seaman (AB) / Motorman", desc: "Obtain Watchkeeping certificate from DGS. Earn $800 - $1,500/month" },
      { title: "Bosun / Fitter", desc: "Highest rating rank. Supervise deck or engine crew. Earn $1,800 - $2,500/month" },
      { title: "Officer / Engineer", desc: "Clear Certificate of Competency (CoC) exams to rise to Officer Ranks (requires 36 months sea-service for rating to officer stream)." }
    ],
    subjects: [
      "General Ship Knowledge (GSK)",
      "Marine Engineering Knowledge (MEK)",
      "Ropework, Knots & Seamanship Practices",
      "Maintenance, Chipping & Deck Painting",
      "Engine Room Systems & Overhauling Auxiliaries",
      "Standard Onboard Safety & STCW Modules"
    ],
    image: "/images/courses/gp-rating.png",
    seoKeywords: ["gp rating course", "general purpose rating admission", "merchant navy courses after 10th", "gp rating eligibility and fees"],
    supporters: ["Maersk Line", "MSC Ship Management", "V-Ships", "Anglo-Eastern", "Fleet Management", "Synergy Group", "MOL Maritime", "Chevron Shipping"],
    facilities: [
      { title: "Seamanship & Rigging Lab", desc: "Hands-on ropework, knotting, rigging, canvas sewing, and mechanical advantage rigging." },
      { title: "Engine Fitting Workshop", desc: "Practical overhauling of pumps, valves, piping systems, and dismantling auxiliary diesel engines." },
      { title: "DGS Approved Ship Mockup", desc: "Real-scale onboard deck environment and fire mockups." },
      { title: "Survival Wet Pool", desc: "Survival craft boarding, life jacket drills, swimming proficiency, and life raft launch drills." },
      { title: "VR Safety Simulator", desc: "Virtual reality environment for fire-fighting, enclosed space entry, and hazard identification training." }
    ]
  },
  {
    id: "electro-technical-officer",
    slug: "electro-technical-officer",
    title: "Electro-Technical Officer (ETO)",
    duration: "4 Months",
    type: "Specialist Training",
    overview: "The ETO course is designed for Electrical or Electronics engineering graduates to manage shipboard electrical systems, automation, navigation bridge electronics, communications, and power plants. This is a highly specialized course, reflecting the growing electrical complexity of modern container vessels and cruise liners.",
    accreditation: "Approved by the Directorate General of Shipping (DGS), Ministry of Shipping, Government of India. Approval No: TR/A/45/2006",
    department: "Engine / Electrical Department",
    entranceTest: "PKIMSE ETO Entrance Screening Test",
    commencement: [
      { batch: "September 2026 Batch", status: "Admissions Open", active: true },
      { batch: "January 2027 Batch", status: "Applications open 1st Oct 2026", active: false }
    ],
    eligibility: {
      academic: "Passed 4-year Degree in Electrical, Electronics, Instrumentation, or related branches with minimum 50% marks, OR a 3-year Diploma with minimum 60% marks. Minimum 50% in English in 10th or 12th standard.",
      age: "Maximum 30 years at the time of course commencement.",
      medical: "Physically fit. Eyesight: up to +/- 2.5 permitted, no color blindness."
    },
    eligibilityTabs: {
      academic: [
        { text: "B.E./B.Tech in Electrical / Electronics / Instrumentation / Telecommunications or equivalent.", highlight: true },
        { text: "Minimum 50% aggregate marks in final year of Graduation.", highlight: true },
        { text: "OR Passed 3-year Diploma in above fields with minimum 60% aggregate.", highlight: false },
        { text: "Minimum 50% marks in English at 10th, 12th, or Degree level.", highlight: true }
      ],
      age: [
        { text: "Maximum Age Limit: 30 Years at the time of course commencement.", highlight: true }
      ],
      medical: [
        { text: "Eyesight: Up to +/- 2.5 permitted. No color blindness. Must have normal binocular vision.", highlight: true },
        { text: "Must clear standard physical standards for marine officers.", highlight: false }
      ]
    },
    admissionProcess: [
      "Apply online with electrical/electronics degree certificates.",
      "Clear technical screening test and online interview.",
      "Undergo medical evaluation by DGS-approved doctor."
    ],
    fees: {
      application: "₹1,500",
      tuition: "₹2,50,000",
      caution: "₹10,000 (Refundable)",
      total: "₹2,60,000",
      note: "Fee covers Tuition, Accommodation, Food, High-voltage safety course fees, and Lab materials.",
      discount: "₹20,000 Female candidate discount"
    },
    withdrawalPolicy: {
      schedule: [
        { period: "15 Days prior to course commencement", refund: "100% refund minus ₹10,000 processing fee" },
        { period: "Less than 15 days before commencement", refund: "80% tuition fee refund. Caution deposit returned." },
        { period: "After batch start", refund: "No refund of tuition fees. Caution deposit returned." }
      ],
      notes: [
        "Refunds are only processed if written notice is submitted to the registrar."
      ]
    },
    careerPath: "Trainee ETO -> Assistant ETO -> Electro-Technical Officer (ETO) -> Chief ETO.",
    careerProgression: [
      { title: "Trainee ETO", desc: "4 Months intensive campus training covering marine automation, PLC, HV switchboard" },
      { title: "Assistant ETO", desc: "8 Months onboard structured training program as assistant. Earn $600 - $1,200/month" },
      { title: "Electro-Technical Officer (ETO)", desc: "Earn ETO certificate from DGS. Head ship board electrical systems. Earn $3,000 - $6,000/month" },
      { title: "Chief ETO", desc: "Earned by experience on large automated cruise vessels or container lines. Earn $8,000+/month" }
    ],
    subjects: [
      "Marine High Voltage Systems & Distribution",
      "Control Systems, PLCs & Automation",
      "Navigation Aids & Bridge Electronics Maintenance",
      "Shipboard Safety & Power Management Systems",
      "Generators & Electric Propulsion Systems",
      "Practical Electronics Laboratory & Troubleshooting"
    ],
    image: "/images/courses/marine-engineering.png",
    seoKeywords: ["electro technical officer course", "eto admission 2026", "ship electrical engineer jobs"],
    supporters: ["Maersk Line", "V-Ships", "Anglo-Eastern", "Fleet Management", "Synergy Group", "MOL Maritime", "Chevron", "Executive Ship Management"],
    facilities: [
      { title: "High Voltage Training Panel", desc: "DGS approved 6.6 KV high-voltage switchboard and simulation panel for breaker safety training." },
      { title: "PLC & Microcontroller Lab", desc: "Automated controls testing lab with programmable logic controllers and sensors simulation." },
      { title: "Bridge Electronic Station", desc: "Mock bridge featuring marine radars, ECDIS units, echo sounders, and gyro compasses." }
    ]
  },
  {
    id: "basic-stcw-safety-training",
    slug: "basic-stcw-safety-training",
    title: "Basic STCW Safety Training Course (BST)",
    duration: "11 Days",
    type: "Mandatory Modular Program",
    overview: "The Basic STCW Safety Training (BST) course is an essential 11-day program mandatory for all seafarers seeking an Indian Continuous Discharge Certificate (CDC). The course covers four basic safety modular programs: Fire Prevention and Fire Fighting (FPFF), Elementary First Aid (EFA), Personal Safety and Social Responsibility (PSSR), and Personal Survival Techniques (PST), ensuring readiness for onboard emergencies.",
    accreditation: "Approved by the Directorate General of Shipping (DGS), Ministry of Shipping, Government of India. Course ID: 6111 + 6121 + 6141 + 6131",
    department: "Safety & Modular Courses",
    entranceTest: "INDoS Number Mandatory (No Entrance Test)",
    commencement: [
      { batch: "Weekly Intake", status: "Batches start every Monday. Registration open.", active: true }
    ],
    eligibility: {
      academic: "Minimum 10th standard pass from a recognized board. INDoS (Indian National Database of Seafarers) number is mandatory.",
      age: "Minimum 17.5 years at the time of course commencement.",
      medical: "Must be certified fit by a DGS-approved medical practitioner. Good health is mandatory for practical sessions."
    },
    eligibilityTabs: {
      academic: [
        { text: "Minimum 10th standard pass from a recognized board.", highlight: false },
        { text: "INDoS (Indian National Database of Seafarers) number is strictly mandatory.", highlight: true },
        { text: "Must complete DGS e-learning modules & pass initial online tests prior to physical classes.", highlight: true }
      ],
      age: [
        { text: "Minimum Age: 17.5 Years at course commencement.", highlight: false },
        { text: "No upper age limit, provided candidate is medically fit.", highlight: false }
      ],
      medical: [
        { text: "Must clear medical fitness conducted by a DGS-approved medical practitioner.", highlight: true },
        { text: "Must have good physical stamina (for heavy physical drills like fire fighting and wet water survival drills).", highlight: false }
      ]
    },
    admissionProcess: [
      "Obtain an INDoS number (if not already held).",
      "Register online through the student portal.",
      "Complete DGS e-learning modules & assessments for PST, FPFF, EFA, and PSSR.",
      "Attend the 11-day physical practical and theory training classes at the academy.",
      "Pass the exit examination at the institute."
    ],
    fees: {
      application: "INDoS Fee Extra",
      tuition: "₹9,900 (Chennai Campus) / ₹11,900 (Vizag/Other)",
      caution: "N/A",
      total: "₹9,900",
      note: "Fee covers training booklets, practical safety equipment wear, shower facilities during pool exercises, and exit examination fee.",
      discount: "Special group/package booking discounts available when combined with STSDSD course."
    },
    withdrawalPolicy: {
      schedule: [
        { period: "Up to 3 days before course start", refund: "100% Refund or Free Batch Reschedule" },
        { period: "Less than 3 days before course start", refund: "50% Fees Forfeited or ₹2,000 Reschedule Fee" },
        { period: "After batch commencement", refund: "No Refund / Fees Forfeited" }
      ],
      notes: [
        "INDoS registration fee once processed is non-refundable.",
        "Rescheduling requests must be sent to modular@pkimse.edu.in at least 48 hours prior."
      ]
    },
    careerPath: "Mandatory pre-requisite for Indian CDC application -> Able to serve onboard all commercial vessels globally.",
    careerProgression: [
      { title: "Get INDoS Number", desc: "Apply via DGS portal. Crucial for seafarer database" },
      { title: "Modular Safety Training", desc: "11 Days physical sessions on survival, firefighting, and safety" },
      { title: "Exit Exams", desc: "Pass institute assessment and online exit exams (50% pass mark)" },
      { title: "Obtain Certificates & CDC", desc: "Apply for Continuous Discharge Certificate (CDC) online" },
      { title: "Vessel Boarding", desc: "Legally eligible to work as rating or officer on cargo, cruise, or tanker ships globally" }
    ],
    batchSchedule: [
      { dates: "13 Jul 2026 - 24 Jul 2026", location: "KILPAUK, CHENNAI - Physical Class", timing: "07:00 - 16:30", price: "₹9,900", status: "Open" },
      { dates: "15 Jul 2026 - 27 Jul 2026", location: "VIZAG - Physical Class", timing: "08:15 - 17:30", price: "₹11,900", status: "Few Seats Left" },
      { dates: "03 Aug 2026 - 14 Aug 2026", location: "KILPAUK, CHENNAI - Physical Class", timing: "07:00 - 16:30", price: "₹9,900", status: "Open" },
      { dates: "10 Aug 2026 - 22 Aug 2026", location: "VIZAG - Physical Class", timing: "08:15 - 17:30", price: "₹11,900", status: "Open" },
      { dates: "18 Aug 2026 - 29 Aug 2026", location: "KILPAUK, CHENNAI - Physical Class", timing: "07:00 - 16:30", price: "₹9,900", status: "Open" }
    ],
    modularSpecs: {
      courseId: "6111 + 6121 + 6141 + 6131",
      exitExam: "Yes - Online Exit Exam Required",
      elearning: "Yes - DGS E-Learning Mandatory",
      elearningHours: "PST: 6 Hrs | PSSR: 12 Hrs | EFA: 9 Hrs | FPFF: 9 Hrs",
      passMark: "50% in each modular assessment",
      validity: "5 Years (refresher required after 5 years)"
    },
    subjects: [
      "Fire Prevention & Fire Fighting (FPFF)",
      "Personal Survival Techniques (PST)",
      "Elementary First Aid (EFA)",
      "Personal Safety & Social Responsibilities (PSSR)",
      "Survival at Sea & Inflatable Liferafts",
      "Emergency Procedures & Onboard Safety Duties"
    ],
    image: "/images/courses/basic-stcw.png",
    seoKeywords: ["basic stcw safety training", "bst course details", "stcw courses for indian cdc", "mandatory maritime courses"],
    supporters: ["Maersk Line", "MSC Ship Management", "V-Ships", "Anglo-Eastern", "Fleet Management", "Synergy Group", "MOL Maritime", "Chevron Shipping"],
    facilities: [
      { title: "Fire Training Ground", desc: "Dedicated ground with fire smoke chambers, fuel pans, and pressurized hoses for live firefighting exercises." },
      { title: "Wet Survival Pool", desc: "Large deep pool equipped with marine life rafts, thermal suits, life buoys, and diving platforms." },
      { title: "Medical First Aid Room", desc: "Equipped with standard oxygen resuscitators, first aid kits, bandages, splints, and CPR manikins." }
    ]
  }
];
