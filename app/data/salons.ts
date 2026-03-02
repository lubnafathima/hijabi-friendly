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
  { id:"1", name:"Noor Beauty Lounge", neighborhood:"Bay Ridge", borough:"Brooklyn", rating:4.9, reviews:127, price:"$$", phone:"(718) 555-0101", hours:"Mon-Sat 10am-8pm", address:"8412 5th Ave, Brooklyn, NY 11209", image:"https://images.unsplash.com/photo-1697604758668-153049f4abab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", heroImage:"https://images.unsplash.com/photo-1697604758668-153049f4abab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920", tags:["Private Room","Female Staff Only"], services:["Haircut & Styling","Bridal Makeup","Facials"], about:"A fully private salon experience in the heart of Bay Ridge. Noor Beauty Lounge offers dedicated private rooms and women-only staff.", highlights:["Private suites","Female-only team","Calm waiting area","Verified by community"]},
  { id:"2", name:"Amal Hair Studio", neighborhood:"Astoria", borough:"Queens", rating:4.8, reviews:89, price:"$$", phone:"(718) 555-0202", hours:"Tue-Sat 10am-7pm", address:"31-15 Steinway St, Astoria, NY 11103", image:"https://images.unsplash.com/photo-1742196530221-0df5c43baca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", heroImage:"https://images.unsplash.com/photo-1742196530221-0df5c43baca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920", tags:["Private Room","Curtained Area","Appointments Only"], services:["Hair Coloring","Keratin Treatment","Blowout"], about:"Tucked away on Steinway Street, Amal Hair Studio specializes in hair care treatments in a fully private setting. Curtained stations and a warm, welcoming atmosphere.", highlights:["Curtained individual stations","Specialized color treatments","Quiet, relaxing ambiance","Appointments-only for guaranteed privacy"]},
  { id:"3", name:"Safa Glow Spa", neighborhood:"Jackson Heights", borough:"Queens", rating:4.7, reviews:64, price:"$$$", phone:"(718) 555-0303", hours:"Mon-Sat 9am-7pm", address:"74-02 37th Ave, Queens, NY 11372", image:"https://images.unsplash.com/photo-1630595633877-9918ee257288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", tags:["Female Staff Only","Private Room"], services:["Facials","Waxing","Body Scrub"], about:"A spa sanctuary designed for hijabi women. All treatments happen in fully enclosed private rooms.", highlights:["Women-only access","Private rooms","Premium halal products","Low-noise environment"]},
  { id:"4", name:"Barakah Beauty Bar", neighborhood:"Flatbush", borough:"Brooklyn", rating:4.9, reviews:102, price:"$$", phone:"(718) 555-0404", hours:"Mon-Sat 9am-8pm", address:"1463 Flatbush Ave, Brooklyn, NY 11210", image:"https://images.unsplash.com/photo-1599387737838-660b75526801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", tags:["Female Staff Only","Walk-ins Welcome"], services:["Haircut & Styling","Braiding","Makeup"], about:"Community favorite in Flatbush known for its welcoming vibe and skilled stylists.", highlights:["Walk-ins welcome","Private changing area","Family-friendly"]},
  { id:"5", name:"Ilaya Skincare Studio", neighborhood:"Midwood", borough:"Brooklyn", rating:4.6, reviews:51, price:"$$$", phone:"(718) 555-0505", hours:"Tue-Sat 10am-6pm", address:"1824 Coney Island Ave, Brooklyn, NY 11230", image:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", tags:["Curtained Area","Female Staff Only"], services:["Facials","Chemical Peels","Microdermabrasion"], about:"A skincare focused studio run by women, for women.", highlights:["Specialized skin treatments","Private consults"]},
  { id:"6", name:"Zahra's Hair House", neighborhood:"Kensington", borough:"Brooklyn", rating:4.8, reviews:73, price:"$", phone:"(718) 555-0606", hours:"Mon-Sat 10am-7pm", address:"221 Church Ave, Brooklyn, NY 11218", image:"https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", tags:["Private Room","Female Staff Only"], services:["Haircut","Hair Treatment","Blowout"], about:"Neighborhood gem in Kensington serving hijabi women for over 8 years.", highlights:["Trusted local team","Quiet stations"]},
  { id:"7", name:"Tala Beauty Collective", neighborhood:"Sunset Park", borough:"Brooklyn", rating:4.7, reviews:45, price:"$$$", phone:"(718) 555-0707", hours:"Wed-Sun 11am-7pm", address:"542 5th Ave, Brooklyn, NY 11215", image:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", tags:["Private Room","Halal Products"], services:["Makeup","Bridal Packages","Lash Lift"], about:"Women-run beauty collective focused on bridal and event makeup.", highlights:["Halal-certified options","Private consultation rooms"]},
  { id:"8", name:"Misk Wellness Salon", neighborhood:"Jamaica", borough:"Queens", rating:4.5, reviews:38, price:"$", phone:"(718) 555-0808", hours:"Mon-Sat 10am-6pm", address:"162-20 Jamaica Ave, Queens, NY 11432", image:"https://images.unsplash.com/photo-1607779097040-26e80aa78e66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", tags:["Female Staff Only","Curtained Area"], services:["Nails","Waxing","Threading"], about:"Full-service nail and beauty salon with curtained stations.", highlights:["Affordable services","Friendly female staff"]},
];

export const featureTags = ["Private Room", "Female Staff Only", "Walk-ins Welcome", "Curtained Area", "Appointments Only", "Halal Products"];

export function findSalon(id: string) { return salons.find((s) => s.id === id); }

export function filterSalons(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return salons;
  return salons.filter((s) => [s.name,s.neighborhood,s.borough,...s.services,...s.tags].join(" ").toLowerCase().includes(q));
}
