'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import assets from '@/src/assets/assets'
import { Button } from '@/components/ui/button'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight04Icon } from '@hugeicons/core-free-icons'

import {
  FadeIn,
  FadeUp,
} from '@/components/motion/'


interface Image {
  src: StaticImageData
  alt: string
}


interface AboutBasicProps {
  image: Image
  title: string
  heading: string
  description: string

  about: {
    name: string
    info: string
    className?: string
  }

  button?: {
    text: string
    url: string
    className?: string
  }
}


interface AboutProps extends AboutBasicProps {}

type Props = Partial<AboutProps>


const defaultProps: AboutProps = {

  image: {
    src: assets.about,
    alt: 'About Office',
  },

  title: 'COMPANY OVERVIEW',

  heading: 'About Us',

  description:
    'Established with a commitment to standardizing procurement and engineering delivery across the Indonesian archipelago.',

  about: {
    name: 'PT. Jagaddhita Citra Reswara',

    info:
      'was established in the Republic of Indonesia on January 30, 2014 based on establishment number 24. The deed of establishment has obtained approval and ratification from the Minister of Justice of the Republic of Indonesia with the number: AHU-00062.AH.02.01 year 2014.',
  },

  button: {
    text: 'Learn more about us',
    url: '/about',
  },
}


const AboutSection = (props: Props) => {

  const {
    title,
    heading,
    description,
    about,
    button,
    image,
  } = {
    ...defaultProps,
    ...props,
  }


  return (
    <section
      id="about"
      className="mx-auto px-6 py-24 md:px-8 lg:px-14 xl:px-20"
    >

      <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-12">


        {/* ===========================================
         * About Image
         * =========================================== */}

        <FadeIn
          className="w-full"
          amount={0.2}
          duration={0.8}
        >
          <Image
            src={image.src}
            alt={image.alt}
            priority
            className="aspect-3/2 w-full rounded-lg border border-border object-cover object-top grayscale"
          />
        </FadeIn>


        {/* ===========================================
         * About Content
         * =========================================== */}

        <div className="flex flex-col lg:items-start lg:text-left">


          {/* ===========================================
           * Section Heading
           * =========================================== */}

          <FadeUp
            amount={0.2}
          >
            <div className="flex flex-col gap-2">

              {/* Label */}

              <div className="flex items-center gap-4 text-amber-400">

                <span>──</span>

                <span className="text-xs font-medium">
                  {title}
                </span>

              </div>


              {/* Heading */}

              <h3 className="max-w-xl text-2xl font-semibold tracking-tight text-pretty md:text-3xl lg:max-w-3xl lg:text-4xl">
                {heading}
              </h3>


              {/* Description */}

              <p className="mb-8 max-w-5xl text-muted-foreground">
                {description}
              </p>

            </div>
          </FadeUp>


          {/* ===========================================
           * Company Information
           * =========================================== */}

          <FadeUp
            delay={0.15}
            amount={0.2}
          >
            <div className="my-12 flex flex-col gap-0">

              <h1 className="max-w-xl text-4xl font-bold tracking-tight text-pretty text-amber-400 md:text-5xl lg:max-w-3xl lg:text-6xl">
                {about.name}
              </h1>

              <p className="max-w-5xl xl:text-lg md:indent-0 xl:indent-64 xl:-mt-8">
                {about.info}
              </p>

            </div>
          </FadeUp>


          {/* ===========================================
           * Button
           * =========================================== */}

          <FadeUp
            delay={0.25}
            amount={0.2}
          >
            <Button
              asChild
              variant="link"
              size="lg"
              className={button?.className}
            >
              <Link href={button?.url ?? "/"}>
                {button?.text}

                <HugeiconsIcon
                  icon={ArrowRight04Icon}
                />
              </Link>
            </Button>
          </FadeUp>

        </div>

      </div>

    </section>
  )
}


export { AboutSection }