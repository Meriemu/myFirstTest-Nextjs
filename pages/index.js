import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className="title">
          Learn <a href="https://nextjs.org">Next.js!</a> < br/>
          Go to <Link href="/yoSekai">About</Link> page
        </h1>
    </div>
  )
}
