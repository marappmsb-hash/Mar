import React, { useState, useEffect, useRef } from 'react';
import {
  Globe, Utensils, ArrowRight, Music,
  Sparkles, Heart, User, Navigation,
  ChevronRight, Bookmark, Compass,
  Fingerprint, MapPin, Search, Bell,
  Menu, Share2, Clock, MessageSquare,
  Filter, PlayCircle, X, Lock, Layers,
  BookOpen, Mic, Flame, Share, Plus,
  Store, Calendar, Coffee, Check, RotateCcw,
  Timer, Users, Map
} from 'lucide-react';

// --- Design Tokens ---
const LOGO_COLOR = '#E6C9A8';
const ACCENT_RED = '#8B1E1E';
const GOLD = '#D4AF37';

// --- Mock Data ---
const MOCK_USER = {
  uid: 'me-01',
  name: 'Abeba',
  origin: 'Ethiopian',
  location: 'London, UK',
  stack: [
    { type: 'rhythm', value: 'Ethio-Jazz', icon: <Music className="w-4 h-4" />, color: '#4A3728' },
    { type: 'spice', value: 'Berbere & Cardamom', icon: <Flame className="w-4 h-4" />, color: '#8B1E1E' },
    { type: 'legacy', value: 'Bete Amhara', icon: <Layers className="w-4 h-4" />, color: '#D4AF37' }
  ]
};

const SWIPE_CARDS = [
  {
    id: 'u1',
    name: 'Kwame',
    origin: 'Ghanaian',
    bio: "Looking for the best Jollof in Dalston.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    stack: [
      { type: 'rhythm', value: 'Highlife', icon: <Music className="w-4 h-4" />, color: '#2A3B4A' },
      { type: 'spice', value: 'Scotch Bonnet', icon: <Flame className="w-4 h-4" />, color: '#4A2A2A' },
      { type: 'legacy', value: 'Ashanti', icon: <Layers className="w-4 h-4" />, color: '#5A4A2A' }
    ]
  },
  {
    id: 'u2',
    name: 'Sofia',
    origin: 'Mexican',
    bio: "Architect by day, salsa dancer by night.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    stack: [
      { type: 'rhythm', value: 'Cumbia', icon: <Music className="w-4 h-4" />, color: '#1A3A3A' },
      { type: 'spice', value: 'Smoked Chipotle', icon: <Flame className="w-4 h-4" />, color: '#6A2A1A' },
      { type: 'legacy', value: 'Oaxacan', icon: <Layers className="w-4 h-4" />, color: '#3A4A1A' }
    ]
  }
];

const DIRECTORY_DATA = [
  { id: 1, type: 'restaurant', name: 'Lalibela Ethiopian', category: 'Roots', distance: '0.8 miles', rating: 4.9, isBusiness: true, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400' },
  { id: 2, type: 'event', name: 'Meskel Celebration', category: 'Roots', distance: '1.2 miles', host: 'Addis Community', image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=400' },
  { id: 3, type: 'activity', name: 'Oaxacan Pottery Workshop', category: 'Expedition', distance: '2.5 miles', host: 'Maria G.', image: 'https://images.unsplash.com/photo-1565191999001-551c187427bb?auto=format&fit=crop&q=80&w=400' },
  { id: 4, type: 'restaurant', name: 'Tacos El Pastor', category: 'Expedition', distance: '3.1 miles', isBusiness: true, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=400' },
];

// --- Sub-Components ---

const IdentityStack = ({ stack, isComparing, small = false }) => (
  <div className={`relative ${small ? 'h-48 w-36' : 'h-72 w-56'} perspective-1000 mx-auto`}>
    {stack.map((card, i) => (
      <div
        key={card.type}
        className="absolute inset-0 rounded-2xl border border-white/10 p-4 shadow-2xl transition-all duration-700 ease-out"
        style={{
          backgroundColor: card.color,
          transform: isComparing
            ? `translateX(${i * 12}px) translateY(${i * -12}px) rotateY(-10deg)`
            : `translateY(${i * 6}px) scale(${1 - i * 0.05})`,
          zIndex: 10 - i,
          opacity: 1 - i * 0.2
        }}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="flex justify-between items-start">
            {card.icon}
            <span className="text-[7px] uppercase tracking-[0.2em] font-bold opacity-50">{card.type}</span>
          </div>
          <p className={`${small ? 'text-[10px]' : 'text-xs'} font-serif italic leading-tight`}>{card.value}</p>
        </div>
      </div>
    ))}
  </div>
);

const GatheringsView = () => {
  const [matchType, setMatchType] = useState('roots'); // 'roots' or 'random'
  const [isJoined, setIsJoined] = useState(false);

  return (
    <div className="max-w-2xl mx-auto py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-serif italic text-white mb-4">The Thursday Ritual</h2>
        <p className="text-stone-500 text-sm tracking-widest uppercase">Every Thursday at 7:00 PM. A mystery table for six.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Roots Match Option */}
        <button
          onClick={() => setMatchType('roots')}
          className={`relative p-8 rounded-[2rem] border transition-all text-left group ${matchType === 'roots' ? 'bg-[#D4AF37]/10 border-[#D4AF37]' : 'bg-stone-900 border-stone-800'}`}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${matchType === 'roots' ? 'bg-[#D4AF37] text-black' : 'bg-stone-800 text-stone-500'}`}>
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-serif italic text-white mb-2">Roots Table</h3>
          <p className="text-xs text-stone-500 leading-relaxed">Dine with 5 others sharing your {MOCK_USER.origin} heritage. Reconnect with home.</p>
          {matchType === 'roots' && <Check className="absolute top-8 right-8 w-5 h-5 text-[#D4AF37]" />}
        </button>

        {/* Global Match Option */}
        <button
          onClick={() => setMatchType('random')}
          className={`relative p-8 rounded-[2rem] border transition-all text-left group ${matchType === 'random' ? 'bg-[#8B1E1E]/10 border-[#8B1E1E]' : 'bg-stone-900 border-stone-800'}`}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${matchType === 'random' ? 'bg-[#8B1E1E] text-white' : 'bg-stone-800 text-stone-500'}`}>
            <Globe className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-serif italic text-white mb-2">Global Expedition</h3>
          <p className="text-xs text-stone-500 leading-relaxed">A randomized mix of cultures. Explore a new world through a shared meal.</p>
          {matchType === 'random' && <Check className="absolute top-8 right-8 w-5 h-5 text-[#8B1E1E]" />}
        </button>
      </div>

      <div className="bg-stone-900 border border-stone-800 rounded-[3rem] p-12 text-center overflow-hidden relative">
        <div className="relative z-10">
          <div className="flex justify-center gap-8 mb-8 text-white">
            <div className="flex flex-col">
              <span className="text-4xl font-serif italic">03</span>
              <span className="text-[8px] uppercase tracking-widest text-stone-500">Days</span>
            </div>
            <div className="text-4xl font-serif italic text-stone-700">:</div>
            <div className="flex flex-col">
              <span className="text-4xl font-serif italic">14</span>
              <span className="text-[8px] uppercase tracking-widest text-stone-500">Hours</span>
            </div>
            <div className="text-4xl font-serif italic text-stone-700">:</div>
            <div className="flex flex-col">
              <span className="text-4xl font-serif italic">22</span>
              <span className="text-[8px] uppercase tracking-widest text-stone-500">Mins</span>
            </div>
          </div>

          <p className="text-stone-400 text-sm italic mb-8">
            {isJoined
              ? "You're in. The location will be revealed 2 hours before the meal."
              : "64 people in London are waiting for a match."}
          </p>

          <button
            onClick={() => setIsJoined(!isJoined)}
            className={`px-12 py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-black transition-all ${isJoined ? 'bg-stone-800 text-stone-500 cursor-default' : 'bg-white text-black hover:scale-105'}`}
          >
            {isJoined ? 'Joined for Thursday' : 'Join the Table'}
          </button>
        </div>

        {/* Background Graphic */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-stone-600">
        <Lock className="w-3 h-3" />
        <span className="text-[9px] uppercase tracking-widest font-bold">Restaurant revealed 2 hours prior</span>
      </div>
    </div>
  );
};

const ResonanceSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const currentProfile = SWIPE_CARDS[currentIndex];

  const handleSwipe = (dir) => {
    setDirection(dir);
    setTimeout(() => {
      setDirection(null);
      setCurrentIndex((prev) => (prev + 1) % SWIPE_CARDS.length);
    }, 600);
  };

  if (!currentProfile) return null;

  return (
    <div className="max-w-md mx-auto relative h-[70vh] flex flex-col items-center justify-center">
      <div className={`relative w-full h-full transition-all duration-500 transform
        ${direction === 'right' ? 'translate-x-[150%] rotate-12 opacity-0' : ''}
        ${direction === 'left' ? '-translate-x-[150%] -rotate-12 opacity-0' : ''}
      `}>
        {/* The Card */}
        <div className="bg-stone-900 rounded-[3rem] border border-stone-800 h-full overflow-hidden shadow-2xl flex flex-col">
          <div className="relative h-2/3">
             <img src={currentProfile.image} className="w-full h-full object-cover grayscale" alt={currentProfile.name} />
             <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
             <div className="absolute bottom-6 left-8">
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-black mb-1">{currentProfile.origin}</p>
                <h3 className="text-4xl font-serif italic text-white">{currentProfile.name}</h3>
             </div>
          </div>

          <div className="p-8 flex-1 flex flex-col justify-between">
             <div className="flex gap-4 items-center mb-6 overflow-x-auto py-2 no-scrollbar">
                {currentProfile.stack.map(s => (
                  <div key={s.type} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full flex items-center gap-2 shrink-0">
                    <span className="text-[8px] text-stone-500 uppercase font-bold">{s.type}:</span>
                    <span className="text-[9px] text-white italic font-serif">{s.value}</span>
                  </div>
                ))}
             </div>
             <p className="text-stone-400 text-xs italic font-serif leading-relaxed line-clamp-2">"{currentProfile.bio}"</p>
          </div>
        </div>

        {/* The Identity Stack Preview (Peeking from behind) */}
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 scale-75 opacity-40 blur-[1px]">
           <IdentityStack stack={currentProfile.stack} isComparing={false} small />
        </div>
      </div>

      {/* Controls */}
      <div className="absolute -bottom-10 flex gap-6 items-center">
         <button onClick={() => handleSwipe('left')} className="w-16 h-16 rounded-full border border-stone-800 flex items-center justify-center bg-stone-900 hover:bg-stone-800 transition-colors">
            <X className="w-6 h-6 text-stone-500" />
         </button>
         <button className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center bg-stone-900">
            <RotateCcw className="w-4 h-4 text-stone-600" />
         </button>
         <button onClick={() => handleSwipe('right')} className="w-16 h-16 rounded-full border border-stone-800 flex items-center justify-center bg-stone-900 group hover:border-[#8B1E1E] transition-colors">
            <Heart className="w-6 h-6 text-[#8B1E1E] fill-transparent group-hover:fill-[#8B1E1E] transition-all" />
         </button>
      </div>
    </div>
  );
};

const DirectoryCard = ({ item }) => (
  <div className="group bg-stone-900/40 border border-stone-800 rounded-2xl overflow-hidden hover:border-stone-600 transition-all duration-500">
    <div className="relative h-40 overflow-hidden">
      <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.name} />
      {item.isBusiness && (
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
          <Store className="w-3 h-3 text-[#D4AF37]" />
          <span className="text-[8px] font-bold text-[#D4AF37] uppercase">Local Biz</span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 p-3 bg-gradient-to-t from-black to-transparent w-full">
        <span className="text-[8px] font-bold text-white/70 uppercase tracking-widest">{item.distance} away</span>
      </div>
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-lg font-serif italic text-white">{item.name}</h4>
        <div className="flex items-center gap-1 text-[#D4AF37]">
          {item.type === 'restaurant' && <Utensils className="w-3 h-3" />}
          {item.type === 'event' && <Calendar className="w-3 h-3" />}
          {item.type === 'activity' && <Compass className="w-3 h-3" />}
        </div>
      </div>
      <p className="text-[10px] text-stone-500 mb-4">{item.host ? `Hosted by ${item.host}` : 'Authentic Cuisine & Atmosphere'}</p>
      <button className="w-full py-2 bg-stone-800 group-hover:bg-[#8B1E1E] text-white rounded-lg text-[9px] uppercase tracking-widest font-bold transition-colors">
        {item.type === 'restaurant' ? 'Book Table' : 'Join Event'}
      </button>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState('roots'); // 'roots', 'expedition', 'resonance', 'gatherings', 'chats'
  const [radius, setRadius] = useState(5);
  const [showIdentity, setShowIdentity] = useState(false);
  const [isComparing, setIsComparing] = useState(false);

  const filteredData = DIRECTORY_DATA.filter(item =>
    item.category.toLowerCase() === (activeTab === 'roots' ? 'roots' : 'expedition')
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-stone-100 font-sans selection:bg-[#E6C9A8] selection:text-black overflow-x-hidden">

      {/* --- Global Header --- */}
      <header className="fixed top-0 left-0 right-0 bg-[#0A0A0A]/80 backdrop-blur-xl z-[70] border-b border-stone-900 px-8 py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <h1 className="text-3xl font-black tracking-tighter text-[#E6C9A8] select-none">MAR</h1>
            {['roots', 'expedition'].includes(activeTab) && (
              <div className="hidden md:flex bg-stone-900 rounded-full px-4 py-2 items-center gap-3 border border-stone-800">
                <MapPin className="w-3 h-3 text-[#8B1E1E]" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400">{MOCK_USER.location}</span>
                <div className="h-4 w-[1px] bg-stone-700" />
                <select
                  value={radius}
                  onChange={(e) => setRadius(e.target.value)}
                  className="bg-transparent text-[10px] uppercase font-bold text-[#D4AF37] outline-none cursor-pointer"
                >
                  <option value={5}>5 miles</option>
                  <option value={10}>10 miles</option>
                  <option value={25}>25 miles</option>
                </select>
              </div>
            )}
          </div>

          <div className="flex items-center gap-8">
            <nav className="flex bg-stone-900 p-1 rounded-full border border-stone-800">
              <button
                onClick={() => setActiveTab('roots')}
                className={`px-4 py-2 rounded-full text-[9px] uppercase tracking-widest font-black transition-all ${activeTab === 'roots' ? 'bg-[#D4AF37] text-black' : 'text-stone-500 hover:text-stone-300'}`}
              >Roots</button>
              <button
                onClick={() => setActiveTab('expedition')}
                className={`px-4 py-2 rounded-full text-[9px] uppercase tracking-widest font-black transition-all ${activeTab === 'expedition' ? 'bg-[#8B1E1E] text-white' : 'text-stone-500 hover:text-stone-300'}`}
              >Expedition</button>
              <button
                onClick={() => setActiveTab('resonance')}
                className={`px-4 py-2 rounded-full text-[9px] uppercase tracking-widest font-black transition-all ${activeTab === 'resonance' ? 'bg-white text-black' : 'text-stone-500 hover:text-stone-300'}`}
              >Resonance</button>
               <button
                onClick={() => setActiveTab('gatherings')}
                className={`px-4 py-2 rounded-full text-[9px] uppercase tracking-widest font-black transition-all ${activeTab === 'gatherings' ? 'bg-stone-100 text-black' : 'text-stone-500 hover:text-stone-300'}`}
              >Gatherings</button>
            </nav>
            <div onClick={() => setShowIdentity(true)} className="w-10 h-10 rounded-full border-2 border-stone-800 overflow-hidden cursor-pointer hover:border-[#D4AF37] transition-all">
              <img src="https://i.pravatar.cc/100?u=abeba" className="w-full h-full object-cover grayscale" alt="Profile" />
            </div>
          </div>
        </div>
      </header>

      {/* --- Main Content Area --- */}
      <main className="max-w-6xl mx-auto px-8 pt-32 pb-40">

        {activeTab === 'resonance' && <ResonanceSwiper />}
        {activeTab === 'gatherings' && <GatheringsView />}

        {['roots', 'expedition'].includes(activeTab) && (
          <div className="animate-in fade-in duration-700">
            {/* Banner Section */}
            <div className="relative h-64 rounded-[2.5rem] overflow-hidden mb-16 border border-stone-800">
              <img
                src={activeTab === 'roots'
                  ? "https://images.unsplash.com/photo-1547928576-a4a33237bec3?auto=format&fit=crop&q=80&w=1200"
                  : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200"}
                className="w-full h-full object-cover opacity-40 grayscale"
                alt="Banner"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-black mb-2">
                      {activeTab === 'roots' ? 'RECONNECT WITH HOME' : 'EXPLORE NEW HORIZONS'}
                    </p>
                    <h2 className="text-5xl font-serif italic text-white">
                      {activeTab === 'roots' ? `Find ${MOCK_USER.origin} London` : 'Step into the Unknown'}
                    </h2>
                  </div>
                  <button className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-[10px] uppercase tracking-widest font-black hover:scale-105 transition-transform">
                    <Plus className="w-4 h-4" /> Host Your Own
                  </button>
                </div>
              </div>
            </div>

            {/* Discovery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1 space-y-8">
                <section>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-stone-500 mb-6">Explore By</h3>
                  <div className="space-y-4">
                    {['Restaurants', 'Events', 'Workshops', 'Small Biz', 'Community'].map(filter => (
                      <label key={filter} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-4 h-4 rounded border border-stone-700 group-hover:border-[#D4AF37] transition-colors" />
                        <span className="text-sm text-stone-400 group-hover:text-white transition-colors">{filter}</span>
                      </label>
                    ))}
                  </div>
                </section>

                <div className="p-6 bg-[#8B1E1E]/10 border border-[#8B1E1E]/20 rounded-2xl">
                  <Sparkles className="w-5 h-5 text-[#8B1E1E] mb-3" />
                  <h4 className="text-sm font-bold text-white mb-2">New nearby</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">A new Coffee Ceremony group started in Camden.</p>
                </div>
              </div>

              <div className="md:col-span-3">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredData.map(item => (
                      <DirectoryCard key={item.id} item={item} />
                    ))}
                    <div className="border-2 border-dashed border-stone-800 rounded-2xl flex flex-col items-center justify-center p-8 text-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                      <Plus className="w-8 h-8 text-stone-600 mb-4" />
                      <p className="text-[10px] uppercase tracking-widest font-black text-stone-500">Add a Place</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* --- Identity Overlay --- */}
      {showIdentity && (
        <div className="fixed inset-0 z-[100] bg-[#0A0A0A]/95 backdrop-blur-2xl flex items-center justify-center animate-in fade-in duration-500">
          <button onClick={() => {setShowIdentity(false); setIsComparing(false);}} className="absolute top-10 right-10 text-stone-500 hover:text-white"><X className="w-8 h-8" /></button>
          <div className="flex flex-col items-center">
            <div className="flex gap-12 items-center mb-16">
               <div className="flex flex-col items-center gap-6">
                  <IdentityStack stack={MOCK_USER.stack} isComparing={isComparing} />
                  <p className="text-[10px] uppercase tracking-widest font-black text-stone-500">Your Identity</p>
               </div>
               {isComparing && (
                 <div className="animate-in slide-in-from-right-20 duration-1000 flex flex-col items-center gap-6">
                    <IdentityStack
                      stack={SWIPE_CARDS[0].stack}
                      isComparing={true}
                    />
                    <p className="text-[10px] uppercase tracking-widest font-black text-stone-500">Match Found</p>
                 </div>
               )}
            </div>
            {!isComparing && (
              <button
                onClick={() => setIsComparing(true)}
                className="px-12 py-4 bg-[#E6C9A8] text-black rounded-full text-[10px] uppercase tracking-[0.3em] font-black"
              >
                Scan Global Resonance
              </button>
            )}
          </div>
        </div>
      )}

      {/* --- Navigation Dock --- */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md px-6 z-[60]">
        <div className="bg-stone-900/90 backdrop-blur-3xl border border-stone-800 p-2 rounded-full shadow-2xl flex justify-around items-center px-4">
           <button onClick={() => setActiveTab('roots')} className={`flex flex-col items-center gap-1 py-3 transition-colors ${activeTab === 'roots' ? 'text-[#D4AF37]' : 'text-stone-600'}`}>
             <Heart className="w-5 h-5" />
             <span className="text-[6px] uppercase font-black tracking-widest">Roots</span>
           </button>
           <button onClick={() => setActiveTab('expedition')} className={`flex flex-col items-center gap-1 py-3 transition-colors ${activeTab === 'expedition' ? 'text-[#8B1E1E]' : 'text-stone-600'}`}>
             <Globe className="w-5 h-5" />
             <span className="text-[6px] uppercase font-black tracking-widest">Explore</span>
           </button>
           <button onClick={() => setActiveTab('resonance')} className={`flex flex-col items-center gap-1 py-3 transition-colors ${activeTab === 'resonance' ? 'text-white' : 'text-stone-600'}`}>
             <Fingerprint className="w-5 h-5" />
             <span className="text-[6px] uppercase font-black tracking-widest">Matching</span>
           </button>
           <button onClick={() => setActiveTab('gatherings')} className={`flex flex-col items-center gap-1 py-3 transition-colors ${activeTab === 'gatherings' ? 'text-stone-100' : 'text-stone-600'}`}>
             <Clock className="w-5 h-5" />
             <span className="text-[6px] uppercase font-black tracking-widest">Thursday</span>
           </button>
           <button className="flex flex-col items-center gap-1 py-3 text-stone-600">
             <MessageSquare className="w-5 h-5" />
             <span className="text-[6px] uppercase font-black tracking-widest">Chats</span>
           </button>
        </div>
      </div>
    </div>
  );
}
