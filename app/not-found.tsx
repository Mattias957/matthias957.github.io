import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-[#F9F9F9] min-h-screen font-sans antialiased">
      <Header />
      
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sidan kunde inte hittas</h2>
            <p className="text-gray-600 mb-8">
              Sidan du letar efter finns tyvärr inte eller har flyttats.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800"
              >
                <Home className="mr-2 h-4 w-4" />
                Tillbaka till startsidan
              </Link>
              <Link
                href="/blogg/"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-200 bg-white px-8 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-50"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Gå till bloggen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

