import { SiteFooter, SiteNav } from "~/components/site-shell";

export default function ContactPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      <SiteNav />
      <section className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="font-['Playfair_Display',serif] text-6xl mb-4">Contact Us</h1>
        <p>Email: <a href="mailto:nusrata17@gmail.com" className="underline">nusrata17@gmail.com</a></p>
        <p>Instagram: <a href="https://www.instagram.com/nusrat.ahmd" className="underline" target="_blank" rel="noreferrer">@nusrat.ahmd</a></p>
      </section>
      <SiteFooter />
    </div>
  );
}
