'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { cn } from '@/src/lib/utils'
import { HugeiconsIcon } from "@hugeicons/react";
import {
  BulbIcon,
  Search01Icon,
  Building03Icon,
  Task01Icon,
  WorkflowCircle06Icon,
  HandshakeIcon,
  ToolsIcon,
  Plug02Icon, 
  SafeIcon, 
  AnchorIcon, 
  PoliceBadgeIcon, 
  LaptopProgrammingIcon,
  CursorPointer02Icon
} from '@hugeicons/core-free-icons'
import Link from "next/link";

import {
  FadeIn,
  FadeUp,
  Stagger,
} from '@/components/motion/'

type HugeIcon = React.ComponentProps<typeof HugeiconsIcon>['icon']

interface ServiceOverview {
  icon: HugeIcon
  title: string
  description: string
  url: string
}

interface ServiceDetail {
  id: string
  number: string
  title: string
  description: string
  approach: string
  scope: string[]
}

interface ProcessItem {
  number: string
  title: string
  description: string
}

interface AdvantageItem {
  title: string
  description: string
  icon: HugeIcon
}

interface ServicesPageProps {
  hero: {
    breadcrumb: string
    heading: string
    description: string
  }

  overview: {
    title: string
    heading: string
    items: ServiceOverview[]
  }

  services: {
    title: string
    heading: string
    items: ServiceDetail[]
  }

  process: {
    title: string
    heading: string
    items: ProcessItem[]
  }

  advantages: {
    title: string
    heading: string
    items: AdvantageItem[]
  }

  className?: string
}

type Props = Partial<ServicesPageProps>

const defaultProps: ServicesPageProps = {
  /* =====================================================
   * HERO
   * ===================================================== */
  hero: {
    breadcrumb: 'Our Services',

    heading: 'Scope of Business',

    description:
      'Our business activities cover the procurement and supply of technical equipment, electronic systems, mechanical and electrical components, marine equipment, safety products, and specialized solutions for government institutions, security agencies, and industrial organizations. We combine reliable sourcing, technical understanding, and structured procurement processes to deliver solutions that meet operational, regulatory, and institutional requirements.',
  },

  /* =====================================================
   * SERVICES OVERVIEW
   * ===================================================== */
  overview: {
    title: 'SERVICE AREAS',

    heading: 'Our Areas of Specialization',

    items: [
      {
        icon: ToolsIcon,
        title: 'Technical Equipment',
        description:
          'Procurement and supply of specialized technical instruments and hardware.',
        url: '#technical-equipment',
      },
      {
        icon: Plug02Icon,
        title: 'Mechanical & Electrical',
        description:
          'Integrated M&E systems for institutional and industrial facilities.',
        url: '#mechanical-electrical',
      },
      {
        icon: SafeIcon,
        title: 'Work Safety Equipment',
        description:
          'Certified occupational safety and protective equipment.',
        url: '#work-safety-equipment',
      },
      {
        icon: AnchorIcon,
        title: 'Marine Parts & Machinery',
        description:
          'Vessel components, patrol craft, and maritime machinery.',
        url: '#marine-parts-machinery',
      },
      {
        icon: PoliceBadgeIcon,
        title: 'TNI / Polri Equipment',
        description:
          'Defense and law-enforcement procurement for state institutions.',
        url: '#tni-polri-equipment',
      },
      {
        icon: LaptopProgrammingIcon,
        title: 'Computers & Software',
        description:
          'Computer equipment, electronics, and software consulting services.',
        url: '#computers-software',
      },
    ],
  },

  /* =====================================================
   * SERVICES DETAIL
   * ===================================================== */
  services: {
    title: 'DETAILED CAPABILITIES',

    heading: 'Deep Dive Into Our Services',

    items: [
      {
        id: 'technical-equipment',
        number: '01',
        title: 'Technical Equipment',

        description:
          'We provide procurement and supply of technical instruments, hardware, and supporting equipment tailored to specific operational requirements.',

        approach:
          'We work closely with clients to understand technical specifications, operational requirements, and procurement conditions before identifying suitable products and suppliers.',

        scope: [
          'Procurement of specialized technical equipment',
          'Industrial and institutional hardware supply',
          'Technical instruments and measurement equipment',
          'Equipment for operational and field activities',
          'Supporting tools and accessories',
          'Equipment sourcing and vendor coordination',
          'Technical specification matching',
          'Delivery and procurement administration',
        ],
      },

      {
        id: 'mechanical-electrical',
        number: '02',
        title: 'Mechanical & Electrical',

        description:
          'We support mechanical and electrical procurement requirements through equipment supply, component sourcing, and system integration for various facility and operational environments.',

        approach:
          'Our solutions are focused on compatibility, reliability, and operational continuity, ensuring that supplied equipment can be integrated effectively into existing systems and facilities.',

        scope: [
          'Mechanical equipment procurement',
          'Electrical equipment and components',
          'Power distribution equipment',
          'Electrical control and supporting systems',
          'Mechanical system components',
          'Industrial equipment and spare parts',
          'Installation support and system integration',
          'Maintenance and replacement components',
        ],
      },

      {
        id: 'work-safety-equipment',
        number: '03',
        title: 'Work Safety Equipment',

        description:
          'We supply personal protective equipment and occupational safety products designed to support workplace safety requirements across institutional, industrial, and field operations.',

        approach:
          'We prioritize products that meet applicable safety requirements and operational conditions, helping organizations provide appropriate protection for their personnel.',

        scope: [
          'Personal protective equipment',
          'Safety helmets and protective headgear',
          'Protective clothing and workwear',
          'Safety footwear',
          'Hand and body protection',
          'Eye and face protection',
          'Respiratory protection equipment',
          'Workplace safety accessories',
          'Safety equipment procurement and supply',
        ],
      },

      {
        id: 'marine-parts-machinery',
        number: '04',
        title: 'Marine Parts & Machinery',

        description:
          'We provide procurement and supply solutions for marine operations, supporting patrol vessels, maritime institutions, and other organizations requiring specialized marine equipment and components.',

        approach:
          'Our maritime procurement services are supported by product sourcing and technical coordination to address the specific requirements of vessels and marine operational environments.',

        scope: [
          'Marine machinery and components',
          'Vessel spare parts',
          'Patrol craft equipment',
          'Marine electrical components',
          'Navigation and communication equipment',
          'Engine and propulsion components',
          'Deck and vessel supporting equipment',
          'Marine safety equipment',
          'Specialized maritime equipment sourcing',
        ],
      },

      {
        id: 'tni-polri-equipment',
        number: '05',
        title: 'TNI / Polri Equipment',

        description:
          'We support procurement requirements for state security institutions through the supply of specialized equipment, operational hardware, and supporting systems.',

        approach:
          'We understand the importance of specification compliance, procurement procedures, documentation, and delivery requirements in institutional projects involving defense and law-enforcement organizations.',

        scope: [
          'Operational equipment procurement',
          'Security and law-enforcement equipment',
          'Patrol and field equipment',
          'Tactical supporting equipment',
          'Communication and electronic equipment',
          'Transportation and mobility supporting equipment',
          'Technical and maintenance equipment',
          'Institutional equipment supply',
          'Government procurement support',
        ],
      },

      {
        id: 'computers-software',
        number: '06',
        title: 'Computers & Software',

        description:
          'We provide technology procurement and software-related solutions to support digital transformation, information management, and operational efficiency.',

        approach:
          'We help organizations identify appropriate technology based on operational needs, specifications, compatibility, scalability, and long-term support requirements.',

        scope: [
          'Desktop and workstation procurement',
          'Laptop and mobile computing equipment',
          'Computer peripherals and accessories',
          'Networking equipment',
          'Servers and supporting hardware',
          'Data storage equipment',
          'Electronic and communication equipment',
          'Software procurement',
          'Software licensing',
          'IT infrastructure supporting solutions',
          'Technology sourcing and system integration',
        ],
      },
    ],
  },

  /* =====================================================
   * PROCUREMENT PROCESS
   * ===================================================== */
  process: {
    title: 'PROVEN WORKFLOW',

    heading: 'Procurement & Delivery Process',

    items: [
      {
        number: '01',
        title: 'Understanding Requirements',
        description:
          'We begin by identifying the client’s operational objectives, technical specifications, quantity requirements, and procurement conditions.',
      },
      {
        number: '02',
        title: 'Sourcing & Selection',
        description:
          'Our team identifies suitable products, manufacturers, distributors, and suppliers based on specifications, availability, quality, and project requirements.',
      },
      {
        number: '03',
        title: 'Technical & Commercial Evaluation',
        description:
          'Products and solutions are evaluated against technical specifications, commercial considerations, and applicable procurement requirements.',
      },
      {
        number: '04',
        title: 'Procurement & Coordination',
        description:
          'We coordinate procurement activities with selected suppliers while maintaining communication and documentation throughout the process.',
      },
      {
        number: '05',
        title: 'Quality & Compliance',
        description:
          'Equipment and products are reviewed against agreed specifications and project requirements before delivery.',
      },
      {
        number: '06',
        title: 'Delivery & Support',
        description:
          'We coordinate delivery and provide the necessary documentation and supporting services to ensure the procurement process is completed properly.',
      },
    ],
  },

  /* =====================================================
   * WHY WORK WITH US
   * ===================================================== */
  advantages: {
    title: 'VALUE PROPOSITION',

    heading: 'Why Work with Us',

    items: [
      {
        title: 'Technical Understanding',
        description:
          'We combine procurement capabilities with an understanding of technical specifications and operational requirements.',
        icon: BulbIcon,
        },
      {
        title: 'Reliable Sourcing',
        description:
          'We work with suppliers and product sources to identify suitable equipment for specialized institutional requirements.',
        icon: Search01Icon,
        },
      {
        title: 'Institutional Experience',
        description:
          'Our experience includes procurement projects supporting government, security, maritime, digitalization, and technical operations.',
        icon: Building03Icon,
        },
      {
        title: 'Specification Driven',
        description:
          'Every procurement begins with understanding the required specifications, ensuring proposed products are aligned with the intended application.',
        icon: Task01Icon,
        },
      {
        title: 'End-to-End Coordination',
        description:
          'From sourcing and evaluation to procurement and delivery, we coordinate the process to provide a structured and dependable experience.',
        icon: WorkflowCircle06Icon,
        },
      {
        title: 'Long-Term Partnership',
        description:
          'We aim to build lasting relationships through responsive communication, reliable delivery, and consistent service quality.',
        icon: HandshakeIcon,
        },
    ],
  },
}

const ServicesPage = (props: Props) => {
  const {
    hero,
    overview,
    services,
    process,
    advantages,
    className,
  } = {
    ...defaultProps,
    ...props,
  }

  return (
    <main className={cn('mx-auto px-6 md:px-8 lg:px-14 xl:px-20', className)}>

      {/* =================================================
       * HERO
       * ================================================= */}
      <section className="pt-32 pb-24">
        
        {/* Breadcrumb */}
        <FadeIn>
          <Breadcrumb>
              <BreadcrumbList>
                  <BreadcrumbItem>
                      <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                      <BreadcrumbSeparator />
                  <BreadcrumbItem>
                      <BreadcrumbPage>{hero.breadcrumb}</BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
        </FadeIn>

        <FadeUp>
          <div className="max-w-3xl my-12">

            <h1 className="text-5xl font-bold text-amber-400 max-w-3xl tracking-tight text-pretty md:text-4xl lg:text-5xl">
              {hero.heading}
            </h1>

            <p className="mt-6 max-w-3xl text-sm leading-6 md:text-base">
              {hero.description}
            </p>
          </div>
        </FadeUp>
      </section>

      {/* =================================================
       * SERVICES OVERVIEW
       * ================================================= */}
      <section className="pb-32">
        <FadeUp>
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-4 text-amber-400">
              <span>──</span>
              <span className="text-xs font-medium">
                {overview.title}
              </span>
            </div>

            <h3 className="max-w-xl text-2xl font-semibold tracking-tight text-pretty md:text-3xl lg:max-w-3xl lg:text-4xl">
              {overview.heading}
            </h3>
          </div>
        </FadeUp>

        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {overview.items.map((service) => (
            <FadeUp key={service.url}>
              <Link
                href={service.url}
                className="flex h-full"
              >
                <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl border bg-primary-foreground p-8 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/20 hover:shadow-xl hover:shadow-amber-400/10">
                  
                  {/* Decorative Icon */}
                  <div className="absolute -right-6 top-0">
                    <HugeiconsIcon
                      icon={CursorPointer02Icon}
                      className="size-32 text-accent"
                    />
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mb-5 flex size-11 shrink-0 items-center justify-center rounded-md bg-amber-100 text-amber-400 dark:bg-amber-400/10">
                    <HugeiconsIcon
                      icon={service.icon}
                      className="size-5"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-1 flex-col gap-2">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-sm leading-5 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                </div>
              </Link>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* =================================================
       * SERVICE DETAILS
       * ================================================= */}
      <section className="pb-32">
        <FadeUp>
          <div className="mb-16">
            <div className="mb-3 flex items-center gap-4 text-amber-400">
              <span>──</span>

              <span className="text-xs font-medium">
                {services.title}
              </span>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {services.heading}
            </h2>
          </div>
        </FadeUp>

        <div>
          {services.items.map((service, index) => {
            const isReversed = index % 2 !== 0

            return (
              <FadeUp key={service.number}>
                <div
                  id={service.id}
                  className={cn(
                    'grid gap-10 border-b border-border border-b- py-20 lg:grid-cols-2 lg:gap-16',
                    index === 0 && 'border-t',
                    'items-center'
                  )}
                >
                  {/* Content */}
                  <div
                    className={cn(
                      'flex flex-col',
                      isReversed && 'lg:order-2'
                    )}
                  >
                    <h1 className="text-8xl font-semibold text-accent mb-2">
                      {service.number}
                    </h1>

                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      Service Module
                    </span>

                    <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 text-sm leading-6 text-muted-foreground">
                      {service.description}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                      <span className="font-medium text-amber-400">
                        Our Approach:
                      </span>{' '}
                      {service.approach}
                    </p>
                  </div>

                  {/* Scope */}
                  <div
                    className={cn(
                      'rounded-xl border border-border bg-primary-foreground p-6 md:p-8',
                      isReversed && 'lg:order-1'
                    )}
                  >
                    <h4 className="text-lg font-medium">
                      Scope of Services
                    </h4>

                    <ul className="mt-5 space-y-2">
                      {service.scope.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-4 text-sm leading-5 text-muted-foreground"
                        >
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-amber-400" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            )
          })}
        </div>
      </section>

      {/* =================================================
       * PROCUREMENT PROCESS
       * ================================================= */}
      <section className="pb-32">
        <FadeUp>
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-4 text-amber-400">
              <span>──</span>

              <span className="text-xs font-medium">
                {process.title}
              </span>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {process.heading}
            </h2>
          </div>
        </FadeUp>

        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {process.items.map((item) => (
            <FadeUp key={item.number}>
              <div className="relative overflow-hidden rounded-xl border bg-card p-8">
    
                <div className="absolute right-2 top-2">
                  <span className="text-8xl font-bold text-amber-400/10">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-lg font-medium">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-5 text-muted-foreground">
                  {item.description}
                </p>

              </div>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* =================================================
       * WHY WORK WITH US
       * ================================================= */}
      <section className="pb-32">
        <FadeUp>
          <div className="mb-10 items-center text-center ">
            <div className="mb-3 items-center text-amber-400">
              <span className="text-xs font-medium">
                {advantages.title}
              </span>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {advantages.heading}
            </h2>
          </div>  
        </FadeUp>

        <Stagger className="grid gap-12 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {advantages.items.map((item) => (
            <FadeUp key={item.title}>
              <div className="flex flex-col items-center text-center px-8 py-0">
                  {/* Icon */}
                  <div className="my-8 flex size-16 shrink-0 items-center justify-center rounded-lg bg-primary-foreground transition-transform duration-300 hover:-translate-y-2">
                      <HugeiconsIcon
                          icon={item.icon}
                          className="size-8 text-amber-400"
                      />
                  </div>
                <h3 className="font-medium">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-5 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </Stagger>
      </section>

    </main>
  )
}

export { ServicesPage }