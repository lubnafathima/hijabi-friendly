import { Link, useSearchParams } from "react-router";
import { SiteFooter, SiteNav } from "~/components/site-shell";
import { filterSalons } from "~/data/salons";

export default function SalonsPage() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";
  const showFilters = params.get("filters") === "1";
  const list = filterSalons(q);

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      <SiteNav />
      <section className="bg-[#3D2B1F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-['Playfair_Display',serif] text-5xl mb-3">Hijab-Friendly Salons in NYC</h1>
          <div className="flex gap-2 max-w-2xl">
            <input value={q} onChange={(e)=>setParams({q:e.target.value, ...(showFilters?{filters:'1'}:{})})} placeholder="Search by name, neighborhood, or service..." className="flex-1 rounded-xl px-4 py-3 text-[#3D2B1F]" />
            <button onClick={()=>setParams({q, filters: showFilters?"0":"1"})} className="bg-[#8E6B48] px-5 rounded-xl">Filters</button>
          </div>
        </div>
      </section>

      {showFilters && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-[#7B5B3A]">Filter panel open (as requested).</div>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-[#7B5B3A] mb-4">Showing {list.length} verified salons in NYC</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((salon) => (
            <Link key={salon.id} to={`/salons/${salon.id}`} className="bg-white border border-[#EDE2D8] rounded-xl overflow-hidden">
              <img src={salon.image} alt={salon.name} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="font-['Playfair_Display',serif] text-3xl">{salon.name}</h3>
                <p className="text-sm text-[#8B7355] mb-1">{salon.neighborhood}, {salon.borough}</p>
                <p className="text-xs text-[#8B7355]">{salon.hours} · {salon.reviews} reviews</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white rounded-2xl border border-[#EDE2D8] p-6">
          <div className="flex justify-between">
            <h2 className="font-['Playfair_Display',serif] text-4xl">Find hijab-friendly salons on Google Maps</h2>
            <a href="https://www.google.com/maps/search/hijab+friendly+salons+NYC" target="_blank" rel="noreferrer" className="text-[#7B5B3A]">Open full map ↗</a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-[#F4EDE3] rounded-2xl p-6 flex gap-3">
          <Link to="/add-listing" className="bg-[#3D2B1F] text-white px-8 py-3 rounded-full">List Your Salon</Link>
          <Link to="/guidelines" className="border border-[#C8B9A6] px-8 py-3 rounded-full">Learn Requirements</Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
