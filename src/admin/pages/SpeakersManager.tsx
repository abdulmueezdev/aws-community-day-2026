import { useState } from 'react';
import { Pencil, Trash2, Eye, EyeOff } from 'lucide-react';
import { NeoButton } from '../../components/NeoButton';
import { NeoCard } from '../../components/NeoCard';
import { NeoBadge } from '../../components/NeoBadge';
import { SpeakerModal } from '../components/SpeakerModal';
import { ExportConfig } from '../components/ExportConfig';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { defaultSiteData, type Speaker } from '../../data/siteData';

export function SpeakersManager() {
  const [speakers, setSpeakers] = useState(defaultSiteData.speakers);
  const [filter, setFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSpeaker, setEditingSpeaker] = useState<Speaker | null>(null);
  
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const filteredSpeakers = speakers.filter(s => filter === 'All' || s.sessionType.toLowerCase() === filter.toLowerCase());

  const handleSave = (speakerData: Speaker) => {
    if (editingSpeaker) {
      setSpeakers(speakers.map(s => s.id === speakerData.id ? speakerData : s));
    } else {
      setSpeakers([...speakers, { ...speakerData, id: Date.now().toString() }]);
    }
    setIsModalOpen(false);
    setEditingSpeaker(null);
  };

  const handleDelete = () => {
    if (deletingId) {
      setSpeakers(speakers.filter(s => s.id !== deletingId));
    }
    setIsConfirmOpen(false);
    setDeletingId(null);
  };

  const currentConfig = { ...defaultSiteData, speakers };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h3 className="font-heading text-2xl font-black uppercase">
          Speakers ({speakers.length})
        </h3>
        <NeoButton 
          variant="primary" 
          onClick={() => { setEditingSpeaker(null); setIsModalOpen(true); }}
        >
          + ADD SPEAKER
        </NeoButton>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {['All', 'Keynote', 'Panel', 'Workshop'].map(tab => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`
              px-4 py-2 font-bold border-[3px] border-black transition-colors whitespace-nowrap
              ${filter === tab ? 'bg-black text-white' : 'bg-white hover:bg-gray-100 shadow-neo-sm'}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSpeakers.map(speaker => (
          <NeoCard key={speaker.id} className="bg-white p-0 overflow-hidden flex flex-col">
            <div className="relative h-48 bg-gray-200 border-b-[3px] border-black">
              {speaker.photoUrl ? (
                <img src={speaker.photoUrl} alt={speaker.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-bold text-gray-400">No Image</div>
              )}
              <div className="absolute top-2 right-2">
                <NeoBadge className={speaker.sessionType === 'keynote' ? 'bg-primary' : speaker.sessionType === 'panel' ? 'bg-tertiary' : 'bg-secondary'}>
                  {speaker.sessionType.toUpperCase()}
                </NeoBadge>
              </div>
            </div>
            
            <div className="p-4 flex-1 flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-heading text-xl font-black uppercase line-clamp-1">{speaker.name}</h4>
                  <p className="font-bold text-gray-600 text-sm line-clamp-1">{speaker.role} @ {speaker.company}</p>
                </div>
              </div>
              <p className="font-bold text-sm mt-2 line-clamp-2">{speaker.sessionTitle}</p>
            </div>

            <div className="p-4 border-t-[3px] border-black bg-gray-50 flex justify-end gap-2">
              <button 
                className="p-2 hover:bg-gray-200 border-[3px] border-transparent hover:border-black transition-colors"
                onClick={() => {
                  setSpeakers(speakers.map(s => s.id === speaker.id ? { ...s, isVisible: !s.isVisible } : s));
                }}
                title="Toggle Visibility"
              >
                {speaker.isVisible ? <Eye size={20} /> : <EyeOff size={20} className="text-gray-400" />}
              </button>
              <button 
                className="p-2 hover:bg-teal-100 border-[3px] border-transparent hover:border-black transition-colors text-tertiary"
                onClick={() => { setEditingSpeaker(speaker); setIsModalOpen(true); }}
                title="Edit"
              >
                <Pencil size={20} />
              </button>
              <button 
                className="p-2 hover:bg-red-100 border-[3px] border-transparent hover:border-black transition-colors text-red-500"
                onClick={() => { setDeletingId(speaker.id); setIsConfirmOpen(true); }}
                title="Delete"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </NeoCard>
        ))}
      </div>

      <SpeakerModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        speaker={editingSpeaker || undefined}
        onSave={handleSave}
      />

      <ConfirmDialog
        isOpen={isConfirmOpen}
        title="Delete Speaker"
        message="Are you sure you want to delete this speaker? This action cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => setIsConfirmOpen(false)}
      />

      <ExportConfig data={currentConfig} />
    </div>
  );
}
