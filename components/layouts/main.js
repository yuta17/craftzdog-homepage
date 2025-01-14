import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import { Analytics } from '@vercel/analytics/react'

const Main = ({ children, _ }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hassan's homepage" />
        <meta name="author" content="Hassan" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@hassasa3" />
        <meta name="twitter:creator" content="@hassasa3" />
        <meta name="twitter:image" content="/hassan.png" />
        <meta property="og:site_name" content="Hassan's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/hassan.png" />
        <title>Hassan</title>
      </Head>

      <Container maxW="container.md" pt={12}>
        {children}

        <Footer />
      </Container>
      <Analytics />
    </Box>
  )
}

export default Main
