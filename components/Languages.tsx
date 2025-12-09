import { Globe } from "lucide-react";

const languages = [
  {
    name: "English",
    level: "Native or bilingual proficiency",
    flag: "🇬🇧"
  },
  {
    name: "French",
    level: "Professional working proficiency",
    flag: "🇫🇷"
  },
  {
    name: "Spanish",
    level: "Elementary proficiency",
    flag: "🇪🇸"
  }
];

export function Languages() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-white shadow-sm border border-gray-100 mb-6 text-gray-900">
                <Globe className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Languages</h2>
            <p className="text-gray-600">Proficient in multiple languages, facilitating effective communication and collaboration in diverse settings.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start">
                    <span className="text-4xl mb-4">{lang.flag}</span>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{lang.name}</h3>
                    <p className="text-sm text-gray-500">{lang.level}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

