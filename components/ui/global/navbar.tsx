'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import assets from '@/src/assets/assets'
import { Button } from '@/components/ui/button'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { HugeiconsIcon } from '@hugeicons/react'
import { Menu01Icon } from '@hugeicons/core-free-icons'

import { cn } from '@/src/lib/utils'
import { ContactDialog } from '@/components/ui/global/contact-dialog'

import {
  FadeIn,
  Stagger,
  FadeUp,
} from '@/components/motion/'


interface MenuItem {
  title: string
  url: string
  description?: string
  icon?: React.ReactNode
  items?: MenuItem[]
}


interface NavbarProps {
  className?: string

  logo?: {
    url: string
    light: StaticImageData
    dark: StaticImageData
    alt: string
    className?: string
  }

  menu?: MenuItem[]

  contact?: {
    title: string
  }
}


const Navbar = ({
  logo = {
    url: '/',
    light: assets.logo_light,
    dark: assets.logo_dark,
    alt: 'logo',
  },

  menu = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About Us',
      url: '/about',
    },
    {
      title: 'Services',
      url: '/services',
    },
    {
      title: 'Experience',
      url: '/experience',
    },
    {
      title: 'Contact',
      url: '/contact',
    },
  ],

  contact = {
    title: 'Get in touch',
  },

  className,

}: NavbarProps) => {


  /* ===========================================
   * Theme
   * =========================================== */

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

    <section
      className={cn(
        'fixed top-0 z-50 w-full',
        'border-b border-b-border/50',
        'bg-background/40 py-4',
        'backdrop-blur-2xl',
        className
      )}
    >

      <div className="px-6 md:px-8 lg:px-14 xl:px-20">


        {/* ===========================================
         * Desktop
         * =========================================== */}

        <div className="hidden lg:block">

          <FadeIn
            duration={0.5}
            delay={0.1}
            amount={1}
          >

            <nav className="flex items-center justify-between">


              {/* Logo */}

              <Link
                href={logo.url}
                className="flex items-center gap-2"
              >

                <Image
                  src={logoSrc}
                  className={cn(
                    'h-auto max-h-8 w-auto',
                    logo.className
                  )}
                  alt={logo.alt}
                />

              </Link>


              {/* Navigation */}

              <div
                className="flex items-center"
              >

                <NavigationMenu>

                  <NavigationMenuList>

                    {menu.map((item) => (

                      <div
                        key={item.title}
                      >

                        {renderMenuItem(item)}

                      </div>

                    ))}

                  </NavigationMenuList>

                </NavigationMenu>

              </div>


              {/* Contact */}

              <FadeIn
                duration={0.4}
                delay={0.35}
                amount={1}
              >

                <ContactDialog>

                  <Button>
                    {contact.title}
                  </Button>

                </ContactDialog>

              </FadeIn>

            </nav>

          </FadeIn>

        </div>


        {/* ===========================================
         * Mobile
         * =========================================== */}

        <div className="block lg:hidden">

          <FadeIn
            duration={0.5}
            delay={0.1}
            amount={1}
          >

            <div className="flex items-center justify-between">


              {/* Logo */}

              <Link
                href={logo.url}
                className="flex items-center gap-2"
              >

                <Image
                  src={logoSrc}
                  className={cn(
                    'h-auto max-h-8 w-auto',
                    logo.className
                  )}
                  alt={logo.alt}
                />

              </Link>


              {/* Mobile Menu */}

              <Sheet>

                <SheetTrigger asChild>

                  <Button
                    variant="outline"
                    size="icon"
                  >

                    <HugeiconsIcon
                      icon={Menu01Icon}
                      className="size-4"
                    />

                  </Button>

                </SheetTrigger>


                <SheetContent className="overflow-y-auto">

                  <SheetHeader>

                    <SheetTitle>

                      <Link
                        href={logo.url}
                        className="flex items-center gap-2"
                      >

                        <Image
                          src={logoSrc}
                          className={cn(
                            'h-auto max-h-8 w-auto',
                            logo.className
                          )}
                          alt={logo.alt}
                        />

                      </Link>

                    </SheetTitle>

                  </SheetHeader>


                  <div className="flex flex-col gap-6 p-4">


                    {/* Mobile Navigation */}

                    <div className="flex w-full flex-col gap-4">

                      {menu.map((item) => (
                        renderMobileMenuItem(item)
                      ))}

                    </div>


                    {/* Contact */}

                    <div className="flex flex-col gap-3">

                      <ContactDialog>

                        <Button>
                          {contact.title}
                        </Button>

                      </ContactDialog>

                    </div>

                  </div>

                </SheetContent>

              </Sheet>

            </div>

          </FadeIn>

        </div>

      </div>

    </section>
  )
}


/* ===========================================
 * Desktop Menu Item
 * =========================================== */

const renderMenuItem = (item: MenuItem) => {

  return (

    <NavigationMenuItem key={item.title}>

      <NavigationMenuLink
        href={item.url}
        className="
          group inline-flex h-10 w-max
          items-center justify-center
          rounded-md px-4 py-2
          text-sm
          transition-colors
          hover:text-amber-400
        "
      >

        {item.title}

      </NavigationMenuLink>

    </NavigationMenuItem>

  )
}


/* ===========================================
 * Mobile Menu Item
 * =========================================== */

const renderMobileMenuItem = (item: MenuItem) => {

  return (

    <Link
      key={item.title}
      href={item.url}
      className="
        text-md font-semibold
        transition-colors
        hover:text-amber-400
      "
    >

      {item.title}

    </Link>

  )
}


export { Navbar }