import { useState, useEffect } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'result'>('vision');
  
  // Typewriter Effect Logic
  const [typewriterText, setTypewriterText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const phrases = ['Software developer', 'Full Stack developer'];
    
    const handler = setTimeout(() => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setTypewriterText(isDeleting 
        ? fullText.substring(0, typewriterText.length - 1) 
        : fullText.substring(0, typewriterText.length + 1)
      );

      // Speed up when deleting
      setTypingSpeed(isDeleting ? 40 : 100);

      // Pause at the end of the word or beginning of a new word
      if (!isDeleting && typewriterText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typewriterText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(handler);
  }, [typewriterText, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="w-full flex-col mt-24">
      {/* 60/40 Two-Column Section */}
      <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
         <h2 className="text-4xl md:text-5xl text-brand-dark mb-16 text-center tracking-wide">About Me</h2>
         
         <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-12 lg:gap-20 items-center lg:items-start">
            
            {/* 60% Column - Image, Typewriter Intro, and Tabs */}
            <div className="w-full lg:w-[60%] flex flex-col items-center text-center space-y-8">
               <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-brand-lime/20 shadow-2xl relative">
                 <img 
                   src="/images/headshot-main.png" 
                   alt="Shristi Srivastava" 
                   className="w-full h-full object-cover object-top"
                 />
                 <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none"></div>
               </div>

               <div className="space-y-3">
                 <h3 className="text-3xl md:text-4xl text-brand-dark font-bold">
                   Hi, I'm Shristi Srivastava
                 </h3>
                 <p className="text-xl md:text-2xl text-brand-green font-semibold h-8 md:h-10 flex items-center justify-center">
                   &nbsp; 
                   <span className="text-brand-dark border-r-2 border-brand-dark pr-1 animate-pulse">
                     {typewriterText}
                   </span>
                 </p>
               </div>

               {/* Interactive Tabs Section Moved Inside 60% Column */}
               <div className="w-full pt-8 lg:pt-12">
                 {/* Tabs */}
                 <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 border-b border-gray-200 pb-4">
                   <button
                     onClick={() => setActiveTab('vision')}
                     className={`px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                       activeTab === 'vision'
                         ? 'bg-brand-dark text-white shadow-md transform -translate-y-1'
                         : 'bg-brand-neutral/10 text-brand-dark hover:bg-brand-lime hover:text-brand-dark'
                     }`}
                   >
                     Vision
                   </button>
                   <button
                     onClick={() => setActiveTab('mission')}
                     className={`px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                       activeTab === 'mission'
                         ? 'bg-brand-dark text-white shadow-md transform -translate-y-1'
                         : 'bg-brand-neutral/10 text-brand-dark hover:bg-brand-lime hover:text-brand-dark'
                     }`}
                   >
                     Mission
                   </button>
                   <button
                     onClick={() => setActiveTab('result')}
                     className={`px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                       activeTab === 'result'
                         ? 'bg-brand-dark text-white shadow-md transform -translate-y-1'
                         : 'bg-brand-neutral/10 text-brand-dark hover:bg-brand-lime hover:text-brand-dark'
                     }`}
                   >
                     Result
                   </button>
                 </div>

                 {/* Tab Content */}
                 <div className="min-h-[300px] text-left">
                   {/* Vision Content */}
                   {activeTab === 'vision' && (
                     <div className="animate-[fade-in_0.3s_ease-out]">
                       <h3 className="text-2xl md:text-3xl text-brand-dark mb-6 border-b-2 border-brand-lime pb-2 inline-block">My Vision</h3>
                       <div className="border-l-2 border-brand-lime/50 pl-6 md:pl-8 relative ml-2 md:ml-0">
                         <div className="relative">
                           <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-brand-lime ring-4 ring-white"></span>
                           <h4 className="text-lg md:text-xl font-bold text-brand-dark leading-tight mb-3">Shaping the Future of Digital Interaction</h4>
                           <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                             To build digital ecosystems where technology becomes invisible, replaced entirely by frictionless human experiences. I envision a web that is not just functional, but deeply intuitive and beautifully crafted — a standard where robust architecture and striking design are inseparable.
                           </p>
                         </div>
                       </div>
                     </div>
                   )}

                   {/* Mission Content */}
                   {activeTab === 'mission' && (
                     <div className="animate-[fade-in_0.3s_ease-out]">
                       <h3 className="text-2xl md:text-3xl text-brand-dark mb-6 border-b-2 border-brand-lime pb-2 inline-block">My Mission</h3>
                       <div className="border-l-2 border-brand-lime/50 pl-6 md:pl-8 relative ml-2 md:ml-0">
                         <div className="relative">
                           <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-brand-lime ring-4 ring-white"></span>
                           <h4 className="text-lg md:text-xl font-bold text-brand-dark leading-tight mb-3">Engineering Elegance from Chaos</h4>
                           <ul className="list-disc list-outside ml-4 md:ml-6 space-y-2 md:space-y-3 text-gray-700 text-base md:text-lg leading-relaxed">
                             <li><strong>Bridge the Gap:</strong> Unite backend complexity with frontend simplicity, ensuring powerful systems feel effortless to the user.</li>
                             <li><strong>Relentless Optimization:</strong> Continuously refine code and architecture to shave milliseconds off latency, because speed is a feature.</li>
                             <li><strong>Push Boundaries:</strong> Implement modern architectures like Distributed Monoliths and Event-Driven systems to solve scaling challenges before they happen.</li>
                             <li><strong>Aesthetic Integrity:</strong> Guarantee that every line of code ultimately serves beautiful, accessible, and inclusive design.</li>
                           </ul>
                         </div>
                       </div>
                     </div>
                   )}

                   {/* Result Content */}
                   {activeTab === 'result' && (
                     <div className="animate-[fade-in_0.3s_ease-out]">
                       <h3 className="text-2xl md:text-3xl text-brand-dark mb-6 border-b-2 border-brand-lime pb-2 inline-block">The Results</h3>
                       <div className="border-l-2 border-brand-lime/50 pl-6 md:pl-8 relative ml-2 md:ml-0">
                         <div className="relative">
                           <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-brand-lime ring-4 ring-white"></span>
                           <h4 className="text-lg md:text-xl font-bold text-brand-dark leading-tight mb-3">Impact Driven By Code</h4>
                           <ul className="list-disc list-outside ml-4 md:ml-6 space-y-2 md:space-y-3 text-gray-700 text-base md:text-lg leading-relaxed">
                             <li>Architected high-availability services handling large-scale data synchronization smoothly, ensuring 99.9% uptime.</li>
                             <li>Reduced API latency by 30% yielding demonstrably better user retention and engagement on enterprise applications.</li>
                             <li>Led cross-functional teams to deliver massive platforms successfully under tight deadlines and peak concurrent loads.</li>
                             <li>Crafted pixel-perfect user interfaces that elevated brand perception and created memorable interactions.</li>
                           </ul>
                         </div>
                       </div>
                     </div>
                   )}
                 </div>
               </div>
            </div>

            {/* 40% Column - Poetry */}
            <div className="w-full lg:w-[40%] text-lg md:text-xl text-gray-700 leading-relaxed text-center lg:text-left space-y-6 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-gray-100 lg:pl-12">
               <p>
                 Lines of code are my ink,<br/>
                 the terminal—where I design and think.
               </p>

               <p>
                 At the crossroads of logic and imagination,,<br/>
                 I turn ideas into real-world creation.
               </p>

               <p>
                 I think in systems, structured and tight,<br/>
                 but build for people—their needs in sight.
               </p>

               <p>
                 Because today, “good” won’t suffice,<br/>
                 software must feel seamless, intuitive, and precise.
               </p>

               <p>
                 Interfaces that flow, effortless and clear,<br/>
                 systems that scale without breaking under fear.
               </p>

               <p>
                 I take complex problems, messy and wide,<br/>
                 and refine them to simplicity—layer by layer, inside.
               </p>

               <p>
                 Until chaos turns calm, and solutions appear,<br/>
                 elegant, intuitive, and easy to steer.
               </p>

               <p>
                 I don’t just fix bugs buried in code,<br/>
                 I solve real problems that lighten the load.
               </p>

               <p>
                 I don’t just write code line by line,<br/>
                 I build products that shape how people connect and align.
               </p>
            </div>

         </div>
      </section>
    </div>
  );
}
