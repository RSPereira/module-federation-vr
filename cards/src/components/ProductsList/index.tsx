import {useQuery} from '@tanstack/react-query'

import {IProduct} from '../../types/productType'
import {ProductCard} from '../ProductCard'
import {getProducts} from '../../services/productService'

import * as S from './styles'

export const ProductsList = () => {
  const {data, isLoading} = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  return (
    <S.ProductsListWrapper>
      {isLoading ? (
        <span>Carregando...</span>
      ) : (
        <S.ProductCardsWrapper>
          {data.map((product: IProduct) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              thumbnail={product.thumbnail}
              description={product.description}
              price={product.price}
            />
          ))}
        </S.ProductCardsWrapper>
      )}
    </S.ProductsListWrapper>
  )
}
