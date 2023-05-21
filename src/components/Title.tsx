import { FC, Fragment, cloneElement } from 'react'
import { Typography } from '@mui/material'

type TitleProps = {
  title: string
  name?: string
  cardActions?: any
  noPadding?: boolean
  noMargin?: boolean
  mt?: boolean
}

export const Title: FC<TitleProps> = (props: TitleProps) => {
  const { title, name, cardActions, noPadding, noMargin, mt } = props
  return (
    <Fragment>
      <div
        style={{
          display: 'flex',
          marginTop: mt ? 16 : 0,
          marginBottom: noMargin ? 0 : 24,
          alignItems: 'center',
          padding: noPadding ? '0px 16px' : 8,
        }}
      >
        <Typography variant="h3">
          {title}&ensp;
          <span style={{ textTransform: 'uppercase' }}>{name}</span>
        </Typography>
        {cardActions && (
          <div
            style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'end',
            }}
          >
            {cloneElement(cardActions)}
          </div>
        )}
      </div>
    </Fragment>
  )
}
