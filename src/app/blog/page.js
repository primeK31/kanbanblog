import Heads from "../header";
import Foots from "../foot";
import Head from "next/head";
import { promises as fs } from 'fs';


const BlogPage = async () => {

  const file = await fs.readFile(process.cwd() + '/data/data.json', 'utf8');
  const data = JSON.parse(file);

    return (
      <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Heads>
        </Heads>
          {data.map((blog, index) => (
            <a href={`/blog/${blog.id}`}>
              <div className="bg-black rounded-lg dark:bg-gray-800 w-full md:w-auto m-10 p-10">
                  <h1 className="text-2xl">{blog.title}</h1>
                  <p className="mt-5">{blog.description}</p>

                  <p className="mt-5">{blog.author}</p>
              </div>
            </a>
          ))}
        <Foots></Foots>
      </div>
    )
  }
  
export default BlogPage;