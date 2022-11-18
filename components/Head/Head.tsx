import { product } from "data/product"
import NextHead from "next/head"

interface HeadProps {
  title?: string
  description?: string
  keywords?: string
  img?: string
  url?: string
  author?: string
  favicon?: string
}

const Head = (props: HeadProps) => {
  return (
    <NextHead>
      <link rel="shortcut icon" href={props.favicon} />
      <title>{props.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <meta name="author" content={props.author} />
      <meta property="og:image" content={props.img} />
      <meta name="og:description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:url" content={props.url} />
      <meta property="og:site_name" content={props.title} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </NextHead>
  )
}

Head.defaultProps = {
  title: product.name + " | " + product.description.short,
  description: product.description.long,
  keywords: product.keywords,
  img: product.url + product.img,
  url: product.url,
  author: product.author,
  favicon: product.url + product.favicon,
}

export default Head
