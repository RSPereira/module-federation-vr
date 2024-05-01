import styled from 'styled-components'

const widths = {
  '2xl': '1536px',
}

export const ProductsListWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ProductCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.5rem;

  max-width: ${widths['2xl']};
`
