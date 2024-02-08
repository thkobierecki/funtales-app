import Image from 'next/image'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'

export const ProgramHero = ({ hero }) => {
  return (
    <section className="relative bg-gradient-to-b from-purple-25 to-purple-50 px-4 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="relative">
          <div className="flex justify-center">
            <span className="inline-block -rotate-1 rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
              {hero.tagline}
            </span>
          </div>
          <h2 className="h1 mx-auto mt-4 max-w-3xl text-center text-purple-900">
            {hero.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-xl leading-relaxed text-purple-800 sm:mt-5">
            {hero.text}
          </p>
          {/* CTA button */}
          <div className="mt-8 flex justify-center">
            <Button href={hero.action.href}>
              {hero.action.label}
              {hero.action.icon && (
                <Icon
                  icon="arrowNarrowRight"
                  className="ml-3 h-6 w-6 group-hover:animate-horizontal-bounce"
                  stroke={2}
                />
              )}
            </Button>
          </div>
        </div>
        {/* Hero image */}
        <div className="relative z-10 mt-14 sm:mt-16">
          <div className="aspect-h-2 aspect-w-3 relative sm:aspect-h-9 sm:aspect-w-16">
            <Image
              className="absolute inset-0 h-full w-full rounded-3xl object-cover shadow-xl"
              src={hero.image.src}
              fill
              priority
              sizes="(min-width: 1280px) 80rem, (min-width: 1024px) calc(100vw - 4rem), (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
              alt={hero.headline}
            />
          </div>
        </div>
      </div>
      {/* Background overlay effect */}
      <div className="absolute inset-x-0 bottom-0 top-auto z-0 hidden h-64 bg-white sm:block" />
    </section>
  )
}
