import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import usePageMeta from "../../hooks/usePageMeta";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { Facts, Pager, Photos, SignActions, SignEyebrow } from "../../components/SignParts";
import { commercial } from "../../content/site";

const service = commercial.services[0];

const mounts = [
  { id: "standoff", label: "Pin-mounted standoff", depth: 1 },
  { id: "flush", label: "Flush-mounted", depth: 0.12 },
];

const materials = [
  { name: "Brushed aluminum", cls: "swatch-aluminum" },
  { name: "Acrylic", cls: "swatch-acrylic" },
  { name: "Painted foam", cls: "swatch-pvc" },
  { name: "Mixed media", cls: "swatch-mixed" },
];

export default function Lobby() {
  usePageMeta({
    title: "Lobby Signs | Los Angeles",
    description: "Dimensional lobby signs in Los Angeles: aluminum, acrylic and foam letters cut on our CNC router. Designed and installed. 818-346-2142.",
  });
  useScrollAnimation();

  const wall = useRef<HTMLElement>(null);
  const [mount, setMount] = useState(mounts[0]);

  /* The light follows the pointer, so the letters' shadows shift like real standoffs. */
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = wall.current;
    if (!el || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    el.style.setProperty("--py", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };

  return (
    <div>
      <section
        ref={wall}
        onPointerMove={onMove}
        className="m-lobby on-mat"
        style={{ "--depth": mount.depth } as CSSProperties}
      >
        <div className="wrap pt-[var(--s13)] pb-[var(--s13)]">
          <SignEyebrow slug="lobby" className="rise text-on-mat" />
          <h1 className="display display-1 letters rise rise-1 mt-8">Lobby signs in Los Angeles</h1>
          <div className="rise rise-2 mt-10 flex flex-wrap items-center gap-3" role="group" aria-label="Mounting style">
            <span className="label text-on-mat mr-2">Mounting</span>
            {mounts.map((m) => (
              <button
                key={m.id}
                type="button"
                className="chip label"
                aria-pressed={mount.id === m.id}
                onClick={() => setMount(m)}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
        <div className="desk on-paper">
          <div className="wrap py-8 split-8-5 items-center">
            <p className="lead measure">{service.description}</p>
            <SignActions className="lg:justify-end" />
          </div>
        </div>
      </section>

      <section className="on-paper bg-paper">
        <div className="wrap py-[var(--s15)]">
          <div className="split-5-8 items-start">
            <div className="animate-on-scroll">
              <p className="label flex items-center gap-3">
                <span className="inline-block w-8 h-[2px] bg-current" aria-hidden="true" />
              Materials
              </p>
              <h2 className="display display-3 mt-5">First impressions start in the lobby</h2>
              <p className="mt-5 text-ink-soft">{service.body}</p>
            </div>
            <ul className="grid grid-cols-2 gap-4 animate-on-scroll delay-1">
              {materials.map((m) => (
                <li key={m.name} className={`swatch ${m.cls}`}>
                  <span className="display display-4">{m.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Facts
        no="02"
        tone="paper-2"
        label="Scope"
        title="Designed, made and installed by one shop"
        facts={[
          { term: "Sign types", detail: "Dimensional letters, logos and reception signs." },
          { term: "Materials", detail: "Acrylic, brushed aluminum and foam, cut on our CNC router and painted." },
          { term: "Mounting", detail: "Straight on the wall or on a backing panel." },
          { term: "Area", detail: "Los Angeles and the San Fernando Valley." },
        ]}
      />

      <Photos category="Lobby Signs" no="03" />
      <Pager slug="lobby" />
    </div>
  );
}
