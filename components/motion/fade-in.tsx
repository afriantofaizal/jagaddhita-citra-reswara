'use client'

import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { fadeIn } from '@/src/lib/motion'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
}

const FadeIn = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
}: FadeInProps) => {
  return (
    <motion.div
      className={className}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration,
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

export { FadeIn }