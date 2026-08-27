'use client'

import Image, { StaticImageData } from 'next/image'
import assets from '@/src/assets/assets'

import {
  FadeUp,
  Stagger,
} from '@/components/motion/'


interface Image {
  src: StaticImageData
  alt: string
}


interface OfficerItem {
  image: Image
  name: string
  position: string
  id: string
}


interface OfficerBasicProps {
  title: string
  heading: string
  description: string

  button?: {
    text: string
    url: string
    className?: string
  }
}


interface OfficerProps extends OfficerBasicProps {}

type Props = Partial<OfficerProps>


const defaultProps: OfficerBasicProps = {

  title: 'CORPORATE OFFICER',

  heading: 'Management',

  description:
    'Led by experienced professionals committed to business governance and operational transparency.',

  button: {
    text: 'More our experiences',
    url: '/experience',
  },
}


const officers: OfficerItem[] = [

  {
    image: {
      src: assets.officer1,
      alt: 'Irwan Fauzi Muslihan',
    },

    name: 'Irwan Fauzi Muslihan',

    position: 'Director',

    id: '3174052206860004',
  },

  {
    image: {
      src: assets.officer2,
      alt: 'Sutanto Anggono',
    },

    name: 'Sutanto Anggono',

    position: 'Commissioner',

    id: '3674042606660012',
  },

]


const Officer = (props: Props) => {

  const {
    title,
    heading,
    description,
  } = {
    ...defaultProps,
    ...props,
  }


  return (
    <section className="mx-auto flex w-full justify-center px-6 py-24 md:px-8 lg:px-14 xl:px-20">

      <div className="w-full max-w-5xl">


        {/* ===========================================
         * Heading
         * =========================================== */}

        <FadeUp
          amount={0.2}
        >
          <div className="mb-8 flex flex-col items-center gap-2 text-center">

            {/* Label */}

            <span className="text-xs font-medium text-amber-400">
              {title}
            </span>


            {/* Heading */}

            <h3 className="max-w-xl text-2xl font-semibold tracking-tight text-pretty md:text-3xl lg:max-w-3xl lg:text-4xl">
              {heading}
            </h3>


            {/* Description */}

            <p className="mb-8 max-w-3xl text-muted-foreground">
              {description}
            </p>

          </div>
        </FadeUp>


        {/* ===========================================
         * Officers
         * =========================================== */}

        <Stagger
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          stagger={0.15}
          amount={0.2}
        >

          {officers.map((officer) => (

            <FadeUp
              key={officer.id}
              amount={0.2}
            >

              <div
                className="
                  h-full rounded-xl border
                  bg-primary-foreground p-8
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-amber-400/20
                  hover:shadow-xl
                  hover:shadow-amber-400/10
                "
              >

                <div className="flex gap-6">


                  {/* ===========================================
                   * Officer Image
                   * =========================================== */}

                  <Image
                    src={officer.image.src}
                    alt={officer.image.alt}
                    priority
                    className="size-24 shrink-0 rounded-full object-cover grayscale"
                  />


                  {/* ===========================================
                   * Officer Information
                   * =========================================== */}

                  <div className="flex flex-col">

                    <h3 className="text-lg font-medium">
                      {officer.name}
                    </h3>


                    <span className="text-sm text-muted-foreground">
                      ID: {officer.id}
                    </span>


                    <p className="mt-2 text-amber-400">
                      {officer.position}
                    </p>

                  </div>

                </div>

              </div>

            </FadeUp>

          ))}

        </Stagger>

      </div>

    </section>
  )
}


export { Officer }