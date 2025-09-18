import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: string;
  tags?: ReadonlyArray<string>; // ← เดิมเป็น string[]
  href?: string;
  prototype?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  tags = [],
  href,
  prototype,
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
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
          <h3 className="text-base sm:text-lg font-semibold min-w-0">
            <span className="block truncate">{title}</span>
          </h3>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1 sm:mt-0">
            {href && (
              <Link
                className="text-xs sm:text-sm link-underline sm:no-underline sm:rounded-lg sm:px-3 sm:py-1.5 sm:border sm:border-white/15 sm:hover:bg-white/5 transition"
                href={href}
                target="_blank"
                rel="noopener noreferrer">
                Visit
              </Link>
            )}

            {prototype && (
              <Link
                className="text-xs sm:text-sm link-underline sm:no-underline sm:rounded-lg sm:px-3 sm:py-1.5 sm:border sm:border-white/15 sm:hover:bg-white/5 transition"
                href={prototype}
                target="_blank"
                rel="noopener noreferrer">
                Prototype
              </Link>
            )}
          </div>
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
