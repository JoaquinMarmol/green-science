'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { crops, cropCategories, type CropCategory } from '@/data/crops';
import CropTimeline from './CropTimeline';

type Filter = 'todos' | CropCategory;

export default function CropsExplorer({ initialSlug }: { initialSlug?: string }) {
  const [filter, setFilter] = useState<Filter>('todos');
  const [slug, setSlug] = useState(initialSlug ?? crops[0].slug);

  const visible = useMemo(
    () => (filter === 'todos' ? crops : crops.filter((c) => c.category === filter)),
    [filter],
  );

  const crop = crops.find((c) => c.slug === slug) ?? crops[0];

  return (
    <div>
      {/* filtros por categoría */}
      <div className="flex flex-wrap items-center gap-2">
        {([{ id: 'todos', label: 'Todos' }, ...cropCategories] as { id: Filter; label: string }[]).map(
          (c) => {
            const on = filter === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setFilter(c.id)}
                className={[
                  'relative rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                  on ? 'text-white' : 'text-mute hover:text-forest',
                ].join(' ')}
              >
                {on && (
                  <motion.span
                    layoutId="crop-filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-forest to-forest-deep"
                    transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{c.label}</span>
              </button>
            );
          },
        )}
      </div>

      {/* chips de cultivo */}
      <div className="mt-5 flex flex-wrap gap-2">
        <AnimatePresence mode="popLayout">
          {visible.map((c) => {
            const on = c.slug === crop.slug;
            return (
              <motion.button
                key={c.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                type="button"
                onClick={() => setSlug(c.slug)}
                className={[
                  'rounded-xl border px-3.5 py-2 text-sm font-semibold transition-all duration-200',
                  on
                    ? 'border-lime bg-lime/12 text-forest-deep shadow-soft'
                    : 'border-forest/12 bg-white text-mute hover:border-lime/50 hover:text-forest',
                ].join(' ')}
              >
                {c.name}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      {/* cabecera del cultivo */}
      <AnimatePresence mode="wait">
        <motion.div
          key={crop.slug}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          className="mt-10"
        >
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="font-display text-3xl font-bold text-forest-deep sm:text-4xl">{crop.name}</h3>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-mute">{crop.summary}</p>
            </div>
            <span className="rounded-full border border-lime/40 bg-lime/10 px-3.5 py-1.5 text-xs font-semibold text-forest">
              {crop.stages.length} etapas del ciclo
            </span>
          </div>

          <CropTimeline crop={crop} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
