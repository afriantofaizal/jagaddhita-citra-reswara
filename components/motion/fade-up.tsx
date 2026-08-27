'use client'

import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { fadeUp } from '@/src/lib/motion'

interface FadeUpProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
  distance?: number
}

const FadeUp = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  distance = 24,
}: FadeUpProps) => {
  return (
    <motion.div
      className={className}
      variants={{
        ...fadeUp,
        hidden: {
          ...fadeUp.hidden,
          y: distance,
        },
      }}
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

export { FadeUp }