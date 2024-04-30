import {Suspense} from 'react'
import {QueryClientProvider} from '@tanstack/react-query'

import {ProductsList} from './components/ProductsList'
import {queryClient} from './services/queryClient'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback="Loading...">
        <ProductsList />
      </Suspense>
    </QueryClientProvider>
  )
}

export default App
