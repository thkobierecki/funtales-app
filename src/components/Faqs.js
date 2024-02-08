'use client'

import Image from 'next/image'
import { Disclosure, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import questionMark from '/public/images/illustrations/question-mark.svg'
import bulb from '/public/images/illustrations/bulb.svg'

const faqs = [
  {
    question:
      'Czy mogę personalizować historie dla więcej niż jednego dziecka?',
    answer:
      'Tak, nasza aplikacja umożliwia tworzenie spersonalizowanych opowieści dla wielu dzieci. Możesz dostosować każdą historię do indywidualnych preferencji i zainteresowań każdego z Twoich dzieci.',
  },
  {
    question: 'Czy aplikacja jest odpowiednia dla dzieci w każdym wieku?',
    answer:
      'Nasza aplikacja jest zaprojektowana tak, aby być atrakcyjna dla dzieci w różnym wieku. Dostosowujemy treść historii do wieku dziecka, aby była odpowiednia i angażująca.',
  },
  {
    question: 'Czy mogę wybrać tematykę lekcji moralnych w historiach?',
    answer:
      'Tak, oferujemy różnorodne tematy lekcji moralnych, z których możesz wybierać, aby dostosować historię do wartości, które chcesz przekazać swojemu dziecku.',
  },
  {
    question: 'Jak długo trwa wygenerowanie spersonalizowanej historii?',
    answer:
      'Wygenerowanie spersonalizowanej historii jest szybkie i zajmuje zazwyczaj tylko kilka minut, dzięki naszemu zaawansowanemu algorytmowi AI.',
  },
  {
    question:
      'Czy mogę zapisać lub wydrukować historie dla późniejszego użytku?',
    answer:
      'Tak, każdą wygenerowaną historię możesz zapisać w aplikacji. Pracujemy także nad opcja wydrukowania historii, abyś mógł stworzyć fizyczną kopię ulubionych opowieści Twojego dziecka.',
  },
  {
    question: 'Czy aplikacja jest bezpieczna i chroni prywatność moich dzieci?',
    answer:
      'Bezpieczeństwo i prywatność są dla nas priorytetem. Stosujemy zaawansowane środki zabezpieczające, aby chronić Twoje dane i informacje o Twoich dzieciach. Wszystkie dane są przechowywane zgodnie z obowiązującymi przepisami o ochronie danych osobowych.',
  },
]

export const Faqs = ({}) => {
  return (
    <section className="bg-yellow-100 py-20 sm:py-28" id="faq">
      {/* Container */}
      <div className="mx-auto px-4 sm:px-6 lg:max-w-screen-lg lg:px-8">
        {/* Section header title and subtext  */}
        <div className="max-w-2xl">
          <h2 className="h2 text-purple-900">FAQ</h2>
          <p className="mt-4 max-w-2xl text-xl leading-relaxed text-purple-800 lg:text-left">
            Pytania? Odpowiadamy
          </p>
        </div>
        {/* FAQ */}
        <ul className="relative mt-12 space-y-6">
          {/* Decorator images*/}
          <div>
            <Image
              className="absolute -left-60 top-10 hidden h-auto w-28 2xl:block"
              src={questionMark}
              alt=""
            />
            <Image
              className="absolute -right-60 bottom-10 hidden h-auto w-28 2xl:block"
              src={bulb}
              alt=""
            />
          </div>
          {faqs.map((faq, index) => (
            <Disclosure
              key={index}
              as="li"
              className="w-full rounded-3xl bg-white px-5 py-6 sm:px-12 sm:py-8"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="group flex w-full items-center justify-between text-lg sm:text-xl">
                    <span className="text-left font-medium text-purple-900 duration-300 ease-in-out group-hover:text-purple-600">
                      {faq.question}
                    </span>
                    <Icon
                      icon="chevronDown"
                      className={clsx(
                        open && 'rotate-180',
                        'ml-3 h-6 w-6 flex-shrink-0 text-purple-700 duration-300 ease-in-out group-hover:text-purple-600 sm:ml-6',
                      )}
                      stroke={2}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="mt-3 text-base leading-relaxed text-purple-800 sm:text-lg">
                      {faq.answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </ul>
      </div>
    </section>
  )
}
