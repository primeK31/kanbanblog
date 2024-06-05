import Heads from "@/app/header";
import Foots from "@/app/foot";
import Head from "next/head";
import { promises as fs } from 'fs';


const BlogDetail = async ({params: {slug}}) => {

    const file = await fs.readFile(process.cwd() + '/data/data.json', 'utf8');
    const data = JSON.parse(file);
    const encodedSlug = encodeURIComponent(slug);

    const blog = data.find(item => item.id === parseInt(encodedSlug, 10));
    console.log(slug)

    return(
        <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Heads />
            <div className="bg-black rounded-lg dark:bg-gray-800 w-full md:w-auto m-10 p-10">
                <h1 className="text-2xl">{blog.title}</h1>
                <p className="mt-5">{blog.description}</p>

                <p className="mt-5">{blog.author}</p>
                <p>{blog.date}</p>
            </div>
        <Foots />
      </div>
    )
  }
  
export default BlogDetail;
