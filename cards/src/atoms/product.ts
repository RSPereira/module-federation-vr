import {atom} from 'jotai'

import {TProductCart} from '../types/product'

export const cartAtom = atom<TProductCart[]>([])
export const addProductAtom = atom(
  null,
  (get, set, productData: TProductCart) => {
    set(cartAtom, [...get(cartAtom), productData])
  },
)
