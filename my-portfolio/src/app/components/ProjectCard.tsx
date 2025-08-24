import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: string;
  tags?: ReadonlyArray<string>; // ← เดิมเป็น string[]
  href?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  tags = [],
  href,
}: Props) {
  return (
    <article className="card overflow-hidden group">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-5">
        <header className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold">{title}</h3>
          {href && (
            <Link
              className="text-sm link-underline"
              href={href}
              target="_blank"
              rel="noopener noreferrer">
              Visit
            </Link>
          )}
        </header>
        <p className="mt-2 text-sm text-[var(--muted)]">{description}</p>
        {tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
