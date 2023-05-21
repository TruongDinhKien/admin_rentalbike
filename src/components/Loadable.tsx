import { Suspense } from 'react'

// project import
import { Loader } from './Loader'

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

export const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  )
