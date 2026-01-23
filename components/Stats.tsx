'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, animate, useInView } from 'framer-motion';
import { STATS } from '@/lib/constants';

const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Handle Bangla digits
  const toBangla = (n: number) => {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return n.toString().split('').map(digit => banglaDigits[parseInt(digit)] || digit).join('');
  };

  const isPercent = value.includes('%');
  const isPlus = value.includes('+');
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            let n = Math.round(latest);
            let result = toBangla(n);
            if (isPercent) result += '%';
            if (isPlus) result += '+';
            ref.current.innerText = result;
          }
        }
      });
      return controls.stop;
    }
  }, [isInView, numericValue, count, duration, isPercent, isPlus]);

  return <span ref={ref}>০</span>;
};

const Stats: React.FC = () => {
  // Map specific colors for each stat card
  const statStyles = [
    { color: 'emerald', bg: 'from-emerald-100/40 via-emerald-50/20 to-transparent', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-700' },
    { color: 'blue', bg: 'from-blue-100/40 via-blue-50/20 to-transparent', iconBg: 'bg-blue-50', iconColor: 'text-blue-700' },
    { color: 'purple', bg: 'from-purple-100/40 via-purple-50/20 to-transparent', iconBg: 'bg-purple-50', iconColor: 'text-purple-700' },
    { color: 'amber', bg: 'from-amber-100/40 via-amber-50/20 to-transparent', iconBg: 'bg-amber-50', iconColor: 'text-amber-700' },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {STATS.slice(0, 4).map((stat, idx) => {
            const style = statStyles[idx % statStyles.length];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative rounded-md overflow-hidden bg-gradient-to-b ${style.bg} border-t border-t-white shadow-sm hover:shadow-md transition-all p-3 py-6 flex flex-col items-center text-center group`}
              >
                {/* Icon Container */}
                <div className={`mb-4 w-12 h-12 rounded-full ${style.iconBg} border border-white shadow-sm flex items-center justify-center ${style.iconColor} transform group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={20} />
                </div>

                {/* Value with Counter */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 tracking-tight">
                  <Counter value={stat.value} />
                </h3>

                {/* Label */}
                <p className="text-slate-500 font-bold text-sm">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
