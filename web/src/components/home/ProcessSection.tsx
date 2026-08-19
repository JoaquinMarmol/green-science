'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

/** Los tres pasos de trabajo: diagnóstico → plan → acompañamiento. */
export function ProcessSection() {
  const t = useTranslations('process');

  const steps = [
    { n: '01', title: t('s1t'), desc: t('s1d'), icon: 'search' },
    { n: '02', title: t('s2t'), desc: t('s2d'), icon: 'calendar' },
    { n: '03', title: t('s3t'), desc: t('s3d'), icon: 'support' },
  ] as const;

  return (
    <Section className="relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-lime/8 blur-[100px]" aria-hidden />

      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

      <div className="relative mt-14">
        {/* línea conectora en desktop */}
        <div
          className="absolute left-[16%] right-[16%] top-[38px] hidden h-px bg-gradient-to-r from-transparent via-forest/20 to-transparent lg:block"
          aria-hidden
        />

        <ol className="relative grid gap-8 lg:grid-cols-3 lg:gap-6">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative text-center lg:px-4"
            >
              {/* número + icono */}
              <div className="relative mx-auto mb-6 grid h-[76px] w-[76px] place-items-center">
                <span className="absolute inset-0 rounded-2xl bg-white shadow-soft ring-1 ring-forest/8 transition-transform duration-300 group-hover:-translate-y-1" />
                <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-forest-deep font-display text-[11px] font-bold text-lime">
                  {s.n}
                </span>
                <svg viewBox="0 0 24 24" className="relative h-8 w-8 text-forest" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {s.icon === 'search' && (
                    <>
                      <circle cx="10.5" cy="10.5" r="6" />
                      <path d="m20 20-5.2-5.2" />
                      <path d="M8.5 10.5h4M10.5 8.5v4" />
                    </>
                  )}
                  {s.icon === 'calendar' && (
                    <>
                      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
                      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
                      <path d="M7.5 13.5h3M13.5 13.5h3M7.5 17h3" />
                    </>
                  )}
                  {s.icon === 'support' && (
                    <>
                      <path d="M12 21c4.5-3.2 7-6.4 7-10a7 7 0 1 0-14 0c0 3.6 2.5 6.8 7 10Z" />
                      <path d="M9.5 11.2 11.4 13l3.4-3.6" />
                    </>
                  )}
                </svg>
              </div>

              <h3 className="font-display text-xl font-bold text-forest-deep">{s.title}</h3>
              <p className="mx-auto mt-2.5 max-w-xs text-[15px] leading-relaxed text-mute">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mx-auto mt-12 flex max-w-xl items-center justify-center gap-2.5 rounded-2xl border border-lime/25 bg-lime/8 px-5 py-3.5 text-center text-sm font-medium text-forest"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-lime-600" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
          <path d="m5 10.5 3.5 3.5L15 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {t('note')}
      </motion.p>
    </Section>
  );
}
