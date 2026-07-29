import { Menu, ExternalLink } from 'lucide-react';
import { NeoButton } from '../../components/NeoButton';

interface AdminTopbarProps {
  onMenuClick: () => void;
  title: string;
}

export function AdminTopbar({ onMenuClick, title }: AdminTopbarProps) {
  return (
    <header className="h-16 bg-white border-b-[3px] border-black shadow-[0px_4px_0px_0px_#000] flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          aria-label="Toggle sidebar menu"
          className="lg:hidden p-2 hover:bg-secondary border-[3px] border-transparent hover:border-black transition-colors"
        >
          <Menu size={24} />
        </button>
        <h2 className="font-heading text-xl md:text-2xl font-black uppercase">{title}</h2>
      </div>

      <div className="flex items-center gap-4">
        <NeoButton href="/" variant="secondary" className="hidden sm:flex items-center gap-2">
          Preview Site <ExternalLink size={16} />
        </NeoButton>
      </div>
    </header>
  );
}
