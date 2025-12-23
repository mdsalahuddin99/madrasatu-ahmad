 import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-5 md:px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.slice(0, 4).map((stat) => (
            <div
              key={stat.id}
              className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary-50 via-white to-gold-50 border border-primary-100 shadow-xl p-6 flex flex-col items-center text-center group"
            >
              {/* Icon */}
              <div className="mb-4 w-14 h-14 rounded-xl bg-white border border-primary-100 shadow-sm flex items-center justify-center text-primary-600 transform group-hover:scale-110 transition-transform duration-300">
                <stat.icon size={20} />
              </div>

              {/* Value */}
              <h3 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="text-slate-500 font-semibold text-xs uppercase tracking-wider">
                {stat.label}
              </p>

              {/* Optional subtle background circles */}
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gold-100 rounded-full blur-3xl opacity-30"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
