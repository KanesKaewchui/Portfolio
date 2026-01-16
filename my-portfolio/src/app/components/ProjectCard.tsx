import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  image: string;
  tags?: ReadonlyArray<string>;
  href?: string;
  Web?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  tags = [],
  href,
  Web,
}: Props) {
  const mainUrl = href ?? Web ?? "#";
  const isExternal = /^https?:\/\//i.test(mainUrl);
  const isSvg = image?.toLowerCase().endsWith(".svg");

  const extAttrs = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      {mainUrl && mainUrl !== "#" ? (
        <a href={mainUrl} {...extAttrs} aria-label={title}>
          <div className="relative w-full overflow-hidden rounded-t-lg aspect-[16/9]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={false}
            />
          </div>
        </a>
      ) : (
        <div className="relative w-full overflow-hidden rounded-t-lg aspect-[4/3]">
          <Image
            src={image}
            alt={title}
            fill
            className={isSvg ? "object-contain p-4" : "object-cover"}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={false}
          />
        </div>
      )}

      <div className="p-5">
        {mainUrl && mainUrl !== "#" ? (
          <a href={mainUrl} {...extAttrs}>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h3>
          </a>
        ) : (
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h3>
        )}

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {href && (
            <a
              href={href}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Web
            </a>
          )}

          {Web && (
            <a
              href={Web}
              {...(Web.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Phone
            </a>
          )}
        </div>

        {tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className="text-xs px-2 py-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300">
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
