import {ReactComponent as Close} from '../assets/icons/close.svg'

type ModalProps = {
  isCartOpen: boolean
  setIsCartOpen: (isCartOpen: boolean) => void
}

export const Modal = ({isCartOpen, setIsCartOpen}: ModalProps) => {
  const cssAnimation = `${
    !isCartOpen ? 'w-0' : 'w-full'
  } transition-width duration-200`

  const handleFinishShop = () => {
    alert('Compras concluidas com sucesso!')
    setIsCartOpen(false)
  }

  return (
    <>
      <div className={`${cssAnimation} absolute flex top-0`}>
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
                <span className="text-xl">2</span>
              </header>
              <div className="flex justify-between mt-6 p-3 border border-neutral-dark rounded-lg items-center hover:border-stroke">
                <img
                  className="max-w-18 max-h-14"
                  src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
                  alt=""
                />
                <span className="text-sm">Nome do produto</span>
                <span className="text-sm">R$ 00,00</span>
              </div>
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
