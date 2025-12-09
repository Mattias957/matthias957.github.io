import { Sparkles, Database, Briefcase } from "lucide-react";

const skillCategories = [
  {
    title: "Data Science",
    icon: Database,
    skills: [
      "Data Analysis", "Machine Learning", "Statistical Modeling", "Data Visualization",
      "Big Data Analytics", "Predictive Modeling", "Deep Learning", "Data Mining",
      "Statistical Inference", "Hypothesis Testing", "Data Cleaning"
    ]
  },
  {
    title: "Business Consultation",
    icon: Briefcase,
    skills: [
      "Strategic Planning", "Business Analysis", "Market Research", "Financial Analysis",
      "Problem-Solving", "Project Management", "Risk Assessment", "Negotiation Skills"
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gray-50 shadow-sm border border-gray-100 mb-6 text-gray-900">
                <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Skills</h2>
            <p className="text-gray-600">Key competencies essential for navigating and excelling in various professional contexts.</p>
        </div>

        <div className="space-y-12">
            {skillCategories.map((category, index) => (
                <div key={index}>
                    <div className="flex items-center gap-3 mb-6">
                        {/* Icon could go here if we wanted specific icons per category */}
                        <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill) => (
                            <div key={skill} className="inline-flex items-center px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:border-gray-200 transition-colors cursor-default">
                                <CheckCircleIcon className="mr-2 h-3 w-3 text-gray-400" />
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    )
}

