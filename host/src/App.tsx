import './App.css'

import Header from 'header/App'
import {ProductsList} from 'cards/ProductsList'
import Footer from 'footer/App'

function App() {
  return (
    <>
      <Header />
      <ProductsList />
      <Footer />
      <h1>HOST - Vite + React</h1>
    </>
  )
}

export default App
