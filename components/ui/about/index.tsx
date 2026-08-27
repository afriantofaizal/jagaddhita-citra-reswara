'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Image, { StaticImageData } from 'next/image'
import assets from '@/src/assets/assets'
import { HugeiconsIcon } from "@hugeicons/react";
import { FlashIcon, Target02Icon } from '@hugeicons/core-free-icons'

import {
  FadeIn,
  FadeUp,
  Stagger,
} from '@/components/motion/'

interface Image {
  src: StaticImageData
  alt: string
}

type HugeIcon = React.ComponentProps<typeof HugeiconsIcon>['icon']

interface AboutSection {
  title: string
  heading: string
  description: string
  company: {
    name: string
    info: string
  }
}

interface ValueItem {
  title: string
  description: string
  icon: HugeIcon
}

interface ValuesSection {
  title: string
  heading: string
  description: string
  items: ValueItem[]
}

interface AboutLogo {
  light: StaticImageData
  dark: StaticImageData
  alt: string
}

interface AboutBasicProps {
  image1: Image
  image2: Image
  logo: AboutLogo

  about: AboutSection
  values: ValuesSection
}

interface AboutProps extends AboutBasicProps {}
type Props = Partial<AboutProps>;

const defaultProps: AboutBasicProps = {
  image1: {
    src: assets.about,
    alt: 'About Office',
  },

  image2: {
    src: assets.about1,
    alt: 'About Office',
  },

logo: {
  light: assets.logo_light,
  dark: assets.logo_dark,
  alt: 'Company Logo',
},

  about: {
    title: 'Company Overview',

    heading: 'About Us',

    description:
      'Established with a commitment to standardizing procurement and engineering delivery across the Indonesian archipelago.',

    company: {
      name: 'PT. Jagaddhita Citra Reswara',

      info:
        'was established in the Republic of Indonesia on January 30, 2014 based on establishment number 24. The deed of establishment has obtained approval and ratification from the Minister of Justice of the Republic of Indonesia with the number: AHU-00062.AH.02.01 year 2014.',
    },
  },

  values: {
    title: 'CORE PRINCIPLES',

    heading: 'Vision & Mission',

    description:
      'Guided by a clear direction and a commitment to excellence, we deliver procurement and engineering solutions that build trust across the Indonesian archipelago.',

    items: [
      {
        title: 'Vision',

        description:
          'To be a superior, trustworthy and growing company.',

        icon: FlashIcon,
      },

      {
        title: 'Mission',

        description:
          'Realizing consumer satisfaction with quality service products through innovation excellence, management system and human resources.',

        icon: Target02Icon,
      },
    ],
  },
}

const AboutUs = (props: Props) => {
  const {
    image1,
    image2,
    logo,
    about,
    values,
  } = {
    ...defaultProps,
    ...props,
  }

  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc =
    mounted && resolvedTheme === 'dark'
      ? logo.dark
      : logo.light

    return (
        <div>

            <div className='mx-auto px-6 md:px-8 lg:px-14 xl:px-20 py-32'>

                {/* Breadcrumb */}
                <FadeIn
                  duration={0.5}
                  amount={0.2}
                >
                  <Breadcrumb>
                      <BreadcrumbList>
                          <BreadcrumbItem>
                              <BreadcrumbLink href="/">Home</BreadcrumbLink>
                          </BreadcrumbItem>
                              <BreadcrumbSeparator />
                          <BreadcrumbItem>
                              <BreadcrumbPage>{about.heading}</BreadcrumbPage>
                          </BreadcrumbItem>
                      </BreadcrumbList>
                  </Breadcrumb>   
                </FadeIn>

                <Stagger className="max-w-3xl my-12"
                  stagger={0.12}
                >
                    {/* About Content */}
                    <FadeUp>
                      <h3 className='text-5xl font-bold text-amber-400'>
                          {about.title}
                      </h3>
                    </FadeUp>
                    
                    <FadeUp>
                      <p className="mt-6 max-w-3xl text-lg leading-6 md:text-base">
                          {about.description}
                      </p>
                    </FadeUp>
                </Stagger>

                <div className="grid gap-6 lg:grid-cols-3">

                  <FadeIn
                    className="lg:col-span-2"
                    amount={0.2}
                    duration={0.7}
                  >
                    {/* About Image */}
                    <Image
                        src={image1.src}
                        alt={image1.alt}
                        priority
                        className='grayscale aspect-square rounded-xl object-cover lg:col-span-2'
                    />
                  </FadeIn>

                    <div className="flex flex-col gap-6 md:flex-row lg:flex-col">

                        <FadeUp className="flex flex-col justify-between gap-6 rounded-xl bg-secondary p-8 md:w-1/2 lg:w-auto"
                          amount={0.2}
                          delay={0.1}
                        >
                            <div className="py-4">
                                {/* Logo */}
                                <Image
                                  src={logoSrc}
                                  className="h-auto max-h-12 w-auto"
                                  alt={logo.alt}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-amber-400 text-2xl xl:text-3xl font-bold">{about.company.name}</h3>
                                <p className="text-sm xl:text-base">
                                    {about.company.info}
                                </p>
                            </div>
                        </FadeUp>
                        
                        <Image
                            src={image2.src}
                            alt={image2.alt}
                            priority
                            className='grayscale grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto'
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center pt-24">

                    <FadeUp className="flex flex-col gap-2 max-w-lg lg:max-w-xl"
                      amount={0.2}
                    >
                        <div className='flex gap-4 items-center text-amber-400'>
                            <span>──</span>
                            <span className='text-xs font-medium'>
                                {values.title}
                            </span>
                        </div>
                        <h3 className="max-w-xl text-2xl font-semibold tracking-tight text-pretty md:text-3xl lg:max-w-3xl lg:text-4xl">
                            {values.heading}
                        </h3>
                        <p className="max-w-5xl text-muted-foreground mb-8">
                            {values.description}
                        </p>
                    </FadeUp>

                    <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      stagger={0.15}
                      amount={0.2}
                      >
                        {values.items.map((value) => (

                            <FadeUp key={value.title} className='p-8 bg-card border hover:border-amber-400/20 rounded-2xl transition-all duration-300 hover:-translate-y-1 dark:hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-xl hover:shadow-amber-400/10'>
                                
                                {/* Icon */}
                                <div className="mb-5 flex size-11 items-center justify-center rounded-md bg-amber-50 text-amber-400 dark:bg-amber-400/10">
                                    <HugeiconsIcon
                                    icon={value.icon}
                                    className="size-5"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-semibold tracking-tight">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm leading-5 text-muted-foreground">
                                        {value.description}
                                    </p>
                                </div>
                            </FadeUp>
                        ))}
                    </Stagger>
                    
                </div>
            </div>

        </div>
    );
};

export { AboutUs }