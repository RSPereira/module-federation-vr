import {TProductCart} from 'cards/productType'
import {useProductsCart} from 'cards/productAtom'

import {Header} from './components/Header'

function App() {
  const [cart] = useProductsCart()

  return (
    <>
      <Header />
      {cart.map((product: typeof TProductCart) => (
        <span>
          {product.title} - {product.price}
        </span>
      ))}
    </>
  )
}

export default App
