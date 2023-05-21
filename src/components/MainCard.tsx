import { forwardRef, FC } from 'react'

// material-ui
import { useTheme } from '@mui/material/styles'
import { Card, CardContent, CardHeader, CardProps, Divider, Typography } from '@mui/material'

// project import
import { Highlighter } from './Highlighter'

// header style
const headerSX = {
  p: 2.5,
  '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' },
}

type MainCardProps = {
  border?: boolean
  boxShadow?: any
  content?: any
  contentSX?: any
  darkTitle?: string
  divider?: boolean
  secondary?: any
  shadow?: any
  codeHighlight?: any
} & CardProps

export const MainCard: FC<any> = forwardRef(
  (
    {
      border = true,
      boxShadow,
      children,
      content = true,
      contentSX = {},
      darkTitle,
      divider = true,
      elevation,
      secondary,
      shadow,
      sx = {},
      title,
      codeHighlight,
      ...others
    },
    ref,
  ) => {
    const theme: any = useTheme()
    //boxShadow = theme.palette.mode === 'dark' ? boxShadow || true : boxShadow

    return (
      <Card
        elevation={elevation || 0}
        ref={ref}
        {...others}
        sx={{
          ...sx,
          border: border ? '1px solid' : 'none',
          borderRadius: 2,
          borderColor: theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.grey.A100,
          //boxShadow:
          //boxShadow && (!border || theme.palette.mode === 'dark')
          //? shadow || theme.customShadows.z1
          //: 'inherit',
          ':hover': {
            boxShadow: boxShadow ? shadow || theme.customShadows.z1 : 'inherit',
          },
          '& pre': {
            m: 0,
            p: '16px !important',
            fontFamily: theme.typography.fontFamily,
            fontSize: '0.75rem',
          },
        }}
      >
        {/* card header and action */}
        {!darkTitle && title && (
          <CardHeader sx={headerSX} titleTypographyProps={{ variant: 'subtitle1' }} title={title} action={secondary} />
        )}
        {darkTitle && title && (
          <CardHeader sx={headerSX} title={<Typography variant="h3">{title}</Typography>} action={secondary} />
        )}

        {/* content & header divider */}
        {title && divider && <Divider />}

        {/* card content */}
        {content && <CardContent sx={contentSX}>{children}</CardContent>}
        {!content && children}

        {/* card footer - clipboard & highlighter  */}
        {codeHighlight && (
          <>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <Highlighter codeHighlight={codeHighlight} main>
              {children}
            </Highlighter>
          </>
        )}
      </Card>
    )
  },
)
