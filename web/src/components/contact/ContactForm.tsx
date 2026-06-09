'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { whatsappLink } from '@/lib/site';

export function ContactForm() {
  const t = useTranslations('contact');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const details = [
      `${t('name')}: ${form.name}`,
      form.email ? `${t('email')}: ${form.email}` : null,
      form.phone ? `${t('phone')}: ${form.phone}` : null,
      '',
      form.message,
    ]
      .filter((line) => line !== null)
      .join('\n');

    const text = `${t('whatsappMessage')}\n\n${details}`;
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer');
  };

  const inputClass =
    'w-full rounded-xl border-0 bg-cream px-4 py-3 text-ink ring-1 ring-ink/10 transition placeholder:text-mute/70 focus:ring-2 focus:ring-forest';

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-ink/5 sm:p-8"
    >
      <h2 className="font-display text-xl font-semibold text-navy sm:text-2xl">{t('formTitle')}</h2>

      <div className="mt-6 space-y-4">
        <Field label={t('name')} required>
          <input
            type="text"
            required
            value={form.name}
            onChange={update('name')}
            placeholder={t('namePlaceholder')}
            className={inputClass}
            autoComplete="name"
          />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={t('email')}>
            <input
              type="email"
              value={form.email}
              onChange={update('email')}
              placeholder={t('emailPlaceholder')}
              className={inputClass}
              autoComplete="email"
            />
          </Field>
          <Field label={t('phone')}>
            <input
              type="tel"
              value={form.phone}
              onChange={update('phone')}
              placeholder={t('phonePlaceholder')}
              className={inputClass}
              autoComplete="tel"
            />
          </Field>
        </div>

        <Field label={t('message')} required>
          <textarea
            required
            value={form.message}
            onChange={update('message')}
            placeholder={t('messagePlaceholder')}
            rows={5}
            className={`${inputClass} resize-y`}
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-base font-semibold text-white shadow-soft transition hover:brightness-95 active:scale-[0.99]"
      >
        <MessageCircle className="h-5 w-5" aria-hidden />
        {t('submit')}
      </button>
      <p className="mt-3 text-center text-xs text-mute">{t('formNote')}</p>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-forest"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
