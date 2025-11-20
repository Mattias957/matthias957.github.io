import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Princeton University",
    degree: "Masterexamen",
    field: "Datavetenskap",
    period: "Sep 2015 - Dec 2016"
  },
  {
    school: "Montclair State University",
    degree: "Kandidatexamen",
    field: "Artificiell Intelligens",
    period: "Sep 2011 - Jun 2015"
  }
];

export function Education() {
  return (
    <section id="education" className="py-3 md:py-4 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="mb-12">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gray-50 shadow-sm border border-gray-100 mb-6 text-gray-900">
                    <GraduationCap className="h-6 w-6" />
                </div>
                <h2 className="text-[21px] font-bold text-gray-900 mb-4">Utbildning</h2>
                <p className="text-gray-600 text-[14px]">Examina och certifieringar inom specialiserade områden av datavetenskap och affärsanalys.</p>
            </div>

            <div className="space-y-8">
                {education.map((edu, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-gray-100 last:border-0 last:pb-0">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{edu.school}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-gray-600 text-[14px]">
                                <span>{edu.degree}</span>
                                <span className="hidden sm:block text-gray-300">•</span>
                                <span className="text-gray-500">{edu.field}</span>
                            </div>
                        </div>
                        <span className="text-[14px] font-medium text-gray-500 mt-4 md:mt-0 bg-gray-50 px-3 py-1 rounded-full border border-gray-100 w-fit">
                            {edu.period}
                        </span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
