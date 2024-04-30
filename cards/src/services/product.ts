export const getProducts = async () => {
  const response = await fetch(
    'https://dummyjson.com/products?limit=9&select=id,title,description,price,thumbnail',
  )

  const {products} = await response.json()
  return products
}
