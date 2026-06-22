import { allMedicines } from "./medicines-db";

export const categories = [
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

export const products = allMedicines;

export const testimonials = Array.from({ length: 20 }, (_, i) => {
  const names = ["Aarav Sharma", "Priya Patel", "Rohan Mehta", "Ananya Iyer", "Vikram Singh", "Neha Kapoor", "Arjun Reddy", "Diya Joshi", "Kabir Verma", "Sanya Gupta", "Ishaan Nair", "Meera Pillai", "Aditya Rao", "Tara Bose", "Yash Khanna", "Riya Malhotra", "Karan Bhatia", "Pooja Desai", "Nikhil Saxena", "Aditi Menon"];
  const quotes = [
    "Medicines arrived in under 24 hours — packed neatly with the original bills. My new go-to pharmacy.",
    "Ordering was effortless. The pharmacist even called to confirm dosage details.",
    "Pricing beat my local store by almost 25%. Same brands, faster delivery.",
    "Customer support actually answered on the first ring. Rare these days.",
    "Subscription refills mean I never run out of my BP meds. Total peace of mind.",
    "Genuine products, properly sealed. Tracking was accurate to the minute.",
  ];
  const r = i % 6;
  return { name: names[i], rating: i % 5 === 0 ? 4 : 5, quote: quotes[r] };
});

