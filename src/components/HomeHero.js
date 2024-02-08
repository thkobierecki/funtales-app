'use client'

import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import heroImage from '/public/images/stock/hero_ilu.png'

const ratings = [
  { label: 'Wciągające Historie', stars: 5 },
  { label: 'Cudowne ilustracje', stars: 5 },
  { label: 'Pełna personalizacja', stars: 5 },
]

export const HomeHero = () => {

  return (
    <section className="bg-gradient-to-b from-purple-25 to-purple-50 px-4 pt-16 sm:px-6 lg:px-8">
      {/* Hero container */}
      <div
        className="mx-auto max-w-screen-xl lg:grid lg:grid-cols-12 lg:gap-8"
        x-data="{ modalOpen: false }"
      >
        {/* Hero text content */}
        <div className="flex flex-col items-center justify-center lg:col-span-6 lg:items-start">
          <div>
            <span className="inline-block -rotate-1 rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
              Witaj w FunTales
            </span>
          </div>
          <h1 className="h1 mt-4 max-w-xl text-center text-purple-900 sm:mt-5 lg:max-w-none lg:text-left">
            Niezapomniane Historie dla Twojego Dziecka
          </h1>
          <p className="mt-3 max-w-2xl text-center text-xl leading-loose text-purple-800 lg:text-left">
            Odkryj magię spersonalizowanych opowieści, które przeniosą Twoje
            dziecko w świat wyobraźni, przygody i wartości. Tworzymy unikalne,
            emocjonujące historie, dostosowane do zainteresowań i osobowości
            Twojego dziecka, zmieniając rutynę przed snem w chwile pełne radości
            i więzi.
          </p>
          {/* Hero buttons */}
          <div className="mt-8 flex flex-col items-center overflow-hidden sm:flex-row">
            <Button href="#register">
              Zapisz się!
              <Icon
                icon="arrowNarrowRight"
                className="ml-3 h-6 w-6 group-hover:animate-horizontal-bounce"
                stroke={2}
              />
            </Button>
          </div>
          {/* Social proof */}
          <p className="mt-14 hidden text-sm font-medium uppercase tracking-wider text-purple-900 sm:block lg:hidden xl:block">
            Ocenione na 5 gwiazdek przez ponad{' '}
            <span className="font-semibold text-purple-600">100 rodziców</span>
          </p>
          <div className="mt-8 hidden flex-col divide-y divide-purple-400/20 overflow-hidden sm:mt-5 sm:flex sm:flex-row sm:divide-x sm:divide-y-0 lg:hidden xl:flex">
            {ratings.map((rating, index) => (
              <div
                key={`primary-${rating.label}`}
                className={clsx(
                  index == 0 && 'pb-5 sm:pb-0 sm:pr-10',
                  index == 1 && 'py-5 sm:px-10 sm:py-0',
                  index == 2 && 'pt-5 sm:pl-10 sm:pt-0',
                  'flex flex-col items-center',
                )}
              >
                <div className="flex w-full justify-center space-x-1">
                  {[...Array(rating.stars)].map((e, i) => (
                    <Icon
                      icon="starFilled"
                      className="h-4 w-4 text-yellow-500"
                      key={`primary-${rating.label}-star-${i}`}
                    />
                  ))}
                </div>
                <p className="mt-2.5 text-xs font-bold uppercase tracking-wide text-purple-700">
                  {rating.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Hero image & video */}
        <div className="mx-auto mt-16 flex max-w-3xl flex-col justify-center lg:col-span-6 lg:mt-0 lg:max-w-none">
          <div className="relative">
            <Image
              src={heroImage}
              priority
              className="h-auto w-full"
              alt="Bright Photo Collage"
              sizes="(min-width: 1280px) 39rem, (min-width: 1024px) 50vw, (min-width: 768px) 48rem, 100vw"
            />
          </div>
        </div>
      </div>
      {/* Visible only on sm screens ( <= 640px ) and lg screens ( >= 1024px	< 1280px ) */}
      <div className="mt-20 flex flex-col items-center sm:hidden lg:mt-24 lg:flex xl:hidden">
        {/* Social proof */}
        <p className="text-sm font-semibold uppercase tracking-wider text-purple-900">
          Rated 5 stars by over{' '}
          <span className="font-semibold text-purple-600">100 parents</span>
        </p>
        <div className="mt-8 flex flex-col divide-y divide-purple-400/20 overflow-hidden sm:flex-row sm:divide-x sm:divide-y-0">
          {ratings.map((rating, index) => (
            <div
              key={`secondary-${rating.label}`}
              className={clsx(
                index == 0 && 'pb-5 sm:pb-0 sm:pr-10',
                index == 1 && 'py-5 sm:px-10 sm:py-0',
                index == 2 && 'pt-5 sm:pl-10 sm:pt-0',
                'flex flex-col items-center',
              )}
            >
              <div className="flex w-full justify-center space-x-1">
                {[...Array(rating.stars)].map((e, i) => (
                  <Icon
                    icon="starFilled"
                    className="h-4.5 w-4.5 text-yellow-500 lg:h-5 lg:w-5"
                    key={`secondary-${rating.label}-star-${i}`}
                  />
                ))}
              </div>

              <p className="mt-2.5 text-xs font-bold uppercase tracking-wide text-purple-700">
                {rating.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
