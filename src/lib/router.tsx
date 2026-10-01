import type { AnchorHTMLAttributes, ReactNode } from "react";

/* Plain links. Astro serves static pages, so a Link is just an anchor. */
export function Link({ to, children, ...rest }: { to: string; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a href={to} {...rest}>{children}</a>;
}
