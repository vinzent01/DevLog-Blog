import { getAllPosts, removeFirstMarkdownTitle } from "../lib/posts"
import Link from "next/link";
import Image from "next/image";

export default async function ContentList(){
    const allPosts = await getAllPosts();

    return (
        <div className="space-y-10">
            <h2 className="text-2xl">Ultimos posts</h2>
            {allPosts.map( (p) => {
                return (
                <div key={p.slug} className="bg-zinc-200 dark:bg-zinc-900 flex-col space-y-4 p-6 rounded-sm  p-6 rounded-sm">
                    <Link href={"/posts/"+p.slug}>
                        {p.img ? (
                            <Image 
                                alt="preview" 
                                src={p.img} 
                                className="h-70 object-cover"
                                width={1920} 
                                height={1080}
                            />
                            ):
                            (<div></div>)
                        }

                        <h3 className="text-xl font-bold">{p.title}</h3>
                        <p>{removeFirstMarkdownTitle(p.excerpt)}</p>

                    </Link>
                </div>
                )
            })}

        </div>
    )

}