import { FC, ReactElement } from 'react'
import { motion } from 'framer-motion'

type AnimateButtonProps = {
  type?: string
  children: ReactElement
}

export const AnimateButton: FC<AnimateButtonProps> = ({ children, type = 'scale' }) => {
  switch (type) {
    case 'rotate': // only available in paid version
    case 'slide': // only available in paid version
    case 'scale': // only available in paid version
    default:
      return (
        <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
          {children}
        </motion.div>
      )
  }
}
