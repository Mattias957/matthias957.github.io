import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WebDesignProjectPage() {
  const content = `
    <p class="mb-6 text-gray-600 leading-relaxed">Jag tog fram en ny hemsida för Stadsrum Bygg & Entreprenad AB, ett byggföretag i Göteborg som arbetar med renoveringar, tillbyggnader och lokalanpassningar. Målet var att skapa en modern och tydlig webbplats som bättre representerar deras hantverk och gör det enkelt för kunder att förstå deras tjänster.</p>
    
    <p class="mb-8 text-gray-600 leading-relaxed">Designen fokuserar på enkelhet, tydlig struktur och en professionell känsla. Jag lyfte fram deras tjänster, projekt och kontaktvägar på ett sätt som känns luftigt och lättnavigerat, både på dator och mobil. Resultatet är en hemsida som ger företaget en starkare digital närvaro och gör det enklare för besökare att ta nästa steg.</p>
    
    <p class="mb-6 text-gray-600 leading-relaxed">Responsiv design – fullt mobilanpassad för en smidig upplevelse på alla enheter.</p>
    
    <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-600">
      <li>GDPR-säker – korrekt hantering av formulär, cookies och integritetspolicy.</li>
      <li>SEO-optimerad struktur – korrekt rubrikhierarki, laddhastighet och teknisk grundoptimering.</li>
      <li>Snabb laddtid – optimerade bilder, caching och prestandaförbättringar.</li>
      <li>Tydlig och modern UI/UX-design – fokus på enkel navigation och tydliga kontaktvägar.</li>
    </ul>
    
    <div class="my-10 space-y-6">
      <div class="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
        <img 
          src="/webdesign2.png" 
          alt="Webbdesign för byggbolag - Screenshot 2" 
          class="w-full h-auto block"
        />
      </div>
      <div class="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
        <img 
          src="/webdesign1.png" 
          alt="Webbdesign för byggbolag - Screenshot 1" 
          class="w-full h-auto block"
        />
      </div>
    </div>
  `;

  return (
    <main className="bg-[#F9F9F9] min-h-screen font-sans antialiased">
      <Header />
      
      {/* Content Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/#projects" 
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tillbaka till startsidan
            </Link>
          </div>

          {/* Project Content Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            
            {/* Header */}
            <div className="mb-8 border-b border-gray-100 pb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-gray-50 text-xs font-bold text-gray-600 border border-gray-100 uppercase tracking-wider">
                  Webbutveckling
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Webbdesign för byggbolag i Göteborg</h1>
              <p className="text-lg text-gray-500 font-medium">Webbutvecklare & Designer</p>
            </div>

            {/* Main Content */}
            <div 
              className="prose prose-gray max-w-none prose-headings:font-bold prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6"
              dangerouslySetInnerHTML={{ __html: content }} 
            />

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

