import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

import logo from '/public/images/ft_logo.svg'
import { Icon } from '@/components/Icon'

const navigation = [
  { label: 'O nas', href: '#o-nas' },
  { label: 'Jak działamy', href: '#how-it-works' },
  { label: 'Opinie', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

function SocialLink({ className, href, icon }) {
  return (
    <Link
      className={clsx(
        'flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 duration-300 ease-in-out hover:bg-purple-600',
        className,
      )}
      href={href}
    >
      <Icon icon={icon} className="h-5 w-5 text-white" />
    </Link>
  )
}

export const Footer = ({  }) => {
  return (
    <footer className="space-y-8 divide-y divide-purple-400/20 bg-yellow-100 px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      {/* Top section: blocks */}
      <div className="mx-auto grid max-w-md gap-y-8 pb-6 sm:max-w-none sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 md:gap-x-12 lg:max-w-screen-2xl lg:grid-cols-11 lg:gap-8 xl:gap-12">
        {/* Block 1 */}
        <div className="flex flex-col lg:col-span-4 lg:mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-60 flex-shrink-0 flex-grow-0">
              <Link href="/">
                <Image src={logo} alt="Bright" className="h-auto" />
              </Link>
            </div>
          </div>
          {/* Mission statement */}
          <div className="mt-6 text-lg text-purple-800">
            Odkryj magię spersonalizowanych opowieści, które przeniosą Twoje
            dziecko w świat wyobraźni, przygody i wartości.
          </div>
          {/* Social links */}
          <div className="mt-5 w-full lg:mt-6">
            <div className="flex justify-start space-x-4">
              <SocialLink href="#0" icon="instagram" />
              <SocialLink href="#0" icon="facebook" />
              <SocialLink href="#0" icon="twitter" />
            </div>
          </div>
        </div>
        {/* Block 2 */}
        <div className="flex-shrink sm:order-3 lg:order-none lg:col-span-2">
          <h6 className="relative text-xl font-bold tracking-wide text-purple-900">
            <span className="relative z-20">Linki</span>
            <span className="absolute -bottom-1 left-0 z-10 h-1 w-12 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500" />
          </h6>
          {/* Program links */}
          <ul className="mt-6 divide-y divide-purple-400/20 text-lg">
            {navigation.map((program, index) => (
              <li
                key={`footer-program-link-${program.label}`}
                className={clsx(
                  'font-medium text-purple-700 duration-300 ease-in-out hover:text-purple-600',
                  index == 0 && 'pb-2',
                  index == navigation.length && 'pt-2',
                  index > 0 && index < navigation.length && 'py-2',
                )}
              >
                <Link href={program.href}>{program.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Block 3 */}
        {/* <div className="flex-shrink sm:order-4 lg:order-none lg:col-span-2">
          <h6 className="relative text-xl font-bold tracking-wide text-purple-900">
            <span className="relative z-20">Site Links</span>
            <span className="absolute -bottom-1 left-0 z-10 h-1 w-12 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500" />
          </h6>
          <ul className="mt-6 divide-y divide-purple-400/20 text-lg">
            {siteLinks.map((link, index) => (
              <li
                key={`footer-site-link-${link.label}`}
                className={clsx(
                  'font-medium text-purple-700 duration-300 ease-in-out hover:text-purple-600',
                  index == 0 && 'pb-2',
                  index == siteLinks.length && 'pt-2',
                  index > 0 && index < siteLinks.length && 'py-2',
                )}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div> */}
        {/* Block 4 */}
        {/* <div className="sm:order-2 lg:order-none lg:col-span-3 lg:mx-auto ">
          <h6 className="relative text-xl font-bold tracking-wide text-purple-900">
            <span className="relative z-20">Contact us</span>
            <span className="absolute -bottom-1 left-0 z-10 h-1 w-12 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500" />
          </h6>
          
          <ul className="mt-6 flex flex-col space-y-5">
            
            <li className="flex max-w-xs flex-shrink">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400">
                  <Icon icon="mapPin" className="h-6 w-6 text-purple-700" />
                </span>
              </div>
              <div className="ml-3 mt-0 flex-1 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Address
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
                  {contact.address}
                </p>
              </div>
            </li>
            
            <li className="flex flex-shrink-0">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-200">
                  <Icon icon="mail" className="h-6 w-6 text-purple-700" />
                </span>
              </div>
              <div className="ml-3 flex-1 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Email
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
                  {contact.email}
                </p>
              </div>
            </li>
            
            <li className="flex flex-shrink-0">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-200">
                  <Icon icon="phone" className="h-6 w-6 text-purple-700" />
                </span>
              </div>
              <div className="ml-3 flex-1 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Phone
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
                  {contact.phone}
                </p>
              </div>
            </li>
          </ul>
        </div>*/}
      </div> 
      {/* Bottom section */}
      {/* <div className="mx-auto flex max-w-md flex-col justify-between py-8 sm:max-w-none sm:flex-row lg:max-w-screen-2xl">
      
        <span className="text-base text-purple-800/90">
          © {new Date().getFullYear()} Bright School. All rights reserved.
        </span>
        <p className="mt-0.5 flex items-center text-purple-800/90">
          Made with
          <Icon icon="coffee" className="mx-1 h-5 w-5" />
          <span>
            by{' '}
            <Link
              className="text-purple-700 hover:text-purple-900 hover:underline"
              href="https://www.tailwindawesome.com/"
              target="_blank"
            >
              Tailwind Awesome
            </Link>
          </span>
        </p>
      </div> */}
    </footer>
  )
}
