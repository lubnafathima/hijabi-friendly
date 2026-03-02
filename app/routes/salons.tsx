import { Link, useSearchParams } from "react-router";
import { SiteFooter, SiteNav } from "~/components/site-shell";
import { featureTags, filterSalons } from "~/data/salons";

export default function SalonsPage() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";
  const showFilters = params.get("filters") === "1";
  const list = filterSalons(q);

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#3D2B1F]">
      <SiteNav />
      <section className="bg-[#3D2B1F] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-['Playfair_Display',serif] text-5xl mb-2">Hijab-Friendly Salons in NYC</h1>
          <p className="text-[#D9C8B5] mb-6">Browse verified salons across New York City that offer private spaces and female-only services.</p>
          <div className="flex gap-2 max-w-2xl bg-white rounded-2xl p-1.5">
            <input value={q} onChange={(e)=>setParams({q:e.target.value, ...(showFilters?{filters:'1'}:{})})} placeholder="Search by name, neighborhood, or service..." className="flex-1 rounded-xl px-4 py-3 text-[#3D2B1F] outline-none" />
            <button onClick={()=>setParams({q, filters: showFilters?"0":"1"})} className="bg-[#8E6B48] px-5 rounded-xl text-white">⛃ Filters</button>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-[#EDE2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid md:grid-cols-2 gap-4 items-center">
          <div className="flex flex-wrap gap-2">{featureTags.map(t=><span key={t} className="px-3 py-1 rounded-full border text-xs">{t}</span>)}</div>
          <select className="border rounded-xl px-3 py-2 text-sm md:ml-auto"><option>All neighborhoods</option></select>
        </div>
      </section>

      {showFilters && <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-[#7B5B3A]">Filter panel open (as requested).</div>}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-[#7B5B3A] mb-4">◌ Showing {list.length} verified salons in NYC</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((salon) => (
            <Link key={salon.id} to={`/salons/${salon.id}`} className="bg-white border border-[#EDE2D8] rounded-xl overflow-hidden hover:-translate-y-0.5 transition-all">
              <img src={salon.image} alt={salon.name} className="w-full h-44 object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between"><h3 className="font-['Playfair_Display',serif] text-3xl">{salon.name}</h3><span className="text-xs bg-[#F4EDE3] rounded px-2 py-0.5">{salon.price}</span></div>
                <p className="text-sm text-[#8B7355] mb-2">◉ {salon.neighborhood}, {salon.borough}</p>
                <p className="text-sm text-[#8B7355] line-clamp-2">{salon.about}</p>
                <div className="mt-2 flex flex-wrap gap-1">{salon.services.slice(0,3).map(s=><span key={s} className="text-xs bg-[#F4EDE3] rounded-full px-2 py-1">{s}</span>)}</div>
                <div className="mt-3 text-xs text-[#8B7355] flex justify-between"><span>◷ {salon.hours}</span><span>{salon.reviews} reviews</span></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white rounded-2xl border border-[#EDE2D8] overflow-hidden">
          <div className="p-6 flex justify-between items-start"><div><p className="text-xs tracking-[0.14em] uppercase text-[#A18362]">Explore on map</p><h2 className="font-['Playfair_Display',serif] text-4xl">Find hijab-friendly salons on Google Maps</h2></div><a href="https://www.google.com/maps/search/hijab+friendly+salons+NYC" target="_blank" rel="noreferrer" className="text-[#7B5B3A]">Open full map ↗</a></div>
          <div className="h-72 bg-[#E2E0DD]" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-[#F4EDE3] rounded-2xl p-8 grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2"><p className="text-xs uppercase tracking-[0.14em] text-[#A18362]">For Salon Owners</p><h3 className="font-['Playfair_Display',serif] text-5xl mb-2">Your next clients are already searching for you</h3><p className="text-[#7B5B3A] mb-4">Hundreds of hijabi women in NYC are looking for salons like yours every month.</p><div className="space-y-2 text-[#7B5B3A] mb-4"><p>◉ Get found by women actively searching for hijab-friendly salons</p><p>◉ Verified badge builds trust before they even walk in</p><p>◉ Free listing, no commissions, no hidden fees</p></div><div className="flex gap-3"><Link to="/add-listing" className="bg-[#3D2B1F] text-white px-8 py-3 rounded-full">List Your Salon →</Link><Link to="/guidelines" className="border border-[#C8B9A6] px-8 py-3 rounded-full">Learn Requirements</Link></div></div>
          <div className="bg-white rounded-xl p-4 text-[#7B5B3A]"><p className="text-xs uppercase tracking-[0.14em]">By the numbers</p><p className="font-['Playfair_Display',serif] text-4xl mt-2">8</p><p>Salons listed</p><p className="font-['Playfair_Display',serif] text-4xl mt-3">500+</p><p>Monthly searches</p></div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
