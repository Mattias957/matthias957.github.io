import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Data Analysis & Visualization",
    issuer: "NexusWorks",
    date: "Issued Jan 2024",
  },
  {
    title: "Data Analysis Professional",
    issuer: "StellarWave",
    date: "Issued Nov 2023",
  },
  {
    title: "Data Analytics Mastery",
    issuer: "BrightByte",
    date: "Issued Aug 2023",
  },
  {
    title: "Strategic Business Consulting",
    issuer: "DataSpark",
    date: "Issued Feb 2023",
  }
];

export function Certifications() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-white shadow-sm border border-gray-100 mb-6 text-gray-900">
                <Award className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Licenses & Certifications</h2>
            <p className="text-gray-600">Professional accreditations and certifications demonstrating expertise and compliance with industry standards.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-sm font-medium text-gray-900">{cert.issuer}</span>
                        <span className="text-xs text-gray-500">{cert.date}</span>
                    </div>
                    <button className="inline-flex items-center text-sm font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors border border-gray-200 w-full justify-center">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Show Credentials
                    </button>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

