import Head from 'next/head'
import Wrapper from '../components/ui/Wrapper'

export default function Home() {
  return (
    <div className="font-body">
      <Head>
        <title>The Entrepreneurial University - TUM</title>
        <meta name="keywords" content="university" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </Wrapper>
    </div>
  )
}
