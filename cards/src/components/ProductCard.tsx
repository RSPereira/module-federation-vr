import {useAtom} from 'jotai'
import {IProduct} from '../types/productType'
import {formattedCurrency} from '../utils/formatCurrencyToBrl'
import {addProductAtom} from '../atoms/productAtom'

export const ProductCard = ({
  id,
  thumbnail,
  title,
  price,
  description,
}: IProduct) => {
  const [, addProduct] = useAtom(addProductAtom)
  const priceFormatted = formattedCurrency(price)

  const handleAddToCart = () => {
    const data = {
      id,
      thumbnail,
      title,
      price,
    }

    addProduct(data)
  }

  return (
    <div>
      <img src={thumbnail} aria-label={`Imagem do produto: ${title}`} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <span>{priceFormatted}</span>
        <button onClick={() => handleAddToCart()}>Comprar</button>
      </div>
    </div>
  )
}
