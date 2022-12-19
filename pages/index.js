import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Entrepreneurial University - TUM</title>
        <meta name="keywords" content="university" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}
