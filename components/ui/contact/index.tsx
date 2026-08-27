'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import { HugeiconsIcon } from '@hugeicons/react'

import {
  MapPinHouseIcon,
  Mail01Icon,
  Call02Icon,
  Loading03Icon,
} from '@hugeicons/core-free-icons'

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

import {
  FadeIn,
  FadeUp,
  Stagger,
} from '@/components/motion/'

import {
  contactSchema,
  type ContactFormValues,
} from '@/src/lib/validations/contact'
import { submitContactForm } from "@/src/lib/contact"


/* =====================================================
 * TYPES
 * ===================================================== */

type HugeIcon = React.ComponentProps<
  typeof HugeiconsIcon
>['icon']

interface ContactInfo {
  label: string
  value: string
  icon: HugeIcon
  href?: string
}

interface ContactBasicProps {
  breadcrumb: string
  title: string
  heading: string
  description: string
  contactInfo: ContactInfo[]
}

interface ContactProps extends ContactBasicProps {}

type Props = Partial<ContactProps>


/* =====================================================
 * DEFAULT DATA
 * ===================================================== */

const defaultProps: ContactBasicProps = {
  breadcrumb: 'Contact',

  title: 'GET IN TOUCH',

  heading: "Let's discuss your procurement needs",

  description:
    'Reach out to our team for partnership, tenders, or supply inquiries. We respond to every serious request.',

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


/* =====================================================
 * PAGE METADATA
 * ===================================================== */

export const title = 'Contact Us'


/* =====================================================
 * FORMSPREE
 * ===================================================== */

const FORMSPREE_ENDPOINT =
  'https://formspree.io/f/xgaewlqw'


/* =====================================================
 * COMPONENT
 * ===================================================== */

const Contact = (props: Props) => {
  const {
    breadcrumb,
    title,
    heading,
    description,
    contactInfo,
  } = {
    ...defaultProps,
    ...props,
  }

  const [isSubmitting, setIsSubmitting] = useState(false)


  /* ===================================================
   * FORM
   * =================================================== */

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),

    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })


  /* ===================================================
   * SUBMIT
   * =================================================== */

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true)

    try {

      await submitContactForm(values)

      form.reset()

      toast.success(
        "Message sent successfully 🚀"
      )

    } catch (error) {

      console.error(
        "Contact form error:",
        error
      )

      toast.error(
        "An error occurred; please try again"
      )

    } finally {

      setIsSubmitting(false)

    }
  }


  /* ===================================================
   * RENDER
   * =================================================== */

  return (
    <div>
      <div className="mx-auto px-6 py-32 md:px-8 lg:px-14 xl:px-20">

        {/* =============================================
         * BREADCRUMB
         * ============================================= */}

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


        {/* =============================================
         * CONTENT
         * ============================================= */}

        <div className="mx-auto w-full max-w-6xl">
          <div className="mt-20 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">

            {/* ===========================================
            * CONTACT INFORMATION
            * =========================================== */}

            <div className="flex flex-col items-start">

              <Stagger
                className="flex flex-col"
                stagger={0.1}
              >
                {/* Title */}
                <FadeUp>
                  <div className="mb-3 flex items-center gap-4 text-amber-400">
                    <span>──</span>

                    <span className="text-xs font-medium">
                      {title}
                    </span>
                  </div>
                </FadeUp>

                {/* Heading */}
                <FadeUp>
                  <h2 className="text-pretty text-2xl font-semibold tracking-tight md:text-4xl lg:text-6xl">
                    {heading}
                  </h2>
                </FadeUp>

                {/* Description */}
                <FadeUp>
                  <p className="mt-5 max-w-lg text-muted-foreground text-pretty">
                    {description}
                  </p>
                </FadeUp>

                {/* Contact Information */}
                <Stagger className="mt-20 flex flex-col gap-8"
                  stagger={0.12}
                >

                  {contactInfo.map((contact) => {

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

                          <p className="max-w-xl text-base leading-relaxed text-pretty">
                            {contact.value}
                          </p>
                        </div>
                      </>
                    )

                    if (contact.href) {
                      return (
                        <FadeUp key={contact.label}>
                          <Link
                            href={contact.href}
                            className="flex items-start gap-4 transition-opacity hover:opacity-80"
                          >
                            {content}
                          </Link>
                        </FadeUp>
                      )
                    }

                    return (
                      <FadeUp key={contact.label}>
                        <div className="flex items-start gap-4">
                          {content}
                        </div>
                      </FadeUp>
                    )
                  })}

                </Stagger>
              </Stagger>
            </div>


            {/* ===========================================
            * CONTACT FORM
            * =========================================== */}

            <FadeUp className="w-full max-w-xl lg:ml-auto">
              <div className="rounded-2xl border bg-primary-foreground p-8">

                <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="on">

                  {/* Honeypot anti-spam */}
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ display: "none" }}
                  />

                  <FieldSet>
                    <FieldGroup>

                      {/* NAME */}
                      <Field>
                        <FieldLabel htmlFor="name">
                          Name
                        </FieldLabel>

                        <Input
                          {...form.register("name")}
                          id="name"
                          type="text"
                          placeholder="Full name"
                          autoComplete="name"
                        />

                        <FieldError
                            errors={[form.formState.errors.name]}
                        />
                      </Field>

                      {/* EMAIL */}
                      <Field>
                        <FieldLabel htmlFor="email">
                          Email Address
                        </FieldLabel>

                        <Input
                          {...form.register("email")}
                          id="email"
                          type="email"
                          placeholder="corporate@email.com"
                          autoComplete="email" 
                        />

                        <FieldError
                            errors={[form.formState.errors.email]}
                        />
                      </Field>

                      {/* SUBJECT */}
                      <Field>
                        <FieldLabel htmlFor="subject">
                          Subject
                        </FieldLabel>

                        <Input
                          {...form.register("subject")}
                          id="subject"
                          type="text"
                          placeholder="Consulting / Sourcing Inquiry"
                          autoComplete="off"
                        />

                        <FieldError
                            errors={[form.formState.errors.subject]}
                        />
                      </Field>

                      {/* MESSAGE */}
                      <Field>
                        <FieldLabel htmlFor="message">
                          Message
                        </FieldLabel>

                        <Textarea
                          {...form.register("message")}
                          id="message"
                          placeholder="Details of your query..."
                          className="h-32"
                          autoComplete="off"
                        />

                        <FieldError
                            errors={[form.formState.errors.message]}
                        />
                      </Field>

                      {/* SUBMIT */}
                      <Field orientation="horizontal">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="gap-2 transition-transform duration-200 hover:scale-[1.02]"
                        >
                          {isSubmitting ? (
                            <>
                              <HugeiconsIcon
                                icon={Loading03Icon}
                                className="h-4 w-4 animate-spin"
                              />
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </Field>

                    </FieldGroup>
                  </FieldSet>

                </form>

              </div>
            </FadeUp>

          </div>
        </div>


      </div>
    </div>
  )
}


/* =====================================================
 * EXPORT
 * ===================================================== */

export { Contact }