import { useState } from 'react';

export default function Resume() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience' | 'internship'>('education');

  return (
    <div className="w-full mt-24">
      {/* Resume Container */}
      <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
        
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Professional Summary */}
          <div className="space-y-4 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif text-brand-dark border-b-2 border-brand-lime pb-2 inline-block">Professional Summary</h3>
            <p className="font-sans text-gray-700 leading-relaxed text-lg text-justify md:text-center mt-6">
              Full Stack Developer with 1+ year of experience in building scalable distributed systems and event-driven architectures. Expert in <strong>Golang, Next.js 15, and PostgreSQL</strong>, with a deep understanding of high-performance patterns like <strong>Transactional Outbox, Hexagonal Architecture, and gRPC</strong>. Proven track record of leading technical teams for high-traffic platforms and optimizing system latency by <strong>30%</strong>. Passionate about solving complex data consistency and concurrency challenges.
            </p>
          </div>

          {/* Tab Navigation & Content Section */}
          <div className="max-w-4xl mx-auto pt-8">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-gray-200 pb-4">
              <button
                onClick={() => setActiveTab('education')}
                className={`px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                  activeTab === 'education'
                    ? 'bg-brand-dark text-white shadow-md transform -translate-y-1'
                    : 'bg-brand-neutral/10 text-brand-dark hover:bg-brand-lime hover:text-brand-dark'
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                  activeTab === 'experience'
                    ? 'bg-brand-dark text-white shadow-md transform -translate-y-1'
                    : 'bg-brand-neutral/10 text-brand-dark hover:bg-brand-lime hover:text-brand-dark'
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab('internship')}
                className={`px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                  activeTab === 'internship'
                    ? 'bg-brand-dark text-white shadow-md transform -translate-y-1'
                    : 'bg-brand-neutral/10 text-brand-dark hover:bg-brand-lime hover:text-brand-dark'
                }`}
              >
                Internship
              </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {/* Education Content */}
              {activeTab === 'education' && (
                <div className="animate-[fade-in_0.3s_ease-out]">
                  <h3 className="text-3xl font-serif text-brand-dark mb-8 border-b-2 border-brand-lime pb-2 inline-block">Education</h3>
                  <div className="border-l-2 border-brand-lime/50 pl-8 space-y-12 relative ml-4 md:ml-0">
                    
                    {/* Edu Item 1 */}
                    <div className="relative">
                      <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-brand-lime ring-4 ring-white"></span>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                        <h4 className="text-xl font-bold text-brand-dark transition-colors leading-tight mb-2 md:mb-0 max-w-[80%]">Bachelor of Technology in Computer Science and Engineering</h4>
                        <span className="text-sm font-bold text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">2021 – 2025</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between text-gray-600 font-medium font-sans">
                        <p className="italic text-base">Institute Of Technology and Management, Gida</p>
                        <p className="md:ml-4 text-sm mt-1 md:mt-0">Gorakhpur, India</p>
                      </div>
                    </div>

                    {/* Edu Item 2 */}
                    <div className="relative">
                      <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-brand-lime ring-4 ring-white"></span>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                        <h4 className="text-xl font-bold text-brand-dark leading-tight mb-2 md:mb-0">Intermediate, XII (PCM) CBSE</h4>
                        <span className="text-sm font-bold text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">2019 – 2021</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between text-gray-600 font-medium font-sans">
                        <p className="italic text-base">J.P Education Academy, Gorakhnath</p>
                        <p className="md:ml-4 text-sm mt-1 md:mt-0">Gorakhpur, India</p>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* Experience Content */}
              {activeTab === 'experience' && (
                <div className="animate-[fade-in_0.3s_ease-out]">
                  <h3 className="text-3xl font-serif text-brand-dark mb-8 border-b-2 border-brand-lime pb-2 inline-block">Professional Experience</h3>
                  <div className="border-l-2 border-brand-lime/50 pl-8 relative ml-4 md:ml-0">
                    
                    {/* Exp Item 1 */}
                    <div className="relative">
                      <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-brand-lime ring-4 ring-white"></span>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                        <h4 className="text-xl font-bold text-brand-dark leading-tight mb-2 md:mb-0">Full Stack Developer</h4>
                        <span className="text-sm font-bold text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">Apr 2025 – Present</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between text-gray-600 font-medium font-sans mb-5">
                        <p className="italic text-base">RNR Consulting Pvt. Ltd.</p>
                        <p className="md:ml-4 text-sm mt-1 md:mt-0">New Delhi, India</p>
                      </div>
                      <ul className="list-disc list-outside ml-4 space-y-3 text-gray-700 font-sans text-sm md:text-base leading-relaxed text-justify md:text-left">
                        <li>Architected a <strong>Distributed Monolith</strong> for NHIT/Consent Manager via <strong>Kong API Gateway</strong>, centralizing authentication and routing for modular services on a shared <strong>PostgreSQL</strong> instance.</li>
                        <li>Engineered a high-reliability <strong>Notification System</strong> using <strong>Transactional Outbox</strong> and <strong>NATS JetStream</strong>, ensuring 100% delivery for 120+ concurrent events and solving the Dual-Write problem.</li>
                        <li>Optimized <strong>Golang</strong> consumers with <strong>PostgreSQL SKIP LOCKED</strong> logic, eliminating database resource contention and deadlocks during high-traffic bursts.</li>
                        <li>Developed an <strong>ERP system</strong> using <strong>gRPC, GraphQL, and Hexagonal Architecture</strong>, achieving 100% decoupling between business logic and infrastructure layers.</li>
                        <li>Reduced API response latency by <strong>30%</strong> through complex <strong>SQL query refactoring</strong> and strategic indexing, maintaining data integrity across large-scale shared schemas.</li>
                        <li>Integrated <strong>WebSockets</strong> for real-time synchronization between <strong>Next.js</strong> and <strong>Flutter</strong>, significantly reducing in-app notification latency.</li>
                        <li>Automated containerized deployments using <strong>Docker</strong> on <strong>AWS (EC2, S3, Lambda)</strong>, implementing auto-scaling to maintain <strong>99.9% system uptime</strong>.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Internship Content */}
              {activeTab === 'internship' && (
                <div className="animate-[fade-in_0.3s_ease-out]">
                  <h3 className="text-3xl font-serif text-brand-dark mb-8 border-b-2 border-brand-lime pb-2 inline-block">Internship Details</h3>
                  <div className="border-l-2 border-brand-lime/50 pl-8 relative ml-4 md:ml-0">
                    
                    <div className="relative">
                      <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-brand-lime ring-4 ring-white"></span>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                        <h4 className="text-xl font-bold text-brand-dark leading-tight mb-2 md:mb-0">Software Engineering Intern</h4>
                        <span className="text-sm font-bold text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">Jan 2024 – Mar 2024</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between text-gray-600 font-medium font-sans mb-5">
                        <p className="italic text-base">Example Tech Internship</p>
                        <p className="md:ml-4 text-sm mt-1 md:mt-0">Remote</p>
                      </div>
                      <ul className="list-disc list-outside ml-4 space-y-3 text-gray-700 font-sans text-sm md:text-base leading-relaxed text-justify md:text-left">
                        <li>Developed responsive frontend components using React.js and Tailwind CSS.</li>
                        <li>Integrated REST APIs with backend services to handle user authentication data.</li>
                        <li>Assisted senior developers in writing unit tests to cover 80% of edge case scenarios.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Achievements (Positions of Responsibility) */}
          <div className="space-y-6 pt-10 pb-16">
            <h3 className="text-3xl font-serif text-brand-dark border-b-2 border-brand-lime pb-2 inline-block">Achievements & Leadership</h3>
            <div className="bg-brand-neutral/5 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h4 className="text-xl font-bold text-brand-dark leading-tight mb-2 md:mb-0">Technical Team Lead | Yukti Sangam Hackathon</h4>
                <span className="text-sm font-bold text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">May 2025 – July 2025</span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between text-gray-600 font-medium font-sans mb-5">
                <p className="italic text-base">RNR Consulting Pvt. Ltd.</p>
                <p className="md:ml-4 text-sm mt-1 md:mt-0">New Delhi, India</p>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-3 text-gray-700 font-sans text-sm md:text-base leading-relaxed text-justify md:text-left">
                <li>Spearheaded a cross-functional team of 5+ developers to deliver the official hackathon platform, maintaining 100% stability for <strong>300+ active users</strong> during peak registration periods.</li>
                <li>Managed the <strong>end-to-end SDLC</strong>, from architecting system modules to conducting code reviews, ensuring a high-performance registration and automated scoring engine.</li>
                <li>Mentored junior engineers on <strong>clean code principles</strong> and API integration, while collaborating with senior stakeholders to ensure technical alignment with business event goals.</li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>

      {/* Architecture Worked On (Full Width Floating Cards) */}
      <div className="w-full bg-white relative pb-16 pt-8 border-y border-gray-100">
        <h3 className="text-3xl font-serif text-brand-dark border-b-2 border-brand-lime pb-2 inline-block relative z-10 text-center w-full max-w-7xl mx-auto mb-10 block">Architecture & Its Patterns Worked On</h3>
        
        {/* Gradient masks for smooth edges */}
        <div className="absolute left-0 top-[7.5rem] bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-[7.5rem] bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>
        
        <div className="relative w-full overflow-hidden flex flex-nowrap py-4">
          <div className="flex animate-marquee hover:[animation-play-state:paused] w-max gap-6 pr-6">
            
            {/* Core Architecture Set */}
            <div className="flex items-center justify-center px-10 py-5 bg-brand-dark text-white rounded-2xl shadow-md shrink-0 border border-brand-neutral/20 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="font-serif text-xl tracking-wide">Distributed Monolith</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-lime text-brand-dark rounded-2xl shadow-md shrink-0 border border-brand-lime/50 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="font-serif text-xl tracking-wide font-bold">Monolith</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-dark text-white rounded-2xl shadow-md shrink-0 border border-brand-neutral/20 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="font-serif text-xl tracking-wide">Microservices</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-lime text-brand-dark rounded-2xl shadow-md shrink-0 border border-brand-lime/50 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="font-serif text-xl tracking-wide font-bold">Hexagonal Architecture (Ports and Adapters)</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-dark text-white rounded-2xl shadow-md shrink-0 border border-brand-neutral/20 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="font-serif text-xl tracking-wide">Event-Driven Architecture</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-lime text-brand-dark rounded-2xl shadow-md shrink-0 border border-brand-lime/50 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="font-serif text-xl tracking-wide font-bold">Transactional Outbox Pattern</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-dark text-white rounded-2xl shadow-md shrink-0 border border-brand-neutral/20 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="font-serif text-xl tracking-wide">High-Performance Patterns</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-lime text-brand-dark rounded-2xl shadow-md shrink-0 border border-brand-lime/50 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="font-serif text-xl tracking-wide font-bold">Database Concurrency Patterns</span>
            </div>

            {/* Duplicated for smooth infinite scroll */}
            <div className="flex items-center justify-center px-10 py-5 bg-brand-dark text-white rounded-2xl shadow-md shrink-0 border border-brand-neutral/20 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="font-serif text-xl tracking-wide">Distributed Monolith</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-lime text-brand-dark rounded-2xl shadow-md shrink-0 border border-brand-lime/50 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="font-serif text-xl tracking-wide font-bold">Monolith</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-dark text-white rounded-2xl shadow-md shrink-0 border border-brand-neutral/20 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="font-serif text-xl tracking-wide">Microservices</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-lime text-brand-dark rounded-2xl shadow-md shrink-0 border border-brand-lime/50 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="font-serif text-xl tracking-wide font-bold">Hexagonal Architecture (Ports and Adapters)</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-dark text-white rounded-2xl shadow-md shrink-0 border border-brand-neutral/20 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="font-serif text-xl tracking-wide">Event-Driven Architecture</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-lime text-brand-dark rounded-2xl shadow-md shrink-0 border border-brand-lime/50 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="font-serif text-xl tracking-wide font-bold">Transactional Outbox Pattern</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-dark text-white rounded-2xl shadow-md shrink-0 border border-brand-neutral/20 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="font-serif text-xl tracking-wide">High-Performance Patterns</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-lime text-brand-dark rounded-2xl shadow-md shrink-0 border border-brand-lime/50 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="font-serif text-xl tracking-wide font-bold">Database Concurrency Patterns</span>
            </div>
            
          </div>
        </div>
      </div>

      <section className="w-full bg-white pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Download Resume Button */}
          <div className="pt-20 pb-12 flex justify-center">
            <a 
              href="/Resume-Srishti-Srivastava.pdf" 
              download
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-brand-dark bg-brand-lime rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgb(215,225,156,0.4)] ring-4 ring-transparent hover:ring-brand-lime/20 focus:outline-none"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                <span className="mr-3">Download Resume in PDF</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
