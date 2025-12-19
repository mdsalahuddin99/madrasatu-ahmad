import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-5 md:px-6">
        {/* Large Light Card */}
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary-50 via-white to-gold-50 border border-primary-100 shadow-xl">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#16a34a 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gold-100 rounded-full blur-3xl opacity-50"></div>

          <div className="relative z-10 py-8 px-4 md:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 lg:divide-x lg:divide-slate-200">
              {STATS.map((stat) => (
                <div key={stat.id} className="flex flex-col items-center text-center group">
                  <div className="mb-5 w-16 h-16 rounded-2xl bg-white border border-primary-100 shadow-sm flex items-center justify-center text-primary-600 transform group-hover:scale-110 transition-transform duration-300">
                    <stat.icon size={25} />
                  </div>
                  <h3 className="text-4xl lg:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-slate-500 font-semibold text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;