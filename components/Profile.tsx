import { MapPin, User } from "lucide-react";

export function Profile() {
  return (
    <section id="profile" className="py-3 md:py-4 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="grid md:grid-cols-[262px_1fr] gap-6 items-stretch h-auto md:h-[371px]">
          {/* Image Card */}
          <div className="relative rounded-3xl overflow-hidden bg-gray-100 w-full h-[371px] md:h-full">
            <img 
              src="/matthias957.github.io/matthias.webp" 
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
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Erfaren Digital Marketing Specialist med bevisad meritlista av att använda avancerad analys för att driva strategiskt beslutsfattande och optimera affärsprocesser. Demonstrerad expertis i att utveckla innovativa lösningar på komplexa problem, kombinerat med exceptionell kommunikationsförmåga för att effektivt förmedla insikter till intressenter på alla nivåer.
            </p>
            
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
