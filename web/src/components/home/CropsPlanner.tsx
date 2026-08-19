'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/Container';
import { crops } from '@/data/crops';
import { productColor, BidonThumb } from '@/components/crops/CropTimeline';

/** Cultivos destacados en la home (el resto vive en /cultivos). */
const FEATURED = ['soya', 'maiz', 'trigo', 'vid', 'papa', 'cana-de-azucar'];

export function CropsPlanner() {
  const list = FEATURED.map((s) => crops.find((c) => c.slug === s)).filter(Boolean) as typeof crops;
  const [slug, setSlug] = useState(list[0]?.slug ?? crops[0].slug);
  const [step, setStep] = useState(0);

  const crop = list.find((c) => c.slug === slug) ?? list[0];
  // el índice se acota por si el cultivo nuevo tiene menos etapas que el anterior
  const active = Math.min(step, Math.max(0, crop.stages.length - 1));
  const stage = crop.stages[active];

  function pick(s: string) {
    setSlug(s);
    setStep(0);
  }

  if (!stage) return null;

  return (
    <section className="relative overflow-hidden bg-night py-16 sm:py-20 lg:py-28">
      {/* ambiente */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-forest/25 blur-[130px]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-lime/10 blur-[120px]" aria-hidden />
      {/* grilla sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #7AC943 1px, transparent 1px), linear-gradient(to bottom, #7AC943 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-lime sm:text-sm">
            Planes de manejo
          </p>
          <h2 className="font-display text-3xl font-bold text-white text-balance sm:text-4xl lg:text-[2.75rem]">
            Cada etapa del cultivo tiene su aplicación
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Elegí tu cultivo y recorré el ciclo. En cada etapa te mostramos qué producto va, en qué
            dosis y para qué sirve.
          </p>
        </div>

        {/* selector de cultivo */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {list.map((c) => {
            const on = c.slug === crop.slug;
            return (
              <button
                key={c.slug}
                type="button"
                onClick={() => pick(c.slug)}
                className={[
                  'relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200',
                  on ? 'text-forest-deep' : 'text-white/60 hover:text-white',
                ].join(' ')}
              >
                {on && (
                  <motion.span
                    layoutId="home-crop-pill"
                    className="absolute inset-0 rounded-full bg-lime"
                    transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{c.name}</span>
              </button>
            );
          })}
        </div>

        {/* panel */}
        <div className="mx-auto mt-12 max-w-5xl">
          {/* pasos */}
          <div className="relative">
            <div className="absolute left-0 right-0 top-[18px] h-px bg-white/10" aria-hidden />
            <ol className="relative flex justify-between gap-1 overflow-x-auto pb-1">
              {crop.stages.map((s, i) => {
                const on = i === active;
                return (
                  <li key={s.stage} className="flex min-w-[92px] flex-1 justify-center">
                    <button
                      type="button"
                      onClick={() => setStep(i)}
                      className="group flex flex-col items-center gap-2.5 px-1 text-center"
                    >
                      <span className="relative grid h-9 w-9 place-items-center">
                        <span
                          className={[
                            'h-3 w-3 rounded-full transition-all duration-300',
                            on ? 'scale-100 bg-lime' : 'scale-75 bg-white/25 group-hover:bg-white/50',
                          ].join(' ')}
                        />
                        {on && (
                          <motion.span
                            layoutId="home-step-ring"
                            className="absolute inset-0 rounded-full border border-lime/50"
                            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                          />
                        )}
                      </span>
                      <span
                        className={[
                          'text-[11px] font-semibold leading-tight transition-colors',
                          on ? 'text-lime' : 'text-white/40 group-hover:text-white/70',
                        ].join(' ')}
                      >
                        {s.stage}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* contenido de la etapa */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${crop.slug}-${active}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8"
            >
              <p className="text-[15px] leading-relaxed text-white/75">
                <span className="font-display font-bold text-white">{stage.stage}.</span>{' '}
                {stage.objective}.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {stage.applications.map((a, i) => {
                  const color = (a.slug && productColor[a.slug]) || '#7AC943';
                  return (
                    <motion.li
                      key={`${a.product}-${i}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.28 }}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                    >
                      <BidonThumb slug={a.slug} alt={a.product} color={color} size="sm" />
                      <div className="min-w-0">
                        <p className="font-display text-sm font-bold leading-snug text-white">
                          {a.product}
                        </p>
                        {a.dose && (
                          <p className="mt-0.5 text-[13px] font-semibold" style={{ color }}>
                            {a.dose}
                          </p>
                        )}
                        {a.note && (
                          <p className="mt-1 text-[12px] leading-snug text-white/45">{a.note}</p>
                        )}
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </AnimatePresence>

          <div className="mt-9 text-center">
            <Link
              href="/cultivos"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-display text-[15px] font-semibold text-white transition-all hover:border-lime/60 hover:bg-white/5"
            >
              Ver los {crops.length} cultivos
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="m8 5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
