'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { Crop } from '@/data/crops';

/** Color por producto, para que se lea de un vistazo en toda la página. */
export const productColor: Record<string, string> = {
  'full-power-50': '#7AC943',
  'full-green-100': '#2E9B5C',
  'bioguard': '#E28434',
  'biomax-43': '#96A03A',
  'bio-mulusk': '#B08A2E',
  'biodyne-500': '#4692CD',
  'seed-forte-4-0': '#CEA050',
  'seed-forte-3-0': '#CEA050',
};

function colorOf(slug: string | null) {
  return (slug && productColor[slug]) || '#5B6B61';
}

/** Foto del bidón recortada, en public/products/thumb/<slug>.png */
export function BidonThumb({
  slug,
  alt,
  color,
  size = 'md',
}: {
  slug: string | null;
  alt: string;
  color: string;
  size?: 'sm' | 'md';
}) {
  const box = size === 'sm' ? 'h-[54px] w-[42px]' : 'h-[76px] w-[58px]';
  if (!slug) {
    return (
      <span
        className={`${box} grid shrink-0 place-items-center rounded-xl`}
        style={{ backgroundColor: `${color}18` }}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke={color} strokeWidth="1.8">
          <path d="M9 3h6v3l3 5v10H6V11l3-5V3Z" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  return (
    <span
      className={`${box} relative shrink-0 overflow-hidden rounded-xl`}
      style={{ backgroundColor: `${color}12` }}
    >
      <Image
        src={`/products/thumb/${slug}.png`}
        alt={alt}
        fill
        sizes="72px"
        className="object-contain p-1"
      />
    </span>
  );
}

/** Icono simple por etapa, dibujado según la posición en el ciclo. */
function StageIcon({ index, total, active }: { index: number; total: number; active: boolean }) {
  const t = total <= 1 ? 0 : index / (total - 1);
  const stroke = active ? '#0B1F12' : '#7AC943';
  const fill = active ? '#0B1F12' : 'none';

  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
      {t < 0.2 && (
        <>
          <path d="M16 26V14" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
          <path d="M16 15c0-4 3-6 6-6 0 4-2 6-6 6Z" fill={fill} stroke={stroke} strokeWidth="1.8" strokeLinejoin="round" />
        </>
      )}
      {t >= 0.2 && t < 0.45 && (
        <>
          <path d="M16 26V12" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
          <path d="M16 14c0-5 4-7 8-7 0 5-3 7-8 7Z" fill={fill} stroke={stroke} strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M16 19c0-4-3-6-7-6 0 4 2 6 7 6Z" fill={fill} stroke={stroke} strokeWidth="1.8" strokeLinejoin="round" />
        </>
      )}
      {t >= 0.45 && t < 0.7 && (
        <>
          <circle cx="16" cy="16" r="4" fill={fill} stroke={stroke} strokeWidth="1.8" />
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse key={a} cx="16" cy="8.5" rx="3" ry="4.6" fill="none" stroke={stroke} strokeWidth="1.7"
              transform={`rotate(${a} 16 16)`} />
          ))}
        </>
      )}
      {t >= 0.7 && t < 0.9 && (
        <>
          <circle cx="16" cy="18" r="7.5" fill={fill} stroke={stroke} strokeWidth="1.9" />
          <path d="M16 10.5V6" stroke={stroke} strokeWidth="1.9" strokeLinecap="round" />
          <path d="M17 8c2-2 5-2.4 5-2.4 0 2.6-2 4-5 4Z" fill={fill} stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
        </>
      )}
      {t >= 0.9 && (
        <>
          <path d="M6 20c6 3 14 3 20 0" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <circle cx="11" cy="14" r="3" fill={fill} stroke={stroke} strokeWidth="1.7" />
          <circle cx="20" cy="12" r="3.6" fill={fill} stroke={stroke} strokeWidth="1.7" />
        </>
      )}
    </svg>
  );
}

export default function CropTimeline({ crop }: { crop: Crop }) {
  const [step, setStep] = useState(0);
  const total = crop.stages.length;

  // Al cambiar de cultivo el índice puede quedar fuera de rango
  // (venías en la etapa 7 y el cultivo nuevo tiene 5). Se acota siempre.
  const active = Math.min(step, Math.max(0, total - 1));
  const stage = crop.stages[active];
  const progress = total <= 1 ? 100 : (active / (total - 1)) * 100;

  // Si el cultivo cambió y el índice estaba pasado, se vuelve al inicio.
  useEffect(() => {
    setStep(0);
  }, [crop.slug]);

  const setActive = (v: number) => setStep(Math.min(Math.max(0, v), total - 1));

  if (!stage) return null;

  return (
    <div className="w-full">
      {/* ---------- línea de tiempo ---------- */}
      <div className="relative">
        {/* riel */}
        <div className="absolute left-0 right-0 top-[26px] hidden h-[3px] rounded-full bg-forest/10 md:block">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-lime to-forest"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          />
        </div>

        <ol className="relative grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 md:flex md:justify-between md:gap-2">
          {crop.stages.map((s, i) => {
            const isActive = i === active;
            const isDone = i < active;
            return (
              <li key={s.stage} className="md:flex-1 md:px-1">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={isActive ? 'step' : undefined}
                  className="group flex w-full flex-col items-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 rounded-xl"
                >
                  <motion.span
                    layout
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className={[
                      'relative z-10 grid h-[52px] w-[52px] place-items-center rounded-full border-2 transition-colors duration-300',
                      isActive
                        ? 'border-lime bg-lime shadow-glow'
                        : isDone
                          ? 'border-lime/60 bg-cream'
                          : 'border-forest/15 bg-white',
                    ].join(' ')}
                  >
                    <StageIcon index={i} total={total} active={isActive} />
                    {isActive && (
                      <motion.span
                        layoutId="crop-stage-ring"
                        className="absolute -inset-1.5 rounded-full border-2 border-lime/40"
                        transition={{ type: 'spring', stiffness: 250, damping: 25 }}
                      />
                    )}
                  </motion.span>

                  <span
                    className={[
                      'mt-3 text-[13px] font-semibold leading-tight transition-colors',
                      isActive ? 'text-forest-deep' : 'text-mute group-hover:text-forest',
                    ].join(' ')}
                  >
                    {s.stage}
                  </span>
                  <span className="mt-1 text-[11px] font-medium uppercase tracking-wide text-mute/70">
                    Etapa {i + 1}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* ---------- detalle de la etapa ---------- */}
      <div className="mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-3xl border border-forest/10 bg-white shadow-card"
          >
            {/* cabecera */}
            <div className="relative overflow-hidden bg-gradient-to-br from-forest-deep to-night px-6 py-7 sm:px-9">
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-lime/10 blur-2xl" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lime">
                Etapa {active + 1} de {total}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">{stage.stage}</h3>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-white/70">{stage.objective}</p>
            </div>

            {/* aplicaciones */}
            <div className="px-6 py-7 sm:px-9">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-mute">
                Qué aplicar en esta etapa
              </p>

              {stage.applications.length === 0 && (
                <div className="flex items-center gap-3 rounded-2xl border border-dashed border-forest/20 bg-cream/50 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest/8" aria-hidden>
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-forest/60" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M8.5 12h7" strokeLinecap="round" />
                    </svg>
                  </span>
                  <p className="text-[15px] leading-relaxed text-mute">
                    En esta etapa no se realizan aplicaciones.
                  </p>
                </div>
              )}

              <ul className="grid gap-3 sm:grid-cols-2">
                {stage.applications.map((a, i) => {
                  const color = colorOf(a.slug);
                  const card = (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.06 * i, duration: 0.3 }}
                      whileHover={a.slug ? { y: -3 } : undefined}
                      className="relative flex h-full items-center gap-3.5 overflow-hidden rounded-2xl border border-forest/10 bg-cream/60 p-3.5 transition-shadow hover:shadow-soft"
                    >
                      <span
                        className="absolute inset-y-0 left-0 w-1"
                        style={{ backgroundColor: color }}
                        aria-hidden
                      />
                      <BidonThumb slug={a.slug} alt={a.product} color={color} />
                      <div className="min-w-0">
                        <p className="font-display text-[15px] font-bold leading-snug text-ink">{a.product}</p>
                        {a.dose && (
                          <p className="mt-0.5 text-sm font-semibold" style={{ color }}>
                            {a.dose}
                          </p>
                        )}
                        {a.note && <p className="mt-1 text-[13px] leading-snug text-mute">{a.note}</p>}
                      </div>
                    </motion.div>
                  );
                  return (
                    <li key={`${a.product}-${i}`}>
                      {a.slug ? (
                        <Link href={`/productos/${a.slug}`} className="block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-lime">
                          {card}
                        </Link>
                      ) : (
                        card
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* navegación */}
              <div className="mt-7 flex items-center justify-between border-t border-forest/10 pt-5">
                <button
                  type="button"
                  onClick={() => setActive(active - 1)}
                  disabled={active === 0}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-forest transition hover:bg-forest/5 disabled:pointer-events-none disabled:opacity-30"
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 15 7 10l5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Anterior
                </button>

                <div className="flex gap-1.5" aria-hidden>
                  {crop.stages.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActive(i)}
                      className={[
                        'h-1.5 rounded-full transition-all duration-300',
                        i === active ? 'w-6 bg-lime' : 'w-1.5 bg-forest/20 hover:bg-forest/40',
                      ].join(' ')}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActive(active + 1)}
                  disabled={active === total - 1}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-forest transition hover:bg-forest/5 disabled:pointer-events-none disabled:opacity-30"
                >
                  Siguiente
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m8 5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
