import { Article } from '../Article'

const articles = [
  {
    href: 'https://dev.to/jairocket/comecando-com-jest-e-react-testing-library-10ck',
    title: 'Começando com Jest e React Testing Library',
  },
  {
    href: 'https://dev.to/jairocket/autenticacoes-usando-jwt-3627',
    title: 'Autenticações com JavaScript Web Tokens',
  },
  {
    href: 'https://community.revelo.com/funcoes-como-objetos-em-javascript/',
    title: 'Funções como Objetos em JavaScript',
  },
  {
    href: 'https://community.listopro.com/funciones-como-objetos-de-javascript/',
    title: 'Funciones como Objetos en JavaScript',
  },
  {
    href: 'https://community.revelo.com/short-circuit-evaluations-e-logical-assigning-operator-como-sao-usados/',
    title: 'Short-Circuit Evaluations e Logical Assigning Operators: Como são usados?',
  },
  {
    href: 'https://community.listopro.com/short-circuit-evaluations-y-logical-assigning-operators-como-se-usan/',
    title: 'Short-Circuit Evaluations y Logical Assigning Operators: ¿Cómo se usan?',
  },
  {
    href: 'https://community.revelo.com.br/clean-code-em-direcao-a-um-trabalho-legivel/',
    title: 'Clean Code: Em direção a um trabalho legível',
  },
  {
    href: 'https://community.listopro.com/clean-code-hacia-un-trabajo-legible/',
    title: 'Clean Code: hacia un trabajo legible',
  },
]

export function Articles() {
  return (
    <>
      {articles.map(({ href, title }) => (
        <Article key={href} href={href} title={title} />
      ))}
    </>
  )
}
