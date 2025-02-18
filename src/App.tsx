import React, { useEffect, useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { supabase } from './lib/supabase';

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  project_url: string;
}

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (data) {
        setProjects(data);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 metal-gradient"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl mb-6 gradient-text font-bold tracking-tight">
            Wir digitalisieren Deutschland
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-300 font-display">
            und trainieren agiles Arbeiten – mit Iderdex
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 font-body">
            Die Zukunft der Arbeit ist digital – und wir machen sie greifbar. Wir helfen Ihnen, Ihr Unternehmen zukunftsfähig zu gestalten.
          </p>
          <button className="bg-metal-green-600 hover:bg-metal-green-700 text-white font-display font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 flex items-center mx-auto gap-2">
            Digitale Transformation starten
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gradient-to-b from-black to-metal-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="space-y-6">
              <h2 className="font-display text-4xl gradient-text font-bold">
                Digitale Transformation mit Iderdex
              </h2>
              <p className="text-gray-300 font-body leading-relaxed">
                Die digitale Welt entwickelt sich ständig weiter. Mit Iderdex an Ihrer Seite können Sie diese Veränderung aktiv gestalten. Wir bringen Ihnen maßgeschneiderte Lösungen, die Ihre Arbeitsweise effizienter, flexibler und zukunftssicher machen.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
                alt="Digital Transformation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="rounded-lg overflow-hidden shadow-2xl order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Agile Working" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="font-display text-4xl gradient-text font-bold">
                Agiles Arbeiten als Schlüssel zum Erfolg
              </h2>
              <p className="text-gray-300 font-body leading-relaxed">
                Agiles Arbeiten ist mehr als nur ein Trend. Es ist eine Arbeitsweise, die Ihr Unternehmen dynamisch und anpassungsfähig macht. Durch unser praxisorientiertes Training helfen wir Ihrem Team, agiler zu werden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-metal-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-center mb-20 gradient-text font-bold">
            Unsere Leistungen
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Digitale Strategieentwicklung",
                description: "Gemeinsam definieren wir Ihre digitale Roadmap und finden Lösungen.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
              },
              {
                title: "Agiles Coaching & Training",
                description: "Wir trainieren Teams in den Prinzipien des agilen Arbeitens.",
                image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Tools & Softwareberatung",
                description: "Wir implementieren die besten digitalen Tools für Ihre Anforderungen.",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Change Management",
                description: "Wir begleiten Ihre Mitarbeiter durch den Veränderungsprozess.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((service, index) => (
              <div key={index} className="bg-metal-800 rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-metal-green-500 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-body">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-metal-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-center mb-20 gradient-text font-bold">
            Projekte
          </h2>
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col md:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div className="aspect-video rounded-lg overflow-hidden bg-metal-700 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="font-display text-3xl md:text-4xl gradient-text font-bold">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed font-body">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.title.includes('E-Commerce') && (
                      <>
                        <span className="px-4 py-2 bg-metal-800 rounded-full text-metal-green-500 font-display">E-Commerce</span>
                        <span className="px-4 py-2 bg-metal-800 rounded-full text-metal-green-500 font-display">React</span>
                        <span className="px-4 py-2 bg-metal-800 rounded-full text-metal-green-500 font-display">TypeScript</span>
                      </>
                    )}
                    {project.title.includes('Marketing') && (
                      <>
                        <span className="px-4 py-2 bg-metal-800 rounded-full text-metal-green-500 font-display">Marketing</span>
                        <span className="px-4 py-2 bg-metal-800 rounded-full text-metal-green-500 font-display">Analytics</span>
                        <span className="px-4 py-2 bg-metal-800 rounded-full text-metal-green-500 font-display">SEO</span>
                      </>
                    )}
                    {project.title.includes('video') && (
                      <>
                        <span className="px-4 py-2 bg-metal-800 rounded-full text-metal-green-500 font-display">video</span>
                        <span className="px-4 py-2 bg-metal-800 rounded-full text-metal-green-500 font-display">youtube</span>
                      </>
                    )}
                  </div>
                  <a
                    href={project.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-metal-green-500 hover:text-metal-green-600 transition-colors text-lg group font-display"
                  >
                    Website besuchen
                    <ExternalLink className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl gradient-text font-bold mb-6">
            Sind Sie bereit für den nächsten Schritt?
          </h2>
          <p className="text-gray-300 text-lg mb-8 font-body">
            Die digitale Transformation ist kein einmaliger Prozess, sondern eine Reise, die kontinuierlich weitergeht. 
            Lassen Sie uns gemeinsam das Fundament für die Zukunft Ihrer Arbeit legen.
          </p>
          <button className="bg-metal-green-600 hover:bg-metal-green-700 text-white font-display font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 flex items-center mx-auto gap-2">
            Kontaktieren Sie uns
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;