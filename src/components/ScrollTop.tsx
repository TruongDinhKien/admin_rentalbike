import { useEffect, FC, ReactElement } from 'react'
import { useLocation } from 'react-router-dom'

type ScrollTopProps = {
  children: ReactElement
}

export const ScrollTop: FC<ScrollTopProps> = ({ children }) => {
  const location = useLocation()
  const { pathname } = location

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return children || null
}
