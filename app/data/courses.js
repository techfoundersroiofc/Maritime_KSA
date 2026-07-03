export const courses = [
  {
    id: "bsc-nautical-science",
    slug: "bsc-nautical-science",
    title: "B.Sc. Nautical Science",
    duration: "3 Years (6 Semesters)",
    type: "Residential Program",
    overview: "B.Sc. Nautical Science is a comprehensive 3-year residential program that covers navigation, cargo operations, meteorology, ship stability, and celestial navigation. It is fully approved by the Directorate General of Shipping (DGS), India, and prepares candidates for a prestigious career as Deck Officers in the Merchant Navy.",
    eligibility: {
      academic: "Passed 10+2 (or equivalent) with a minimum of 60% aggregate in Physics, Chemistry, and Mathematics (PCM) and a minimum of 50% in English in 10th or 12th standard.",
      age: "Minimum 17 years and maximum 25 years at the time of course commencement (relaxations apply as per government norms for SC/ST and female candidates).",
      medical: "Must be physically fit as per DGS guidelines. Eye sight: 6/6 in each eye without visual aids, no color blindness."
    },
    admissionProcess: [
      "Must appear and qualify in the IMU Common Entrance Test (IMU-CET).",
      "Fill online application on the college portal.",
      "Clear PKIMSE AI-proctored entrance test and personal interview.",
      "Undergo medical examination by a DGS-approved medical practitioner."
    ],
    careerPath: "Pre-Sea Cadet -> Deck Cadet (12 Months sea service) -> Third Officer (on clearing Second Mate Exam) -> Second Officer -> Chief Officer -> Captain.",
    subjects: [
      "Navigation & Celestial Navigation",
      "Ship Operations & Cargo Handling",
      "Meteorology & Oceanography",
      "Maritime Laws & Ship Stability",
      "Marine Communication & GMDSS",
      "Seamanship & Collision Prevention"
    ],
    image: "/images/courses/nautical-science.png",
    seoKeywords: ["bsc nautical science admission", "nautical science college in india", "merchant navy courses after 12th science"]
  },
  {
    id: "btech-marine-engineering",
    slug: "btech-marine-engineering",
    title: "B.Tech Marine Engineering",
    duration: "4 Years (8 Semesters)",
    type: "Residential Program",
    overview: "B.Tech Marine Engineering is a 4-year professional engineering course focused on the design, construction, operation, and maintenance of machinery in ships and other marine structures. The program covers steam and diesel propulsion, marine boilers, auxiliary machinery, electrical systems, and shipboard safety.",
    eligibility: {
      academic: "Passed 10+2 with a minimum of 60% aggregate in PCM (Physics, Chemistry, Math) and a minimum of 50% in English in 10th or 12th standard.",
      age: "Minimum 17 years and maximum 25 years at course commencement.",
      medical: "Physically fit as per DGS guidelines. Eye sight: up to +/- 2.5 permitted, no color blindness."
    },
    admissionProcess: [
      "Qualify in the IMU-CET exam.",
      "Apply through the PKIMSE admissions page.",
      "Pass the PKIMSE academic interview and aptitude assessment.",
      "Pass the DGS-approved medical examination."
    ],
    careerPath: "Pre-Sea Junior Engineer -> Fifth Engineer -> Fourth Engineer -> Third Engineer -> Second Engineer -> Chief Engineer.",
    subjects: [
      "Marine Diesel Engines & Gas Turbines",
      "Shipboard Auxiliary Machinery",
      "Electrical Machines & Marine Electronics",
      "Naval Architecture & Ship Construction",
      "Boilers & Steam Engineering",
      "Marine Engineering Drawing & Workshops"
    ],
    image: "/images/courses/marine-engineering.png",
    seoKeywords: ["marine engineering course details", "marine engineering admission", "marine engineering college in india"]
  },
  {
    id: "diploma-nautical-science",
    slug: "diploma-nautical-science",
    title: "Diploma in Nautical Science (DNS)",
    duration: "1 Year (2 Semesters) + 18 Months onboard training",
    type: "Sponsorship-Based Program",
    overview: "The 1-year Diploma in Nautical Science (DNS) leads to a B.Sc. Nautical Science degree after completing 18 months of sea-service and passing the structured shipboard training program. DNS is highly sought after because it requires pre-selection sponsorship by a reputed shipping company before the course begins, ensuring 100% placement.",
    eligibility: {
      academic: "Passed 10+2 with a minimum of 60% aggregate in PCM OR B.Sc. with Physics/Math/Chemistry (minimum 55% aggregate) OR B.E./B.Tech degree (minimum 50% aggregate). Minimum 50% in English at 10th/12th/Degree level.",
      age: "Maximum 25 years (General category) at the time of course commencement.",
      medical: "Physically fit. Eyesight: 6/6 in both eyes without visual aids, no color blindness."
    },
    admissionProcess: [
      "Apply and get selected for Sponsorship by a DGS-approved shipping company.",
      "Appear and qualify in the IMU-CET written test.",
      "Complete registration on the PKIMSE application portal.",
      "Clear medical fitness test by an authorized DGS doctor."
    ],
    careerPath: "1-Year Pre-Sea training -> 18 Months Sea Training (Cadet) -> Pass Second Mate exam -> Third Officer -> Second Officer -> Chief Officer -> Captain.",
    subjects: [
      "Basic Ship Navigation & Compass Rules",
      "General Ship Knowledge & Construction",
      "Meteorology & Celestial Observations",
      "Cargo Work & Seamanship Practices",
      "Practical Chartwork & Bridge Equipment",
      "Marine Communications & Safety Drills"
    ],
    image: "/images/courses/dns.png",
    seoKeywords: ["diploma in nautical science dns", "merchant navy course with placement", "dns sponsorship admission"]
  },
  {
    id: "graduate-marine-engineering",
    slug: "graduate-marine-engineering",
    title: "Graduate Marine Engineering (GME)",
    duration: "1 Year (Residential)",
    type: "Graduate Program",
    overview: "The 1-year Graduate Marine Engineering (GME) course is a conversion program for Mechanical Engineering graduates to transition into professional Marine Officers. The curriculum covers specialized marine systems, naval engineering, control systems, safety procedures, and extensive hands-on workshop training.",
    eligibility: {
      academic: "Graduation in B.E./B.Tech Mechanical Engineering, Mechanical & Automation, or Naval Architecture from an AICTE approved institution with a minimum of 50% aggregate marks, and at least 50% marks in English in 10th, 12th or Degree.",
      age: "Maximum 28 years at the time of course commencement.",
      medical: "Physically fit as per DGS merchant shipping rules. Eyesight: up to +/- 2.5 permitted, no color blindness."
    },
    admissionProcess: [
      "Submit application with mechanical engineering degree credentials.",
      "Shortlisting based on graduation marks.",
      "Clear technical interview and aptitude test.",
      "Pass medical examination by DGS-approved doctor."
    ],
    careerPath: "Junior Engineer -> Fifth Engineer -> Fourth Engineer -> Third Engineer -> Second Engineer -> Chief Engineer.",
    subjects: [
      "Marine Engines & Auxiliary Machinery",
      "Ship Safety & Fire Fighting",
      "Marine Workshop Practices & Lathe Operations",
      "Automation & Ship Control Systems",
      "Electrical Systems & Generator Maintenance",
      "Refrigeration & Air Conditioning on Ships"
    ],
    image: "/images/courses/marine-engineering.png",
    seoKeywords: ["graduate marine engineering gme", "marine engineering after mechanical", "gme admission 2026"]
  },
  {
    id: "general-purpose-rating",
    slug: "general-purpose-rating",
    title: "General Purpose (GP) Rating",
    duration: "6 Months",
    type: "Pre-Sea Training",
    overview: "GP Rating is a 6-month pre-sea course for students who want to join the Merchant Navy in the Deck or Engine departments as crew members. The course covers basic seamanship, steering, woodworking, welding, engine overhaul, and safety training, offering a fast entry into the shipping industry.",
    eligibility: {
      academic: "Passed 10th standard with Science and Mathematics as subjects, and a minimum of 40% aggregate marks. Minimum 40% in English in 10th standard.",
      age: "Minimum 17.5 years and maximum 25 years at course commencement.",
      medical: "Physically fit. Eyesight: 6/6 in each eye without visual aids, no color blindness."
    },
    admissionProcess: [
      "Apply through the PKIMSE GP Rating application link.",
      "Aptitude test followed by physical fitness assessment.",
      "Personal interview.",
      "Medical check-up by DGS-approved medical officer."
    ],
    careerPath: "Trainee Rating (GP Rating) -> Ordinary Seaman (OS) -> Able Seaman (AB) -> Bosun -> Chief Cook or eligible to write Watchkeeping exams for Officer ranks.",
    subjects: [
      "Practical Seamanship & Knots",
      "Deck Maintenance & Painting",
      "Basic Engine Mechanics & Workshop Skills",
      "Personal Survival Techniques & First Aid",
      "Fire Prevention and Fire Fighting",
      "Ship Security & Code of Conduct"
    ],
    image: "/images/courses/nautical-science.png",
    seoKeywords: ["gp rating course", "general purpose rating admission", "merchant navy courses after 10th"]
  },
  {
    id: "electro-technical-officer",
    slug: "electro-technical-officer",
    title: "Electro-Technical Officer (ETO)",
    duration: "4 Months",
    type: "Specialist Training",
    overview: "The ETO course is designed for Electrical or Electronics engineering graduates to manage shipboard electrical systems, automation, navigation bridge electronics, communications, and power plants. This is a highly specialized course, reflecting the growing electrical complexity of modern container vessels and cruise liners.",
    eligibility: {
      academic: "Passed 4-year Degree in Electrical, Electronics, Instrumentation, or related branches with minimum 50% marks, OR a 3-year Diploma with minimum 60% marks. Minimum 50% in English in 10th or 12th standard.",
      age: "Maximum 30 years at the time of course commencement.",
      medical: "Physically fit. Eyesight: up to +/- 2.5 permitted, no color blindness."
    },
    admissionProcess: [
      "Apply online with electrical/electronics degree certificates.",
      "Clear technical screening test and online interview.",
      "Undergo medical evaluation by DGS-approved doctor."
    ],
    careerPath: "Trainee ETO -> Assistant ETO -> Electro-Technical Officer (ETO) -> Chief ETO.",
    subjects: [
      "Marine High Voltage Systems & Distribution",
      "Control Systems, PLCs & Automation",
      "Navigation Aids & Bridge Electronics Maintenance",
      "Shipboard Safety & Power Management Systems",
      "Generators & Electric Propulsion Systems",
      "Practical Electronics Laboratory & Troubleshooting"
    ],
    image: "/images/courses/marine-engineering.png",
    seoKeywords: ["electro technical officer course", "eto admission 2026", "ship electrical engineer jobs"]
  }
];
