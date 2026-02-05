import Markdown from "react-markdown";
import { getPostBySlug} from "@/app/lib/posts" 
import Image from "next/image";

export default async function PostPage({params} : {params : Promise<{slug : string}>}) {

  // If your file is app/blog/[slug]/page.js
  const { slug } = await params; // 'slug' matches the folder name in brackets
  const post = await getPostBySlug(slug);

  return (
    <main className="bg-white text-black dark:bg-black dark:text-white flex min-h-screen items-center justify-center p-4 ">
      <div className="max-w-4xl">

        {post.frontmatter.img ? 
          (
            <Image 
              alt="preview" 
              src={post.frontmatter.img} 
              className="w-4xl h-100 object-cover"
              width={1920} 
              height={1080}
          />
          )
          :
          (
            <div></div>
          )
        }

        <Markdown>
          {post.content}
        </Markdown>
        </div>
    </main>
  )
}
