import { useState, type CSSProperties } from "react";
import usePageMeta from "../../hooks/usePageMeta";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { Facts, Pager, Photos, Reference, SignActions, SignEyebrow } from "../../components/SignParts";
import { publicWorks } from "../../content/site";

const service = publicWorks.services[1];
const SUNRISE = 6;
const SUNSET = 19;

function clock(hour: number) {
  const h = Math.floor(hour);
  const m = hour % 1 ? "30" : "00";
  const suffix = h >= 12 ? "pm" : "am";
  return `${((h + 11) % 12) + 1}:${m} ${suffix}`;
}

export default function Building() {
  usePageMeta({
    title: "Building Signs | Los Angeles",
    description: "Exterior and interior building signs in Los Angeles: identification letters, channel letters and illuminated signs. Call 818-346-2142.",
  });
  useScrollAnimation();

  /* The facade faces south: the sun crosses from the right of the page to the left. */
  const [hour, setHour] = useState(15);
  const night = hour >= SUNSET;
  const t = Math.min(1, Math.max(0, (hour - SUNRISE) / (SUNSET - SUNRISE)));
  const sx = Math.round(-Math.cos(Math.PI * t) * 22);
  const sy = Math.round(4 + Math.sin(Math.PI * t) * 16);

  return (
    <div>
      <section
        className={`m-facade ${night ? "is-night on-mat" : "on-paper"}`}
        style={{ "--sx": sx, "--sy": sy } as CSSProperties}
      >
        <div className="wrap pt-[var(--s13)] pb-[var(--s5)]">
          <SignEyebrow slug="building" className="rise" />
          <h1 className="display display-1 letters uppercase rise rise-1 mt-8 !leading-[1.02]">
            Building signs in Los Angeles
          </h1>
          <div className="split-8-5 items-end mt-[var(--s5)]">
            <div>
              <p className="lead measure rise rise-2 opacity-85">{service.description}</p>
              <SignActions className="rise rise-3 mt-8" />
            </div>
            <div className="rise rise-3">
              <label htmlFor="sun" className="label flex items-baseline justify-between gap-4">
                <span>Time of day</span>
                <span aria-hidden="true">{clock(hour)}{night ? " / lit" : ""}</span>
              </label>
              <input
                id="sun"
                type="range"
                className="dial mt-2"
                min={SUNRISE}
                max={22}
                step={0.5}
                value={hour}
                onChange={(e) => setHour(Number(e.target.value))}
                aria-valuetext={`${clock(hour)}${night ? ", sign illuminated" : ""}`}
              />
              <p className="text-sm opacity-75 mt-1">
                Drag to move the sun. After dark the letters light up.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t-4 border-current opacity-90 mt-[var(--s5)]" aria-hidden="true" />
      </section>

      <Facts
        label="What we make"
        title="Signs that belong to the building"
        body={
          <p>
            Exterior and interior signage, fabricated and installed by our own crews, and built to meet
            municipal codes and accessibility standards.
          </p>
        }
        facts={[
          { term: "Identification", detail: "Building names, addresses and department letters on the facade." },
          { term: "Channel letters", detail: "Channel letter and illuminated sign fabrication and installation." },
          { term: "Pylon signs", detail: "Routed aluminum pylon signs, lit from behind." },
          { term: "Compliance", detail: "Meets municipal codes and accessibility standards." },
        ]}
      />

      <Photos category="Building Signs" no="02" />
      <Reference id={3} no="03" />
      <Pager slug="building" />
    </div>
  );
}
