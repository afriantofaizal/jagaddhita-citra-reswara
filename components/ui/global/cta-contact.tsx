'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  MapPinHouseIcon,
  Mail01Icon,
  Call02Icon,
} from '@hugeicons/core-free-icons'

import {
  FadeIn,
  FadeUp,
  Stagger,
} from '@/components/motion/'


type HugeIcon = React.ComponentProps<typeof HugeiconsIcon>['icon']


interface ContactInfo {
  label: string
  value: string
  icon: HugeIcon
  href?: string
}


interface CtaBasicProps {
  title: string
  heading: string
  description: string

  button?: {
    text: string
    url: string
    className?: string
  }

  contactInfo: ContactInfo[]
}


interface CtaProps extends CtaBasicProps {}

type Props = Partial<CtaProps>


const defaultProps: CtaBasicProps = {

  title: 'GET IN TOUCH',

  heading: "Let's discuss your procurement needs",

  description:
    'Reach out to our team for partnership, tenders, or supply inquiries. We respond to every serious request.',

  button: {
    text: 'Contact us',
    url: '/contact',
  },

  contactInfo: [

    {
      label: 'ADDRESS',

      value:
        'Ruko Darwin Timur No. 58, Gading Serpong, Kel. Medang, Kec. Pagedangan, Kab. Tangerang, Prov. Banten',

      icon: MapPinHouseIcon,
    },

    {
      label: 'EMAIL',

      value: 'admin@jagaddhitacitrareswara.com',

      icon: Mail01Icon,

      href: 'mailto:admin@jagaddhitacitrareswara.com',
    },

    {
      label: 'PHONE',

      value: '+62 21 2932 4662',

      icon: Call02Icon,

      href: 'tel:+622129324662',
    },

  ],
}


const Cta = (props: Props) => {

  const {
    title,
    heading,
    description,
    button,
    contactInfo,
  } = {
    ...defaultProps,
    ...props,
  }


  return (
    <section className="mx-auto flex w-full justify-center px-6 py-24 md:px-8 lg:px-14 xl:px-20">

      <div className="w-full max-w-6xl">

        {/* ===========================================
         * CTA Container
         * =========================================== */}

        <FadeIn
          duration={0.8}
          amount={0.2}
          className="w-full"
        >

          <div className="rounded-xl border border-border bg-primary-foreground p-8 lg:p-16">

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">


              {/* ===========================================
               * Content
               * =========================================== */}

              <FadeUp
                amount={0.2}
              >

                <div className="flex flex-col items-start">


                  {/* Title */}

                  <div className="mb-3 flex items-center gap-4 text-amber-400">

                    <span>──</span>

                    <span className="text-xs font-medium">
                      {title}
                    </span>

                  </div>


                  {/* Heading */}

                  <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-pretty md:text-3xl lg:text-4xl">
                    {heading}
                  </h2>


                  {/* Description */}

                  <p className="mt-5 max-w-xl text-muted-foreground">
                    {description}
                  </p>


                  {/* Button */}

                  {button && (

                    <Button
                      asChild
                      className="h-12 px-8 mt-12 bg-amber-400 text-black hover:bg-amber-300"
                    >

                      <Link href={button.url}>
                        {button.text}
                      </Link>

                    </Button>

                  )}

                </div>

              </FadeUp>


              {/* ===========================================
               * Contact Information
               * =========================================== */}

              <Stagger
                className="flex flex-col gap-8"
                stagger={0.15}
                amount={0.2}
              >

                {contactInfo?.map((contact) => {

                  const content = (
                    <>

                      {/* Icon */}

                      <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-secondary">

                        <HugeiconsIcon
                          icon={contact.icon}
                          className="size-5 text-amber-400"
                        />

                      </div>


                      {/* Information */}

                      <div className="min-w-0">

                        <p className="mb-1 text-xs text-muted-foreground">
                          {contact.label}
                        </p>

                        <p className="text-base leading-relaxed text-pretty">
                          {contact.value}
                        </p>

                      </div>

                    </>
                  )


                  return (

                    <FadeUp
                      key={contact.label}
                      amount={0.15}
                    >

                      {contact.href ? (

                        <Link
                          href={contact.href}
                          className="flex items-start gap-4 transition-opacity duration-300 hover:opacity-80"
                        >
                          {content}
                        </Link>

                      ) : (

                        <div className="flex items-start gap-4">
                          {content}
                        </div>

                      )}

                    </FadeUp>

                  )
                })}

              </Stagger>

            </div>

          </div>

        </FadeIn>

      </div>

    </section>
  )
}


export { Cta }