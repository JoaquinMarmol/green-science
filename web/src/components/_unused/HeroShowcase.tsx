'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { products } from '@/data/products';
import { productColor } from '@/components/crops/CropTimeline';

/** Orden de exhibición: alterna colores para que la rotación se sienta viva. */
const ORDER = [
  'full-power-50',
  'bioguard',
  'full-green-100',
  'biomax-43',
  'biodyne-500',
  'seed-forte-4-0',
  'bio-mulusk',
  'seed-forte-3-0',
];

const CYCLE_MS = 4200;

export function HeroShowcase() {
  const items = ORDER.map((s) => products.find((p) => p.slug === s)).filter(
    Boolean,
  ) as typeof products;

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Rotación y parallax ligados al scroll: el bidón se inclina al bajar.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const tilt = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -8]);
  const drift = useTransform(scrollYProgress, [0, 1], [24, -36]);

  useEffect(() => {
    if (paused || reduced) return;
    const t = setInterval(() => setIdx((v) => (v + 1) % items.length), CYCLE_MS);
    return () => clearInterval(t);
  }, [paused, reduced, items.length]);

  const p = items[idx];
  const color = productColor[p.slug] ?? '#7AC943';

  return (
    <div
      ref={ref}
      className="relative mx-auto flex h-[420px] w-full max-w-[420px] flex-col items-center justify-end pb-16 sm:h-[470px] lg:h-[540px] lg:max-w-none lg:pb-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* halo puntual detrás del producto, con el color del envase */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-[38%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
        animate={{ backgroundColor: color }}
        transition={{ duration: 1.2 }}
        style={{ opacity: 0.16 }}
      />

      {/* anillo orbital: gira despacio, cambia al color del producto */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-[40%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      >
        <motion.span
          className="absolute inset-0 rounded-full border border-dashed"
          animate={{ borderColor: `${color}55` }}
          transition={{ duration: 1.2 }}
        />
        <motion.span
          className="absolute -top-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full"
          animate={{ backgroundColor: color }}
          transition={{ duration: 1.2 }}
        />
      </motion.div>

      {/* bidón con tilt por scroll y crossfade entre productos */}
      <motion.div style={{ rotate: reduced ? 0 : tilt, y: reduced ? 0 : drift }} className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, x: 42, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: -42, rotate: -5 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <Image
              src={`/products/thumb/${p.slug}.png`}
              alt={p.name}
              width={300}
              height={420}
              priority={idx === 0}
              className="h-[280px] w-auto drop-shadow-[0_28px_36px_rgba(0,0,0,0.45)] sm:h-[320px] lg:h-[380px]"
            />
          </motion.div>
        </AnimatePresence>

        {/* sombra de apoyo */}
        <motion.div
          aria-hidden
          className="absolute -bottom-5 left-1/2 h-5 w-44 -translate-x-1/2 rounded-[100%] bg-black/50 blur-md"
          animate={{ scaleX: [1, 0.94, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* placa de identificación */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] py-2.5 pl-4 pr-2.5 backdrop-blur-md"
          >
            <span
              className="h-8 w-1 rounded-full"
              style={{ backgroundColor: color }}
              aria-hidden
            />
            <div className="min-w-0 text-left">
              <p className="font-display text-sm font-bold leading-tight text-white">{p.name}</p>
              <p className="text-[11px] font-medium uppercase tracking-wide text-white/50">
                {p.type.es}
              </p>
            </div>
            <Link
              href={`/productos/${p.slug}`}
              className="ml-2 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-white/70 transition hover:bg-lime hover:text-forest-deep"
              aria-label={`Ver ficha de ${p.name}`}
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 14 14 6M8 6h6v6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* selector */}
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Productos">
          {items.map((it, i) => (
            <button
              key={it.slug}
              type="button"
              role="tab"
              aria-selected={i === idx}
              aria-label={it.name}
              onClick={() => setIdx(i)}
              className="group grid h-6 w-4 place-items-center"
            >
              <span
                className={[
                  'block rounded-full transition-all duration-300',
                  i === idx ? 'h-1.5 w-4' : 'h-1.5 w-1.5 bg-white/25 group-hover:bg-white/50',
                ].join(' ')}
                style={i === idx ? { backgroundColor: color } : undefined}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
