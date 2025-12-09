import { Mail, Linkedin, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-40 pb-4 md:pt-32 md:pb-6 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 border border-green-100 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Tillgänglig för uppdrag
        </div>
        
        <h1 className="text-4xl md:text-[48px] font-bold tracking-tight text-gray-900 mb-6 leading-tight">
          Matthias Moreillon
        </h1>
        
        <p className="text-lg md:text-[18px] text-gray-600 mb-10 max-w-2xl mx-auto">
          Digital Marketing Specialist
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="mailto:Matthiasmoreillon@gmail.com"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 w-full sm:w-48"
          >
            <Mail className="mr-2 h-4 w-4" />
            Skicka E-post
          </a>
          <a
            href="https://www.linkedin.com/in/matthias-moreillon/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-200 bg-white px-8 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 w-full sm:w-48"
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

