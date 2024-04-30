import {ReactNode} from 'react'
import {QueryClientProvider as Provider} from '@tanstack/react-query'

import {queryClient} from '../services/queryClient'

type Props = {
  children?: ReactNode
}

export const QueryClientProvider = ({children}: Props) => {
  return <Provider client={queryClient}>{children}</Provider>
}
