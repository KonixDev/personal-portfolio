import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { FooterReveal } from "../../components/footer-reveal";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      title: `${post.meta.title} | Martín Coll`,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
      tags: post.meta.tags,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const verticalLinks: Record<string, { label: string; href: string }> = {
    "apps-mobile": { label: "Apps Mobile", href: "/apps-mobile" },
    "desarrollo-web": { label: "Desarrollo Web", href: "/desarrollo-web" },
    ciberseguridad: { label: "Ciberseguridad", href: "/ciberseguridad" },
    "sistemas-backend": { label: "Sistemas Backend", href: "/sistemas-backend" },
    "android-tv": { label: "Android TV", href: "/android-tv" },
    "seo-geo": { label: "SEO & GEO", href: "/seo-geo" },
    "publicacion-stores": { label: "Publicación en Stores", href: "/publicacion-stores" },
  };
  const vertical = verticalLinks[post.meta.vertical];

  return (
    <FooterReveal
      main={
        <>
          <Header />
          <article className="mx-auto max-w-[720px] px-5 pt-[120px] pb-16 md:px-6 md:pt-[160px] md:pb-24">
            <div className="mb-8">
              <Link
                href="/blog"
                className="text-[14px] font-medium text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-text)]"
              >
                ← Blog
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[14px] text-[var(--color-text-tertiary)]">
                {new Date(post.meta.date).toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" })}
              </span>
              <span className="text-[14px] text-[var(--color-text-tertiary)]">·</span>
              <span className="text-[14px] text-[var(--color-text-tertiary)]">{post.meta.readTime}</span>
            </div>

            <h1 className="mt-4 text-[clamp(32px,4vw,48px)] font-[700] leading-[1.1] tracking-[-0.03em]">
              {post.meta.title}
            </h1>

            <p className="text-body mt-4">{post.meta.description}</p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {post.meta.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[var(--color-bg-secondary)] px-3 py-1 text-[12px] font-medium text-[var(--color-text-secondary)]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="divider mt-10 mb-10" />

            <div className="prose-custom">
              <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
            </div>

            {vertical && (
              <div className="mt-16 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 md:p-8">
                <p className="text-[14px] text-[var(--color-text-secondary)]">
                  ¿Te interesa este servicio?
                </p>
                <Link
                  href={vertical.href}
                  className="mt-2 inline-flex text-[17px] font-semibold text-[var(--color-text)] transition-colors hover:text-[var(--color-text-secondary)]"
                >
                  Ver {vertical.label} →
                </Link>
              </div>
            )}
          </article>
        </>
      }
      footer={<Footer />}
    />
  );
}
