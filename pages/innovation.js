import Head from 'next/head'

export default function Home() {
  return (
    <div className="font-body text-secondary-200">
      <Head>
        <title>The Entrepreneurial University - TUM | Innovation</title>
        <meta name="keywords" content="university" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="flex items-center text-3xl h-[50vh] font-bold uppercase text-primary-400 justify-center">Innovation Page</h1>
       
      </div>
    </div>
  )
}