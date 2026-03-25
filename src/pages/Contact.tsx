import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // TODO: Paste your Google Apps Script Web App URL here!
  const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzc1SbZ23j3BuckIttBpZB_wGBe33EfdfIhApWqw3d5Ke1gcBfIPgEzLaltBWAaIemn/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        // 'no-cors' is important for Google Apps Script otherwise it throws CORS errors in the browser, 
        // even though the script runs successfully on Google's servers.
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      // With 'no-cors', the response is opaque and response.ok is false, 
      // but if we didn't hit a network error (like being offline), it usually means success
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="w-full">
      <section className="bg-brand-lime pt-28 md:pt-32 pb-24 px-8 md:px-12 lg:px-24 min-h-[70vh] flex flex-col items-center justify-center">
         <h2 className="text-5xl md:text-6xl text-brand-dark mb-8 text-center tracking-wide">Get In Touch</h2>
         <p className="text-xl text-brand-dark text-center max-w-2xl mb-12">
           Looking to build something high-performance and beautiful? Let’s connect. Drop me a message for project inquiries, representation, or just to say hi.
         </p>

         <div className="w-full max-w-2xl bg-white p-8 md:p-12 rounded shadow-xl relative overflow-hidden">
           {status === 'success' ? (
             <div className="flex flex-col items-center justify-center py-10 animate-[fade-in_0.5s_ease-out]">
               <div className="w-16 h-16 bg-brand-lime text-brand-dark rounded-full flex items-center justify-center mb-6">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                 </svg>
               </div>
               <h3 className="text-3xl text-brand-dark mb-4">Message Sent!</h3>
               <p className="text-gray-600 text-center mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
               <button 
                 onClick={() => setStatus('idle')}
                 className="bg-brand-dark text-white px-8 py-3 rounded hover:bg-opacity-90 transition font-semibold "
               >
                 Send Another Message
               </button>
             </div>
           ) : (
             <form className="space-y-6 animate-[fade-in_0.5s_ease-out]" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1">First Name *</label>
                    <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark" required disabled={status === 'loading'} />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1">Last Name *</label>
                    <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark" required disabled={status === 'loading'} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark" required disabled={status === 'loading'} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                  <textarea id="message" value={formData.message} onChange={handleChange} rows={5} className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark" required disabled={status === 'loading'}></textarea>
                </div>
                
                {status === 'error' && (
                  <p className="text-red-600 font-semibold text-sm">Something went wrong. Please try again or email me directly.</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-brand-dark text-white font-semibold py-4 rounded hover:bg-opacity-90 transition shadow flex justify-center items-center disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                       <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                       </svg>
                       Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
             </form>
           )}
         </div>
      </section>
    </div>
  );
}
