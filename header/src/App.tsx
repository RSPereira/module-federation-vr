import {TProductCart} from 'cards/productType'
import {useProductsCart} from 'cards/productAtom'

import './App.css'

function App() {
  const [cart] = useProductsCart()

  return (
    <>
      <h1>HEADER - Vite + React</h1>
      {cart.map((product: typeof TProductCart) => (
        <span>
          {product.title} - {product.price}
        </span>
      ))}
    </>
  )
}

export default App
