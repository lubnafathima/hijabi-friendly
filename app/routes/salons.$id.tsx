import { Link } from "react-router";
import type { Route } from "./+types/salons.$id";
import { SiteFooter, SiteNav } from "~/components/site-shell";
import { findSalon, salons } from "~/data/salons";

export function loader({ params }: Route.LoaderArgs) {
  const salon = findSalon(params.id || "");
  if (!salon) throw new Response("Not Found", { status: 404 });
  return { salon };
}

export default function SalonDetail({ loaderData }: Route.ComponentProps) {
  const { salon } = loaderData;
  const related = salons.filter((s) => s.id !== salon.id).slice(0, 3);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${salon.name} ${salon.address}`)}`;

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#3D2B1F]">
      <SiteNav />
      <section className="relative h-[360px] text-white overflow-hidden">
        <img src={salon.heroImage || salon.image} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <Link to="/salons" className="inline-flex bg-white text-[#3D2B1F] px-4 py-2 rounded-full text-sm">← All Salons</Link>
          <div className="mt-28"><h1 className="font-['Playfair_Display',serif] text-6xl">{salon.name}</h1><p>◉ {salon.neighborhood}, {salon.borough} ⭐ {salon.rating} ({salon.reviews} reviews) {salon.price}</p></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div><h2 className="font-['Playfair_Display',serif] text-4xl mb-2">About</h2><p className="text-[#7B5B3A]">{salon.about}</p></div>
          <div><h3 className="font-['Playfair_Display',serif] text-4xl mb-2">Highlights</h3><div className="grid md:grid-cols-2 gap-2">{salon.highlights.map((h)=><div key={h} className="bg-[#F4EDE3] p-3 rounded-lg">◌ {h}</div>)}</div></div>
          <div><h3 className="font-['Playfair_Display',serif] text-4xl mb-2">Services</h3><div className="flex flex-wrap gap-2">{salon.services.map((s)=><span key={s} className="bg-white border rounded-full px-3 py-1 text-sm">{s}</span>)}</div></div>
          <div><h3 className="font-['Playfair_Display',serif] text-4xl mb-2">Privacy Features</h3><div className="bg-white border rounded-xl p-4 space-y-2">{salon.tags.map((t)=><p key={t}>◎ {t}</p>)}</div></div>
          <div><div className="flex justify-between"><h3 className="font-['Playfair_Display',serif] text-4xl mb-2">Location</h3><a href={mapUrl} target="_blank" rel="noreferrer" className="text-[#7B5B3A]">Get directions ↗</a></div><img src="https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=900&height=320&center=lonlat:-73.963,40.68&zoom=11&apiKey=demo" className="rounded-xl border w-full h-60 object-cover" /><p className="text-sm text-[#7B5B3A] mt-2">◉ {salon.address}</p></div>
          <div><h3 className="font-['Playfair_Display',serif] text-4xl mb-3">Reviews ({salon.reviews})</h3><div className="space-y-3">{["Fatima S.","Yasmin R.","Nadia T."].map((n,i)=><div key={n} className="bg-white border rounded-xl p-4"><div className="flex justify-between"><p className="font-semibold">{n}</p><p>{"★★★★★".slice(0,5-i)}</p></div><p className="text-[#7B5B3A] text-sm mt-2">"Best experience I've ever had. The curtained area made me feel completely at ease."</p></div>)}</div></div>
        </div>

        <aside className="space-y-4">
          <div className="bg-white border rounded-xl p-5"><p className="text-xs text-[#8B7355]">HOURS</p><p className="font-semibold mb-3">{salon.hours}</p><p className="text-xs text-[#8B7355]">PHONE</p><p className="font-semibold mb-3">{salon.phone}</p><p className="text-xs text-[#8B7355]">ADDRESS</p><p className="font-semibold">{salon.address}</p><a href={mapUrl} target="_blank" rel="noreferrer" className="block bg-[#3D2B1F] text-white text-center py-3 rounded-xl mt-4">◉ Get Directions</a><a href={`tel:${salon.phone}`} className="block border text-center py-3 rounded-xl mt-2">☏ Call Salon</a></div>
          <div className="bg-[#F4EDE3] border rounded-xl p-4">🛡 Verified Hijab-Friendly</div>
        </aside>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-[#E3D8CC]">
        <h3 className="font-['Playfair_Display',serif] text-5xl mb-4">You might also like</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {related.map((s) => (
            <Link key={s.id} to={`/salons/${s.id}`} className="bg-white border rounded-xl overflow-hidden">
              <img src={s.image} className="w-full h-36 object-cover" />
              <div className="p-3"><p className="font-['Playfair_Display',serif] text-3xl">{s.name}</p><p className="text-sm text-[#8B7355]">◉ {s.neighborhood}, {s.borough}</p></div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
