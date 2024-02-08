import { HomeHero } from '@/components/HomeHero'
import { HomeFeatureBlocks } from '@/components/HomeFeatureBlocks'
import { FeaturedPrograms } from '@/components/FeaturedPrograms'
import { Testimonials } from '@/components/Testimonials'
import { Faqs } from '@/components/Faqs'

import { getAllItems } from '@/lib/getItems'
import { AlternatingFeatures } from '@/components/AlternatingFeatures'
import { ContactHero } from '@/components/ContactHero'

export const metadata = {
  title: 'FunTales - Niezapomniane Historie dla Twojego Dziecka',
  description:
    'Odkryj magię spersonalizowanych opowieści, które przeniosą Twoje dziecko w świat wyobraźni, przygody i wartości.',
}

export default function HomePage() {
  const faqs = getAllItems('faqs')

  return (
    <>
      <HomeHero />
      {/* Gradient background transition */}
      <div className="h-40 w-full bg-gradient-to-b from-purple-50 to-yellow-100 sm:h-48 xl:h-52" />

      <HomeFeatureBlocks />
      <AlternatingFeatures />
      <FeaturedPrograms />
      <Testimonials />
      <ContactHero />
      <Faqs faqs={faqs} />
    </>
  )
}
