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
    <div className="bg-[#FAF8F5] min-h-screen">
      <SiteNav />
      <section className="relative h-[360px] text-white">
        <img src={salon.heroImage || salon.image} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
          <Link to="/salons" className="text-sm">← All Salons</Link>
          <h1 className="font-['Playfair_Display',serif] text-6xl mt-3">{salon.name}</h1>
          <p>{salon.neighborhood}, {salon.borough} · ⭐ {salon.rating} ({salon.reviews}) · {salon.price}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="font-['Playfair_Display',serif] text-4xl mb-2">About</h2>
            <p className="text-[#7B5B3A]">{salon.about}</p>
          </div>
          <div>
            <h3 className="font-['Playfair_Display',serif] text-3xl mb-2">Highlights</h3>
            <div className="grid md:grid-cols-2 gap-2">{salon.highlights.map((h)=><div key={h} className="bg-[#F4EDE3] p-3 rounded-lg">{h}</div>)}</div>
          </div>
          <div>
            <h3 className="font-['Playfair_Display',serif] text-3xl mb-2">Services</h3>
            <div className="flex flex-wrap gap-2">{salon.services.map((s)=><span key={s} className="bg-white border rounded-full px-3 py-1 text-sm">{s}</span>)}</div>
          </div>
        </div>
        <aside className="bg-white border rounded-xl p-5 h-fit">
          <p className="text-sm mb-2"><b>HOURS</b><br />{salon.hours}</p>
          <p className="text-sm mb-2"><b>PHONE</b><br />{salon.phone}</p>
          <p className="text-sm mb-4"><b>ADDRESS</b><br />{salon.address}</p>
          <a href={mapUrl} target="_blank" rel="noreferrer" className="block bg-[#3D2B1F] text-white text-center py-3 rounded-xl mb-2">Get Directions</a>
          <a href={`tel:${salon.phone}`} className="block border text-center py-3 rounded-xl">Call Salon</a>
        </aside>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h3 className="font-['Playfair_Display',serif] text-4xl mb-4">You might also like</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {related.map((s) => (
            <Link key={s.id} to={`/salons/${s.id}`} className="bg-white border rounded-xl overflow-hidden">
              <img src={s.image} className="w-full h-36 object-cover" />
              <div className="p-3"><p className="font-['Playfair_Display',serif] text-3xl">{s.name}</p></div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
