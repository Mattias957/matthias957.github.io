// Projects list
export const projects = [
  {
    slug: "seo-chrome-extension",
    title: "Matthias SEO Plugin",
    role: "Fullstack Utvecklare",
    category: "Chrome Plugin",
    description: "Ett kraftfullt Chrome-tillägg för lokal SEO-analys, webbutveckling och design. Analyserar valfri webbsida och ger insikter om SEO, bilder, typografi och mer – helt lokalt.",
    content: `
      <p class="mb-6">Matthias SEO Plugin är ett kraftfullt Chrome-tillägg för lokal SEO-analys, webbutveckling och design. Det analyserar valfri webbsida och ger insikter om SEO, bilder, typografi, färger och länkar – helt utan extern datainsamling. Ett komplett, snabbt och privat allt-i-ett-verktyg. 🚀</p>
      
      <h3 class="text-xl font-bold mb-3">Nyckelfunktioner</h3>
      
      <h4 class="text-lg font-semibold mb-2">1. Bildnedladdare & Analys</h4>
      <ul class="list-disc pl-5 mb-6 space-y-1">
        <li>Skannar och visar alla bilder i ett rutnät.</li>
        <li>Batch-nedladdning eller välj enskilda bilder.</li>
        <li>Visar bildstorlekar och varnar för saknade alt-texter.</li>
        <li>Smart exportfunktion som sparar i mappar per domän.</li>
      </ul>

      <h4 class="text-lg font-semibold mb-2">2. Avancerad SEO-Analys</h4>
      <ul class="list-disc pl-5 mb-6 space-y-1">
        <li><strong>Meta-information:</strong> Titel, beskrivning, canonical URL, Open Graph.</li>
        <li><strong>Innehållsanalys:</strong> Räknar ord, stycken och tecken med längd-varningar.</li>
        <li><strong>Heading-struktur:</strong> Unik visualisering med indenterade rubriker (H1-H6) och färgkodade badges för att upptäcka strukturfel.</li>
        <li><strong>Strukturerad data:</strong> Visar JSON-LD, Microdata, Open Graph och validerar schema markup.</li>
        <li><strong>Snabblänkar:</strong> Direkt tillgång till sitemap.xml och robots.txt.</li>
      </ul>

      <h4 class="text-lg font-semibold mb-2">3. Länkanalys</h4>
      <ul class="list-disc pl-5 mb-6 space-y-1">
        <li>Kategoriserar länkar: Interna, Externa, Nofollow, Tel, Mailto.</li>
        <li>Filterfunktioner för att snabbt hitta specifika länktyper.</li>
        <li>Visar ankartext och destination för varje länk.</li>
      </ul>

      <h4 class="text-lg font-semibold mb-2">4. Design & Typografi</h4>
      <ul class="list-disc pl-5 mb-6 space-y-1">
        <li><strong>Typografi:</strong> Listar alla typsnitt och storlekar med live-förhandsgranskning.</li>
        <li><strong>Färganalys:</strong> Extraherar sidans palett och inkluderar en "Color Picker" (eyedropper) för att kopiera HEX-koder direkt.</li>
        <li><strong>Modern UI:</strong> Lila gradient-tema (#667eea → #764ba2) med smidiga animationer och responsiv layout.</li>
      </ul>

      <h3 class="text-xl font-bold mb-3">Teknisk Specifikation</h3>
      <ul class="list-disc pl-5 mb-6 space-y-1">
        <li><strong>Version:</strong> Manifest V3 (senaste standarden).</li>
        <li><strong>Teknik:</strong> Vanilla JavaScript (inga tunga ramverk), HTML5, CSS3.</li>
        <li><strong>Storlek:</strong> < 100KB (blixtsnabb prestanda).</li>
        <li><strong>Integritet:</strong> 100% lokal analys. Ingen data skickas till servrar, ingen tracking, inget konto krävs.</li>
      </ul>

      <div class="mt-8">
        <a href="https://github.com/Mattias957/chrome-seo-plugin" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800">
          Visa på GitHub
        </a>
      </div>
    `
  },
  {
    slug: "webp-image-converter",
    title: "WEBP Image Converter",
    role: "Python Utvecklare",
    category: "Python Script",
    description: "Ett effektivt Python-verktyg för att konvertera bilder (JPG, PNG, HEIC) till optimerat WebP-format med konfigurerbar kvalitet.",
    content: `
      <p class="mb-6">WEBP Image Converter är en enkel men kraftfull Python-applikation som hjälper utvecklare och designers att optimera sina bilder för webben. Genom att konvertera till WebP kan filstorleken minskas avsevärt utan märkbar kvalitetsförlust.</p>
      
      <h3 class="text-xl font-bold mb-3">Nyckelfunktioner</h3>
      <ul class="list-disc pl-5 mb-6 space-y-1">
        <li><strong>Formatstöd:</strong> Konverterar från JPG, PNG och HEIC till WebP.</li>
        <li><strong>Batch-konvertering:</strong> Kan bearbeta enskilda filer eller hela kataloger på en gång.</li>
        <li><strong>Konfigurerbar kvalitet:</strong> Ställ in önskad komprimeringsgrad (0-100) för att balansera storlek och kvalitet.</li>
        <li><strong>Anpassad output:</strong> Välj själv var de konverterade filerna ska sparas.</li>
      </ul>

      <h3 class="text-xl font-bold mb-3">Installation & Användning</h3>
      <p class="mb-4">Verktyget är enkelt att installera via pip och körs direkt från terminalen.</p>
      
      <div class="bg-gray-100 p-4 rounded-lg mb-6 font-mono text-sm text-gray-800">
        <p class="mb-2"># Installera dependencies</p>
        <p class="mb-4">pip install -r requirements.txt</p>
        
        <p class="mb-2"># Konvertera en bild</p>
        <p>python image_converter.py photo.jpg --quality 85</p>
      </div>

      <h3 class="text-xl font-bold mb-3">Teknisk Stack</h3>
      <p class="mb-6">Applikationen är skriven i Python och använder Pillow-biblioteket för bildbehandling. Den inkluderar även ett shell-script för enkel start på Unix-system.</p>

      <div class="mt-8">
        <a href="https://github.com/Mattias957/webp-image-converter" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800">
          Visa på GitHub
        </a>
      </div>
    `
  },
  {
    slug: "affarsoptimering-dashboard",
    title: "SEO Dash - SEO overview verktyg",
    role: "Fullstack Utvecklare",
    category: "Webbutveckling",
    description: "Ett eget SEO-dashboard som visualiserar Google Search Console-data snabbare och tydligare för lättare analys",
    content: `
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
      
      <div class="my-10 space-y-6">
        <div class="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
          <img 
            src="/seodash1.png" 
            alt="SEO Dash Overview Screenshot" 
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
      <p class="text-gray-600 leading-relaxed">SEO-arbetet har blivit snabbare, tydligare och mer komplett — exakt det verktyg jag själv saknade men nu använder dagligen.</p>
    `
  }
];
