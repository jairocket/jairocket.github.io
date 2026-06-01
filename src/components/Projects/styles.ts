import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  margin: 1rem;
  line-height: 1.6;
  text-align: justify;

  @media screen and (min-width: 768px) {
    margin: 1rem 0 2.5rem;
    padding: 0 1rem;
    width: 100%;
  }

  div {
    @media screen and (min-width: 768px) {
      padding: 1.25rem 0;
      border-bottom: 1px solid rgba(178, 178, 178, 0.08);

      &:last-child {
        border-bottom: none;
      }
    }
  }

  h4 {
    font-family: 'Cinzel', serif;

    @media screen and (min-width: 768px) {
      font-size: 1.0625rem;
      letter-spacing: 0.06em;
      margin-bottom: 0.4rem;
    }
  }

  p {
    @media screen and (min-width: 768px) {
      line-height: 1.8;
      max-width: 68ch;
      color: ${(props) => props.theme['gray-300']};
    }
  }

  a {
    color: ${(props) => props.theme['gray-100']};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme['blue']};
    }

    @media screen and (min-width: 768px) {
      transition: color 0.2s ease;
    }
  }
`
