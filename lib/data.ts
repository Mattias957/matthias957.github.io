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
    title: "Affärsoptimering Dashboard",
    role: "Fullstack Utvecklare",
    category: "Webbutveckling",
    description: "Designade och byggde en interaktiv dashboard för realtidsuppföljning av kritiska KPI:er, integrerad med flera datakällor.",
    content: `
      <p class="mb-6">Detta projekt handlade om att ge ledningsgruppen en överblick över verksamheten i realtid.</p>
      
      <h3 class="text-xl font-bold mb-3">Teknisk Stack</h3>
      <p class="mb-6">Vi använde React för frontend och Node.js för backend. Datan visualiserades med D3.js för att skapa interaktiva och responsiva grafer.</p>
      
      <h3 class="text-xl font-bold mb-3">Implementation</h3>
      <p>Dashboarden integrerades mot Salesforce, Google Analytics och interna SQL-databaser för att samla all affärskritisk data på ett ställe.</p>
    `
  },
  {
    slug: "seo-analys-verktyg",
    title: "SEO Analys Verktyg",
    role: "Frontend Utvecklare",
    category: "Digital Marketing",
    description: "Skapade ett kraftfullt verktyg för SEO-analys som automatiskt granskar webbplatser och genererar detaljerade rapporter med förbättringsförslag.",
    content: `
      <p class="mb-6">Som Digital Marketing Specialist såg jag ett behov av ett verktyg som snabbt kunde identifiera "low hanging fruit" inom SEO.</p>
      
      <h3 class="text-xl font-bold mb-3">Funktionalitet</h3>
      <p class="mb-6">Verktyget crawlar en angiven URL och kontrollerar meta-taggar, laddningstider, bildoptimering och struktur på rubriker.</p>
      
      <h3 class="text-xl font-bold mb-3">Värde</h3>
      <p>Detta verktyg har sparat oss hundratals timmar av manuellt granskningsarbete och har hjälpt våra kunder att öka sin organiska trafik markant.</p>
    `
  }
];
