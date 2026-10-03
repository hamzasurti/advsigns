import { signAt } from "../content/signs";

/* Service JSON-LD and the social image for one sign page, from the shared sign list. */
export function signStructuredData(slug: string) {
  const { sign } = signAt(slug);
  return [
    {
      id: `service-${slug}`,
      data: {
        "@type": "Service",
        name: sign.name,
        description: sign.blurb,
        url: `https://advsigns.net/signs/${slug}`,
        serviceType: sign.name,
        provider: { "@id": "https://advsigns.net/#business" },
        areaServed: { "@type": "AdministrativeArea", name: "Los Angeles County, CA" },
      },
    },
  ];
}

export const signOgImage = (slug: string) => `https://advsigns.net/assets/og/${slug}.jpg`;
