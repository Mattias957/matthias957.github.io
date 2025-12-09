import { MapPin, User } from "lucide-react";

export function Profile() {
  return (
    <section id="profile" className="py-3 md:py-4 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="grid md:grid-cols-[262px_1fr] gap-6 items-stretch h-auto md:h-[371px]">
          {/* Image Card */}
          <div className="relative rounded-3xl overflow-hidden bg-gray-100 w-full h-[371px] md:h-full">
            <img 
              src="/matthias.webp" 
              alt="Profile" 
              className="object-cover object-top w-full h-full absolute inset-0"
            />
          </div>

          {/* Text Card */}
          <div className="flex flex-col justify-center bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm h-full">
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gray-50 shadow-sm border border-gray-100 mb-4 text-gray-900">
                <User className="h-5 w-5" />
            </div>

            <h2 className="text-[21px] font-bold text-gray-900 mb-3">Profil</h2>
            <div className="text-[14px] text-gray-600 leading-relaxed space-y-3">
              <p>
                Digital marknadsförare med fokus på SEO, webbutveckling och Google Ads.
              </p>
              <p>
                Drivs av att förstå vad som faktiskt skapar resultat och att förbättra varje del av den digitala kundresan.
              </p>
              <p>
                Med bakgrund inom både dataanalys och e-handel kombinerar jag struktur, teknik och kreativt problemlösande i allt jag gör. Jag bygger även egna verktyg med Next.js, React och Tailwind, som jag använder både i mitt arbete och i mina personliga projekt för att skapa smartare och mer effektiva lösningar.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-gray-500 mt-auto pt-4 text-[14px]">
              <MapPin className="h-4 w-4" />
              <span>Baserad i Göteborg, Sverige.</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
