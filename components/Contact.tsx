import { Send, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-3 md:py-4 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        
        {/* CTA Section */}
        <div className="mb-24">
             <div className="h-24 w-24 mx-auto rounded-full overflow-hidden bg-gray-100 mb-6 ring-4 ring-gray-50">
                <img 
                  src="/matthias.webp" 
                  alt="Profile" 
                  className="object-cover object-top w-full h-full"
                />
             </div>
             <h2 className="text-[21px] font-bold text-gray-900 mb-2">Hör gärna av dig</h2>
             <p className="text-gray-600 mb-8 text-[14px]">Låt oss starta en produktiv konversation</p>
             
             <a
                href="mailto:Matthiasmoreillon@gmail.com"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-black px-8 text-[14px] font-medium text-white shadow transition-colors hover:bg-gray-800 mb-8"
              >
                <Send className="mr-2 h-4 w-4" />
                Skicka E-post
              </a>

              <div className="flex justify-center gap-6 text-gray-400">
                  <a href="https://www.linkedin.com/in/matthias-moreillon/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors"><Linkedin className="h-5 w-5" /></a>
                  <a href="https://github.com/Mattias957" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors"><Github className="h-5 w-5" /></a>
              </div>
        </div>

        {/* Contact Form - White Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 text-left shadow-sm border border-gray-100 max-w-3xl mx-auto">
            <div className="mb-8">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gray-50 shadow-sm border border-gray-100 mb-4 text-gray-900">
                    <Send className="h-5 w-5" />
                </div>
                <h3 className="text-[21px] font-bold text-gray-900 mb-2">Kontakta mig!</h3>
                <p className="text-gray-600 text-[14px]">Har du en fråga, feedback, eller vill bara säga hej? Jag hör gärna från dig!</p>
            </div>

            <form action="mailto:matthiasmoreillon@gmail.com" method="post" encType="text/plain" className="space-y-4">
                <div>
                    <input type="text" name="namn" placeholder="Fullständigt namn" className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all text-[14px]" />
                </div>
                <div>
                    <input type="email" name="email" placeholder="E-post" className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all text-[14px]" />
                </div>
                <div>
                    <textarea name="meddelande" placeholder="Meddelande" rows={4} className="w-full p-4 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all resize-none text-[14px]"></textarea>
                </div>
                <button type="submit" className="w-full h-12 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200 text-[14px]">
                    Skicka meddelande
                </button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <p className="text-[14px] text-gray-500">Eller ring mig på</p>
                <a href="tel:+46736791084" className="text-[14px] font-medium text-gray-900 hover:text-black transition-colors">
                    073 679 10 84
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}
