import {Suspense} from 'react'

import {ProductsList} from './components/ProductsList'

function App() {
  return (
    <Suspense fallback="Loading...">
      <ProductsList />
    </Suspense>
  )
}

export default App
