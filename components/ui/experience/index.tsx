  'use client'

  import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from '@/components/ui/breadcrumb'
  import { HugeiconsIcon } from '@hugeicons/react'
  import { Appointment02Icon } from '@hugeicons/core-free-icons'
  import Image, { StaticImageData } from 'next/image'
  import assets from '@/src/assets/assets'
  import { experienceProjects } from '@/src/data/experience'

  import {
  FadeIn,
  FadeUp,
  Stagger,
} from '@/components/motion/'

  interface Image {
    src: StaticImageData;
    alt: string;
  }
  interface ExperienceProject {
    year: string;
    date: string;
    title: string;
    category: string;
    reference: string;
    completedAt: string;
  }
  interface ExperienceBasicProps {
    breadcrumb: string
    image: Image;
    title: string;
    heading: string;
    description: string;
    projects?: ExperienceProject[];
  }

  interface ExperienceProps extends ExperienceBasicProps {}
  type Props = Partial<ExperienceProps>;

  const defaultProps: ExperienceBasicProps = {
    image: {
      src: assets.experience,
      alt: "Project Experience",
    },

    breadcrumb: 'Our Experience',
    title: "TRACK RECORD",
    heading: "Project Experience",
    description: "A proven history of executing government-funded procurement projects across maritime patrol, digitalization, and defense logistics. A legacy of successfully executed technical contracts for key security and national digital institutions.",

    projects: [
      {
        year: "2019",
        date: "April 24",
        title: "Procurement of Rubber Boats - Tactical Water Patrol",
        category: "APBN Fiscal Year 2019",
        reference: "SPPB-14/APBN/IV/2019/KORPOLAIRUD",
        completedAt: "April 24, 2019",
      },
      {
        year: "2018",
        date: "May 11",
        title: "Digitalization AK23 - Central Region",
        category: "APBN Fiscal Year 2018",
        reference: "SPPB-17/V/2018/PUSINAFIS",
        completedAt: "May 11, 2018",
      },
      {
        year: "2018",
        date: "May 4",
        title: "Procurement of Increased sail ability of class B patrol vessels",
        category: "National Procurement Program",
        reference: "SPPP/26/V/2018/PPK/KOPOLAIRUD",
        completedAt: "May 4, 2018",
      },
    ],
  };

  const ExperiencePage = (props: Props) => {
    const {
      breadcrumb,
      title,
      heading,
      description,
      image,
      projects,
  } = {
      ...defaultProps,
      ...props,
    };

    return (
      <div>
          <div className="mx-auto px-6 pt-32 md:px-8 lg:px-14 xl:px-20">

              <FadeIn>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">
                                Home
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>
                                {breadcrumb}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
              </FadeIn>

              <section className="mx-auto px-6 py-24 md:px-8 lg:px-14 xl:px-20">

                <Stagger
                  className="flex flex-col"
                  stagger={0.12}
                >
                  <FadeUp>
                    <div className="mb-6 flex items-center gap-4 text-amber-400">
                      <span>──</span>

                      <span className="text-xs font-medium tracking-wider">
                        {title}
                      </span>
                    </div>
                  </FadeUp>

                  <FadeUp>
                    <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-pretty md:text-5xl lg:text-6xl">
                      {heading}
                    </h1>
                  </FadeUp>

                  <FadeUp>
                    <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
                      {description}
                    </p>
                  </FadeUp>

                </Stagger>

              </section>

              <section className="mx-auto px-6 md:px-8 lg:px-14 xl:px-20">
                <div className="mx-auto max-w-5xl">

                  {/* Section Header */}
                  <FadeUp>
                    <div className="mb-12 flex items-end justify-between gap-6">

                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Selected Projects
                        </p>

                        <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                          Our Project Experience
                        </h2>
                      </div>

                      <span className="hidden text-sm text-muted-foreground md:block">
                        {experienceProjects.length} Projects
                      </span>

                    </div>
                  </FadeUp>

                  {/* Timeline */}
                  <Stagger className="relative"
                    stagger={0.15}
                  >

                    {experienceProjects.map((project, index) => (
                      <FadeUp key={`${project.year}-${project.reference}`}>
                        <div className="group relative grid grid-cols-[auto_1fr] gap-6 md:grid-cols-[120px_auto_1fr] md:gap-8">

                          {/* Year */}
                          <div className="hidden text-right md:block">
                            <span className="text-lg font-medium">
                              {project.year}
                            </span>

                            <p className="mt-1 text-sm text-muted-foreground">
                              {project.date}
                            </p>
                          </div>


                          {/* Timeline */}
                          <div className="relative flex flex-col items-center">

                            {/* Connector */}
                            {index !== experienceProjects.length - 1 && (
                              <div className="absolute top-12 h-full w-px bg-border" />
                            )}

                            {/* Icon */}
                            <FadeIn>
                              <div className="relative z-10 p-4 bg-primary-foreground rounded-full">
                                <HugeiconsIcon
                                  icon={Appointment02Icon}
                                  className="size-5 text-amber-400"
                                />
                              </div>
                            </FadeIn>

                          </div>


                          {/* Project */}
                          <div className="pb-12">

                            {/* Mobile date */}
                            <div className="my-3 md:hidden">
                              <span className="font-medium">
                                {project.year}
                              </span>

                              <span className="mx-2 text-muted-foreground">
                                /
                              </span>

                              <span className="text-sm text-muted-foreground">
                                {project.date}
                              </span>
                            </div>


                            {/* Card */}
                            <article className="rounded-xl border bg-primary-foreground p-6 transition-colors group-hover:border-amber-400/50 md:p-8">

                              <div className="space-y-6">

                                {/* Project heading */}
                                <div className="space-y-2">

                                  <h3 className="text-lg font-medium leading-snug md:text-xl">
                                    {project.title}
                                  </h3>

                                  <p className="text-sm text-muted-foreground">
                                    {project.category}
                                  </p>

                                </div>


                                {/* Project information */}
                                <div className="grid gap-5 border-t border-border pt-6 sm:grid-cols-2">

                                  <div>
                                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                                      Reference
                                    </p>

                                    <p className="mt-2 break-all text-sm font-medium">
                                      {project.reference}
                                    </p>
                                  </div>

                                  <div>
                                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                                      Completed
                                    </p>

                                    <p className="mt-2 text-sm font-medium">
                                      {project.completedAt}
                                    </p>
                                  </div>

                                </div>

                              </div>

                            </article>

                          </div>

                        </div>
                      </FadeUp>

                    ))}

                  </Stagger>

                </div>
              </section>

          </div>
      </div>
    );
  };

  export { ExperiencePage }