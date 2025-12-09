import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/lib/data";
import Link from "next/link";
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react";

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="bg-[#F9F9F9] min-h-screen font-sans antialiased">
      <Header />
      
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tillbaka till startsidan
            </Link>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Blogg</h1>
                <p className="text-gray-600 text-[14px]">
                  Tankar, insikter och erfarenheter inom digital marknadsföring, SEO och webbutveckling.
                </p>
              </div>

              {sortedPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">Inga blogginlägg ännu. Kom tillbaka snart!</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {sortedPosts.map((post) => (
                    <article 
                      key={post.slug} 
                      className="border-b border-gray-100 pb-8 last:border-0 last:pb-0"
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {post.category && (
                          <span className="px-3 py-1 rounded-full bg-gray-50 text-xs font-bold text-gray-600 border border-gray-100 uppercase tracking-wider">
                            {post.category}
                          </span>
                        )}
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("sv-SE", {
                              year: "numeric",
                              month: "long",
                              day: "numeric"
                            })}
                          </time>
                        </div>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        <Link 
                          href={`/blogg/${post.slug}/`}
                          className="hover:text-gray-600 transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-600 mb-4 text-[14px] leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="px-2 py-1 rounded text-xs text-gray-500 bg-gray-50 border border-gray-100"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <Link 
                        href={`/blogg/${post.slug}/`}
                        className="inline-flex items-center text-[14px] font-medium text-gray-900 hover:text-gray-600 transition-colors"
                      >
                        Läs mer
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
