import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/home/Hero';
import { ValuePillars } from '@/components/home/ValuePillars';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { WhyGreenScience } from '@/components/home/WhyGreenScience';
import { CropsStrip } from '@/components/home/CropsStrip';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ValuePillars />
      <CategoriesSection />
      <FeaturedProducts />
      <WhyGreenScience />
      <CropsStrip />
      <FinalCTA />
    </>
  );
}
