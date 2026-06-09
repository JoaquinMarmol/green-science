/**
 * Datos de la empresa (ver docs/05-company-info.md).
 * Pendientes del cliente (email oficial, redes) quedan como placeholders.
 */
export const siteConfig = {
  name: 'Green Science',
  tagline: 'Living Soil Biotechnology',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://greenscience.bo',

  // Contacto
  phones: ['+591 69896583', '+591 74623363'],
  whatsapp: '59169896583', // formato wa.me (sin + ni espacios)
  email: 'info@greenscience.bo', // placeholder — pendiente de confirmar
  address: 'Parque Industrial de Montero, Montero – Santa Cruz, Bolivia',
  addressShort: 'Montero – Santa Cruz, Bolivia',
  region: 'Santa Cruz, Bolivia',

  // Emergencias / legal
  emergency: 'Hospital Japonés 800-10-6966',

  // Mapa embebido (sin API key)
  mapsEmbed:
    'https://www.google.com/maps?q=Parque%20Industrial%20Montero%20Santa%20Cruz%20Bolivia&z=13&output=embed',
  mapsLink: 'https://maps.google.com/?q=Parque+Industrial+Montero+Santa+Cruz+Bolivia',

  // Redes (pendientes de confirmar por el cliente)
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },
} as const;

/** Construye un enlace de WhatsApp con mensaje opcional prellenado. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
