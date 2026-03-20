import { useState } from 'react';

export default function Resume() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience' | 'internship'>('education');

  return (
    <div className="w-full mt-24 print:mt-0 print:block">
      {/* --- WEB UI (Hidden when printing PDF) --- */}
      <div className="print:hidden">
      {/* Resume Container */}
      <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">

        <div className="max-w-7xl mx-auto space-y-16">

          {/* Professional Summary */}
          <div className="space-y-4 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl text-brand-dark border-b-2 border-brand-lime pb-2 inline-block">Professional Summary</h3>
            <p className="text-gray-700 leading-relaxed text-lg text-justify md:text-center mt-6">
              Full Stack Developer with 1+ year of experience in building scalable distributed systems and event-driven architectures. Expert in <strong>Golang, Next.js 15, and PostgreSQL</strong>, with a deep understanding of high-performance patterns like <strong>Transactional Outbox, Hexagonal Architecture, and gRPC</strong>. Proven track record of leading technical teams for high-traffic platforms and optimizing system latency by <strong>30%</strong>. Passionate about solving complex data consistency and concurrency challenges.
            </p>
          </div>

          {/* Tab Navigation & Content Section */}
          <div className="max-w-4xl mx-auto pt-8">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-gray-200 pb-4">
              <button
                onClick={() => setActiveTab('education')}
                className={`px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${activeTab === 'education'
                    ? 'bg-brand-dark text-white shadow-md transform -translate-y-1'
                    : 'bg-brand-neutral/10 text-brand-dark hover:bg-brand-lime hover:text-brand-dark'
                  }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${activeTab === 'experience'
                    ? 'bg-brand-dark text-white shadow-md transform -translate-y-1'
                    : 'bg-brand-neutral/10 text-brand-dark hover:bg-brand-lime hover:text-brand-dark'
                  }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab('internship')}
                className={`px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${activeTab === 'internship'
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
                  <h3 className="text-3xl text-brand-dark mb-8 border-b-2 border-brand-lime pb-2 inline-block">Education</h3>
                  <div className="border-l-2 border-brand-lime/50 pl-8 space-y-12 relative ml-4 md:ml-0">

                    {/* Edu Item 1 */}
                    <div className="relative">
                      <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-brand-lime ring-4 ring-white"></span>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                        <h4 className="text-xl font-bold text-brand-dark transition-colors leading-tight mb-2 md:mb-0 max-w-[80%]">Bachelor of Technology in Computer Science and Engineering</h4>
                        <span className="text-sm font-bold text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">2021 – 2025</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between text-gray-600 font-medium ">
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
                      <div className="flex flex-col md:flex-row md:justify-between text-gray-600 font-medium ">
                        <p className="italic text-base">J.P Education Academy, Gorakhnath</p>
                        <p className="md:ml-4 text-sm mt-1 md:mt-0">Gorakhpur, India</p>
                      </div>
                    </div>

                    {/* Edu Item 3 */}
                    <div className="relative">
                      <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-brand-lime ring-4 ring-white"></span>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                        <h4 className="text-xl font-bold text-brand-dark leading-tight mb-2 md:mb-0">High School, X (Science) ICSE</h4>
                        <span className="text-sm font-bold text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">2019 – 2021</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between text-gray-600 font-medium ">
                        <p className="italic text-base">Springer Public School, Bargadwa</p>
                        <p className="md:ml-4 text-sm mt-1 md:mt-0">Gorakhpur, India</p>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* Experience Content */}
              {activeTab === 'experience' && (
                <div className="animate-[fade-in_0.3s_ease-out]">
                  <h3 className="text-3xl text-brand-dark mb-8 border-b-2 border-brand-lime pb-2 inline-block">Professional Experience</h3>
                  <div className="border-l-2 border-brand-lime/50 pl-8 relative ml-4 md:ml-0">

                    {/* Exp Item 1 */}
                    <div className="relative">
                      <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-brand-lime ring-4 ring-white"></span>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                        <h4 className="text-xl font-bold text-brand-dark leading-tight mb-2 md:mb-0">Full Stack Developer</h4>
                        <span className="text-sm font-bold text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">Apr 2025 – Present</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between text-gray-600 font-medium mb-5">
                        <p className="italic text-base">RNR Consulting Pvt. Ltd.</p>
                        <p className="md:ml-4 text-sm mt-1 md:mt-0">New Delhi, India</p>
                      </div>
                      <ul className="list-disc list-outside ml-4 space-y-3 text-gray-700 text-sm md:text-base leading-relaxed text-justify md:text-left">
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
                  <h3 className="text-3xl text-brand-dark mb-8 border-b-2 border-brand-lime pb-2 inline-block">Internship Details</h3>
                  <div className="border-l-2 border-brand-lime/50 pl-8 relative ml-4 md:ml-0">

                    <div className="relative">
                      <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-brand-lime ring-4 ring-white"></span>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                        <h4 className="text-xl font-bold text-brand-dark leading-tight mb-2 md:mb-0">Full Stack Developer Intern</h4>
                        <span className="text-sm font-bold text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">Apr 2025 – Nov 2025</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between text-gray-600 font-medium mb-5">
                        <p className="italic text-base">RNR Consulting Pvt. Ltd.</p>
                        <p className="md:ml-4 text-sm mt-1 md:mt-0">New Delhi, India</p>
                      </div>
                      <ul className="list-disc list-outside ml-4 space-y-3 text-gray-700 text-sm md:text-base leading-relaxed text-justify md:text-left">
                        <li>Enhanced security with authentication and authorization mechanisms. </li>
                        <li>In-depth understanding Full Stack Golang with hands on experience.</li>
                        <li>Debug, test, and optimize code for performance and scalability. </li>
                        <li>Received positive feedback for problem-solving and collaboration</li>
                      </ul>
                    </div>

                    <div className="relative">
                      <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-brand-lime ring-4 ring-white"></span>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                        <h4 className="text-xl font-bold text-brand-dark leading-tight mb-2 md:mb-0">Java Developer Intern</h4>
                        <span className="text-sm font-bold text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">Dec 2024 – Feb 2025</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between text-gray-600 font-medium mb-5">
                        <p className="italic text-base">Oasis Infobyte</p>
                        <p className="md:ml-4 text-sm mt-1 md:mt-0">Remote</p>
                      </div>
                      <ul className="list-disc list-outside ml-4 space-y-3 text-gray-700 text-sm md:text-base leading-relaxed text-justify md:text-left">
                        <li>Assist in designing, developing, and maintaining Java-based applications. </li>
                        <li>Collaborate with cross-functional teams to gather and analyze requirements. </li>
                        <li>Debug, test, and optimize code for performance and scalability. </li>
                        <li>Stay updated on emerging Java technologies and industry best practices.</li>
                      </ul>
                    </div>
                    <div className="relative">
                      <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-brand-lime ring-4 ring-white"></span>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                        <h4 className="text-xl font-bold text-brand-dark leading-tight mb-2 md:mb-0">Java Full Stack Developer Intern</h4>
                        <span className="text-sm font-bold text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">July 2024 – Sep 2024</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between text-gray-600 font-medium mb-5">
                        <p className="italic text-base">Mentortca Technology Private Limited</p>
                        <p className="md:ml-4 text-sm mt-1 md:mt-0">Noida, Uttar Pradesh</p>
                      </div>
                      <ul className="list-disc list-outside ml-4 space-y-3 text-gray-700 text-sm md:text-base leading-relaxed text-justify md:text-left">
                        <li>Developed valuable interpersonal and technical skills through daily two-hour training sessions and weekly assessments, which involved webpage creation and report presentations to evaluate my progress. </li>
                        <li>Gained hands-on experience with various front-end and back-end technologies during live training sessions, significantly enhancing my practical knowledge and professional growth.</li>
                        <li>Researched various AI and ChatGPT tools in the market to improve my efficiency.</li>
                        <li>Was recognized as a candidate with exceptional potential based on my tasks, reports, and presentations.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Achievements (Positions of Responsibility) */}
          <div className="space-y-6 pt-10 pb-16">
            <h3 className="text-3xl text-brand-dark border-b-2 border-brand-lime pb-2 inline-block">Achievements & Leadership</h3>
            <div className="bg-brand-neutral/5 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h4 className="text-xl font-bold text-brand-dark leading-tight mb-2 md:mb-0">Technical Team Lead | Yukti Sangam Hackathon</h4>
                <span className="text-sm font-bold text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">May 2025 – July 2025</span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between text-gray-600 font-medium mb-5">
                <p className="italic text-base">RNR Consulting Pvt. Ltd.</p>
                <p className="md:ml-4 text-sm mt-1 md:mt-0">New Delhi, India</p>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-3 text-gray-700 text-sm md:text-base leading-relaxed text-justify md:text-left">
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
        <h3 className="text-3xl text-brand-dark border-b-2 border-brand-lime pb-2 inline-block relative z-10 text-center w-full max-w-7xl mx-auto mb-10 block">Architecture & Its Patterns Worked On</h3>

        {/* Gradient masks for smooth edges */}
        <div className="absolute left-0 top-[7.5rem] bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-[7.5rem] bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

        <div className="relative w-full overflow-hidden flex flex-nowrap py-4">
          <div className="flex animate-marquee hover:[animation-play-state:paused] w-max gap-6 pr-6">

            {/* Core Architecture Set */}
            <div className="flex items-center justify-center px-10 py-5 bg-brand-dark text-white rounded-2xl shadow-md shrink-0 border border-brand-neutral/20 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="text-xl tracking-wide">Distributed Monolith</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-lime text-brand-dark rounded-2xl shadow-md shrink-0 border border-brand-lime/50 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="text-xl tracking-wide font-bold">Monolith</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-dark text-white rounded-2xl shadow-md shrink-0 border border-brand-neutral/20 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="text-xl tracking-wide">Microservices</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-lime text-brand-dark rounded-2xl shadow-md shrink-0 border border-brand-lime/50 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="text-xl tracking-wide font-bold">Hexagonal Architecture (Ports and Adapters)</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-dark text-white rounded-2xl shadow-md shrink-0 border border-brand-neutral/20 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="text-xl tracking-wide">Event-Driven Architecture</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-lime text-brand-dark rounded-2xl shadow-md shrink-0 border border-brand-lime/50 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="text-xl tracking-wide font-bold">Transactional Outbox Pattern</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-dark text-white rounded-2xl shadow-md shrink-0 border border-brand-neutral/20 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="text-xl tracking-wide">High-Performance Patterns</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-lime text-brand-dark rounded-2xl shadow-md shrink-0 border border-brand-lime/50 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="text-xl tracking-wide font-bold">Database Concurrency Patterns</span>
            </div>

            {/* Duplicated for smooth infinite scroll */}
            <div className="flex items-center justify-center px-10 py-5 bg-brand-dark text-white rounded-2xl shadow-md shrink-0 border border-brand-neutral/20 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="text-xl tracking-wide">Distributed Monolith</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-lime text-brand-dark rounded-2xl shadow-md shrink-0 border border-brand-lime/50 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="text-xl tracking-wide font-bold">Monolith</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-dark text-white rounded-2xl shadow-md shrink-0 border border-brand-neutral/20 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="text-xl tracking-wide">Microservices</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-lime text-brand-dark rounded-2xl shadow-md shrink-0 border border-brand-lime/50 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="text-xl tracking-wide font-bold">Hexagonal Architecture (Ports and Adapters)</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-dark text-white rounded-2xl shadow-md shrink-0 border border-brand-neutral/20 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="text-xl tracking-wide">Event-Driven Architecture</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-lime text-brand-dark rounded-2xl shadow-md shrink-0 border border-brand-lime/50 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="text-xl tracking-wide font-bold">Transactional Outbox Pattern</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-dark text-white rounded-2xl shadow-md shrink-0 border border-brand-neutral/20 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="text-xl tracking-wide">High-Performance Patterns</span>
            </div>
            <div className="flex items-center justify-center px-10 py-5 bg-brand-lime text-brand-dark rounded-2xl shadow-md shrink-0 border border-brand-lime/50 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="text-xl tracking-wide font-bold">Database Concurrency Patterns</span>
            </div>

          </div>
        </div>
      </div>

      <section className="w-full bg-white pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Download Resume Button */}
          <div className="pt-20 pb-12 flex justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.print();
              }}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-brand-dark bg-brand-lime rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgb(215,225,156,0.4)] ring-4 ring-transparent hover:ring-brand-lime/20 focus:outline-none"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                <span className="mr-3">Download Resume in PDF</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </button>
          </div>

        </div>
      </section>
      </div> {/* End Web UI */}

      {/* --- PRINT UI (A4 Resume Layout, hidden on web, visible only in print) --- */}
      <div className="hidden print:block w-full max-w-[850px] mx-auto bg-white text-black text-[14px] leading-relaxed p-0 m-0 print:w-full print:max-w-none print:p-0 print:m-0">
        <style media="print">
          {`
            @page {
              margin: 10mm;
            }
          `}
        </style>
        
        {/* HEADER */}
        <div className="flex flex-row justify-between items-end mb-4 w-full">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold uppercase tracking-wide mb-1 text-black">Shristi Srivastava</h1>
            <p className="font-bold text-base text-gray-800">Full Stack Developer | Bachelor of Technology</p>
            <p className="text-gray-900 font-medium text-sm">Institute of Technology and Management Gorakhpur</p>
          </div>
          <div className="flex flex-col text-[12px] text-right font-semibold text-black leading-tight">
            <span>📱 +91-8181884950</span>
            <span>📧 <a href="mailto:shristisrivastava2211@gmail.com" className="text-black">shristisrivastava2211@gmail.com</a></span>
            <span>🔗 <a href="https://github.com/shristi2211" className="text-black">GitHub Profile</a></span>
            <span>🔗 <a href="https://www.linkedin.com/in/shristisrivastava2211/" className="text-black">LinkedIn Profile</a></span>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="mb-4">
          <h2 className="text-[13px] font-bold uppercase tracking-widest border-b-[1.5px] border-black pb-0.5 mb-2 text-black">Education</h2>
          
          <div className="mb-1 text-[13px]">
            <div className="flex justify-between font-bold text-black">
              <span>Bachelor of Technology in Computer Science and Engineering</span>
              <span>2021 – 2025</span>
            </div>
            <div className="flex justify-between italic text-gray-800">
              <span>Institute of Technology and Management, Gida</span>
              <span>Gorakhpur, India</span>
            </div>
          </div>
          
          <div className="mb-1 text-[13px]">
            <div className="flex justify-between font-bold text-black">
              <span>Intermediate, XII (PCM) CBSE</span>
              <span>2019 – 2021</span>
            </div>
            <div className="flex justify-between italic text-gray-800">
              <span>J.P Education Academy, Gorakhnath</span>
              <span>Gorakhpur, India</span>
            </div>
          </div>

          <div className="text-[13px]">
            <div className="flex justify-between font-bold text-black">
              <span>High School, X (Science) ICSE</span>
              <span>2019</span>
            </div>
            <div className="flex justify-between italic text-gray-800">
              <span>Springer Public School, Bargadwa</span>
              <span>Gorakhpur, India</span>
            </div>
          </div>
        </div>

        {/* PROFESSIONAL SUMMARY */}
        <div className="mb-4">
          <h2 className="text-[13px] font-bold uppercase tracking-widest border-b-[1.5px] border-black pb-0.5 mb-2 text-black">Professional Summary</h2>
          <p className="text-justify text-gray-900 leading-[1.4] text-[13px]">
            Full Stack Developer with 1+ year of experience in building scalable distributed systems and event-driven architectures. Expert in <strong>Golang, Next.js 15, and PostgreSQL</strong>, with a deep understanding of high-performance patterns like <strong>Transactional Outbox, Hexagonal Architecture, and gRPC</strong>. Proven track record of leading technical teams for high-traffic platforms and optimizing system latency by <strong>30%</strong>. Passionate about solving complex data consistency and concurrency challenges.
          </p>
        </div>

        {/* TECHNICAL SKILLS */}
        <div className="mb-4 block">
          <h2 className="text-[13px] font-bold uppercase tracking-widest border-b-[1.5px] border-black pb-0.5 mb-2 text-black">Technical Skills</h2>
          <ul className="space-y-0.5 text-gray-900 leading-[1.4] text-[13px]">
            <li><strong>Languages:</strong> Golang, TypeScript, JavaScript (ES6+), SQL, Java, Dart, Python, C++</li>
            <li><strong>Frontend/Mobile:</strong> Next.js, React.js, Tailwind CSS, HTML5/CSS3, Flutter</li>
            <li><strong>Backend & Distributed:</strong> Node.js, Gin, Echo, gRPC, NATS JetStream, GraphQL, WebSockets, REST APIs</li>
            <li><strong>Architecture:</strong> Distributed Monolith, Microservices, Transactional Outbox Pattern, Hexagonal Architecture</li>
            <li><strong>Infrastructure:</strong> AWS (EC2, S3, Lambda), Docker, Git/GitHub, Kong API Gateway</li>
            <li><strong>Databases:</strong> PostgreSQL, Redis, MySQL, MongoDB</li>
          </ul>
        </div>

        {/* EXPERIENCE */}
        <div className="mb-4 relative">
          <h2 className="text-[13px] font-bold uppercase tracking-widest border-b-[1.5px] border-black pb-0.5 mb-2 text-black">Experience</h2>
          
          <div className="mb-2 text-[13px]">
            <div className="flex justify-between font-bold text-black">
              <span>Full Stack Developer <span className="font-normal italic">| RNR Consulting Pvt. Ltd.</span></span>
              <span>Apr 2025 – Present | New Delhi, India</span>
            </div>
            <ul className="list-disc list-outside ml-[18px] mt-1 space-y-0.5 text-gray-900 text-justify leading-[1.3] text-[13px]">
              <li>Architected a <strong>Distributed Monolith</strong> for NHIT/Consent Manager via <strong>Kong API Gateway</strong>, centralizing authentication and routing for modular services on a shared <strong>PostgreSQL</strong> instance.</li>
              <li>Engineered a high-reliability <strong>Notification System</strong> using <strong>Transactional Outbox</strong> and <strong>NATS JetStream</strong>, ensuring 100% delivery for 120+ concurrent events and solving the Dual-Write problem.</li>
              <li>Optimized <strong>Golang</strong> consumers with <strong>PostgreSQL SKIP LOCKED</strong> logic, eliminating database resource contention and deadlocks during high-traffic bursts.</li>
              <li>Developed an <strong>ERP system</strong> using <strong>gRPC, GraphQL, and Hexagonal Architecture</strong>, achieving 100% decoupling between business logic and infrastructure layers.</li>
              <li>Reduced API response latency by <strong>30%</strong> through complex <strong>SQL query refactoring</strong> and strategic indexing.</li>
              <li>Integrated <strong>WebSockets</strong> for real-time synchronization between <strong>Next.js</strong> and <strong>Flutter</strong>, significantly reducing in-app notification latency.</li>
              <li>Automated containerized deployments using <strong>Docker</strong> on <strong>AWS (ECS, S3, Lambda)</strong>, implementing auto-scaling to maintain <strong>99.9% system uptime</strong>.</li>
            </ul>
          </div>
        </div>

        {/* INTERNSHIPS */}
        <div className="mb-4 relative print:break-before-page">
          <h2 className="text-[13px] font-bold uppercase tracking-widest border-b-[1.5px] border-black pb-0.5 mb-2 text-black">Internships</h2>
          
          <div className="mb-2 text-[13px]">
            <div className="flex justify-between font-bold text-black">
              <span>Full Stack Developer Intern <span className="font-normal italic">| RNR Consulting Pvt. Ltd.</span></span>
              <span>Apr 2025 – Nov 2025 | New Delhi, India</span>
            </div>
            <ul className="list-disc list-outside ml-[18px] mt-1 space-y-0.5 text-gray-900 text-justify leading-[1.3]">
              <li>Enhanced security with robust authentication and authorization mechanisms across internal tools.</li>
              <li>Developed an in-depth understanding of Full Stack Golang implementation through hands-on architecture design.</li>
              <li>Debugged, tested, and optimized microservices for maximum performance and horizontal scalability.</li>
            </ul>
          </div>

          <div className="mb-2 text-[13px]">
            <div className="flex justify-between font-bold text-black">
              <span>Java Developer Intern <span className="font-normal italic">| Oasis Infobyte</span></span>
              <span>Dec 2024 – Feb 2025 | Remote</span>
            </div>
            <ul className="list-disc list-outside ml-[18px] mt-1 space-y-0.5 text-gray-900 text-justify leading-[1.3]">
              <li>Assisted in designing, developing, and maintaining enterprise Java-based applications.</li>
            </ul>
          </div>

          <div className="mb-1 text-[13px]">
            <div className="flex justify-between font-bold text-black">
              <span>Java Full Stack Developer Intern <span className="font-normal italic">| Mentortca Technology</span></span>
              <span>July 2024 – Sep 2024 | Noida, UP</span>
            </div>
            <ul className="list-disc list-outside ml-[18px] mt-1 space-y-0.5 text-gray-900 text-justify leading-[1.3]">
              <li>Enhanced practical knowledge of frontend/backend technologies through active development phases and live training sessions.</li>
            </ul>
          </div>
        </div>

        {/* POSITIONS OF RESPONSIBILITY */}
        <div className="mb-2 relative text-[13px]">
          <h2 className="text-[13px] font-bold uppercase tracking-widest border-b-[1.5px] border-black pb-0.5 mb-2 text-black">Positions of Responsibility</h2>
          
          <div className="mb-1 text-[13px]">
            <div className="flex justify-between font-bold text-black">
              <span>Technical Team Lead | Yukti Sangam Hackathon <span className="font-normal italic">| RXR Consulting</span></span>
              <span>May 2025 – July 2025 | New Delhi, India</span>
            </div>
            <ul className="list-disc list-outside ml-[18px] mt-1 space-y-0.5 text-gray-900 text-justify leading-[1.3]">
              <li>Spearheaded a cross-functional team of 5+ developers to deliver the official hackathon platform, maintaining 100% stability for <strong>300+ active users</strong> during peak registration periods.</li>
              <li>Managed the <strong>end-to-end SDLC</strong>, from architecting system modules to conducting code reviews, ensuring a high-performance registration and automated scoring engine.</li>
              <li>Mentored junior engineers on <strong>clean code principles</strong> and API integration.</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
}
