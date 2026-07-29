import { defaultSiteData } from '../data/siteData';
import { ScrollReveal } from '../components/ScrollReveal';

export function Footer() {
  const { settings } = defaultSiteData;

  const handleAdminClick = () => {
    window.location.href = '/admin/login';
  };

  return (
    <ScrollReveal>
      <footer className="relative bg-footer border-t-[3px] border-black overflow-hidden py-12 px-6">
        {/* Animated Background Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Floating neo-brutalist shapes */}
          <div className="absolute w-72 h-72 bg-primary/30 border-[3px] border-black -top-24 -left-24 animate-float" />
          <div className="absolute w-56 h-56 bg-secondary/30 border-[3px] border-black top-1/3 -right-16 animate-float-delayed" />
          <div className="absolute w-40 h-40 bg-tertiary/30 border-[3px] border-black bottom-0 left-1/4 animate-float-slow" />
          <div className="absolute w-64 h-64 bg-primary/20 border-[3px] border-black top-0 right-1/3 animate-float-reverse" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center mb-12">
            <img 
              src="https://placehold.co/150x50/000000/FFFFFF?text=LOGO" 
              alt="Logo" 
              width="150"
              height="50"
              className="mb-6 rounded-none border-[3px] border-white h-[50px] w-auto"
            />
            <p className="font-body text-gray-400 text-center max-w-md">
              {settings.seoDescription}
            </p>
          </div>
  
          {/* Socials */}
          <div className="flex flex-col items-center gap-4 mb-16">
            <span className="font-heading font-semibold uppercase tracking-wider text-sm">Follow us</span>
            <div className="flex gap-4">
              {settings.socialInstagram !== '#' && (
                <a href={settings.socialInstagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-tertiary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              )}
              {/* Can add more socials here from settings if needed */}
            </div>
          </div>
  
          {/* Bottom */}
          <div className="w-full border-t-[3px] border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-body text-gray-500 uppercase tracking-widest gap-4">
            <span>{settings.footerCopyright}</span>
            <span>{settings.footerCredits}</span>
          </div>
  
        </div>
  
        {/* Admin Login — Bottom Left */}
        <div className="absolute bottom-4 left-4 z-20">
          <button
            onClick={handleAdminClick}
            className="group relative px-4 py-2 bg-black border-[3px] border-black shadow-neo-sm overflow-hidden hover:shadow-neo transition-all"
            aria-label="Admin Login"
          >
            <span className="relative z-10 font-heading text-xs font-bold uppercase tracking-wider text-white group-hover:text-black transition-colors">
              Admin
            </span>
            <div className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200" />
          </button>
        </div>
      </footer>
    </ScrollReveal>
  );
}
