import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Välkommen till min blogg | Matthias Moreillon Blogg",
  description: "Här kommer jag att dela tankar, insikter och erfarenheter inom digital marknadsföring, SEO, webbutveckling och mer.",
  openGraph: {
    title: "Välkommen till min blogg",
    description: "Här kommer jag att dela tankar, insikter och erfarenheter inom digital marknadsföring, SEO, webbutveckling och mer.",
    type: "article",
    publishedTime: "2025-01-15",
    authors: ["Matthias Moreillon"],
    tags: ["Nyheter"],
  },
};

export default function WelcomeBlogPostPage() {
  const postDate = "2025-01-15";
  const excerpt = "Här kommer jag att dela tankar, insikter och erfarenheter inom digital marknadsföring, SEO, webbutveckling och mer.";
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Välkommen till min blogg",
    "description": excerpt,
    "url": "https://matthiasmoreillon.se/blogg/valkommen-till-min-blogg/",
    "datePublished": postDate,
    "dateModified": postDate,
    "author": {
      "@type": "Person",
      "name": "Matthias Moreillon",
      "url": "https://matthiasmoreillon.se"
    },
    "publisher": {
      "@type": "Person",
      "name": "Matthias Moreillon",
      "url": "https://matthiasmoreillon.se"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://matthiasmoreillon.se/blogg/valkommen-till-min-blogg/"
    },
    "keywords": "Nyheter"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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
            <article className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100" itemScope itemType="https://schema.org/BlogPosting">
              
              {/* Header */}
              <header className="mb-8 border-b border-gray-100 pb-8">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <time dateTime={postDate} itemProp="datePublished">
                    {new Date(postDate).toLocaleDateString("sv-SE", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}
                  </time>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" itemProp="headline">Välkommen till min blogg</h1>
                <p className="text-lg text-gray-500 font-medium" itemProp="description">{excerpt}</p>
              </header>

              {/* Main Content */}
              <div 
                className="prose prose-gray max-w-none prose-headings:font-bold prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6"
                itemProp="articleBody"
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

              <meta itemProp="dateModified" content={postDate} />
              <meta itemProp="author" content="Matthias Moreillon" />
            </article>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

