// Navigation content (sections and sub-pages from pavblu.com) and the line icons used in the menus.

export type NavIconName =
  | "clipboard" | "trend" | "shield" | "layers" | "users"
  | "calendar" | "syringe" | "steps"
  | "document" | "headset" | "folder"
  | "route" | "flask" | "heart"
  | "award" | "gear" | "target" | "lifebuoy"
  | "alert" | "plus" | "arrow" | "chevron";

export type NavItem = { title: string; desc: string; href: string; icon: NavIconName };
export type NavMenu = { id: string; label: string; href: string; items: NavItem[] };

const BASE = "https://www.pavblu.com";

export const MENUS: NavMenu[] = [
  {
    id: "safety",
    label: "Safety & Efficacy",
    href: `${BASE}/safety-efficacy`,
    items: [
      { title: "Study Design", desc: "Trial design and patient population", href: `${BASE}/safety-efficacy#studydesign`, icon: "clipboard" },
      { title: "Efficacy", desc: "Visual acuity results compared with EYLEA®", href: `${BASE}/safety-efficacy#efficacy`, icon: "trend" },
      { title: "Safety", desc: "Adverse event profile from clinical studies", href: `${BASE}/safety-efficacy#safety`, icon: "shield" },
      { title: "Totality of Evidence", desc: "Analytical, nonclinical and clinical data together", href: `${BASE}/safety-efficacy#totalityofevidence`, icon: "layers" },
      { title: "Real-World Evidence", desc: "Outcomes from everyday clinical practice", href: `${BASE}/safety-efficacy#realworldevidence`, icon: "users" },
    ],
  },
  {
    id: "dosing",
    label: "PFS & Dosing",
    href: `${BASE}/dosing`,
    items: [
      { title: "Dosing", desc: "Recommended dosing by indication", href: `${BASE}/dosing#dosing`, icon: "calendar" },
      { title: "PFS Design", desc: "Features of the prefilled syringe", href: `${BASE}/dosing#pfsdesign`, icon: "syringe" },
      { title: "PFS Preparation", desc: "Step-by-step preparation for injection", href: `${BASE}/dosing#pfspreparation`, icon: "steps" },
    ],
  },
  {
    id: "access",
    label: "Access & Support",
    href: `${BASE}/support-and-resources`,
    items: [
      { title: "Coverage", desc: "Payer coverage and billing codes", href: `${BASE}/support-and-resources#coverage`, icon: "document" },
      { title: "Support Overview", desc: "Programs available through Amgen Support+", href: `${BASE}/support-and-resources#supportoverview`, icon: "headset" },
      { title: "Access Resources", desc: "Forms, guides and reimbursement tools", href: `${BASE}/support-and-resources#accessresources`, icon: "folder" },
    ],
  },
  {
    id: "biosimilars",
    label: "About Biosimilars",
    href: `${BASE}/about-biosimilars`,
    items: [
      { title: "Approval Pathway", desc: "How the FDA reviews and approves biosimilars", href: `${BASE}/about-biosimilars#approvalpathway`, icon: "route" },
      { title: "Biosimilar Development", desc: "From analytical studies to clinical trials", href: `${BASE}/about-biosimilars#biosimilardevelopment`, icon: "flask" },
      { title: "Why Biosimilars", desc: "Value for patients and practices", href: `${BASE}/about-biosimilars#whybiosimilars`, icon: "heart" },
    ],
  },
  {
    id: "amgen",
    label: "Amgen Expertise",
    href: `${BASE}/amgen-biosimilar-expertise`,
    items: [
      { title: "Heritage", desc: "More than 40 years of biologics experience", href: `${BASE}/amgen-biosimilar-expertise#heritage`, icon: "award" },
      { title: "Expertise", desc: "Manufacturing and quality at scale", href: `${BASE}/amgen-biosimilar-expertise#expertise`, icon: "gear" },
      { title: "Commitment", desc: "A long-term commitment to retina care", href: `${BASE}/amgen-biosimilar-expertise#commitment`, icon: "target" },
      { title: "Support", desc: "Resources for you and your practice", href: `${BASE}/amgen-biosimilar-expertise#support`, icon: "lifebuoy" },
    ],
  },
];

export const QUICK_LINKS: Array<NavItem & { tone: "blue" | "navy" | "sky" }> = [
  { title: "Prescribing Information", desc: "Full PI for PAVBLU® (PDF)", href: "https://www.pi.amgen.com/united_states/pavblu/pavblu_fpi_english.pdf", icon: "document", tone: "blue" },
  { title: "Important Safety Information", desc: "Contraindications, warnings and reactions", href: "#isi-title", icon: "alert", tone: "navy" },
  { title: "AmgenSupportPlus.com", desc: "Coverage and patient support", href: "https://www.amgensupportplus.com", icon: "plus", tone: "sky" },
];

const PATHS: Record<NavIconName, React.ReactNode> = {
  clipboard: (<><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V3h6v1M8.5 10h7M8.5 14h7M8.5 18h4" /></>),
  trend: (<><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></>),
  shield: (<><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></>),
  layers: (<><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 13l9 5 9-5" /></>),
  users: (<><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><circle cx="17" cy="9" r="2.5" /><path d="M16 14.2a5 5 0 0 1 5 4.8" /></>),
  calendar: (<><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>),
  syringe: (<><path d="M18 2l4 4M20 4l-6.5 6.5M15 7l2 2" /><path d="M13 5.5l5.5 5.5-9 9-5.5-5.5z" /><path d="M8 11l2 2M5.5 13.5l2 2M2 22l2.5-2.5" /></>),
  steps: (<><path d="M9.5 6H20M9.5 12H20M9.5 18H20" /><circle cx="5" cy="6" r="1.6" /><circle cx="5" cy="12" r="1.6" /><circle cx="5" cy="18" r="1.6" /></>),
  document: (<><path d="M6 3h9l4 4v14H6z" /><path d="M14 3v5h5M9 13h7M9 17h5" /></>),
  headset: (<><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect x="17" y="13" width="4" height="6" rx="1.5" /><path d="M19 19c0 1.5-2 2.5-5 2.5h-1.5" /></>),
  folder: (<><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></>),
  route: (<><circle cx="6" cy="19" r="2" /><circle cx="18" cy="5" r="2" /><path d="M8 19h7.5a3.5 3.5 0 0 0 0-7h-7a3.5 3.5 0 0 1 0-7H16" /></>),
  flask: (<><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" /><path d="M7.5 15h9" /></>),
  heart: (<><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /></>),
  award: (<><circle cx="12" cy="9" r="5" /><path d="M8.6 13.2L7 21l5-3 5 3-1.6-7.8" /></>),
  gear: (<><circle cx="12" cy="12" r="3" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1" /></>),
  target: (<><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /></>),
  lifebuoy: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="M5.6 5.6l3.6 3.6M14.8 14.8l3.6 3.6M18.4 5.6l-3.6 3.6M9.2 14.8l-3.6 3.6" /></>),
  alert: (<><circle cx="12" cy="12" r="9" /><path d="M12 7.5v6M12 16.5v.01" /></>),
  plus: (<><path d="M12 5v14M5 12h14" /></>),
  arrow: (<><path d="M5 12h14M13 6l6 6-6 6" /></>),
  chevron: (<><path d="M6 9l6 6 6-6" /></>),
};

export function NavIcon({ name, size = 22, className }: { name: NavIconName; size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
