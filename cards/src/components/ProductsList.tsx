import {useQuery} from '@tanstack/react-query'

import {IProduct} from '../types/product'
import {ProductCard} from './ProductCard'
import {getProducts} from '../services/product'

export const ProductsList = () => {
  const {data, isLoading} = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  return (
    <>
      {isLoading ? (
        <span>Carregando...</span>
      ) : (
        <div>
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
        </div>
      )}
    </>
  )
}
