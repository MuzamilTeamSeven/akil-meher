import React, { forwardRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import backgroundImage from '@/images/DMSPIc.jpg';

export const CallToAction = forwardRef((props, ref) => (
  <section
    ref={ref}
    id="get-started-today"
    className="relative overflow-hidden py-20"
  >

    <Container className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <Image
              src={backgroundImage}
              alt="DMS Software"
              className="rounded-lg shadow-lg w-full max-w-md md:max-w-full"
            />
          </div>

          <div>
            <h2 className="font-display text-3xl tracking-tight text-dark sm:text-4xl">
              Dealer Management System (DMS)
            </h2>
            <p className="mt-4 text-lg tracking-tight text-dark">
              Dealer Center's Fully integrated mobile and web-based Solution gives you industry leading that combine all the tools you need into a single platform. Dealer Center make it easier then even to run a business.
            </p>

            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-dark list-disc list-inside marker:text-blue-500">
              <li className="ml-4">
                Desking & Deal Management
              </li>
              <li className="ml-4">
                Finance & Insurance
              </li>
              <li className="ml-4">
                Wholesale, Cash, Retail
              </li>
              <li className="ml-4">
                Laser, Okidata Contracts
              </li>
              <li className="ml-4">
                Service Contract Company
              </li>
              <li className="ml-4">
                Vehicle Registration, Titling
              </li>
              <li className="ml-4">
                Credit Bureau & Compliance
              </li>
              <li className="ml-4">
                Credit Card & ACH Payment
              </li>
            </ul>

            <div className='my-10'>
              <Button href="/register" className="bg-blue-500 text-black rounded-pill hover:bg-yellow-600 px-4 py-2 shadow-md">
                <span>
                  Learn More
                </span>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </Container>

  </section>
));
