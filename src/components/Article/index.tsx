export type ArticleType = {
  href: string
  title: string
}

export function Article({ href, title }: ArticleType) {
  return (
    <a href={href} target={'_blank'}>
      {title}
    </a>
  )
}
