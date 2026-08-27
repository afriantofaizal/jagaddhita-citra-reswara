'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Loading03Icon,  } from "@hugeicons/core-free-icons"
import { usePathname } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import {
  contactSchema,
  type ContactFormValues,
} from "@/src/lib/validations/contact"
import { submitContactForm } from "@/src/lib/contact"

export const title = "Contact Us";

export function ContactDialog({
    children, 
}: {
    children: React.ReactNode
}) {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false)

    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
        },
    })

        const onSubmit = async (values: ContactFormValues) => {
        setIsSubmitting(true)

        try {
            await submitContactForm(values)

            form.reset()

            setOpen(false)

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

        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild >
                    {children}
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg bg-primary-foreground">
                    <DialogHeader>
                        <DialogTitle>Contact Us</DialogTitle>
                        <DialogDescription>
                            Send us a message and we'll get back to you within 24 hours.
                        </DialogDescription>
                    </DialogHeader>

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
                                    <FieldLabel htmlFor='name'>Name</FieldLabel>
                                    <Input {...form.register("name")} id="name" type="text" placeholder="Full name" autoComplete="name" />
                                    <FieldError
                                        errors={[form.formState.errors.name]}
                                    />
                                </Field>
    
                                {/* EMAIL */}
                                <Field>
                                    <FieldLabel htmlFor='email'>Email Address</FieldLabel>
                                    <Input {...form.register("email")} id="email" type="email" placeholder="corporate@email.com" autoComplete="email" />
                                    <FieldError
                                        errors={[form.formState.errors.email]}
                                    />
                                </Field>

                                {/* SUBJECT */}
                                <Field>
                                    <FieldLabel htmlFor='subject'>Subject</FieldLabel>
                                    <Input {...form.register("subject")} id="subject" type="text" placeholder="Consulting / Sourcing Inquiry" autoComplete="off"/>
                                    <FieldError
                                        errors={[form.formState.errors.subject]}
                                    />
                                </Field>

                                {/* MESSAGE */}
                                <Field>
                                    <FieldLabel htmlFor='message'>Message</FieldLabel>
                                    <Textarea {...form.register("message")} id="message" placeholder="Details of your query..." className="h-32" autoComplete="off" />
                                    <FieldError
                                        errors={[form.formState.errors.message]}
                                    />
                                </Field>

                                <Field orientation="horizontal">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="gap-2 hover:scale-[1.02] transition-transform duration-200"
                                    >
                                        {isSubmitting ? (
                                            <>
                                            <HugeiconsIcon icon={Loading03Icon} className="h-4 w-4 animate-spin" />
                                            Sending...
                                            </>
                                        ) : (
                                            <>
                                            Send Message
                                            </>
                                        )}
                                    </Button>
                                </Field>

                            </FieldGroup>
                        </FieldSet>
                    </form>
                </DialogContent>
            </Dialog>
        )
}