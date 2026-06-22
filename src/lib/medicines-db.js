import part1 from "../medicines_data/medicines_part_1.json";
import part2 from "../medicines_data/medicines_part_2.json";
import part3 from "../medicines_data/medicines_part_3.json";
import part4 from "../medicines_data/medicines_part_4.json";
import part5 from "../medicines_data/medicines_part_5.json";

const rawMedicines = [...part1, ...part2, ...part3, ...part4, ...part5];

export const allMedicines = rawMedicines.map((med, idx) => {
  const price = typeof med.value === "number" ? med.value : parseFloat(med.value) || 99.0;
  const discount = [10, 15, 22, 25, 30][idx % 5];
  const mrp = Math.round((price / (1 - discount / 100)) * 10) / 10;
  
  // Categorization logic based on name keywords
  const nameUpper = (med.itemName || "").toUpperCase();
  let category = "otc";
  if (nameUpper.includes("CREAM") || nameUpper.includes("OINT") || nameUpper.includes("GEL")) {
    category = "skin";
  } else if (nameUpper.includes("SUPPLEMENT") || nameUpper.includes("VITAMIN") || nameUpper.includes("TAB") || nameUpper.includes("CAP") || nameUpper.includes("CREAM")) {
    category = "prescription";
  } else if (nameUpper.includes("DEVICE") || nameUpper.includes("MONITOR") || nameUpper.includes("THERMOMETER")) {
    category = "devices";
  } else if (nameUpper.includes("SHAMPOO") || nameUpper.includes("WASH") || nameUpper.includes("PASTE")) {
    category = "personal";
  } else if (nameUpper.includes("BELT") || nameUpper.includes("BAND") || nameUpper.includes("BANDAGE") || nameUpper.includes("KIT")) {
    category = "firstaid";
  } else if (nameUpper.includes("GLUCO") || nameUpper.includes("INSULIN") || nameUpper.includes("STRIP")) {
    category = "diabetes";
  }
  
  const shortName = (med.itemName || "Medicine").split(" ").slice(0, 2).join("+");
  const palette = ["2563EB", "10B981", "F59E0B", "EF4444", "8B5CF6", "EC4899", "06B6D4", "F97316", "0EA5E9", "14B8A6"];
  const color = palette[idx % palette.length];

  return {
    id: med.code || `med-${idx + 1}`,
    name: med.itemName || "Genuine Medicine",
    generic: med.packing || "General Formulation",
    manufacturer: med.companyName || "Quality Care Ltd",
    description: `Generic packing: ${med.packing || "N/A"}.`,
    price: price,
    mrp: mrp,
    discount: discount,
    rating: 3.8 + ((idx * 13) % 12) / 10,
    reviews: 12 + (idx * 17) % 500,
    inStock: true,
    prescription: category === "prescription",
    category: category,
    image: `https://placehold.co/600x600/${color}/ffffff/png?text=${encodeURIComponent(shortName)}&font=poppins`,
    uses: `Indicated for general relief and care. Refer to pack label for usage instructions.`,
    dosage: category === "prescription" ? "As directed by your physician." : "As specified on pack instructions.",
    sideEffects: "Consult a pharmacist if symptoms persist or any reactions develop.",
    storage: "Store below 25°C in a cool, dry place away from sunlight.",
  };
});
