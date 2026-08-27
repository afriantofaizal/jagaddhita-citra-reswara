'use client'

import * as React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import assets from '@/src/assets/assets'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import {
  FadeUp,
  Stagger,
} from '@/components/motion/'


interface Image {
  src: StaticImageData
  alt: string
}


interface Button {
  text: string
  url: string
  icon?: React.ReactNode
}


interface Buttons {
  primary?: Button
  secondary?: Button
}


interface Badge {
  text: string
  announcement?: string
  url?: string
}


interface HeroBasicProps {
  badge?: Badge
  heading: string
  description: string
  buttons?: Buttons
  image: Image
  className?: string
}


interface HeroProps extends HeroBasicProps {}

type Props = Partial<HeroProps>


const defaultProps: HeroProps = {
  badge: {
    text: 'Est. 30 January 2014 · Republic of Indonesia',
    announcement: 'Check out our latest updates',
  },

  heading: 'Jagaddhita Citra Reswara',

  description:
    'A trusted national supplier serving government institutions and enterprise across technology, marine, and mechanical-electrical procurement — delivering quality through integrity and precision.',

  buttons: {
    primary: {
      text: 'Explore our services',
      url: '/services',
    },

    secondary: {
      text: 'Learn more',
      url: '#about',
    },
  },

  image: {
    src: assets.hero,
    alt: 'Hero Background Image',
  },
}


const Hero = (props: Props) => {

  const {
    badge,
    heading,
    description,
    buttons,
    image,
  } = {
    ...defaultProps,
    ...props,
  }


  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* ===========================================
       * Background Image
       * =========================================== */}

      <div className="absolute inset-0 z-0">

        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="object-cover object-center"
        />

      </div>


      {/* ===========================================
       * Hero Overlay
       * =========================================== */}

      <div className="absolute inset-0 z-0 bg-background/50" />


      {/* ===========================================
       * Hero Content
       * =========================================== */}

      <div className="container relative z-10 flex min-h-screen items-center px-6 md:px-8 lg:px-14 xl:px-20">

        <Stagger
          className="flex max-w-3xl flex-col items-center gap-5 text-center lg:items-start lg:text-left"
          stagger={0.12}
          delay={0.15}
          amount={0.2}
        >

          {/* ===========================================
           * Badge
           * =========================================== */}

          {badge && (
            <FadeUp>
              <Badge
                variant="outline"
                className="p-3 backdrop-blur-sm"
              >
                {badge.text}
              </Badge>
            </FadeUp>
          )}


          {/* ===========================================
           * Heading
           * =========================================== */}

          <FadeUp>
            <h1 className="max-w-xl text-5xl font-extrabold tracking-tight text-pretty md:text-6xl lg:max-w-3xl lg:text-7xl">
              {heading}
            </h1>
          </FadeUp>


          {/* ===========================================
           * Description
           * =========================================== */}

          <FadeUp>
            <p className="max-w-5xl text-balance text-muted-foreground lg:text-lg">
              {description}
            </p>
          </FadeUp>


          {/* ===========================================
           * Buttons
           * =========================================== */}

          <FadeUp className="mt-8 w-full">

            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">

              {/* Primary */}

              {buttons?.primary && (
                <Button
                  asChild
                  className="h-12 w-full px-8 sm:w-auto"
                >
                  <Link href={buttons.primary.url}>
                    {buttons.primary.text}
                  </Link>
                </Button>
              )}


              {/* Secondary */}

              {buttons?.secondary && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 w-full px-8 sm:w-auto backdrop-blur-sm"
                >
                  <Link href={buttons.secondary.url}>
                    {buttons.secondary.text}
                  </Link>
                </Button>
              )}

            </div>

          </FadeUp>

        </Stagger>

      </div>

    </section>
  )
}


export { Hero }