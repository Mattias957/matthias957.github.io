import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

// Generera statiska parametrar för alla blogginlägg (SSG)
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generera metadata för varje blogginlägg
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Blogginlägg hittades inte | Matthias Moreillon",
      description: "Blogginlägg hittades inte",
    };
  }

  return {
    title: `${post.title} | Matthias Moreillon Blogg`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Matthias Moreillon"],
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "url": `https://matthiasmoreillon.se/blogg/${post.slug}/`,
    "datePublished": post.date,
    "dateModified": post.date,
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
      "@id": `https://matthiasmoreillon.se/blogg/${post.slug}/`
    },
    ...(post.category && { "articleSection": post.category }),
    ...(post.tags && post.tags.length > 0 && { "keywords": post.tags.join(", ") })
  };

  return (
    <main className="bg-[#F9F9F9] min-h-screen font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" itemProp="headline">{post.title}</h1>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 rounded text-xs text-gray-500 bg-gray-50 border border-gray-100"
                      itemProp="keywords"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Main Content */}
            <div 
              className="prose prose-gray max-w-none prose-headings:font-bold prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6 prose-ul:text-gray-600"
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            <meta itemProp="datePublished" content={post.date} />
            <meta itemProp="dateModified" content={post.date} />
            <meta itemProp="author" content="Matthias Moreillon" />
            <meta itemProp="description" content={post.excerpt} />
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
