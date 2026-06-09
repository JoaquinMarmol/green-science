import type { Metadata } from 'next';
import { MapPin, Phone, Mail, MessageCircle, Clock, AlertTriangle } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import { Section } from '@/components/ui/Section';
import { PageHero } from '@/components/layout/PageHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { siteConfig, whatsappLink } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const tm = await getTranslations({ locale, namespace: 'metadata' });
  return pageMetadata({
    locale,
    path: '/contacto',
    title: tm('contact.title'),
    description: tm('contact.description'),
  });
}

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('contact');

  return (
    <>
      <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Formulario */}
          <ContactForm />

          {/* Datos + mapa */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-cream p-6 ring-1 ring-ink/5 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-navy sm:text-2xl">
                {t('infoTitle')}
              </h2>
              <ul className="mt-6 space-y-5">
                <InfoRow icon={MapPin} label={t('addressLabel')}>
                  {siteConfig.address}
                </InfoRow>

                <InfoRow icon={Phone} label={t('phoneLabel')}>
                  <span className="flex flex-col">
                    {siteConfig.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                        className="transition-colors hover:text-forest-deep"
                      >
                        {phone}
                      </a>
                    ))}
                  </span>
                </InfoRow>

                <InfoRow icon={MessageCircle} label={t('whatsappLabel')}>
                  <a
                    href={whatsappLink(t('whatsappMessage'))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-forest-deep transition-colors hover:text-forest"
                  >
                    {siteConfig.phones[0]}
                  </a>
                </InfoRow>

                <InfoRow icon={Mail} label={t('emailLabel')}>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition-colors hover:text-forest-deep"
                  >
                    {siteConfig.email}
                  </a>
                </InfoRow>

                <InfoRow icon={Clock} label={t('hoursLabel')}>
                  {t('hours')}
                </InfoRow>

                <InfoRow icon={AlertTriangle} label={t('emergencyLabel')}>
                  {siteConfig.emergency}
                </InfoRow>
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-card ring-1 ring-ink/10">
              <iframe
                src={siteConfig.mapsEmbed}
                title={t('mapTitle')}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime/15 text-forest-deep">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-mute">{label}</p>
        <div className="mt-0.5 text-ink">{children}</div>
      </div>
    </li>
  );
}
