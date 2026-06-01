import styled from 'styled-components'

export const ArticlesContainer = styled.div`
  margin: 1rem 0 1rem 1rem;
  line-height: 1.6;
  text-align: start;

  justify-content: flex-start;

  @media screen and (min-width: 768px) {
    margin: 1rem 0 2.5rem;
    padding: 0 1rem;
    width: 100%;
  }


  a {
    color: ${(props) => props.theme['gray-100']};
    padding-right: 1rem;
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme['blue']};
    }

    @media screen and (min-width: 768px) {
      display: block;
      padding: 0.6rem 0;
      padding-right: 0;
      border-bottom: 1px solid rgba(178, 178, 178, 0.08);
      transition: color 0.2s ease, padding-left 0.2s ease;

      &:hover {
        padding-left: 0.625rem;
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }

  span {
    font-family: 'Roboto', sans-serif;
  }
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0.75rem;
`