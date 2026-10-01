import { createContext, useContext, type ImgHTMLAttributes } from "react";
import type { PhotoMap } from "../lib/photos";

const PhotosContext = createContext<PhotoMap>({});
export const PhotosProvider = PhotosContext.Provider;
export interface ViewProps { photos?: PhotoMap }

/* A photo from the content layer. With the optimized map in context it gets
   WebP sources and a srcset; without one it falls back to the original file. */
export default function Photo({ src, sizes = "(min-width: 1024px) 60vw, 100vw", ...rest }: ImgHTMLAttributes<HTMLImageElement> & { src: string }) {
  const p = useContext(PhotosContext)[src];
  if (!p) return <img src={src} {...rest} />;
  return <img src={p.src} srcSet={p.srcSet} sizes={sizes} width={p.width} height={p.height} {...rest} />;
}
