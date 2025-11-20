import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Data Scientist & Affärskonsult",
    company: "TechNova",
    type: "Heltid",
    period: "Jun 2021 - Nuvarande",
    location: "Phoenix, Arizona, USA",
    description: "Demonstrerar en sömlös integration av datavetenskap och affärskonsultation, driver effektivt transformativa initiativ och levererar strategiska insikter för att optimera organisatorisk prestanda och underlätta informerat beslutsfattande."
  },
  {
    title: "Dataanalytiker & Affärsstrateg",
    company: "SwiftEdge",
    type: "Kontrakt",
    period: "Okt 2017 - Maj 2021",
    location: "Dallas, Texas, USA",
    description: "Kombinerar skickligt dataanalys med strategisk affärsförståelse, navigerar komplexa datamängder för att informera strategiska beslut och driva organisatorisk tillväxt."
  },
  {
    title: "Analysspecialist & Affärsrådgivare",
    company: "NexusWorks",
    type: "Heltid",
    period: "Jan 2016 - Sep 2017",
    location: "Houston, Texas, USA",
    description: "Utnyttjar specialiserad analysexpertis tillsammans med strategisk rådgivning, ger handlingsbara insikter och vägledning för att optimera affärsresultat och uppnå strategiska mål."
  },
  {
    title: "Affärskonsult & Analysexpert",
    company: "ProActive",
    type: "Praktik",
    period: "Aug 2014 - Jan 2016",
    location: "Newark, New Jersey, USA",
    description: "Integrerar sömlöst affärskonsultation med avancerad analys, levererar skräddarsydda lösningar och handlingsbara insikter för att driva organisatorisk framgång och förbättra strategiska beslutsprocesser."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-3 md:py-4 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="mb-12">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gray-50 shadow-sm border border-gray-100 mb-6 text-gray-900">
                    <Briefcase className="h-6 w-6" />
                </div>
                <h2 className="text-[21px] font-bold text-gray-900 mb-4">Arbetserfarenhet</h2>
                <p className="text-gray-600 text-[14px]">Bevisad erfarenhet inom datavetenskap och affärskonsultation, med leverans av effektfulla insikter och resultat över branscher.</p>
            </div>

            <div className="relative space-y-12">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gray-100 hidden md:block"></div>

                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-0 md:pl-16">
                        {/* Dot on timeline */}
                        <div className="absolute left-[15px] top-1.5 h-2.5 w-2.5 rounded-full bg-gray-200 ring-4 ring-white hidden md:block"></div>
                        
                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] mt-1">
                                    <span className="font-medium text-gray-900">{exp.company}</span>
                                    <span className="text-gray-300 hidden sm:inline">•</span>
                                    <span className="text-gray-500">{exp.type}</span>
                                    <span className="text-gray-300 hidden sm:inline">•</span>
                                    <span className="text-gray-500">{exp.location}</span>
                                </div>
                            </div>
                            <span className="text-[14px] font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full border border-gray-100 w-fit whitespace-nowrap mt-2 md:mt-0">
                                {exp.period}
                            </span>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed text-[14px]">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
