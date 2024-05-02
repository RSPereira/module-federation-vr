import {render, screen, fireEvent} from '@testing-library/react'
import {describe, it, expect, beforeEach, vi} from 'vitest'
import '@testing-library/jest-dom'

import {ProductCard} from './'

describe('<ProductCard />', () => {
  it('renders the ProductCard component', () => {
    const result = render(
      <ProductCard id={1} thumbnail="" description="" price={0} title="" />,
    )
    expect(result).toMatchSnapshot()
  })

  describe('features', () => {
    beforeEach(() => {
      render(
        <ProductCard
          id={1}
          thumbnail="http://mockimg.com"
          description="Mock Product"
          price={90}
          title="Product"
        />,
      )
    })

    it('should show correctly title', () => {
      expect(screen.getByText('Product')).toBeInTheDocument()
    })

    it('should show alert when button clicked', () => {
      global.alert = vi.fn()
      const button = screen.getByText('Comprar')
      fireEvent.click(button)
      expect(global.alert).toHaveBeenCalledTimes(1)
    })
  })
})
