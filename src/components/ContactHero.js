'use client'
import Image from 'next/image'
import clsx from 'clsx'
import { useState } from 'react'

import { Button } from '@/components/Button'
import dotsLargeGrid from '/public/images/illustrations/dots-large-grid.svg'
import dotsGrid from '/public/images/illustrations/dots-grid.svg'
import dotsStrip from '/public/images/illustrations/dots-strip.svg'

const fields = [
  {
    name: 'name',
    label: 'Imię *',
    type: 'text',
    placeholder: 'Podaj swoje imię',
    required: true,
  },
  {
    name: 'email',
    label: 'Email *',
    type: 'email',
    placeholder: 'Podaj swój email',
    required: true,
  },
  {
    name: 'children_name',
    label: 'Imię dziecka',
    type: 'text',
    placeholder: 'Podaj imię swojego dziecka',
    required: true,
  },
  {
    name: 'hobbies',
    label: 'Zainteresowania, hobby',
    type: 'text',
    placeholder: 'Podaj zainteresowania i hobby swojego dziecka',
    required: true,
  },
]

export const ContactHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    children_name: '',
    hobbies: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault() // Prevent default form submission
    try {
      const response = await fetch('/airtable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, created_at: new Date() }),
      })

      if (!response.ok) {
        throw new Error('Something went wrong with the form submission')
      }

      const result = await response.json()
      alert('Dziękujemy! Niedługo dostaniesz od nas wiadomość!') // Or handle the success response in a more user-friendly way
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Error submitting form. Please try again.') // Or handle the error in a more user-friendly way
    }
  }
  return (
    <section
      className="overflow-hidden bg-gradient-to-b from-purple-25 to-purple-50 px-4 pb-12 sm:px-6 lg:px-8 lg:pt-24"
      id="register"
    >
      {/* Container */}
      <div className="mx-auto max-w-xl lg:grid lg:max-w-screen-xl lg:grid-cols-2 lg:gap-10 xl:gap-32 ">
        {/* Hero header */}
        <div className="py-16 lg:py-32">
          <div>
            <span className="inline-block -rotate-1 rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
              Zapisz się juź dziś!
            </span>
          </div>
          <h1 className="h3 mt-4 max-w-md text-purple-900">
            Dołącz do naszej magicznej listy oczekujących!
          </h1>
          <p className="text-md mt-3 max-w-lg leading-relaxed text-purple-800">
            Czy marzysz o tym, by każdy dzień Twojego dziecka był wypełniony
            niezwykłymi przygodami i kreatywną zabawą? Nasza aplikacja jest
            właśnie dla Ciebie – tworzymy spersonalizowane opowieści, które
            przeniosą Twoje dziecko do świata pełnego magii i odkryć. Aplikacja
            jest jeszcze w budowie, ale nie chcemy, abyś musiał czekać na to
            niezwykłe doświadczenie!
          </p>
          <p className="text-md mt-3 max-w-lg leading-relaxed text-purple-800">
            Zapisz się już dziś na naszą listę oczekujących i zyskaj ekskluzywny
            dostęp do naszych opowieści. Dwa razy w tygodniu, w każdy wtorek i
            piątek, wyślemy na Twoją skrzynkę mailową nową, wciągającą historię,
            która rozświetli wyobraźnię Twojego dziecka. To nasz sposób, by
            umilić Wam czas oczekiwania na oficjalne uruchomienie aplikacji.
          </p>
        </div>
        {/* Contact form container */}
        <div className="relative">
          {/* Background decorations */}
          <Image
            src={dotsLargeGrid}
            className="absolute -right-16 -top-12 w-80 opacity-60 sm:-top-16 lg:-top-16 lg:left-14 lg:hidden lg:w-36"
            alt=""
            priority
          />
          <Image
            src={dotsGrid}
            className="absolute -right-16 -top-16 hidden w-40 opacity-75 lg:-top-16 lg:left-14 lg:block lg:w-36"
            alt=""
          />
          <Image
            src={dotsStrip}
            className="absolute -right-16 top-1/2 hidden w-20 rotate-90 opacity-75 lg:block"
            alt=""
          />
          {/* Contact form card */}
          <div className="relative z-10 mx-auto w-full rounded-3xl bg-white px-4 py-10 shadow-xl sm:p-16 lg:ml-auto lg:mr-0 lg:p-12 xl:p-14">
            <div>
              <h3 className="text-2xl font-bold text-purple-900">
                Dołącz do nas!
              </h3>
              <p className="mt-0.5 text-purple-800 text-opacity-90">
                Zapisz się już dziś na naszą listę oczekujących i zyskaj
                ekskluzywny dostęp do naszych opowieści.
              </p>
            </div>
            {/* Contact form */}
            <form className="mt-8" onSubmit={handleSubmit}>
              {fields.map((field, index) => (
                <div
                  key={`contact-form-field-${index}}`}
                  className={clsx(index > 0 && 'mt-6')}
                >
                  <label
                    htmlFor={field.name}
                    className="ml-0.5 text-sm font-medium text-purple-900"
                  >
                    {field.label}
                  </label>
                  {field.type == 'textarea' && (
                    <textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      rows={5}
                      className="mt-2 w-full rounded-2xl border-2 border-purple-50 p-4 text-sm font-medium text-purple-700 placeholder-purple-700 placeholder-opacity-70 outline-none duration-300 ease-in-out focus:border-purple-200 focus:outline-none focus:ring-purple-200"
                      required={field.required}
                      onChange={handleChange}
                    />
                  )}

                  {['text', 'email'].includes(field.type) && (
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="mt-2 h-14 w-full rounded-2xl border-2 border-purple-50 p-4 text-sm font-medium text-purple-700 placeholder-purple-700 placeholder-opacity-70 outline-none duration-300 ease-in-out focus:border-purple-200 focus:outline-none focus:ring-purple-200"
                      required={field.required}
                      onChange={handleChange}
                    />
                  )}
                </div>
              ))}

              <div className="mt-6 flex justify-start">
                <Button>Zapisz się!</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
