import Markdown from "react-markdown";
import { getPostBySlug} from "@/app/lib/posts" 

export default async function PostPage({params} : {params : Promise<{slug : string}>}) {

  // If your file is app/blog/[slug]/page.js
  const { slug } = await params; // 'slug' matches the folder name in brackets

  let post = await getPostBySlug(slug);

  return (
    <main className="flex min-h-screen items-center justify-center ">
      <div className="max-w-4xl">
        <Markdown>
          {post.content}
        </Markdown>
        </div>
    </main>
  )
}
