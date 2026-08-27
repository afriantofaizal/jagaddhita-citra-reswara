'use client'

import * as React from 'react'
import Link from 'next/link'
import { useTheme } from "next-themes";
import Image, { StaticImageData } from 'next/image'
import assets from '@/src/assets/assets'
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/src/lib/utils";
import { ModeToggle } from '../theme-toggle';

import {
  FadeUp,
  Stagger,
} from '@/components/motion/'

interface FooterLink {
  name: string;
  href: string;
}
interface FooterSection {
  title: string;
  links: FooterLink[];
}
interface FooterLogo {
  url: string;
  light: StaticImageData;
  dark: StaticImageData;
  alt: string;
  title: string;
  className?: string;
}

interface FooterSocialMedia {
  url: string;
  icon: React.ComponentProps<typeof HugeiconsIcon>['icon'];
}

interface FooterProps {
  logo?: FooterLogo
  description?: string
  copyright?: string
  sections?: FooterSection[]
  className?: string
}

const Footer = ({
  logo = {
    url: '/',
    light: assets.logo_light,
    dark: assets.logo_dark,
    alt: 'Logo',
    title: 'Logo',
  },

    description = 'Established in 2014, delivering comprehensive hardware solutions, system integration and specialized technical consulting.',

    sections = [
        {
        title: "Product",
            links: [
                { name: "Services", href: "/services" },
                { name: "Experience", href: "/experience" },
            ],
        },
        {
        title: "Company",
            links: [
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
            ],
        },
    ],

    copyright = '© 2026 PT. Jagaddhita Citra Reswara. All rights reserved.',

  className,
}: FooterProps) => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
    setMounted(true);
    }, []);

    const logoSrc =
    mounted && resolvedTheme === "dark"
        ? logo.dark
        : logo.light;

    const MAX_SECTIONS = 2;
    const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);

    return (
        <section className={cn("pt-32 pb-8 bg-primary-foreground", className)}>
            <div className='mx-auto px-6 md:px-8 lg:px-14 xl:px-20'>
                <footer>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                            <div className='col-span-2 max-w-md mb-8 lg:mb-0'>
                                <FadeUp
                                    amount={0.15}
                                >
                                    <div className='flex items-center lg:justify-start'>
                                        {/* Logo */}
                                        <a href={logo.url} className="flex items-center gap-2">
                                            <Image
                                            src={logoSrc}
                                            className={cn("h-auto max-h-12 w-auto", logo.className)}
                                            alt={logo.alt}
                                            />
                                        </a>
                                    </div>
                                    <p className="mt-8 text-sm">
                                        {description}
                                    </p>
                                </FadeUp>

                            </div>

                        <Stagger
                            stagger={0.12}
                            amount={0.15}
                            className='max-w-2xl grid grid-cols-2'
                        >
                            {visibleSections.map((section, sectionIdx) => (
                            <FadeUp
                                key={sectionIdx}
                                amount={0.15}
                            >
                                <div key={sectionIdx}>
                                    <h3 className="mb-4 text-sm font-semibold tracking-tight">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-4 text-sm text-muted-foreground">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                        key={linkIdx}
                                        className="font-medium hover:text-primary"
                                        >
                                        <a href={link.href}>{link.name}</a>
                                        </li>
                                    ))}
                                    </ul>
                                </div>  
                            </FadeUp>
                            ))}
                        </Stagger>
                    </div>

                    <FadeUp
                        amount={0.1}
                    >
                        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center">
                            <p>{copyright}</p>
                            <ModeToggle />
                        </div>     
                    </FadeUp>
                </footer>
            </div>
        </section>
    );
};

export { Footer };