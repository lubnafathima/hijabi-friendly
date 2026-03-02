export type Salon = {
  id: string;
  name: string;
  neighborhood: string;
  borough: string;
  rating: number;
  reviews: number;
  price: "$" | "$$" | "$$$";
  phone: string;
  hours: string;
  address: string;
  image: string;
  heroImage?: string;
  tags: string[];
  services: string[];
  about: string;
  highlights: string[];
};

export const salons: Salon[] = [
  {
    id: "1",
    name: "Noor Beauty Lounge",
    neighborhood: "Bay Ridge",
    borough: "Brooklyn",
    rating: 4.9,
    reviews: 127,
    price: "$$",
    phone: "(718) 555-0101",
    hours: "Mon-Sat 10am-8pm",
    address: "8412 5th Ave, Brooklyn, NY 11209",
    image: "https://images.unsplash.com/photo-1697604758668-153049f4abab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    heroImage: "https://images.unsplash.com/photo-1697604758668-153049f4abab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    tags: ["Private Room", "Female Staff Only"],
    services: ["Haircut & Styling", "Bridal Makeup", "Facials"],
    about: "A fully private salon experience in the heart of Bay Ridge with dedicated female staff.",
    highlights: ["Private suites", "Female-only team", "Calm waiting area"],
  },
  {
    id: "2",
    name: "Amal Hair Studio",
    neighborhood: "Astoria",
    borough: "Queens",
    rating: 4.8,
    reviews: 89,
    price: "$$",
    phone: "(718) 555-0202",
    hours: "Tue-Sat 10am-7pm",
    address: "31-15 Steinway St, Astoria, NY 11103",
    image: "https://images.unsplash.com/photo-1742196530221-0df5c43baca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    heroImage: "https://images.unsplash.com/photo-1742196530221-0df5c43baca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    tags: ["Private Room", "Curtained Area", "Appointments Only"],
    services: ["Hair Coloring", "Keratin Treatment", "Blowout"],
    about: "Tucked away on Steinway Street, Amal Hair Studio specializes in hair care treatments in a fully private setting.",
    highlights: ["Curtained individual stations", "Specialized color treatments", "Quiet ambiance"],
  },
  {
    id: "3",
    name: "Safa Glow Spa",
    neighborhood: "Jackson Heights",
    borough: "Queens",
    rating: 4.7,
    reviews: 64,
    price: "$$$",
    phone: "(718) 555-0303",
    hours: "Mon-Sat 9am-7pm",
    address: "74-02 37th Ave, Queens, NY 11372",
    image: "https://images.unsplash.com/photo-1630595633877-9918ee257288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Female Staff Only", "Private Room"],
    services: ["Facials", "Waxing", "Body Scrub"],
    about: "A spa sanctuary designed for hijabi women with private treatment rooms and women-only floor staff.",
    highlights: ["Women-only access", "Private rooms", "Premium halal products"],
  },
  {
    id: "4",
    name: "Barakah Beauty Bar",
    neighborhood: "Flatbush",
    borough: "Brooklyn",
    rating: 4.9,
    reviews: 102,
    price: "$$",
    phone: "(718) 555-0404",
    hours: "Mon-Sat 9am-8pm",
    address: "1463 Flatbush Ave, Brooklyn, NY 11210",
    image: "https://images.unsplash.com/photo-1599387737838-660b75526801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Female Staff Only", "Walk-ins Welcome"],
    services: ["Haircut & Styling", "Braiding", "Makeup"],
    about: "Community favorite in Flatbush known for welcoming service and privacy-first practices.",
    highlights: ["Walk-ins welcome", "Private changing area", "Family-friendly"],
  },
];

export function findSalon(id: string) {
  return salons.find((s) => s.id === id);
}

export function filterSalons(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return salons;
  return salons.filter((s) =>
    [s.name, s.neighborhood, s.borough, ...s.services, ...s.tags].join(" ").toLowerCase().includes(q),
  );
}
