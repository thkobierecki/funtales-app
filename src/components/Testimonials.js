import Image from 'next/image'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { getAllItems } from '@/lib/getItems'

const bgColorsClassName = [
  'bg-yellow-200',
  'bg-purple-25',
  'bg-rose-50',
  'bg-blue-50',
]

const testimonials = [
  {
    name: 'Ania',
    testimonial:
      'Niesamowity wybór. Mnóstwo opcji personalizacji. Dzieciom się podoba. Świetna grafika. Oszczędzamy dużo czasu na wybieraniu książki, zamiast tego bawimy się w tworzenie własnej. To naprawdę sprawia, że każdy czuje się wyjątkowy, mogąc być gwiazdą w historiach. To niekończąca się zabawa.',
    stars: 5,
  },
  {
    name: 'Wojtek',
    testimonial:
      'Po ciężkim dniu w pracy czasami po prostu brak ci wyobraźni, aby wymyślić bajkę na dobranoc dla swojego malucha! Wtedy ta aplikacja jest świetną pomocą!',
    stars: 5,
  },
  {
    name: 'Ola',
    testimonial:
      'Każda historia to nowa przygoda, która rozpala wyobraźnię moich dzieci. Są zachwycone, że mogą być częścią opowieści i decydować o jej przebiegu. Dzięki tej aplikacji wieczory stały się dla nas magicznym czasem, wyczekiwanym przez cały dzień.',
    stars: 5,
  },
  {
    name: 'Paweł',
    testimonial: 'Moja córka zawsze miała problem z zasypianiem. Ale od kiedy zaczęliśmy korzystać z tej aplikacji, nie może się doczekać, aby położyć się do łóżka i słuchać nowej historii. To niesamowite, jak bardzo opowieści dostosowane do jej zainteresowań potrafią ją uspokoić i przygotować do snu.',
    stars: 5,
  },
]

export const Testimonials = () => {
  return (
    <section className="bg-purple-600 py-20 sm:py-28 md:-mt-48 lg:py-32" id="testimonials">
      {/* Container */}
      <div className="mx-auto px-4 sm:px-6 lg:max-w-screen-2xl">
        {/* Section header title and subheader */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="h2 max-w-2xl text-center text-white">
            Co mówią rodzice?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl leading-relaxed text-purple-50">
            Posłuchaj, co inni rodzice mówią o tym, jak nasza aplikacja
            wzbogaciła ich wspólne wieczory.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-6 md:mt-14 md:gap-8 lg:mt-16 lg:gap-6 xl:mt-20 xl:grid-cols-4 2xl:mt-24 2xl:gap-12">
          {testimonials.map((item, index) => (
            <blockquote
              key={`testimonial-${index}`}
              className={clsx(
                bgColorsClassName[index % 4],
                'rounded-3xl px-8 py-8 transition duration-300 ease-in-out sm:px-6 md:px-8 lg:px-5 2xl:px-8',
              )}
            >
              <p className="mt-3 text-lg font-bold text-purple-900">
                {item.name}
              </p>
              {/* Rating */}
              <div className="mt-1 flex w-full justify-start space-x-1">
                {[...Array(item.stars)].map((e, i) => (
                  <Icon
                    key={`${item.name}-star-${i}`}
                    icon="starFilled"
                    className="h-5 w-5 text-yellow-500"
                  />
                ))}
              </div>
              <p className="mt-5 text-lg text-purple-800">
                "{item.testimonial}"
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
