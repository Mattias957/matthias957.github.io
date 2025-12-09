import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Github } from "lucide-react";
import Link from "next/link";

export default function WebpProjectPage() {
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
                  Python Script
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">WEBP Image Converter</h1>
              
              <a 
                href="https://github.com/Mattias957/webp-image-converter" 
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
              <p className="mb-6">WEBP Image Converter är en enkel men kraftfull Python-applikation som hjälper utvecklare och designers att optimera sina bilder för webben. Genom att konvertera till WebP kan filstorleken minskas avsevärt utan märkbar kvalitetsförlust.</p>
      
              <h3 className="text-xl font-bold mb-3">Nyckelfunktioner</h3>
              <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-600">
                <li><strong>Formatstöd:</strong> Konverterar från JPG, PNG och HEIC till WebP.</li>
                <li><strong>Batch-konvertering:</strong> Kan bearbeta enskilda filer eller hela kataloger på en gång.</li>
                <li><strong>Konfigurerbar kvalitet:</strong> Ställ in önskad komprimeringsgrad (0-100) för att balansera storlek och kvalitet.</li>
                <li><strong>Anpassad output:</strong> Välj själv var de konverterade filerna ska sparas.</li>
              </ul>

              <h3 className="text-xl font-bold mb-3">Installation & Användning</h3>
              <p className="mb-4">Verktyget är enkelt att installera via pip och körs direkt från terminalen.</p>
              
              <div className="bg-gray-100 p-4 rounded-lg mb-6 font-mono text-sm text-gray-800 overflow-x-auto">
                <p className="mb-2 text-gray-500"># Installera dependencies</p>
                <p className="mb-4">pip install -r requirements.txt</p>
                
                <p className="mb-2 text-gray-500"># Konvertera en bild</p>
                <p>python image_converter.py photo.jpg --quality 85</p>
              </div>

              <h3 className="text-xl font-bold mb-3">Teknisk Stack</h3>
              <p className="mb-6">Applikationen är skriven i Python och använder Pillow-biblioteket för bildbehandling. Den inkluderar även ett shell-script för enkel start på Unix-system.</p>

              <div className="mt-8">
                <a href="https://github.com/Mattias957/webp-image-converter" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800">
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

