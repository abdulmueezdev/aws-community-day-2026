import { useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { NeoButton } from '../../components/NeoButton';
import { NeoCard } from '../../components/NeoCard';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { defaultSiteData } from '../../data/siteData';

export function OrganizersManager() {
  const [organizers, setOrganizers] = useState(defaultSiteData.organizers);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = () => {
    if (deletingId) {
      setOrganizers(organizers.filter(o => o.id !== deletingId));
    }
    setIsConfirmOpen(false);
    setDeletingId(null);
  };



  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h3 className="font-heading text-2xl font-black uppercase">
          Organizers ({organizers.length})
        </h3>
        <NeoButton variant="primary">
          + ADD ORGANIZER
        </NeoButton>
      </div>

      <div className="flex overflow-x-auto gap-6 pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:overflow-visible">
        {organizers.map(organizer => (
          <NeoCard key={organizer.id} className="bg-white p-6 flex flex-col items-center text-center min-w-[240px] md:min-w-0">
            <div className="w-32 h-32 rounded-full overflow-hidden border-[3px] border-black bg-gray-100 mb-4 shadow-neo-sm flex-shrink-0">
              {organizer.photoUrl ? (
                <img src={organizer.photoUrl} alt={organizer.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-bold text-gray-400">No Image</div>
              )}
            </div>
            
            <h4 className="font-heading text-xl font-black uppercase line-clamp-1">{organizer.name}</h4>
            <p className="font-bold text-gray-500 uppercase text-xs tracking-widest mt-1">{organizer.role}</p>
            <p className="font-bold text-sm mt-2">{organizer.organization}</p>
            
            <div className="flex gap-2 mt-6 w-full justify-center">
              <button className="p-2 hover:bg-teal-100 border-[3px] border-transparent hover:border-black transition-colors text-tertiary">
                <Pencil size={20} />
              </button>
              <button 
                className="p-2 hover:bg-red-100 border-[3px] border-transparent hover:border-black transition-colors text-red-500"
                onClick={() => { setDeletingId(organizer.id); setIsConfirmOpen(true); }}
              >
                <Trash2 size={20} />
              </button>
            </div>
          </NeoCard>
        ))}
      </div>

      <ConfirmDialog
        isOpen={isConfirmOpen}
        title="Delete Organizer"
        message="Are you sure you want to delete this organizer?"
        onConfirm={handleDelete}
        onCancel={() => setIsConfirmOpen(false)}
      />

    </div>
  );
}
