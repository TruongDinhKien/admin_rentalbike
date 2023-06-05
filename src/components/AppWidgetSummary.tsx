import { alpha, styled } from '@mui/material/styles'
import { Box, Card, Icon, Typography } from '@mui/material'
import { FC } from 'react'
import { get } from 'lodash'

const StyledIcon = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}))

export type AppWidgetSummaryProps = {
  title: string
  total: number | string
  color?: string
  icon?: any
  sx?: object
}

export const AppWidgetSummary: FC<AppWidgetSummaryProps> = ({
  title,
  total,
  icon,
  color = 'primary',
  sx,
  ...other
}) => {
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: theme => get(theme, `palette.${color}.darker`),
        backgroundImage: theme =>
          `linear-gradient(135deg, ${alpha(get(theme, `palette.${color}.dark`), 0.1)} 0%, ${alpha(
            get(theme, `palette.${color}.dark`),
            0.24,
          )} 100%)`,
        ...sx,
      }}
      {...other}
    >
      <StyledIcon
        sx={{
          color: theme => get(theme, `palette.${color}.dark`),
          backgroundImage: theme =>
            `linear-gradient(135deg, ${alpha(get(theme, `palette.${color}.dark`), 0.1)} 0%, ${alpha(
              get(theme, `palette.${color}.dark`),
              0.24,
            )} 100%)`,
        }}
      >
        <Box sx={{ width: 24, height: 24 }} component={icon}></Box>
      </StyledIcon>

      <Typography variant="h3">{total}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  )
}
