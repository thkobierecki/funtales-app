import Image from 'next/image'
import clsx from 'clsx'

import curvedDottedLine from '/public/images/illustrations/curved-dotted-line.svg'
import loopedDottedLine from '/public/images/illustrations/looped-dotted-line.svg'
import highlight from '/public/images/illustrations/underline-simple-light-purple.svg'

const programs = [
  {
    name: 'Nauka Przez Zabawę',
    text: 'Każda historia to nowa lekcja - o wartościach, empatii, rozwiązywaniu problemów.',
    image: '/images/stock/elementary-school.jpg',
  },
  {
    name: 'Rozwój Wyobraźni',
    text: 'Buduj kreatywność i ciekawość świata u swojego dziecka.',
    image: '/images/stock/kindergarten.jpg',
  },
  {
    name: 'Czas dla Rodziny',
    text: 'Niezapomniane chwile wspólnego czytania, które zbliżają.',
    image: '/images/stock/preschool.jpg',
  },
]

const ProgramCard = ({ program, index }) => (
  <div
    className={clsx(
      index == 1 &&
        'mt-12 w-full rounded-3xl bg-yellow-200 px-8 py-10 sm:p-12 md:mt-0 md:-translate-y-80 md:px-8 md:py-10 lg:p-12',
      index == 2 &&
        'mt-12 w-full rounded-3xl bg-blue-50 px-8 py-10 sm:p-12 md:col-start-2 md:mt-0 md:-translate-y-80 md:px-8 md:py-10 lg:p-12',
      'relative',
    )}
  >
    {index == 0 && (
      <Image
        src={curvedDottedLine}
        className="absolute left-1/2 top-0 hidden -translate-y-1/2 md:block"
        style={{ width: 'calc(50% + 4rem)' }}
        alt=""
      />
    )}
    <div
      className={clsx(
        index == 0 &&
          'relative z-10 w-full rounded-3xl bg-purple-25 px-8 py-10 sm:p-12 md:px-8 md:py-10 lg:p-12',
      )}
    >
      <div className="flex flex-col justify-between">
        <div className="flex-1">
          <h3 className="h3 text-purple-900">{program.name}</h3>
          <p className="mt-3 max-w-2xl text-lg leading-loose text-purple-800">
            {program.text}
          </p>
          <div className="aspect-h-2 aspect-w-3 relative mt-8">
            <Image
              className="absolute inset-0 rounded-2xl object-cover"
              fill
              src={program.image}
              alt={program.name}
              sizes="(min-width: 1280px) 32rem, (min-width: 768px) calc(50vw - 6.5rem), (min-width: 640px) 30rem, calc(100vw - 6rem)"
            />
          </div>
        </div>
        {/* <div className="mt-8">
          <Button href={`/programs/${program.slug}`} variant="accent" size="sm">
            Learn more
            <Icon
              icon="arrowNarrowRight"
              className="ml-3 h-5 w-5 group-hover:animate-horizontal-bounce"
              stroke={2}
            />
          </Button>
        </div> */}
      </div>
    </div>
    {index == 0 && (
      <Image
        src={loopedDottedLine}
        className="absolute bottom-0 left-1/2 hidden translate-y-[90%] md:block"
        style={{ width: 'calc(50% + 4rem)' }}
        alt=""
      />
    )}
  </div>
)

export const FeaturedPrograms = () => {
  const featuredPrograms = programs

  return (
    <section className="overflow-hidden px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-24 md:pb-0 lg:px-8" id="values">
      {/* Container */}
      <div className="mx-auto max-w-xl md:max-w-screen-xl">
        {/* Section header title and subtext  */}
        <div className="md:grid md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="px-4 text-center sm:px-6 lg:px-8">
            <h3 className="h2 text-purple-900">
              <span className="block">Twórz Więcej</span>
              {/* Underlined text */}
              <span className="relative block">
                <span className="relative">
                  <Image
                    className="absolute inset-0 translate-y-9 transform sm:translate-y-10 xl:translate-y-12"
                    src={highlight}
                    alt=""
                  />
                  <span className="relative">niż Tylko Historie</span>
                </span>
              </span>
            </h3>
          </div>
        </div>
        {/* School programs */}
        <div className="mt-16 md:mt-72 md:grid md:grid-cols-2 md:gap-8 lg:gap-16">
          {featuredPrograms.map((program, index) => (
            <ProgramCard
              key={`featured-program-${program.name}`}
              program={program}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
