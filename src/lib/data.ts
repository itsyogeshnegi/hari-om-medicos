export type Category = {
  slug: string;
  name: string;
  icon: string;
  description: string;
  color: string;
};

export const categories: Category[] = [
  { slug: "prescription", name: "Prescription Medicines", icon: "💊", description: "Doctor-prescribed medications", color: "#2563EB" },
  { slug: "otc", name: "OTC Medicines", icon: "🩹", description: "Over-the-counter relief", color: "#10B981" },
  { slug: "vitamins", name: "Vitamins & Supplements", icon: "🧬", description: "Daily wellness boosters", color: "#F59E0B" },
  { slug: "diabetes", name: "Diabetes Care", icon: "🩸", description: "Monitors, insulin & more", color: "#EF4444" },
  { slug: "heart", name: "Heart Care", icon: "❤️", description: "Cardiac essentials", color: "#DC2626" },
  { slug: "skin", name: "Skin Care", icon: "✨", description: "Derma-approved care", color: "#EC4899" },
  { slug: "baby", name: "Baby Care", icon: "🍼", description: "Gentle for little ones", color: "#06B6D4" },
  { slug: "personal", name: "Personal Care", icon: "🧴", description: "Daily hygiene", color: "#8B5CF6" },
  { slug: "firstaid", name: "First Aid", icon: "🚑", description: "Emergency essentials", color: "#F97316" },
  { slug: "devices", name: "Medical Devices", icon: "🩺", description: "Home health tech", color: "#0EA5E9" },
];

export type Product = {
  id: string;
  name: string;
  generic: string;
  manufacturer: string;
  description: string;
  price: number;
  mrp: number;
  discount: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  prescription: boolean;
  category: string;
  image: string;
  uses?: string;
  dosage?: string;
  sideEffects?: string;
  storage?: string;
};

const manufacturers = ["Cipla", "Sun Pharma", "Dr. Reddy's", "Lupin", "Mankind", "Abbott", "GSK", "Pfizer", "Zydus", "Torrent"];

const seed = [
  ["Paracetamol 500mg", "Paracetamol", "prescription", true, "Fever and mild pain relief"],
  ["Cetirizine 10mg", "Cetirizine HCl", "otc", false, "Allergy & hay fever relief"],
  ["Azithromycin 500mg", "Azithromycin", "prescription", true, "Broad-spectrum antibiotic"],
  ["Amoxicillin 250mg", "Amoxicillin", "prescription", true, "Bacterial infection treatment"],
  ["Vitamin D3 60K", "Cholecalciferol", "vitamins", false, "Bone & immunity support"],
  ["Calcium + Zinc Tablets", "Calcium Carbonate", "vitamins", false, "Stronger bones & teeth"],
  ["Ibuprofen 400mg", "Ibuprofen", "otc", false, "Pain & inflammation"],
  ["Omeprazole 20mg", "Omeprazole", "prescription", true, "Acidity & ulcer relief"],
  ["Metformin 500mg", "Metformin HCl", "diabetes", true, "Type-2 diabetes control"],
  ["Amlodipine 5mg", "Amlodipine", "heart", true, "Hypertension management"],
  ["Glucometer Pro", "—", "devices", false, "Accurate blood glucose monitor"],
  ["Digital Thermometer", "—", "devices", false, "Fast & accurate readings"],
  ["BP Monitor Auto", "—", "devices", false, "Upper-arm blood pressure"],
  ["First Aid Kit Family", "—", "firstaid", false, "55-piece emergency kit"],
  ["Antiseptic Liquid 500ml", "Chlorhexidine", "firstaid", false, "Wound cleanser"],
  ["Cough Syrup 100ml", "Dextromethorphan", "otc", false, "Dry cough relief"],
  ["Multivitamin Daily", "Multivitamin", "vitamins", false, "Complete daily nutrition"],
  ["Omega-3 Fish Oil", "EPA + DHA", "vitamins", false, "Heart & brain support"],
  ["Iron + Folic Acid", "Ferrous Sulphate", "vitamins", false, "Anemia prevention"],
  ["Probiotic Capsules", "Lactobacillus", "vitamins", false, "Gut health support"],
  ["Insulin Glargine 100IU", "Insulin Glargine", "diabetes", true, "Long-acting insulin"],
  ["Glucose Test Strips x50", "—", "diabetes", false, "For glucometer use"],
  ["Atorvastatin 10mg", "Atorvastatin", "heart", true, "Cholesterol management"],
  ["Aspirin 75mg", "Aspirin", "heart", true, "Blood thinner low-dose"],
  ["Moisturizing Cream 200g", "Ceramide Complex", "skin", false, "24h hydration"],
  ["Sunscreen SPF 50+", "Zinc Oxide", "skin", false, "Broad-spectrum UV"],
  ["Acne Control Gel", "Adapalene 0.1%", "skin", true, "Clearer skin in weeks"],
  ["Anti-Dandruff Shampoo", "Ketoconazole 2%", "skin", false, "Flake-free scalp"],
  ["Baby Diaper Rash Cream", "Zinc Oxide", "baby", false, "Soothes & protects"],
  ["Baby Lotion 400ml", "Calendula", "baby", false, "Mild for delicate skin"],
  ["Baby Shampoo Tear-Free", "Mild Surfactants", "baby", false, "No more tears"],
  ["Infant Formula Stage 1", "—", "baby", false, "0-6 months nutrition"],
  ["Hand Sanitizer 500ml", "Ethyl Alcohol 70%", "personal", false, "Kills 99.9% germs"],
  ["Toothpaste Sensitive 150g", "Potassium Nitrate", "personal", false, "Sensitivity relief"],
  ["Mouthwash Antibacterial", "Chlorhexidine", "personal", false, "24h fresh breath"],
  ["Face Mask N95 x10", "—", "personal", false, "Medical-grade filtration"],
  ["Band-Aid Variety Pack", "—", "firstaid", false, "100 assorted bandages"],
  ["Crepe Bandage 6cm", "—", "firstaid", false, "Sprain & strain support"],
  ["Pulse Oximeter", "—", "devices", false, "SpO2 & heart-rate"],
  ["Nebulizer Compact", "—", "devices", false, "Quiet & portable"],
  ["Pantoprazole 40mg", "Pantoprazole", "prescription", true, "Acid reflux relief"],
  ["Levocetirizine 5mg", "Levocetirizine", "otc", false, "Non-drowsy allergy"],
  ["Doxycycline 100mg", "Doxycycline", "prescription", true, "Bacterial infections"],
  ["Losartan 50mg", "Losartan Potassium", "heart", true, "BP & kidney protection"],
  ["Glimepiride 2mg", "Glimepiride", "diabetes", true, "Blood sugar control"],
  ["Biotin 10000mcg", "Biotin", "vitamins", false, "Hair, skin & nails"],
  ["Whey Protein 1kg", "Whey Isolate", "vitamins", false, "24g protein per scoop"],
  ["Salbutamol Inhaler", "Salbutamol", "prescription", true, "Asthma quick-relief"],
  ["Vitamin C 1000mg", "Ascorbic Acid", "vitamins", false, "Immunity booster"],
  ["Melatonin 5mg", "Melatonin", "otc", false, "Restful sleep aid"],
];

const palette = ["2563EB", "10B981", "F59E0B", "EF4444", "8B5CF6", "EC4899", "06B6D4", "F97316", "0EA5E9", "14B8A6"];

export const products: Product[] = seed.map((s, i) => {
  const [name, generic, category, rx, desc] = s as [string, string, string, boolean, string];
  const mrp = Math.round((40 + (i * 37) % 720) * 10) / 10;
  const discount = [10, 12, 15, 18, 20, 22, 25, 28, 30][i % 9];
  const price = Math.round((mrp * (1 - discount / 100)) * 10) / 10;
  const color = palette[i % palette.length];
  const short = name.split(" ").slice(0, 2).join("+");
  return {
    id: `med-${i + 1}`,
    name,
    generic,
    manufacturer: manufacturers[i % manufacturers.length],
    description: desc,
    price,
    mrp,
    discount,
    rating: 3.8 + ((i * 13) % 12) / 10,
    reviews: 24 + (i * 53) % 1800,
    inStock: i % 11 !== 0,
    prescription: rx,
    category,
    image: `https://placehold.co/600x600/${color}/ffffff/png?text=${encodeURIComponent(short)}&font=poppins`,
    uses: desc + ". Refer to leaflet for full indications.",
    dosage: rx ? "As directed by your physician." : "1-2 units per day or as needed.",
    sideEffects: "Mild nausea, drowsiness or allergic reaction in rare cases.",
    storage: "Store below 25°C in a cool, dry place away from sunlight.",
  };
});

export type BlogPost = {
  slug: string; title: string; excerpt: string; category: string; date: string; readTime: string; cover: string;
};

export const blogPosts: BlogPost[] = [
  ["benefits-of-vitamin-d", "The Surprising Benefits of Vitamin D", "Nutrition", "Sunshine vitamin, immunity, bone density and mood — what the research really says."],
  ["managing-diabetes", "Managing Diabetes: A Modern Playbook", "Diabetes", "Diet, exercise and medication strategies that actually move the needle on HbA1c."],
  ["heart-health-tips", "10 Heart-Health Habits Cardiologists Swear By", "Heart", "Small daily changes that compound into a stronger cardiovascular system."],
  ["cold-flu-prevention", "Cold & Flu Prevention That Works", "Wellness", "Beyond hand-washing: evidence-based ways to dodge seasonal bugs."],
  ["healthy-lifestyle", "Building a Healthy Lifestyle That Lasts", "Lifestyle", "Sustainable habits beat short bursts of motivation every single time."],
  ["nutrition-advice", "Smart Nutrition for Busy Professionals", "Nutrition", "Eat well even on your tightest weeks with these simple swaps."],
  ["healthcare-awareness", "Healthcare Awareness: Read the Label", "Awareness", "How to decode medication leaflets like a pharmacist."],
  ["sleep-and-immunity", "Sleep is the New Supplement", "Wellness", "Why 7-9 hours is the single best thing you can do for immunity."],
  ["mental-wellbeing", "Mental Wellbeing in a Noisy World", "Mental Health", "Practical tools to lower stress without quitting your life."],
  ["women-health", "A Women's Health Checklist by Decade", "Women's Health", "Screenings, supplements and routines for every life stage."],
].map(([slug, title, category, excerpt], i) => ({
  slug, title, excerpt, category,
  date: new Date(2026, 0, 4 + i * 7).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
  readTime: `${4 + (i % 5)} min read`,
  cover: `https://placehold.co/800x500/${palette[i % palette.length]}/ffffff/png?text=${encodeURIComponent(title)}&font=poppins`,
}));

export const testimonials = Array.from({ length: 20 }, (_, i) => {
  const names = ["Aarav Sharma", "Priya Patel", "Rohan Mehta", "Ananya Iyer", "Vikram Singh", "Neha Kapoor", "Arjun Reddy", "Diya Joshi", "Kabir Verma", "Sanya Gupta", "Ishaan Nair", "Meera Pillai", "Aditya Rao", "Tara Bose", "Yash Khanna", "Riya Malhotra", "Karan Bhatia", "Pooja Desai", "Nikhil Saxena", "Aditi Menon"];
  const quotes = [
    "Medicines arrived in under 24 hours — packed neatly with the original bills. My new go-to pharmacy.",
    "Uploading my prescription was effortless. The pharmacist even called to confirm dosage.",
    "Pricing beat my local store by almost 25%. Same brands, faster delivery.",
    "Customer support actually answered on the first ring. Rare these days.",
    "Subscription refills mean I never run out of my BP meds. Total peace of mind.",
    "Genuine products, properly sealed. Tracking was accurate to the minute.",
  ];
  const r = i % 6;
  return { name: names[i], rating: i % 5 === 0 ? 4 : 5, quote: quotes[r] };
});

export const faqs = [
  { q: "How long does delivery take?", a: "Most metro orders are delivered within 24 hours. Other locations typically take 2-4 business days." },
  { q: "Do I need a prescription to order?", a: "Only for scheduled medicines. Items marked with the Rx badge require a valid doctor's prescription uploaded before dispatch." },
  { q: "What is your return policy?", a: "Sealed, unopened products can be returned within 7 days of delivery for a full refund or replacement." },
  { q: "How do refunds work?", a: "Approved refunds are processed within 5-7 business days to your original payment method." },
  { q: "What payment methods are accepted?", a: "UPI, all major credit & debit cards, net-banking, popular wallets, and Cash on Delivery up to ₹5,000." },
  { q: "Can I track my order?", a: "Yes — you'll receive SMS and email updates plus a live tracking link inside your dashboard." },
  { q: "Are the medicines genuine?", a: "100%. We source directly from licensed distributors and every batch is verified before dispatch." },
  { q: "How do I contact customer support?", a: "24/7 chat inside the app, or call 1800-123-4567. Average response time is under 2 minutes." },
  { q: "Do you offer recurring/subscription orders?", a: "Yes, set a refill cadence at checkout and we'll dispatch automatically — pause or cancel anytime." },
  { q: "Is my data secure?", a: "All prescriptions and health data are encrypted and stored under strict HIPAA-equivalent controls." },
];
