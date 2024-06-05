import Heads from "../header";
import Foots from "../foot";
import Head from "next/head";

const AboutPage = () => {
    return (
      <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Heads>
        </Heads>
        <div className="bg-black rounded-lg dark:bg-gray-800 md:flex w-full md:w-auto mx-10 p-10 md:items-center">
            <h1>
              Kanban Blog!
              There you can read another's blogs and etc.

              This website is powered by Brotherhood of Internet Stores and <span> </span>
              <a href="/lol/Okoshko/Production" className="hover:underline">Okoshko Production</a>.
            </h1>
        </div>
        <Foots></Foots>
      </div>
    )
  }
  
export default AboutPage;