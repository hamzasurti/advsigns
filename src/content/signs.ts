/*
  One entry per sign type. Each has its own page under /signs/:slug, built to
  feel like the material it describes. Copy is drawn from the existing site;
  nothing here makes a claim the old pages did not.
*/
import type { Division } from "./site";
import { commercial, publicWorks } from "./site";

export interface Sign {
  slug: string;
  name: string;
  division: Division;
  /* null means "draw it": there is no honest photo for this sign type yet. */
  image: string | null;
  alt: string;
  blurb: string;
}

const [lobby, wraps, walls, laser] = commercial.services;
const [construction, building, ada] = publicWorks.services;

export const signs: Sign[] = [
  {
    slug: "construction",
    name: "Construction Signs",
    division: "Public works",
    image: "/assets/hero/construction-signage.jpg",
    alt: construction.alt,
    blurb: construction.description,
  },
  {
    slug: "building",
    name: "Building Signs",
    division: "Public works",
    image: "/assets/hero/building-signs.jpg",
    alt: building.alt,
    blurb: building.description,
  },
  {
    slug: "ada",
    name: "ADA Signage",
    division: "Public works",
    image: null,
    alt: ada.alt,
    blurb: ada.description,
  },
  {
    slug: "lobby",
    name: "Lobby Signs",
    division: "Commercial",
    image: lobby.image,
    alt: lobby.alt,
    blurb: lobby.description,
  },
  {
    slug: "vehicle-wraps",
    name: "Vehicle Wraps",
    division: "Commercial",
    image: wraps.image,
    alt: wraps.alt,
    blurb: wraps.description,
  },
  {
    slug: "wall-graphics",
    name: "Wall Graphics",
    division: "Commercial",
    image: walls.image,
    alt: walls.alt,
    blurb: walls.description,
  },
  {
    slug: "laser-engraving",
    name: "Laser Engraving",
    division: "Commercial",
    image: laser.image,
    alt: laser.alt,
    blurb: laser.description,
  },
];

export function signAt(slug: string) {
  const i = signs.findIndex((s) => s.slug === slug);
  return {
    no: String(i + 1).padStart(2, "0"),
    sign: signs[i],
    prev: signs[(i - 1 + signs.length) % signs.length],
    next: signs[(i + 1) % signs.length],
  };
}

/* Print letter to braille dot numbers (1-3 down the left, 4-6 down the right). */
export const brailleDots: Record<string, number[]> = {
  a: [1], b: [1, 2], c: [1, 4], d: [1, 4, 5], e: [1, 5], f: [1, 2, 4], g: [1, 2, 4, 5],
  h: [1, 2, 5], i: [2, 4], j: [2, 4, 5], k: [1, 3], l: [1, 2, 3], m: [1, 3, 4],
  n: [1, 3, 4, 5], o: [1, 3, 5], p: [1, 2, 3, 4], q: [1, 2, 3, 4, 5], r: [1, 2, 3, 5],
  s: [2, 3, 4], t: [2, 3, 4, 5], u: [1, 3, 6], v: [1, 2, 3, 6], w: [2, 4, 5, 6],
  x: [1, 3, 4, 6], y: [1, 3, 4, 5, 6], z: [1, 3, 5, 6],
  "#": [3, 4, 5, 6],
};

/*
  Braille digits reuse the cells for a-j after a number sign.
  Only spell words here that have no Grade 2 contractions ("sign", "signage",
  "exit"), so the cells shown are correct as contracted braille too.
*/
const digitLetters = "jabcdefghi";

export interface BrailleCell {
  print: string;
  name: string;
  dots: number[];
}

export function brailleCells(text: string): BrailleCell[] {
  const cells: BrailleCell[] = [];
  let inNumber = false;
  for (const ch of text.toLowerCase()) {
    if (/[0-9]/.test(ch)) {
      if (!inNumber) cells.push({ print: "#", name: "number sign", dots: brailleDots["#"] });
      inNumber = true;
      cells.push({ print: ch, name: ch, dots: brailleDots[digitLetters[Number(ch)]] });
    } else if (brailleDots[ch]) {
      inNumber = false;
      cells.push({ print: ch, name: ch, dots: brailleDots[ch] });
    } else {
      inNumber = false;
      cells.push({ print: " ", name: "space", dots: [] });
    }
  }
  return cells;
}
