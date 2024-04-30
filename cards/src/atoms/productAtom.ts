import {atom, useAtom} from 'jotai'

import {TProductCart} from '../types/productType'

export const cartAtom = atom<TProductCart[]>([])
export const addProductAtom = atom(
  null,
  (get, set, productData: TProductCart) => {
    set(cartAtom, [...get(cartAtom), productData])
  },
)

export const useProductsCart = () => useAtom(cartAtom)
