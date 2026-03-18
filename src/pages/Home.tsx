import { useState } from 'react';
import { Link } from 'react-router';

export default function Home() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const latestWork = [
    { 
      id: 1, 
      title: 'PROJECT 01', 
      link: 'https://github.com/project-1',
      description: 'A comprehensive enterprise dashboard built with React and Node.js. Optimized for massive data streams with real-time visualization.',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js']
    },
    { 
      id: 2, 
      title: 'PROJECT 02', 
      link: 'https://github.com/project-2',
      description: 'An intuitive consumer mobile application focusing on personal wellness and habit tracking, featuring offline-first architecture.',
      skills: ['React Native', 'Redux Toolkit', 'Supabase']
    },
    { 
      id: 3, 
      title: 'PROJECT 03', 
      link: 'https://github.com/project-3',
      description: 'Custom e-commerce storefront with a unique 3D product configurator, allowing users to customize products before purchase.',
      skills: ['Three.js', 'React', 'Express.js']
    },
    { 
      id: 4, 
      title: 'PROJECT 04', 
      link: 'https://github.com/project-4',
      description: 'A social networking platform for professionals in the creative industry to share portfolios and collaborate on projects.',
      skills: ['Next.js', 'GraphQL', 'PostgreSQL']
    },
    { 
      id: 5, 
      title: 'PROJECT 05', 
      link: 'https://github.com/project-5',
      description: 'Automated workflow management tool that integrates with various third-party APIs to streamline agency operations.',
      skills: ['Vue.js', 'Firebase', 'MongoDB']
    },
    { 
      id: 6, 
      title: 'PROJECT 06', 
      link: 'https://github.com/project-6',
      description: 'A high-performance landing page for a SaaS product, optimized for conversion and accessibility.',
      skills: ['HTML5', 'CSS3', 'Framer Motion']
    },
    { 
      id: 7, 
      title: 'PROJECT 07', 
      link: 'https://github.com/project-7',
      description: 'A high-performance landing page for a SaaS product, optimized for conversion and accessibility.',
      skills: ['HTML5', 'CSS3', 'Framer Motion']
    },
  ];

  const knowledgeLevels = [
    { skill: 'JAVASCRIPT', percent: 90 },
    { skill: 'REACT & VITE', percent: 95 },
    { skill: 'TAILWIND CSS', percent: 85 },
    { skill: 'NODE.JS', percent: 80 },
    { skill: 'TYPESCRIPT', percent: 85 },
    { skill: 'GIT & GITHUB', percent: 90 },
  ];

  return (
    <>
      <section className="min-h-screen w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-brand-lime flex flex-col justify-center px-12 lg:px-24 py-32 order-2 md:order-1 min-h-[50vh] md:min-h-screen pt-24 md:pt-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-dark leading-tight mb-8">
            Captivating<br/>Digital<br/>Experiences
          </h1>
          <p className="text-brand-dark text-lg md:text-xl font-sans mb-10 max-w-lg leading-relaxed">
            Creative software developer specializing in high-performance web applications and beautiful user interfaces.
          </p>
          <Link to="/contact" className="inline-block bg-brand-dark text-white px-8 py-4 rounded font-semibold tracking-wider text-center max-w-xs hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Get in touch
          </Link>
        </div>
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen order-1 md:order-2 relative mt-[72px] md:mt-0">
          <img 
            src="/images/headshot-main.png" 
            alt="Jane Doe Developer" 
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        </div>
      </section>

      {/* Latest Work Section */}
      <section className="w-full bg-white py-24 select-none flex flex-col items-center relative">
        {/* User Requested Links and Description */}
        <div className="w-full px-8 md:px-12 lg:px-24 mb-16 flex flex-col items-center text-center">
          <h2 className="text-black font-sans font-bold text-4xl md:text-5xl mb-6 tracking-wide">
            Latest Work Carousel Links
          </h2>
          <p className="w-full max-w-[1400px] text-zinc-600 font-medium text-lg md:text-xl leading-relaxed mt-2 whitespace-normal md:whitespace-nowrap overflow-hidden text-ellipsis">
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
                      <h3 className={`font-sans font-bold tracking-[0.25em] text-brand-green text-lg md:text-xl uppercase transition-all duration-500 ease-out
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
                        className="text-white font-sans font-semibold tracking-[0.2em] uppercase text-xs border-b-2 border-brand-green pb-1.5 hover:text-brand-green transition-colors duration-300"
                      >
                        View Case Study &rarr;
                      </button>
                    </div>
                  </>
                )}

                {/* Expanded State Header */}
                {isExpanded && (
                  <div className="relative w-full flex-shrink-0 h-32 bg-gradient-to-b from-gray-800 via-gray-900 to-black flex items-center justify-center">
                    <h3 className="text-white font-sans font-bold tracking-[0.25em] text-2xl uppercase">
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
                  
                  <h4 className="text-black font-sans font-bold tracking-widest text-xs mb-3">TECHNOLOGIES & SKILLS</h4>
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

      {/* Knowledge Level Section */}
      <section className="w-full relative py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("/images/workspace-bg.png")' }}>
        <div className="absolute inset-0 bg-black/70"></div> {/* Dark overlay */}
        
        <div className="relative z-10 max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-sans font-bold tracking-wider">MY KNOWLEDGE LEVEL <br/> IN STACKS</h2>
          </div>

          <div className="space-y-6">
            {knowledgeLevels.map((item, idx) => (
              <div key={idx} className="flex items-center w-full group">
                {/* Skill Name */}
                <div className="w-1/3 text-right pr-6 font-sans font-bold text-white text-sm md:text-base tracking-widest opacity-90 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.skill}
                </div>
                
                {/* Progress Bar Container */}
                <div className="w-1/2 h-1.5 md:h-2 bg-white/20 rounded-full overflow-hidden relative shadow-inner">
                  {/* Progress Fill */}
                  <div 
                    className="absolute top-0 left-0 h-full bg-brand-green rounded-full shadow-[0_0_10px_#00D261]" 
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>

                {/* Percentage Text */}
                <div className="w-1/6 pl-4 font-sans font-semibold text-white/80 group-hover:text-white transition-colors">
                  {item.percent}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
