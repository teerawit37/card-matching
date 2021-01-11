import Head from 'next/head'
import Header from '~/components/header'

export default function Layout({
  children,
  title = "Card Matching Challenge",
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header>Card Matching challenge</Header>

      {children}

      <footer></footer>
    </div>
  )
}
