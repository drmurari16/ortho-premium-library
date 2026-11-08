export const siteNavigation = [
  { href: '/', label: 'Home' },
  { href: '/books', label: 'Books' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/news', label: 'News' },
  { href: '/videos', label: 'Videos' },
  { href: '/pricing', label: 'Membership' },
  { href: '/admin', label: 'Admin' },
  { href: '/contact', label: 'Contact' },
];

export type BookItem = {
  slug: string;
  title: string;
  author: string;
  category: string;
  price: number;
  isFree: boolean;
  description: string;
  image: string;
  pages: number;
  tags: string[];
};

export const books: BookItem[] = [
  {
    slug: 'evidence-based-hip-knee-surgery',
    title: 'Evidence-Based Hip and Knee Surgery',
    author: 'Dr. A. Mehta',
    category: 'Orthopaedics',
    price: 499,
    isFree: false,
    description: 'A surgical decision-making guide for modern joint replacement, revision planning and patient optimisation.',
    image: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=900&q=80',
    pages: 240,
    tags: ['hip', 'knee', 'surgery'],
  },
  {
    slug: 'fracture-management-essentials',
    title: 'Fracture Management Essentials',
    author: 'Dr. S. Kapoor',
    category: 'Trauma',
    price: 299,
    isFree: false,
    description: 'A concise reference on trauma protocols, fixation principles, rehabilitation and complication prevention.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80',
    pages: 190,
    tags: ['fracture', 'trauma', 'imaging'],
  },
  {
    slug: 'spine-surgery-for-residents',
    title: 'Spine Surgery for Residents',
    author: 'Dr. P. Sharma',
    category: 'Spine',
    price: 0,
    isFree: true,
    description: 'A starter guide covering anatomy, red flags, levels, instrumentation and patient selection for residents.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    pages: 176,
    tags: ['spine', 'resident', 'anatomy'],
  },
];

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: string;
};

export const news: NewsItem[] = [
  {
    slug: 'robotic-assisted-total-knee-replacement',
    title: 'Robotic-Assisted Total Knee Replacement Gains Clinical Momentum',
    excerpt: 'Surgeons are increasingly adopting data-driven workflows to improve alignment, patient education and early recovery.',
    category: 'Orthopaedics',
    date: '11 Nov 2026',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895973?auto=format&fit=crop&w=1200&q=80',
    author: 'Medical Desk',
  },
  {
    slug: 'bone-health-and-osteoporosis-awareness',
    title: 'Bone Health Week Highlights Osteoporosis Prevention in India',
    excerpt: 'Public awareness programs are expanding screening, fall prevention and lifestyle interventions.',
    category: 'Public Health',
    date: '05 Nov 2026',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    author: 'Health Advisory',
  },
  {
    slug: 'new-protocols-for-trauma-education',
    title: 'New Trauma Education Protocols Emphasise Early Stabilisation',
    excerpt: 'A standards-based approach is helping junior residents manage haemorrhage, imaging and team communication better.',
    category: 'Education',
    date: '02 Nov 2026',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    author: 'Editorial Board',
  },
];

export type VideoItem = {
  slug: string;
  title: string;
  category: string;
  duration: string;
  premium: boolean;
  description: string;
  image: string;
};

export const videos: VideoItem[] = [
  {
    slug: 'shoulder-arthroscopy-for-beginners',
    title: 'Shoulder Arthroscopy for Beginners',
    category: 'Arthroscopy',
    duration: '18 min',
    premium: true,
    description: 'A step-by-step understanding of portal placement, diagnostic inspection and common soft tissue work.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'nailing-techniques-in-femoral-fracture',
    title: 'Nailing Techniques in Femoral Fracture',
    category: 'Trauma',
    duration: '12 min',
    premium: false,
    description: 'A practical overview of reduction, implant selection, imaging guidance and post-op rehab tracking.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'musculoskeletal-ultrasound-basics',
    title: 'Musculoskeletal Ultrasound Basics',
    category: 'Imaging',
    duration: '22 min',
    premium: true,
    description: 'Learn to identify tendon, joint and soft tissue patterns using high-yield ultrasound principles.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895973?auto=format&fit=crop&w=1200&q=80',
  },
];

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
  tag: string;
};

export const gallery: GalleryItem[] = [
  { title: 'Knee Reconstruction Atlas', category: 'Clinical Images', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80', tag: 'surgery' },
  { title: 'Implant Design Collection', category: 'Orthopaedic Implants', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80', tag: 'implant' },
  { title: 'Anatomy Illustration Set', category: 'Educational Infographics', image: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=900&q=80', tag: 'anatomy' },
  { title: 'Spine Case Gallery', category: 'Medical Illustrations', image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895973?auto=format&fit=crop&w=900&q=80', tag: 'spine' },
  { title: 'Clinical Workshop Event', category: 'Event Photographs', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80', tag: 'event' },
  { title: 'Orthopedic Imaging Library', category: 'Clinical Images', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80', tag: 'imaging' },
];

export const pricingPlans = [
  { name: 'Free Reader', price: '₹0', description: 'Sample content access, limited previews and newsletters.', featureList: ['2 free articles', '1 free book preview', 'Community updates'], highlight: false },
  { name: 'Premium Member', price: '₹99/mo', description: 'Full access to premium books, paid videos and member-only library.', featureList: ['All premium books', 'Video library access', 'Member-only downloads', 'Early issue access'], highlight: true },
  { name: 'Institutional', price: 'Custom', description: 'For hospitals, teaching institutions and learning groups.', featureList: ['Bulk licensing', 'Team access', 'Custom reporting', 'Dedicated support'], highlight: false },
];

export const stats = [
  { value: '12k+', label: 'Medical learners' },
  { value: '450+', label: 'Educational assets' },
  { value: '₹4.2L', label: 'Monthly revenue potential' },
  { value: '98.8%', label: 'Member satisfaction' },
];

export const homeFeatures = [
  { title: 'Premium educational publishing', description: 'Original, carefully curated learning experiences for orthopaedic students and clinicians.' },
  { title: 'Secure member access', description: 'Server-side validation, private storage and watermarking for paid video and e-book access.' },
  { title: 'Monetisation ready', description: 'Memberships, individual sales, ads and sponsored content built for digital growth.' },
];
