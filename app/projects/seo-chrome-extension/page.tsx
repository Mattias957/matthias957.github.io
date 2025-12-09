import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Github } from "lucide-react";
import Link from "next/link";

export default function SeoProjectPage() {
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
                  Chrome Plugin
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Matthias SEO Plugin</h1>
              
              <a 
                href="https://github.com/Mattias957/chrome-seo-plugin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800"
              >
                <Github className="mr-2 h-4 w-4" />
                Visa på GitHub
              </a>
            </div>

            {/* Main Content */}
            <div className="prose prose-gray max-w-none prose-headings:font-bold prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6">
              <p className="mb-8">Matthias SEO Plugin är ett kraftfullt Chrome-tillägg för lokal SEO-analys, webbutveckling och design. Det analyserar valfri webbsida och ger insikter om SEO, bilder, typografi, färger och länkar – helt utan extern datainsamling. Ett komplett, snabbt och privat allt-i-ett-verktyg.</p>
      
              <div className="my-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                <img 
                  src="/chromeplugin2.webp" 
                  alt="Screenshot av Matthias SEO Plugin" 
                  className="w-full h-auto block"
                />
              </div>

              <h3 className="text-xl font-bold mb-3">Nyckelfunktioner</h3>
              
              <h4 className="text-lg font-semibold mb-2">1. Bildnedladdare & Analys</h4>
              <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-600">
                <li>Skannar och visar alla bilder i ett rutnät.</li>
                <li>Batch-nedladdning eller välj enskilda bilder.</li>
                <li>Visar bildstorlekar och varnar för saknade alt-texter.</li>
                <li>Smart exportfunktion som sparar i mappar per domän.</li>
              </ul>

              <h4 className="text-lg font-semibold mb-2">2. Avancerad SEO-Analys</h4>
              <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-600">
                <li><strong>Meta-information:</strong> Titel, beskrivning, canonical URL, Open Graph.</li>
                <li><strong>Innehållsanalys:</strong> Räknar ord, stycken och tecken med längd-varningar.</li>
                <li><strong>Heading-struktur:</strong> Unik visualisering med indenterade rubriker (H1-H6) och färgkodade badges för att upptäcka strukturfel.</li>
                <li><strong>Strukturerad data:</strong> Visar JSON-LD, Microdata, Open Graph och validerar schema markup.</li>
                <li><strong>Snabblänkar:</strong> Direkt tillgång till sitemap.xml och robots.txt.</li>
              </ul>

              <h4 className="text-lg font-semibold mb-2">3. Länkanalys</h4>
              <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-600">
                <li>Kategoriserar länkar: Interna, Externa, Nofollow, Tel, Mailto.</li>
                <li>Filterfunktioner för att snabbt hitta specifika länktyper.</li>
                <li>Visar ankartext och destination för varje länk.</li>
              </ul>

              <h4 className="text-lg font-semibold mb-2">4. Design & Typografi</h4>
              <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-600">
                <li><strong>Typografi:</strong> Listar alla typsnitt och storlekar med live-förhandsgranskning.</li>
                <li><strong>Färganalys:</strong> Extraherar sidans palett och inkluderar en "Color Picker" (eyedropper) för att kopiera HEX-koder direkt.</li>
                <li><strong>Modern UI:</strong> Lila gradient-tema (#667eea → #764ba2) med smidiga animationer och responsiv layout.</li>
              </ul>

              <h3 className="text-xl font-bold mb-3">Teknisk Specifikation</h3>
              <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-600">
                <li><strong>Version:</strong> Manifest V3 (senaste standarden).</li>
                <li><strong>Teknik:</strong> Vanilla JavaScript (inga tunga ramverk), HTML5, CSS3.</li>
                <li><strong>Storlek:</strong> &lt; 100KB (blixtsnabb prestanda).</li>
                <li><strong>Integritet:</strong> 100% lokal analys. Ingen data skickas till servrar, ingen tracking, inget konto krävs.</li>
              </ul>

              <div className="mt-8">
                <a href="https://github.com/Mattias957/chrome-seo-plugin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800">
                  <Github className="mr-2 h-4 w-4" />
                  Visa på GitHub
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

