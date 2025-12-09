import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WelcomeBlogPostPage() {
  return (
    <main className="bg-[#F9F9F9] min-h-screen font-sans antialiased">
      <Header />
      
      {/* Content Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/blogg/" 
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tillbaka till bloggen
            </Link>
          </div>

          {/* Blog Post Content Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            
            {/* Header */}
            <div className="mb-8 border-b border-gray-100 pb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Välkommen till min blogg</h1>
              <p className="text-lg text-gray-500 font-medium">Här kommer jag att dela tankar, insikter och erfarenheter inom digital marknadsföring, SEO, webbutveckling och mer.</p>
            </div>

            {/* Main Content */}
            <div 
              className="prose prose-gray max-w-none prose-headings:font-bold prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6"
              dangerouslySetInnerHTML={{ __html: `
                <p class="mb-6">Välkommen till min blogg! Jag är Matthias Moreillon, Digital Marketing Specialist baserad i Göteborg, och jag är glad att du hittat hit.</p>
                
                <p class="mb-6">På denna blogg kommer jag att dela:</p>
                
                <ul class="list-disc pl-5 mb-6 space-y-2">
                  <li>Insikter inom SEO och digital marknadsföring</li>
                  <li>Tips och tricks för webbutveckling</li>
                  <li>Erfarenheter från projekt jag arbetar med</li>
                  <li>Tankar om den digitala marknaden</li>
                  <li>Tekniska tutorials och guider</li>
                </ul>
                
                <p class="mb-6">Jag brinner för att skapa resultat och lösa problem, både för kunder och i mina egna projekt. Genom att dela mina lärdomar hoppas jag kunna hjälpa andra att växa och utvecklas.</p>
                
                <p class="mb-6">Håll utkik efter nya inlägg regelbundet. Om du har frågor eller förslag på ämnen du skulle vilja att jag skriver om, tveka inte att kontakta mig!</p>
              ` }} 
            />

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

