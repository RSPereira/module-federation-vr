import {useAtom} from 'jotai'

import {IProduct} from '../../types/productType'
import {formattedCurrency} from '../../utils/formatCurrencyToBrl'
import {addProductAtom} from '../../atoms/productAtom'

import * as S from './styles'

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
    alert('Produto adicionado no carrinho.')
  }

  return (
    <S.CardWrapper>
      <S.ImageWrapper>
        <S.Image src={thumbnail} aria-label={`Imagem do produto: ${title}`} />
      </S.ImageWrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.PriceWrapper>
        <S.Price>{priceFormatted}</S.Price>
        <S.Button onClick={() => handleAddToCart()}>Comprar</S.Button>
      </S.PriceWrapper>
    </S.CardWrapper>
  )
}
