import {useQuery} from '@tanstack/react-query'

import {IProduct} from '../types/productType'
import {ProductCard} from './ProductCard'
import {getProducts} from '../services/productService'

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
