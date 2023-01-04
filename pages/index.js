import Head from 'next/head'
import Alumni from '../components/sections/Alumni'
import Degree from '../components/sections/Degree'
import Discover from '../components/sections/Discover'
import Giving from '../components/sections/Giving'
import Hero from '../components/sections/Hero'
import More from '../components/sections/More'
import News from '../components/sections/News'
import President from '../components/sections/President'
import Schools from '../components/sections/Schools'
import Statistics from '../components/sections/Statistics'
import Footer from '../components/sections/Footer'

export default function Home() {
  return (
    <div className="font-body text-secondary-200">
      <Head>
        <title>The Entrepreneurial University - TUM</title>
        <meta name="keywords" content="university" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <News />
      <Discover />
      <Degree />
      <President />
      <Statistics />
      <Schools />
      <Alumni />
      <More /> 
      <Giving />
      <Footer />
    </div>
  )
}
