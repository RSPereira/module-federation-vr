import {Suspense} from 'react'

import {GlobalStyle} from './styles/global'
import {ProductsList} from './components/ProductsList'

function App() {
  return (
    <Suspense fallback="Loading...">
      <ProductsList />
      <GlobalStyle />
    </Suspense>
  )
}

export default App
