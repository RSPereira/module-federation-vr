import styled from 'styled-components'

const colors = {
  primary: '#02D72F',
  stroke: '#00AA13',
  white: '#FFF',
  'neutral-light': '#A0AAB4',
  'neutral-dark': '#1B2126',
}

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${colors['neutral-light']};
  border-radius: 1rem;

  padding: 1rem 2rem;

  font-family: 'Montserrat', sans-serif;

  &:hover {
    border-color: ${colors['stroke']};
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;

  min-height: 200px;
`

export const Image = styled.img`
  max-width: 320px;
  max-height: 200px;
`

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;

  color: ${colors['neutral-dark']};
`

export const Description = styled.p`
  font-size: 0.75rem;

  color: ${colors['neutral-dark']};
`

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: bold;

  color: ${colors['neutral-dark']};
`

export const Button = styled.button`
  background-color: ${colors['primary']};
  color: ${colors['white']};

  border: 1px solid ${colors['primary']};
  border-radius: 5rem;

  font-size: 0.875rem;
  font-weight: semibold;
  text-transform: uppercase;
  letter-spacing: 0.075rem;

  padding: 1rem;

  cursor: pointer;

  &:hover {
    border-color: ${colors['stroke']};
    background-color: ${colors['stroke']};
  }
`
