import { useEffect, useState } from "react";
import { PhotosProvider, type ViewProps } from "../../components/Photo";
import type { PageMeta } from "../../lib/meta";
import Truck from "../../components/Truck";
import { Facts, Pager, Photos, SignActions, SignEyebrow } from "../../components/SignParts";
import { commercial } from "../../content/site";

const service = commercial.services[1];

const options = [
  { id: "full", label: "Full wrap", coverage: 1, trucks: 1 },
  { id: "partial", label: "Partial wrap", coverage: 0.52, trucks: 1 },
  { id: "fleet", label: "Fleet graphics", coverage: 1, trucks: 3 },
];

export const meta: PageMeta = {
    title: "Vehicle Wraps | San Fernando Valley",
    description: "Full wraps, partial wraps, lettering and fleet graphics in the San Fernando Valley, for cars, vans, trucks and trailers. Call 818-346-2142.",
};

function VehicleWrapsView() {

  const [choice, setChoice] = useState(options[0]);
  /* Start bare, then lay the vinyl on once the page has painted. */
  const [applied, setApplied] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setApplied(true));
    return () => cancelAnimationFrame(id);
  }, []);
  const coverage = applied ? choice.coverage : 0;

  return (
    <div>
      <section className="m-road on-paper">
        <div className="wrap pt-[var(--s13)]">
          <SignEyebrow slug="vehicle-wraps" className="rise" />
          <h1 className="display display-1 rise rise-1 mt-6 italic">Vehicle wraps in the San Fernando Valley</h1>

          <div className="split-5-8 items-end mt-[var(--s5)]">
            <div className="pb-[var(--s5)]">
              <p className="lead rise rise-2 text-ink-soft">{service.description}</p>
              <div className="rise rise-3 mt-8 flex flex-wrap gap-2" role="group" aria-label="Wrap coverage">
                {options.map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    className="chip label"
                    aria-pressed={choice.id === o.id}
                    onClick={() => setChoice(o)}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
              <SignActions className="rise rise-3 mt-8" />
            </div>

            <div className={`grid items-end gap-4 ${choice.trucks === 3 ? "grid-cols-3" : "grid-cols-1"}`}>
              {Array.from({ length: choice.trucks }, (_, i) => (
                <Truck key={`${choice.trucks}-${i}`} coverage={coverage} className="-mb-[3px]" />
              ))}
            </div>
          </div>
        </div>
        <div className="road" aria-hidden="true" />
      </section>

      <Facts
        label="How we wrap"
        title="Every vehicle, a mobile billboard"
        body={<p>{service.body}</p>}
        facts={[
          { term: "Coverage", detail: "Full wraps, partial wraps, vinyl lettering and vehicle magnets." },
          { term: "Vehicles", detail: "Cars, vans, trucks and trailers." },
          { term: "Where", detail: "Designed and printed in our Chatsworth shop." },
          { term: "Fleets", detail: "One vehicle or a matching set across a fleet." },
        ]}
      />

      <Photos category="Vehicle Wraps" no="02" />
      <Pager slug="vehicle-wraps" />
    </div>
  );
}

export default function VehicleWraps({ photos = {} }: ViewProps) {
  return (
    <PhotosProvider value={photos}>
      <VehicleWrapsView />
    </PhotosProvider>
  );
}
