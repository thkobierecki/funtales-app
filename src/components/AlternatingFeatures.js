import Image from 'next/image'
import clsx from 'clsx'

import highlight from '/public/images/illustrations/underline-simple-light-purple.svg'
import lightYellowBlob from '/public/images/illustrations/blob-light-yellow.svg'
import lightPurpleBlob from '/public/images/illustrations/blob-light-purple.svg'
import lightRoseBlob from '/public/images/illustrations/blob-light-rose.svg'
import dotsStrip from '/public/images/illustrations/dots-large-strip.svg'
import dots from '/public/images/illustrations/dots.svg'
import blockImage1 from '/public/images/stock/about-01.jpg'
import blockImage2 from '/public/images/stock/about-02.jpg'
import blockImage3 from '/public/images/stock/about-03.jpg'

const bgBlobs = [lightYellowBlob, lightPurpleBlob, lightRoseBlob]
const blocks = [
  {
    tagline: 'Spersonalizuj',
    headline: 'Twórz Historię Napisaną dla Twojego Dziecka',
    text: 'Rozpocznij swoją przygodę, dzieląc się z nami unikalnymi szczegółami - imieniem dziecka, jego pasjami i marzeniami. Te drobne detale są kluczem do stworzenia opowieści, która mówi bezpośrednio do serca Twojego malucha.',
    image: { src: blockImage1, alt: 'Child covered in paint' },
  },
  {
    tagline: 'Stwórz',
    headline: 'Kształtuj Magiczne Światy Wyobraźni',
    text: 'Nasza aplikacja tworzy unikatową historię, wplatając w nią detale Twojego dziecka.',
    image: { src: blockImage2, alt: 'Child painting' },
  },
  {
    tagline: 'Ciesz się historią',
    headline: 'Każda Opowieść to Drzwi do Świata Fantazji',
    text: 'Ciesz się pięknie zilustrowaną, porywającą opowieścią, która będzie skarbem Twojego dziecka.',
    image: { src: blockImage3, alt: 'Child working on workbook' },
  },
]

export const AlternatingFeatures = () => {
  return (
    <section className="mt-8 overflow-hidden bg-white px-4 pb-28 sm:px-6 sm:pb-36 lg:px-8" id="how-it-works">
      {/* Container */}
      <div className="mx-auto max-w-screen-xl">
        {/* Section header */}
        <div className="px-4 text-center sm:px-6 lg:px-8">
          <h3 className="h2 text-purple-900">
            <span className="block">Trzy Kroki</span>
            {/* Underlined text */}
            <span className="relative block">
              <span className="relative">
                <Image
                  className="absolute inset-0 translate-y-9 transform sm:translate-y-10 xl:translate-y-12"
                  src={highlight}
                  alt=""
                />
                <span className="relative">do Magicznych Opowieści</span>
              </span>
            </span>
          </h3>
        </div>
        {/* Block 1 */}
        {blocks.map((block, index) => (
          <div
            key={`about-features-${index}`}
            className="mx-auto mt-20 grid max-w-xl gap-14 sm:mt-24 sm:gap-16 lg:mt-44 lg:max-w-none lg:grid-cols-12 lg:gap-8"
          >
            {/* Block text content */}
            <div
              className={clsx(
                'relative z-10 order-2 flex flex-col justify-center lg:col-span-6 lg:text-left',
                index % 2 == 0 && 'lg:order-1',
              )}
            >
              {block.tagline && (
                <div>
                  <span className="inline-block -rotate-1 rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
                    {block.tagline}
                  </span>
                </div>
              )}
              <div>
                <h1 className="h3 mt-3.5 font-bold text-purple-900">
                  {block.headline}
                </h1>
                <p className="mt-3 max-w-xl text-lg text-purple-800 sm:text-xl sm:leading-relaxed">
                  {block.text}
                </p>
              </div>
            </div>
            {/* Block graphics */}
            <div
              className={clsx(
                'relative order-1 mx-auto w-full max-w-xl lg:col-span-6 lg:mx-0 lg:flex lg:max-w-none lg:items-center',
                index % 2 == 0 && 'lg:order-2',
              )}
            >
              {/* Blob background decoration on large screens */}
              <div className="hidden lg:block">
                <Image
                  src={bgBlobs[index % 3]}
                  className="absolute inset-0 h-full w-full transform lg:scale-135"
                  alt=""
                />
              </div>
              {/* Grid background decoration on small screens */}
              <Image
                src={dotsStrip}
                className="absolute left-1/2 top-0 origin-top -translate-x-1/2 -translate-y-8 scale-80 transform sm:scale-100 lg:hidden"
                alt=""
              />
              <div
                className={clsx(
                  'relative mx-auto w-full rounded-3xl shadow-lg lg:max-w-lg',
                  index % 2 == 0 ? 'lg:ml-auto lg:mr-0' : 'lg:mx-0',
                )}
              >
                <div className="relative block w-full">
                  {/* Corner dots decoration */}
                  <Image
                    className={clsx(
                      'absolute -top-20 z-10 hidden w-40 transform lg:block xl:-top-20 xl:w-48',
                      index % 2 == 0 ? '-left-20' : '-right-20',
                    )}
                    src={dots}
                    alt=""
                  />
                  {/* Block image */}
                  <figure className="relative aspect-[12/10] md:order-1">
                    <Image
                      src={block.image.src}
                      className="absolute inset-0 h-full w-full rounded-3xl object-cover object-center shadow-xl"
                      fill
                      sizes="(min-width: 1024px) 32rem, (min-width: 576px) 36rem, 100vw"
                      alt={block.image.alt}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
