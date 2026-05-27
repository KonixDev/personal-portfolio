import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Guías de desarrollo, seguridad y tecnología",
  description:
    "Artículos sobre desarrollo mobile, web, backend, ciberseguridad, SEO y más. Guías prácticas para quienes quieren construir software de calidad.",
  openGraph: {
    title: "Blog | Martín Coll",
    description: "Guías prácticas de desarrollo, seguridad y tecnología.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <FooterReveal
      main={
        <>
          <Header />
          <section className="mx-auto max-w-[800px] px-5 pt-[120px] pb-16 md:px-6 md:pt-[180px] md:pb-24">
            <h1 className="text-showcase">Blog.</h1>
            <p className="text-body mt-4 max-w-[520px]">
              Guías prácticas sobre desarrollo, seguridad y tecnología.
            </p>

            <div className="mt-16 flex flex-col">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-2 border-b border-[var(--color-border)] py-7 transition-colors first:border-t"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[13px] text-[var(--color-text-tertiary)]">
                      {new Date(post.date).toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" })}
                    </span>
                    <span className="text-[13px] text-[var(--color-text-tertiary)]">·</span>
                    <span className="text-[13px] text-[var(--color-text-tertiary)]">{post.readTime}</span>
                  </div>
                  <h2 className="text-[22px] font-semibold tracking-tight text-[var(--color-text)] transition-colors group-hover:text-[var(--color-text-secondary)] md:text-[26px]">
                    {post.title}
                  </h2>
                  <p className="max-w-[600px] text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
                    {post.description}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[var(--color-bg-secondary)] px-3 py-1 text-[11px] font-medium text-[var(--color-text-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </>
      }
      footer={<Footer />}
    />
  );
}
