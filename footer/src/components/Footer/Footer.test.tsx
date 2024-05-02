import {render} from '@testing-library/react'
import {describe, it, expect} from 'vitest'

import {Footer} from './'

describe('Footer', () => {
  it('renders the Footer component', () => {
    const result = render(<Footer />)

    expect(result).toMatchSnapshot()
  })
})
