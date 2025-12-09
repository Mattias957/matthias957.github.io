import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Generera statiska parametrar för alla blogginlägg (SSG)
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
              <p className="text-lg text-gray-500 font-medium">{post.excerpt}</p>
            </div>

            {/* Main Content */}
            <div 
              className="prose prose-gray max-w-none prose-headings:font-bold prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
