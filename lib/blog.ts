import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
  vertical: string;
  readTime: string;
};

function parseFrontmatter(raw: string): { meta: Record<string, string | string[]>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: raw };

  const meta: Record<string, string | string[]> = {};
  for (const line of match[1].split("\n")) {
    const [key, ...rest] = line.split(": ");
    if (!key) continue;
    const value = rest.join(": ").trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      meta[key.trim()] = value.slice(1, -1).split(",").map((s) => s.trim().replace(/^"|"$/g, ""));
    } else {
      meta[key.trim()] = value.replace(/^"|"$/g, "");
    }
  }
  return { meta, content: match[2] };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    const { meta } = parseFrontmatter(raw);
    return {
      title: (meta.title as string) || "",
      description: (meta.description as string) || "",
      date: (meta.date as string) || "",
      slug: file.replace(".mdx", ""),
      tags: (meta.tags as string[]) || [],
      vertical: (meta.vertical as string) || "",
      readTime: (meta.readTime as string) || "5 min",
    };
  });
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { meta, content } = parseFrontmatter(raw);
  return {
    meta: {
      title: (meta.title as string) || "",
      description: (meta.description as string) || "",
      date: (meta.date as string) || "",
      slug,
      tags: (meta.tags as string[]) || [],
      vertical: (meta.vertical as string) || "",
      readTime: (meta.readTime as string) || "5 min",
    },
    content,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}
