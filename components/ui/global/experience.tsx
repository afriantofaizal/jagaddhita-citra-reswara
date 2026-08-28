'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import assets from '@/src/assets/assets'
import { Button } from '@/components/ui/button'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowRight04Icon,
  Appointment02Icon,
} from '@hugeicons/core-free-icons'

import { experienceProjects } from '@/src/data/experience'

import {
  FadeIn,
  FadeUp,
  Stagger,
} from '@/components/motion/'


interface Image {
  src: StaticImageData
  alt: string
}


interface ExperienceProject {
  year: string
  date: string
  title: string
  category: string
  reference: string
  completedAt: string
}


interface ExperienceBasicProps {
  image: Image
  title: string
  heading: string
  description: string

  button?: {
    text: string
    url: string
    className?: string
  }

  projects?: ExperienceProject[]
}


interface ExperienceProps extends ExperienceBasicProps {}

type Props = Partial<ExperienceProps>


const defaultProps: ExperienceBasicProps = {

  image: {
    src: assets.experience,
    alt: 'Project Experience',
  },

  title: 'TRACK RECORD',

  heading: 'Project Experience',

  description:
    'A proven history of executing government-funded procurement projects across maritime patrol, digitalization, and defense logistics. A legacy of successfully executed technical contracts for key security and national digital institutions.',

  button: {
    text: 'More our experiences',
    url: '/experience',
  },

  projects: experienceProjects,
}


const Experience = (props: Props) => {

  const {
    title,
    heading,
    description,
    button,
    image,
    projects,
  } = {
    ...defaultProps,
    ...props,
  }


  return (
    <section className="mx-auto px-6 py-24 md:px-8 lg:px-14 xl:px-20">

      <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-12">


        {/* ===========================================
         * Experience Content
         * =========================================== */}

        <div className="flex flex-col lg:items-start lg:text-left">


          {/* ===========================================
           * Experience Heading
           * =========================================== */}

          <FadeUp
            amount={0.2}
          >
            <div className="mb-16 flex flex-col gap-2">

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
           * Experience Image
           * =========================================== */}

          <FadeIn
            duration={0.8}
            amount={0.2}
            className="w-full"
          >
            <div className="relative overflow-hidden rounded-lg border border-border">

              <Image
                src={image.src}
                alt={image.alt}
                priority
                className="aspect-square w-full object-cover object-top"
              />

              <div className="absolute inset-0 bg-linear-to-t from-amber-400/50 to-amber-400/40" />

            </div>
          </FadeIn>

        </div>


        {/* ===========================================
         * Project Experience
         * =========================================== */}

        <div className="flex flex-col gap-8">


          {/* ===========================================
           * CTA
           * =========================================== */}

          <FadeUp
            amount={0.2}
          >
            <div className="flex w-full justify-start lg:justify-end">

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

            </div>
          </FadeUp>


          {/* ===========================================
           * Timeline
           * =========================================== */}

          <Stagger
            className="flex flex-col gap-8"
            stagger={0.15}
            amount={0.15}
          >

            {projects?.map((project, index) => (

              <FadeUp
                key={`${project.year}-${project.reference}`}
                amount={0.15}
              >

                <div className="group flex gap-4">


                  {/* ===========================================
                   * Timeline Icon
                   * =========================================== */}

                  <div className="relative mb-6">

                    {/* Timeline Line */}

                    {index !== projects.length - 1 && (
                      <div className="absolute left-1/2 top-12 h-full w-px bg-accent" />
                    )}


                    {/* Icon */}

                    <div className="relative z-10 rounded-full bg-primary-foreground p-2 lg:p-4">

                      <HugeiconsIcon
                        icon={Appointment02Icon}
                        className="text-amber-400 h-5 lg:h-6 w-auto"
                      />

                    </div>

                  </div>


                  {/* ===========================================
                   * Project Content
                   * =========================================== */}

                  <div className="flex w-full flex-col gap-4">


                    {/* Date */}

                    <div>

                      <h3 className="text-sm lg:text-lg font-medium">
                        {project.year}
                      </h3>

                      <p className="text-xs lg:text-sm text-muted-foreground">
                        {project.date}
                      </p>

                    </div>


                    {/* Project Card */}

                    <div
                      className="
                        space-y-4 lg:space-y-6 rounded-xl border
                        bg-primary-foreground p-4 lg:p-8
                        transition-all duration-300
                        hover:border-amber-400/20
                        hover:shadow-xl
                        hover:shadow-amber-400/10
                      "
                    >

                      {/* Project Information */}

                      <div>

                        <h4 className="font-medium">
                          {project.title}
                        </h4>

                        <p className="text-sm text-muted-foreground">
                          {project.category}
                        </p>

                      </div>


                      {/* Project Metadata */}

                      <div className="flex flex-col border-t border-border pt-6 lg:flex-row lg:items-center lg:justify-between">

                        <span className="text-xs text-muted-foreground break-all">
                          {project.reference}
                        </span>

                        <p className="text-xs whitespace-nowrap">
                          {project.completedAt}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </FadeUp>

            ))}

          </Stagger>

        </div>

      </div>

    </section>
  )
}


export { Experience }