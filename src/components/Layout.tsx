import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we're on the home page for header styling
  const isHome = location.pathname === '/';

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.confirm("Want to send an email?")) {
      // Directs to their email as primary and also puts it in CC as requested
      window.location.href = "mailto:shristisrivastava2211@gmail.com?cc=shristisrivastava2211@gmail.com";
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden relative">
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 px-8 py-5 flex justify-between items-center ${scrolled || !isHome ? 'bg-white shadow-md py-4' : 'bg-transparent'}`}>
        {/* Logo always stays dark against the lime background side of the split screen */}
        <Link to="/" className={`font-serif text-2xl tracking-wide text-brand-dark`}>
          Shristi's Innovations
        </Link>
        <nav className={`hidden md:flex gap-8 items-center font-sans font-medium tracking-wide transition-colors duration-300 ${scrolled || !isHome ? 'text-brand-dark' : 'text-white drop-shadow-md'}`}>
          <Link to="/" className="hover:text-brand-lime transition-colors">Home</Link>
          <Link to="/about" className="hover:text-brand-lime transition-colors">About</Link>
          <Link to="/resume" className="hover:text-brand-lime transition-colors">Resume</Link>
          <button onClick={handleEmailClick} className="hover:text-brand-lime transition-colors cursor-pointer">Email</button>
          
          {/* Dynamic Contact Button */}
          <Link 
            to="/contact" 
            className={`px-6 py-2 rounded transition-all duration-300 ${
              scrolled || !isHome 
                ? 'bg-brand-dark text-white hover:bg-opacity-90 shadow-sm' 
                : 'bg-white text-brand-dark hover:bg-gray-100 shadow-md'
            }`}
          >
            Contact Me
          </Link>
        </nav>
      </header>

      <main className="flex-1 w-full mt-[72px] md:mt-0">
        <Outlet />
      </main>

      <footer className="bg-brand-dark text-white py-16 px-8 flex justify-center flex-col items-center">
        <h2 className="font-serif text-3xl mb-6">Shristi Srivastava</h2>
        <p 
          className="font-sans mb-6 cursor-pointer hover:text-brand-lime transition-colors border-b border-transparent hover:border-brand-lime"
          onClick={handleEmailClick}
        >
          shristisrivastava2211@gmail.com
        </p>
        <div className="flex gap-8">
          <a href="https://github.com/shristi2211" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-lime transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Github
          </a>
          <a href="https://www.linkedin.com/in/shristi-srivastava-990245263/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-lime transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
