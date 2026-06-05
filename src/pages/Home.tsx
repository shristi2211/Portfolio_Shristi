import { useState } from 'react';
import { Link } from 'react-router';

export default function Home() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const latestWork = [
    { 
      id: 1, 
      title: 'AI Financial Intelligence Platform', 
      link: 'https://github.com/project-1',
      description: 'An intelligent full stack financial analytics platform designed to automatically track spending behavior, analyze transaction patterns, and generate AI-powered savings recommendations through secure Account Aggregator integrations and real-time financial insights.',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Golang', 'PostgreSQL', 'WebSockets', 'GraphQL', 'Account Aggregator APIs', 'Real-Time Analytics', 'AI Recommendation Engine', 'Docker', 'AWS']
    },
    { 
      id: 2, 
      title: 'AI Content Orchestration Platform', 
      link: 'https://github.com/project-2',
      description: 'A scalable AI-powered publishing infrastructure that automates content generation, media creation, workflow orchestration, and multi-platform distribution across integrated publishing channels.',
      skills: ['Python', 'Gemini API', 'Antropic API', 'Next.js', 'PostgreSQL', 'Redis', 'AI Automation', 'Image Generation', 'Workflow Pipelines', 'Webhooks', 'Queue Systems', 'Multi-platform Integrations', 'Docker']
    },
    { 
      id: 3, 
      title: 'AI Control Plane', 
      link: 'https://github.com/project-3',
      description: 'An enterprise-grade AI orchestration infrastructure designed to manage multi-agent ecosystems, validate AI outputs, orchestrate intelligent workflows, and bridge legacy enterprise systems with modern AI environments.',
      skills: ['Golang', 'Python', 'Java', 'Hybrid Architecture']
    },
  ];

  const engineeringStack = [
    {
      category: 'Backend & Distributed Systems',
      icon: '⚙️',
      tags: ['Golang', 'gRPC', 'NATS JetStream', 'PostgreSQL', 'Redis', 'GraphQL', 'REST APIs', 'WebSockets', 'MySQL'],
    },
    {
      category: 'Frontend & Application Layer',
      icon: '🖥️',
      tags: ['Next.js', 'React', 'TypeScript', 'Vanilla JS','Tailwind CSS', 'Vite', 'Flutter'],
    },
    {
      category: 'AI & Automation',
      icon: '🤖',
      tags: ['Gemini API', 'Antropic API', 'AI Workflows', 'Multi-Agent Systems', 'Semantic Processing', 'Automation Pipelines'],
    },
    {
      category: 'Infrastructure & DevOps',
      icon: '☁️',
      tags: ['Docker', 'AWS', 'Nginx', 'Kong API Gateway', 'CI/CD', 'Distributed Systems', 'Real-Time Architectures'],
    },
  ];

  return (
    <>
      <section className="min-h-screen w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-brand-lime flex flex-col justify-center px-12 lg:px-24 py-32 order-2 md:order-1 min-h-[50vh] md:min-h-screen pt-24 md:pt-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-tight mb-8">
            Captivating<br/>Digital<br/>Experiences
          </h1>
          <p className="text-brand-dark text-base md:text-lg mb-10 max-w-lg leading-relaxed">
            Full Stack Engineer building scalable AI systems, distributed backends, and high-performance web applications.
          </p>
          <Link to="/contact" className="inline-block bg-brand-dark text-white px-8 py-4 rounded font-semibold tracking-wider text-center max-w-xs hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm md:text-base">
            Get in touch
          </Link>
        </div>
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen order-1 md:order-2 relative">
          <img 
            src="/images/srishti-headshot.jpg" 
            alt="Srishti" 
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        </div>
      </section>

      {/* Latest Work Section */}
      <section className="w-full bg-white py-24 select-none flex flex-col items-center relative">
        {/* User Requested Links and Description */}
        <div className="w-full px-8 md:px-12 lg:px-24 mb-16 flex flex-col items-center text-center">
          <h2 className="text-black font-bold text-3xl md:text-4xl mb-6 tracking-wide">
            Latest Work Carousel Links
          </h2>
          <p className="w-full max-w-[1400px] text-zinc-600 font-medium text-base md:text-lg leading-relaxed mt-2 whitespace-normal md:whitespace-nowrap overflow-hidden text-ellipsis">
            A curated collection of my most impactful work. From scalable enterprise solutions to pixel-perfect consumer interfaces,<br className="hidden md:block"/>
            these case studies demonstrate my approach to solving complex problems through <br className="hidden md:block"/> elegant code and intuitive design.
          </p>
        </div>
        
        {/* Horizontally Scrolling Container */}
        <div className="w-full overflow-x-auto snap-x snap-mandatory flex gap-6 px-8 md:px-12 lg:px-24 pb-8 no-scrollbar scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {latestWork.map((project) => {
            const isExpanded = expandedProject === project.id;
            
            return (
              <div 
                key={project.id} 
                className={`snap-center shrink-0 group overflow-hidden rounded-xl shadow-lg relative flex flex-col transition-all duration-500 ease-out
                  ${isExpanded 
                    ? 'w-[450px] md:w-[600px] max-h-[800px] bg-white border border-gray-200 shadow-2xl' 
                    : 'w-72 md:w-96 h-56 md:h-64 cursor-pointer'}
                `}
                onMouseEnter={() => {
                  if (!isExpanded) setActiveProject(project.id);
                }}
                onMouseLeave={() => {
                  if (!isExpanded) setActiveProject(null);
                }}
              >
                {/* Collapsed State */}
                {!isExpanded && (
                  <>
                    {/* Background gradient - always visible */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-xl" />
                    
                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-gray-900/80 to-gray-800/60 rounded-xl transition-opacity duration-500 ${activeProject === project.id ? 'opacity-100' : 'opacity-0'}`} />

                    {/* Project Title */}
                    <div className="relative z-10 flex-1 flex items-center justify-center">
                      <h3 className={`font-bold tracking-[0.25em] text-brand-green text-base md:text-lg uppercase transition-all duration-500 ease-out
                        ${activeProject === project.id ? '-translate-y-4 scale-105' : 'translate-y-0 scale-100'}
                      `}>
                        {project.title}
                      </h3>
                    </div>

                    {/* View Case Study CTA - slides up on hover */}
                    <div className={`relative z-10 flex justify-center pb-8 transition-all duration-500 ease-out
                      ${activeProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                    `}>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedProject(project.id);
                        }}
                        className="text-white font-semibold tracking-[0.2em] uppercase text-xs border-b-2 border-brand-green pb-1.5 hover:text-brand-green transition-colors duration-300"
                      >
                        View Case Study &rarr;
                      </button>
                    </div>
                  </>
                )}

                {/* Expanded State Header */}
                {isExpanded && (
                  <div className="relative w-full flex-shrink-0 h-32 bg-gradient-to-b from-gray-800 via-gray-900 to-black flex items-center justify-center">
                    <h3 className="text-white font-bold tracking-[0.25em] text-xl uppercase">
                      {project.title}
                    </h3>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedProject(null);
                      }}
                      className="absolute top-4 right-6 text-gray-400 hover:text-white text-3xl font-light z-20 transition-colors"
                    >
                      &times;
                    </button>
                  </div>
                )}

                {/* Expanded State Content */}
                <div 
                  className={`w-full bg-white overflow-hidden flex flex-col transition-all duration-500 ease-out
                    ${isExpanded ? 'opacity-100 max-h-[600px] p-8' : 'opacity-0 max-h-0 p-0'}
                  `}
                >
                  <h3 className="text-brand-green tracking-[0.3em] text-xs font-semibold mb-2">CASE STUDY</h3>
                  <div className="w-16 h-1 bg-brand-green mb-6"></div>
                  
                  <p className="text-zinc-600 font-medium text-base/relaxed mb-8 flex-grow">
                    {project.description}
                  </p>
                  
                  <h4 className="text-black font-bold tracking-widest text-xs mb-3">TECHNOLOGIES & SKILLS</h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="bg-gray-100 text-brand-dark px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-gray-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-block bg-brand-dark text-white px-6 py-3 rounded text-sm font-semibold tracking-wider hover:bg-brand-green transition-colors shadow-md"
                    >
                      View Live Project
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engineering Stack Section */}
      <section className="w-full relative py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("/images/workspace-bg.png")' }}>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-8">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <span className="inline-block text-brand-green text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Full Stack · Distributed Systems · AI Infrastructure
            </span>
            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-wider uppercase">
              Core Engineering<br/>Stack
            </h2>
            <div className="mt-5 mx-auto w-12 h-0.5 bg-brand-green rounded-full"></div>
          </div>

          {/* Category Cards */}
          <div className="space-y-10">
            {engineeringStack.map((group, idx) => (
              <div key={idx} className="group">
                {/* Category Label */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-lg leading-none">{group.icon}</span>
                  <span className="text-white/60 text-xs font-semibold tracking-[0.25em] uppercase">
                    {group.category}
                  </span>
                  <div className="flex-1 h-px bg-white/10"></div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {group.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white text-xs font-semibold tracking-wide transition-all duration-300 cursor-default hover:bg-[rgba(0,210,97,0.15)] hover:border-[rgba(0,210,97,0.5)] hover:text-brand-green hover:shadow-[0_0_12px_rgba(0,210,97,0.25)] hover:-translate-y-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
