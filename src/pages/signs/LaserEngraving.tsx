import { useState } from "react";
import usePageMeta from "../../hooks/usePageMeta";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { Facts, Pager, Photos, SignActions, SignEyebrow } from "../../components/SignParts";
import { commercial } from "../../content/site";

const service = commercial.services[3];

const blanks = [
  { id: "wood", label: "Wood" },
  { id: "acrylic", label: "Acrylic" },
  { id: "glass", label: "Glass" },
  { id: "metal", label: "Metal" },
  { id: "leather", label: "Leather" },
];

export default function LaserEngraving() {
  usePageMeta({
    title: "Laser Engraving | Chatsworth, CA",
    description: "Laser engraving in Chatsworth, CA for awards, plaques, nameplates and custom products, on wood, acrylic, glass, metal and leather. 818-346-2142.",
  });
  useScrollAnimation();

  const [blank, setBlank] = useState(blanks[0]);
  const dark = blank.id === "leather";

  return (
    <div>
      <section className={`m-laser blank-${blank.id} ${dark ? "on-mat" : "on-paper"}`}>
        <div className="wrap pt-[var(--s13)] pb-[var(--s13)]">
          <SignEyebrow slug="laser-engraving" className="rise" />

          {/* Re-keyed on material so the beam makes a fresh pass. */}
          <div key={blank.id} className="relative mt-8">
            <h1 className="display display-1 engraved uppercase">Laser engraving in Chatsworth, CA</h1>
            <span className="beam" aria-hidden="true" />
          </div>

          <div className="split-8-5 items-end mt-[var(--s5)]">
            <div>
              <p className="lead measure opacity-85">{service.description}</p>
              <SignActions className="mt-8" />
            </div>
            <div role="group" aria-label="Material">
              <p className="label">Engrave it on</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {blanks.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    className="chip label"
                    aria-pressed={blank.id === b.id}
                    onClick={() => setBlank(b)}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Facts
        label="What we engrave"
        title="Cut in our own shop, turned around fast"
        body={<p>{service.body}</p>}
        facts={[
          { term: "Materials", detail: "Wood, acrylic, glass, metal and leather." },
          { term: "Pieces", detail: "Awards, plaques, nameplates and custom products." },
          { term: "Made for", detail: "Corporate awards, donor recognition walls, memorial plaques and personalized gifts." },
          { term: "Equipment", detail: "In-house laser equipment at our Chatsworth shop." },
        ]}
      />

      <Photos category="Engraving" no="02" />
      <Pager slug="laser-engraving" />
    </div>
  );
}
