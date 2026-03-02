import { Link } from "react-router";
import { SiteFooter, SiteNav } from "~/components/site-shell";

export default function Guidelines() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      <SiteNav />
      <section className="bg-[#3D2B1F] text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <Link to="/" className="text-sm">← Back to home</Link>
          <h1 className="font-['Playfair_Display',serif] text-6xl mt-3">Salon Requirements</h1>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="font-['Playfair_Display',serif] text-5xl mb-6">Listing requirements at a glance</h2>
        <div className="space-y-3">
          <div className="bg-white border rounded-xl p-5">Private or semi-private spaces</div>
          <div className="bg-white border rounded-xl p-5">Female-only staff during services</div>
          <div className="bg-white border rounded-xl p-5">No visibility from outside</div>
        </div>
        <div className="mt-8 p-6 bg-[#8B7C6E] text-white rounded-2xl">Get the full salon readiness guide</div>
        <div className="mt-8 text-center"><Link to="/add-listing" className="bg-[#3D2B1F] text-white px-8 py-3 rounded-full inline-block">List your salon now →</Link></div>
      </section>
      <SiteFooter />
    </div>
  );
}
