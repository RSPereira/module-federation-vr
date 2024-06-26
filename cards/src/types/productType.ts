export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  thumbnail: string
}

export type TProductCart = Omit<IProduct, 'description'>
