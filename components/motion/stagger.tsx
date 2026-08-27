'use client'

import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { staggerContainer } from '@/src/lib/motion'

interface StaggerProps {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: number
  once?: boolean
  amount?: number
}

const Stagger = ({
  children,
  className,
  delay = 0,
  stagger = 0.1,
  once = true,
  amount = 0.2,
}: StaggerProps) => {
  return (
    <motion.div
      className={className}
      variants={{
        ...staggerContainer,
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
      }}
    >
      {children}
    </motion.div>
  )
}

export { Stagger }