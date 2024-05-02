import {useProductsCart} from 'cards/productAtom'
import {TProductCart} from 'cards/productType'
import {formattedCurrency} from 'cards/formatCurrency'
import {ReactComponent as Close} from '../assets/icons/close.svg'

type ModalProps = {
  isCartOpen: boolean
  setIsCartOpen: (isCartOpen: boolean) => void
}

export const Modal = ({isCartOpen, setIsCartOpen}: ModalProps) => {
  const [cart] = useProductsCart()

  const cssAnimation = `${
    !isCartOpen ? 'w-0' : 'w-full'
  } transition-width duration-200`

  const handleFinishShop = () => {
    alert('Compras concluidas com sucesso!')
    setIsCartOpen(false)
  }

  return (
    <>
      <div
        className={`${cssAnimation} absolute flex top-0 font-sans`}
        data-cy="modal">
        <div
          className={`${cssAnimation} bg-secondary fixed h-screen opacity-70`}
          onClick={() => setIsCartOpen(false)}></div>
        <div
          className={`${cssAnimation} bg-white max-w-screen-md fixed right-0 h-screen pt-10`}>
          <button
            className={`${!isCartOpen && 'hidden'} fixed top-4 right-6`}
            onClick={() => setIsCartOpen(false)}>
            <Close />
          </button>
          <section className="flex justify-center">
            <div className="flex-col w-3/4">
              <header className="flex justify-between border-b border-neutral-light pb-3">
                <h2 className="font-bold text-xl">Compras</h2>
                <span className="text-xl">{cart.length}</span>
              </header>
              {cart.map((product: typeof TProductCart) => (
                <div className="flex justify-between mt-6 p-3 border border-neutral-dark rounded-lg items-center hover:border-stroke">
                  <img
                    className="max-w-18 max-h-14"
                    src={product.thumbnail}
                    alt={`Imagem do produto: ${product.title}`}
                  />
                  <span className="text-sm">{product.title}</span>
                  <span className="text-sm">
                    {formattedCurrency(product.price)}
                  </span>
                </div>
              ))}
              {!cart.length && (
                <div
                  className={`${
                    !isCartOpen && 'hidden'
                  } flex justify-center mt-6`}>
                  Seu carrinho está vazio.
                </div>
              )}
              <footer className="flex justify-between items-center mt-10 border-t border-neutral-light pt-3">
                <button
                  className="bg-primary rounded-full text-sm font-semibold text-neutral-light py-1.5 px-4"
                  onClick={() => handleFinishShop()}>
                  Concluir compras
                </button>
                <button
                  className="text-sm font-semibold"
                  onClick={() => setIsCartOpen(false)}>
                  Cancelar
                </button>
              </footer>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
