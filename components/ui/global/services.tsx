'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ToolsIcon,
  Plug02Icon,
  SafeIcon,
  AnchorIcon,
  PoliceBadgeIcon,
  LaptopProgrammingIcon,
  ArrowRight04Icon,
} from '@hugeicons/core-free-icons'

import {
  FadeUp,
  Stagger,
} from '@/components/motion/'


interface ServiceBasicProps {
  title: string
  heading: string
  description: string

  button?: {
    text: string
    url: string
    className?: string
  }
}


type HugeIcon = React.ComponentProps<typeof HugeiconsIcon>['icon']


interface ServiceItem {
  title: string
  description: string
  icon: HugeIcon
}


interface ServiceProps extends ServiceBasicProps {}

type Props = Partial<ServiceProps>


const defaultProps: ServiceProps = {
  title: 'SCOPE OF BUSINESS',

  heading: 'Services',

  description:
    'Our activities principally cover computer and computer equipment, electronic equipment and parts, and software consulting services - extending into specialized institutional supply.',

  button: {
    text: 'Explore our services',
    url: '/services',
  },
}


const services: ServiceItem[] = [
  {
    title: 'Technical Equipment',
    description:
      'Procurement and supply of specialized technical instruments and hardware.',
    icon: ToolsIcon,
  },
  {
    title: 'Mechanical & Electrical',
    description:
      'Integrated MEP systems for institutional and industrial facilities.',
    icon: Plug02Icon,
  },
  {
    title: 'Work Safety Equipment',
    description:
      'Certified occupational safety and protective equipment.',
    icon: SafeIcon,
  },
  {
    title: 'Marine Parts & Machinery',
    description:
      'Vessel components, patrol craft, and maritime machinery.',
    icon: AnchorIcon,
  },
  {
    title: 'TNI / Polri Equipment',
    description:
      'Defense and law-enforcement procurement for state institutions.',
    icon: PoliceBadgeIcon,
  },
  {
    title: 'Computers & Software',
    description:
      'Computer equipment, electronics, and software consulting services.',
    icon: LaptopProgrammingIcon,
  },
]


const Services = (props: Props) => {

  const {
    title,
    heading,
    description,
    button,
  } = {
    ...defaultProps,
    ...props,
  }


  return (
    <section
      className="mx-auto bg-muted px-6 py-24 md:px-8 lg:px-14 xl:px-20"
    >

      <div className="flex flex-col">

        {/* ===========================================
         * Services Content
         * =========================================== */}

        <div className="flex flex-col space-y-16 lg:items-start lg:text-left">


          {/* ===========================================
           * Section Heading
           * =========================================== */}

          <FadeUp
            amount={0.2}
          >
            <div className="flex max-w-lg flex-col gap-2 lg:max-w-xl">

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

              <p className="max-w-5xl text-muted-foreground">
                {description}
              </p>

            </div>
          </FadeUp>


          {/* ===========================================
           * Service Cards
           * =========================================== */}

          <Stagger
            className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            stagger={0.1}
            amount={0.15}
          >

            {services.map((service) => (

              <FadeUp
                key={service.title}
                amount={0.15}
              >
                <div
                  className="
                    h-full rounded-xl border bg-card p-8
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-amber-400/20
                    hover:shadow-xl
                    hover:shadow-amber-400/10
                  "
                >

                  {/* Icon */}

                  <div className="mb-5 flex size-11 items-center justify-center rounded-md bg-amber-50 text-amber-400 dark:bg-amber-400/10">

                    <HugeiconsIcon
                      icon={service.icon}
                      className="size-5"
                    />

                  </div>


                  {/* Content */}

                  <div className="flex flex-col gap-2">

                    <h3 className="text-lg font-semibold tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-sm leading-5 text-muted-foreground">
                      {service.description}
                    </p>

                  </div>

                </div>

              </FadeUp>

            ))}

          </Stagger>


          {/* ===========================================
           * CTA
           * =========================================== */}

          <FadeUp
            delay={0.15}
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


export { Services }