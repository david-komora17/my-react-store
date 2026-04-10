import React from 'react';
import {Heart, Github, ExternalLink, Info} from 'lucide-react';

const WeatherFooter = ({favouriteCities, onSelectCity}) => {
  return (
    <footer className='w-full mt-auto bg-white/5 backdrop-blur-md border-t border-white/10 rounded-b-3xl overflow-hidden'>
      <div className='px-8 py-4 bg-black/10 border-b border-white/5'>
        <div className='flex items-center gap-2 mb-3 text-white/70'>
          <Heart size={16} className='fill-red-400 text-red-400'/>
            <span className='text-xs font-bold uppercase tracking-wider'>
              Favorite Cities
            </span>
        </div>
        <div className='flex flex-wrap gap-2'>
          {favouriteCities.length > 0 ? (
            favouriteCities.map((city) => (
              <button key = {city} onclick = {() => onSelectCity(city)} className='px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-sm transition-all active:scale-95'>
                {city}
              </button>
            ))
          ) : (
            <p className='text-sm text-white/40 italic'>
                No favorites saved yet.
            </p>
          )}
        </div>
      </div>
      <div className='px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='flex flex-col gap-1'>
              <p className='text-sm font-medium text-white/80'>
                  Weather Module Project <span className='text-white/30 px-2'>|</span>2026
              </p>
              <div className='flex items-center gap-3 text-[10px] text-white/50 uppercase tracking-tighter'>
                  <span>React hooks</span>
                  <span className='w-1 h-1 bg-white/20 rounded-full'></span>
                  <span>Tailwind CSS</span>
                  <span className='w-1 h-1 bg-white/20 rounded-full'></span>
                  <span>OpenWeatherMap API</span>
              </div>
          </div>
          <div className='flex items-center gap-4'>
              <a href="https://github.com" className='flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors' target='_blank' rel= 'noreferrer'>
                 <Info size = {18}/>
                 <span>Source code</span>
                 <ExternalLink size={12}/> 
              </a>
              <div className='h-4 w-[1px] bg-white/10'></div>
                <a href="https://openweathermap.org" className='flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors' target='_blank' rel= 'noreferrer'>
                  <Info size = {18}/>
                  <span>API docs</span>
                  <ExternalLink size={12}/> 
                </a>
              </div>
      </div>
    </footer>
  );
};

export default WeatherFooter;