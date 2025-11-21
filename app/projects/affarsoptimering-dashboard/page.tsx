import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SeoDashProjectPage() {
  const content = `
    <h2 class="text-2xl font-bold text-gray-900 mb-8">SEO Dash — Case Study</h2>
    
    <h3 class="text-xl font-bold text-gray-900 mb-4">Problem</h3>
    <p class="mb-6 text-gray-600 leading-relaxed">När jag arbetade med flera webbplatser samtidigt upplevde jag att Google Search Console var för långsamt och rörigt när man behövde en snabb överblick. Det tog tid att växla mellan projekt, hitta rätt rapporter och förstå vad som faktiskt hade förändrats.</p>
    <p class="mb-6 text-gray-600 leading-relaxed">För att jobba effektivt med SEO behövde jag:</p>
    <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-600">
      <li>snabbare insikter</li>
      <li>tydligare visualisering</li>
      <li>en dashboard som fokuserade på det som faktiskt betyder något</li>
      <li>mindre manuellt arbete och färre upprepade analyser</li>
      <li>bättre rapportering som inte behövde skapas från grunden varje gång</li>
    </ul>
    <p class="mb-8 text-gray-600 leading-relaxed">Kort sagt: Jag saknade ett verktyg som gav mig snabb klarhet — och sparade tid.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mb-4">Lösning</h3>
    <p class="mb-6 text-gray-600 leading-relaxed">Jag byggde SEO Dash – ett eget SEO-verktyg utvecklat i Next.js, React och Tailwind, integrerat direkt mot Google Search Console API och Google Analytics.</p>
    <p class="mb-6 text-gray-600 leading-relaxed">SEO Dash hämtar och cachear data lokalt, visualiserar den tydligt och gör det enkelt att förstå utvecklingen på varje webbplats.</p>
    <p class="mb-6 text-gray-600 leading-relaxed">Utöver SEO-dashboards erbjuder SEO Dash även rapportering och händelsespårning, vilket gör den betydligt kraftfullare än en vanlig GSC-visning.</p>
    
    <h4 class="text-lg font-semibold text-gray-900 mb-4">Nyckelfunktioner i SEO Dash</h4>
    <ul class="list-disc pl-5 mb-8 space-y-2 text-gray-600">
      <li>Översiktsdashboard med klick, visningar, CTR och position</li>
      <li>Grafer och tabeller för sökord, landningssidor och långsiktiga trender</li>
      <li>Automatisk identifiering av tapp, möjligheter och förbättringsområden</li>
      <li>Indexeringsstatus med tydliga listor över sidor som kräver åtgärd</li>
      <li>Stöd för flera webbplatser samtidigt</li>
      <li>SEO-rapporter som kan exporteras för kunder eller interna projekt</li>
      <li>Schemalagda månadsrapporter som skickas automatiskt</li>
      <li>Google Analytics-integration med egna custom events</li>
      <li>Möjlighet att spåra samtal, formulär, klick och egna konverteringar direkt i plattformen</li>
    </ul>
    <p class="mb-8 text-gray-600 leading-relaxed">SEO Dash är byggt för att lösa verkliga problem: göra SEO-analys snabb, tydlig och komplett — inklusive den rapportering som normalt tar mest tid.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mb-4">Resultat</h3>
    <p class="mb-6 text-gray-600 leading-relaxed">Med SEO Dash kan jag nu:</p>
    <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-600">
      <li>analysera flera webbplatser på sekunder istället för minuter</li>
      <li>upptäcka trender och problem innan de påverkar trafiken</li>
      <li>ta bättre beslut tack vare visuellt tydlig data</li>
      <li>slippa manuella rapporter tack vare automatiserade månadsrapporter</li>
      <li>se alla viktiga händelser (samtal, formulär, klick) i ett och samma verktyg</li>
      <li>arbeta mer datadrivet utan att drunkna i olika dashboards</li>
      <li>spara tid varje dag i både kundprojekt och egna projekt</li>
    </ul>
    <p class="mb-4 text-gray-600 leading-relaxed font-semibold">Slutresultatet:</p>
    <p class="mb-8 text-gray-600 leading-relaxed">SEO-arbetet har blivit snabbare, tydligare och mer komplett — exakt det verktyg jag själv saknade men nu använder dagligen.</p>
    
    <div class="my-10 space-y-6">
      <div class="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
        <img 
          src="/seodash5.png" 
          alt="SEO Dash Features Screenshot" 
          class="w-full h-auto block"
        />
      </div>
      <div class="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
        <img 
          src="/seodash2.png" 
          alt="SEO Dash Dashboard Screenshot" 
          class="w-full h-auto block"
        />
      </div>
      <div class="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
        <img 
          src="/seodash3.png" 
          alt="SEO Dash Analytics Screenshot" 
          class="w-full h-auto block"
        />
      </div>
      <div class="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
        <img 
          src="/seodash4.png" 
          alt="SEO Dash Reports Screenshot" 
          class="w-full h-auto block"
        />
      </div>
      <div class="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
        <img 
          src="/seodash5.png" 
          alt="SEO Dash Features Screenshot" 
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SEO Dash - SEO overview verktyg</h1>
              <p className="text-lg text-gray-500 font-medium">Fullstack Utvecklare</p>
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

