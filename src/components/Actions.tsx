import { FC, cloneElement } from 'react'
import { Grid, Theme, useMediaQuery } from '@mui/material'
import { ActionsProps } from './types'
import { MEDIUM_WINDOW_SIZE } from '@/constants'

export const Actions: FC<ActionsProps> = ({ children, justifyContent = 'flex-end', gridstyle = 6 }) => {
  const elements = Array.isArray(children) ? children : [children]
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down(MEDIUM_WINDOW_SIZE))

  return (
    <Grid
      xs={12}
      md={gridstyle}
      sx={{
        paddingLeft: isSmall ? 16 : 0,
      }}
      container
      direction="row"
      alignItems={'center'}
      justifyContent={justifyContent}
    >
      {elements?.map((child: any, idx: number) => {
        return (
          <Grid key={idx} item>
            {child && cloneElement(child)}
          </Grid>
        )
      })}
    </Grid>
  )
}
