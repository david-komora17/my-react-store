import React from 'react'
import { Search, MapPin, Wind, Thermometer } from 'lucide-react';

const Header = ({city, setCity, isMetric, setIsMetric, onGeolocation}) => {
  return (
        <header className = "w-full py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 bg-white/5 backdrop-blur-md rounded-t-3xl">
            <div className='flex items-center gap-3 group cursor-pointer'>
                <div className="p-2 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                    <Thermometer className="text-white" size={24} />
                </div>
                <div>
                    <h1 className='text-xl font-bold text-white tracking-tight'>SkyCast</h1>
                    <p className='text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold'>Weather dashboard</p>
                </div>
            </div>
            <div className='flex flex-1 max-w-lg w-full items-center gap-2'>
                <div>
                    <search className='absolute left-4 top-1/2 -translate-y-1/2 text-white/40 size={18}'/>
                    <input type="text" placeholder='Search cities or zip codes...' value={city} onChange={(e) => setCity(e.target.value)} className='w-full bg-white/10 border border-white/20 rounded-2xl py-3 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/15 transition-all shadow-inner'/>
                </div>
                <button onClick={onGeolocation} title='Current location' className='p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition-all active:scale-95'>
                    <MapPin className="text-white" size={24} />
                </button>
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex bg-black/20 p-1 rounded-xl border border-white/10'>
                    <button onClick={() => setIsMetric(true)} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${isMetric ?'bg-white text-blue-600 shadow-md' : 'text-white/60 hover:text-white'}`}>Imperial</button>
                </div>
            </div>
        </header>
    )
}

export default Header;
