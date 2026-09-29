import { useState } from "react";
import usePageMeta from "../../hooks/usePageMeta";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { Facts, Pager, Photos, SignActions, SignEyebrow } from "../../components/SignParts";
import { commercial } from "../../content/site";

const service = commercial.services[2];

const sizes = [
  { id: "full", label: "Floor to ceiling" },
  { id: "accent", label: "Accent wall" },
];

export default function WallGraphics() {
  usePageMeta({
    title: "Wall Graphics & Murals | Los Angeles",
    description: "Custom wall graphics, murals and environmental branding across Southern California, from accent walls to floor-to-ceiling installs. 818-346-2142.",
  });
  useScrollAnimation();

  const [size, setSize] = useState(sizes[0]);
  const accent = size.id === "accent";

  return (
    <div>
      <section className="m-wall">
        <div className="ceiling" aria-hidden="true" />
        <div
          className={`mural on-mat [container-type:inline-size] ${
            accent ? "mx-[8%] lg:mx-[20%] my-10" : "mx-0 my-0"
          }`}
        >
          <div className={accent ? "px-6 sm:px-10 py-12" : "wrap pt-[var(--s5)] pb-[var(--s13)]"}>
            <SignEyebrow slug="wall-graphics" className="text-on-mat" />
            <h1 className="mural-word mt-8 !text-[clamp(2.6rem,12cqw,11.5rem)]">Wall graphics and murals</h1>
            <p className="lead measure mt-10 text-on-mat">{service.description}</p>
            <SignActions className="mt-8" />
          </div>
          <span className="peel" aria-hidden="true" />
        </div>
        <div className="on-paper wrap py-5 flex flex-wrap items-center gap-3" role="group" aria-label="Install size">
          <span className="label mr-2">Install size</span>
          {sizes.map((s) => (
            <button
              key={s.id}
              type="button"
              className="chip label"
              aria-pressed={size.id === s.id}
              onClick={() => setSize(s)}
            >
              {s.label}
            </button>
          ))}
        </div>
        <div className="baseboard" aria-hidden="true" />
      </section>

      <Facts
        label="What we print on"
        title="From one accent wall to the whole room"
        body={<p>{service.body}</p>}
        facts={[
          { term: "Work", detail: "Custom wall graphics, murals and environmental branding." },
          { term: "Substrates", detail: "Adhesive vinyl, fabric and specialty substrates." },
          { term: "Spaces", detail: "Offices, retail stores, restaurants and public spaces." },
          { term: "Scale", detail: "From accent walls to full floor-to-ceiling installations." },
          { term: "Service", detail: "Design, production and installation across Southern California." },
        ]}
      />

      <Photos category="Wall Graphics" no="02" />
      <Pager slug="wall-graphics" />
    </div>
  );
}
