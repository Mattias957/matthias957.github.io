import { FolderGit2 } from "lucide-react";
import { projects } from "@/lib/data";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="py-3 md:py-4 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="mb-12">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gray-50 shadow-sm border border-gray-100 mb-6 text-gray-900">
                    <FolderGit2 className="h-6 w-6" />
                </div>
                <h2 className="text-[21px] font-bold text-gray-900 mb-4">Mina projekt</h2>
                <p className="text-gray-600 text-[14px]">Ett urval av projekt jag har arbetat med som visar min expertis inom data och utveckling.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col h-full hover:bg-gray-100 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{project.category}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-[14px] leading-relaxed mb-6">
                            {project.description}
                        </p>
                        <div className="mt-auto">
                          <Link href={`/projects/${project.slug}`} className="inline-flex items-center text-[14px] font-medium text-gray-900 hover:text-gray-600 transition-colors">
                            Läs mer
                            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
