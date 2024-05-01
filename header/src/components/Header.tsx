import {useState} from 'react'

import {ReactComponent as Logo} from '../assets/icons/logo.svg'
import {ReactComponent as ShoppingBag} from '../assets/icons/shopping-bag.svg'

import {Modal} from './Modal'

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
      <header className="bg-primary flex flex-wrap justify-center p-4 drop-shadow-md">
        <main className="flex justify-between items-center w-full max-w-screen-2xl">
          <Logo />
          <button
            className="bg-secondary px-4 py-1 rounded-full"
            onClick={() => setIsCartOpen(!isCartOpen)}>
            <ShoppingBag />
          </button>
        </main>
      </header>
      <Modal isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  )
}
