import Head from 'next/head'
import Heads from './header'
import Foots from './foot'

export default function Home() {
  return (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
      <Heads></Heads>
      <div className="bg-black rounded-lg dark:bg-gray-800 w-full md:w-auto mx-10 p-10">
            <h1 className='m-10 text-2xl'>Welcome to the Kanban Blog!</h1>
            <p>Now here you can read <a href="\blog" className="hover:underline">blogs</a></p>
        </div>
      <Foots></Foots>
    </div>
  )
}