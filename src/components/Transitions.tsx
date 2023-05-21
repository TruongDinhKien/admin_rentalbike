import { forwardRef, ReactElement, FC } from 'react'
import { Fade, Box, Grow } from '@mui/material'

type TransitionsProps = {
  children: ReactElement
  type: 'grow' | 'fade' | 'collapse' | 'slide' | 'zoom'
  position: 'top-left' | 'top-right' | 'top' | 'bottom-left' | 'bottom-right' | 'bottom'
}

export const Transitions: FC<any> = forwardRef(({ children, position, type, ...others }, ref) => {
  let positionSX = {
    transformOrigin: '0 0 0',
  }

  switch (position) {
    case 'top-right':
    case 'top':
    case 'bottom-left':
    case 'bottom-right':
    case 'bottom':
    case 'top-left':
    default:
      positionSX = {
        transformOrigin: '0 0 0',
      }
      break
  }

  return (
    <Box ref={ref}>
      {type === 'grow' && (
        <Grow {...others}>
          <Box sx={positionSX}>{children}</Box>
        </Grow>
      )}
      {type === 'fade' && (
        <Fade
          {...others}
          timeout={{
            appear: 0,
            enter: 300,
            exit: 150,
          }}
        >
          <Box sx={positionSX}>{children}</Box>
        </Fade>
      )}
    </Box>
  )
})
