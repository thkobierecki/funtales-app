import Image from 'next/image'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import checkmark from '/public/images/illustrations/checkmark.svg'
import portraitImage1 from '/public/images/stock/home-blocks-01.jpg'
import squareImage1 from '/public/images/stock/home-blocks-02.jpg'
import portraitImage2 from '/public/images/stock/home-blocks-03.jpg'
import squareImage2 from '/public/images/stock/home-blocks-04.jpg'

const features = [
  'Rozwój Wyobraźni i Kreatywności',
  'Edukacyjna Wartość',
  'Wspieranie Rozwoju Emocjonalnego',
  'Więź Rodzicielska',
  'Personalizacja treści',
  'Promowanie Miłości do Czytania',
]

const blocks = [
  {
    tagline: 'An eclectic approach to education',
    headline: "Our goal is to ensure your little one's success in life",
    text: 'Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    action: { label: 'Learn more', href: '/about', icon: true },
    portraitImage: { src: portraitImage1, alt: 'Kid stacking blocks' },
    squareImage: { src: squareImage1, alt: 'Children writing on workbook' },
  },
  {
    tagline: 'A second home for your child',
    headline: 'We provide an environment that enables students to thrive',
    text: 'Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    action: { label: 'Learn more', href: '/about', icon: true },
    portraitImage: { src: portraitImage2, alt: 'Child covered in paint' },
    squareImage: { src: squareImage2, alt: 'Children eating' },
  },
]

export const HomeFeatureBlocks = () => {
  return (
    <section className="overflow-hidden bg-yellow-100 px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8" id="o-nas">
      {/* Container */}
      <div className="mx-auto max-w-screen-xl">
        {/* Centered content with feature list */}
        <div className="relative">
          {/* Block title and subtext */}
          <h2 className="h2 mx-auto max-w-4xl text-center text-purple-900">
            Ucz Ważnych Lekcji Życiowych
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl leading-relaxed text-purple-800">
            FunTales - nie tylko rozrywka, ale i nauka wartości. Nasza aplikacja
            generuje opowieści, które są nie tylko zabawne, ale także wzbogacone
            o ważne lekcje życiowe. Oferujemy szeroki zakres historii
            obejmujących różnorodne tematy, takie jak uczciwość, życzliwość,
            odwaga, empatia i odpowiedzialność. Dzięki FunTales dzieci mogą
            uczyć się ważnych wartości moralnych w sposób zarówno zabawny, jak i
            ekscytujący.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl leading-relaxed text-purple-800">
            Każda opowieść stworzona przez naszą aplikację to okazja do
            przekazania dziecku ważnych przesłań, które będą towarzyszyć mu w
            dorastaniu. Nasz inteligentny system dobiera tematy i wartości
            zgodnie z wiekiem i zainteresowaniami dziecka, co czyni naukę przez
            zabawę jeszcze bardziej efektywną. Wykorzystaj magię opowiadań, aby
            pomóc swojemu dziecku rozwinąć charakter i zrozumieć świat wokół
            siebie.
          </p>
          {/* Feature list */}
          <div className="mx-auto mt-12 max-w-3xl">
            <ul className="-mx-3 -my-2 flex flex-wrap items-center justify-center text-lg text-purple-800">
              {features.map((feature, index) => (
                <li
                  key={`home-feature-${index}`}
                  className="mx-3 my-2 flex items-center"
                >
                  <Image
                    className="mr-3 h-7 w-7 flex-shrink-0"
                    src={checkmark}
                    alt=""
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* {blocks.map((block, index) => (
          <div
            key={`home-block-${index}`}
            className={clsx(
              'mx-auto mt-16 max-w-xl lg:grid lg:max-w-none lg:grid-cols-12 lg:gap-x-14 xl:gap-x-20 2xl:gap-x-24',
              index % 2 == 0
                ? 'sm:mt-20 lg:mt-24'
                : 'sm:mt-44 lg:mt-56 xl:mt-60 2xl:mt-64',
            )}
          > */}
            {/* Block images*/}
            {/* <div
              className={clsx(
                'relative lg:col-span-6',
                index % 2 == 1 && 'lg:order-2',
              )}
            >
              <div
                className={clsx(
                  'relative',
                  index % 2 == 0
                    ? 'sm:pl-36 lg:pl-20 xl:pl-32'
                    : 'sm:pr-36 lg:pr-20 xl:pr-32',
                )}
              >
                <div className="aspect-h-4 aspect-w-3 relative rounded-2xl">
                  <Image
                    className="absolute inset-0 rounded-2xl object-cover"
                    src={block.portraitImage.src}
                    fill
                    alt={block.portraitImage.alt}
                    sizes="(min-width: 1280px) 29.5rem, (min-width: 1024px) calc(50vw - 8.75rem), (min-width: 640px) 27rem, calc(100vw - 2rem)"
                  />
                </div>
                <div
                  className={clsx(
                    'absolute hidden rounded-3xl sm:block sm:h-72 sm:w-72 lg:h-64 lg:w-64 xl:h-72 xl:w-72 2xl:h-80 2xl:w-80',
                    index % 2 == 0
                      ? 'bottom-0 left-0 sm:translate-y-1/3'
                      : 'right-0 top-0 sm:-translate-y-1/3',
                  )}
                >
                  <Image
                    className="absolute inset-0 h-full w-full rounded-3xl object-cover"
                    src={block.squareImage.src}
                    fill
                    alt={block.squareImage.alt}
                    sizes="(min-width: 1536px) 20rem, (min-width: 1280px) 18rem, (min-width: 1024px) 16rem, (min-width: 640px) 18rem"
                  />
                </div>
              </div>
            </div> */}
            {/* Block text content*/}
            {/* <div
              className={clsx(
                'mt-16 flex flex-col justify-center lg:col-span-6 lg:mt-0',
                index % 2 == 0 ? 'sm:mt-44' : 'sm:mt-20 lg:order-1',
              )}
            >
              <div>
                <span className="inline-block -rotate-1 rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
                  {block.tagline}
                </span>
              </div>
              <h3 className="h3 mt-4 text-purple-900 sm:mt-5">
                {block.headline}
              </h3>
              <p className="mt-3 max-w-2xl text-lg leading-loose text-purple-800">
                {block.text}
              </p>
              <div className="mt-6">
                <Button href={block.action.href} variant="accent" size="sm">
                  {block.action.label}
                  {block.action.icon && (
                    <Icon
                      icon="arrowNarrowRight"
                      className="ml-3 h-6 w-6 group-hover:animate-horizontal-bounce"
                      stroke={2}
                    />
                  )}
                </Button>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </section>
  )
}
