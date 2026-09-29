"use client";

import Image from "next/image";
import { useState } from "react";
import type { Video } from "@/data/types";

/** Mostra só a miniatura e carrega o player do YouTube ao clicar. */
export function YouTube({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-stone-900">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 size-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 size-full cursor-pointer"
            aria-label={`Assistir: ${video.title}`}
          >
            <Image
              src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt=""
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-cover opacity-90 transition group-hover:opacity-100"
            />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid size-14 place-items-center rounded-full bg-red-600 shadow-lg transition group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="ml-1 size-6 fill-white" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-2">
        <a
          href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium leading-snug text-pretty hover:underline hover:underline-offset-4"
        >
          {video.title}
        </a>
        <p className="text-xs text-muted">{video.channel}</p>
      </figcaption>
    </figure>
  );
}
