'use client';

import { useRef } from 'react';
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'


export default function Home() {

  const callToActionRef = useRef(null);

  const scrollToCallToAction = () => {
    if (callToActionRef.current) {
      callToActionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header onDmsOverviewClick={scrollToCallToAction} />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <div ref={callToActionRef}>
          <CallToAction />
        </div>
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
