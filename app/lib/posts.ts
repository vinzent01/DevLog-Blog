import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(),"app", "content");

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  img: string
};

export async function getPostBySlug(slug: string) {
  const filePath = path.join(POSTS_PATH, `${slug}.md`);
  const fileContent = await fs.readFile(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
  };
}


export async function getAllPosts() {
  const files = await fs.readdir(POSTS_PATH);

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".md", "");
      const { frontmatter, content } = await getPostBySlug(slug);
      const excerpt = content.slice(0,400);

      return { 
        slug, 
        ...frontmatter,
        content,
        excerpt
      };
    })
  );


  return posts;
}

export function removeFirstMarkdownTitle(content: string) {
  return content
    // remove frontmatter se existir
    .replace(/^---[\s\S]*?---\s*/m, "")
    // remove o primeiro título markdown
    .replace(/^\s*# .*(\r?\n)?/, "")
    .trim();
}