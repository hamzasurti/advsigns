import { Link } from "react-router-dom";
import usePageMeta from "../../hooks/usePageMeta";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import Arrow from "../../components/Arrow";
import { Facts, Pager, Photos, Reference, SignActions, SignEyebrow } from "../../components/SignParts";
import { publicWorks } from "../../content/site";

const [service] = publicWorks.services;

const onSite = [
  { shape: "diamond", title: "Site notices", body: "Signs that stay readable through weather and a full build schedule." },
  { shape: "board", title: "Project identification", body: "The project sign at the gate, naming the job and the team on it." },
  { shape: "banner", title: "Barricade graphics", body: "Full-color graphics for barricades and fencing on active sites." },
];

function Shape({ kind }: { kind: string }) {
  if (kind === "diamond")
    return (
      <div className="h-[120px] grid place-items-center">
        <div className="diamond"><span className="label">Notice</span></div>
      </div>
    );
  if (kind === "board")
    return (
      <div className="h-[120px] grid place-items-center">
        <div className="w-[150px]">
          <div className="bg-paper border-[3px] border-ink p-3">
            <span className="block h-2 w-2/3 bg-ink" />
            <span className="block h-1.5 w-full bg-ink/30 mt-2" />
            <span className="block h-1.5 w-5/6 bg-ink/30 mt-1.5" />
            <span className="block h-3 w-1/3 bg-hivis mt-3" />
          </div>
          <div className="flex justify-between px-6">
            <span className="block w-1.5 h-6 bg-ink" />
            <span className="block w-1.5 h-6 bg-ink" />
          </div>
        </div>
      </div>
    );
  return (
    <div className="h-[120px] grid place-items-center">
      <div className="relative w-[190px] h-[64px] bg-hivis border border-ink/30 grid place-items-center">
        {["left-1.5 top-1.5", "right-1.5 top-1.5", "left-1.5 bottom-1.5", "right-1.5 bottom-1.5"].map((pos) => (
          <span key={pos} className={`absolute ${pos} w-2 h-2 rounded-full bg-paper border border-ink`} />
        ))}
        <span className="label">Your project</span>
      </div>
    </div>
  );
}

export default function Construction() {
  usePageMeta({
    title: "Construction Signs | Los Angeles",
    description: "Construction site signs, project identification and barricade graphics for public works in Los Angeles. DBE/SBE certified. Call 818-346-2142.",
  });
  useScrollAnimation();

  return (
    <div>
      {/* Hero: a project sign posted on the fence */}
      <section className="m-site-hero on-mat">
        <div className="hazard" aria-hidden="true" />
        <div className="wrap pt-10 pb-[var(--s13)]">
          <div className="rail" aria-hidden="true" />
          <div className="jobsign mt-7 max-w-5xl on-paper">
            <div className="p-7 pt-12 sm:p-12 sm:pt-14">
              <SignEyebrow slug="construction" />
              <h1 className="display display-1 uppercase mt-6">Construction signs in Los Angeles</h1>
              <p className="lead measure mt-6 text-ink-soft">{service.description}</p>
              <dl className="grid sm:grid-cols-2 gap-x-10 mt-8 border-b-2 border-ink">
                {publicWorks.credentials.map((c) => (
                  <div key={c.label} className="grid grid-cols-[8.5rem_1fr] gap-4 border-t-2 border-ink py-3">
                    <dt className="label pt-0.5">{c.label}</dt>
                    <dd className="font-semibold">{c.detail}</dd>
                  </div>
                ))}
              </dl>
              <SignActions className="mt-8" />
            </div>
          </div>
        </div>
        <div className="hazard" aria-hidden="true" />
      </section>

      {/* What goes up on site */}
      <section className="on-paper bg-paper">
        <div className="wrap py-[var(--s15)]">
          <p className="label flex items-center gap-3">
            <span className="bg-hivis text-ink px-2 py-1">01</span>
            What goes up on site
          </p>
          <h2 className="display display-2 uppercase mt-5 max-w-[18ch]">Built for an active jobsite</h2>
          <ul className="grid md:grid-cols-3 mt-[var(--s5)] border-l-2 border-ink">
            {onSite.map((o, i) => (
              <li key={o.title} className={`border-r-2 border-y-2 border-ink p-6 animate-on-scroll delay-${i + 1}`}>
                <Shape kind={o.shape} />
                <h3 className="display display-4 uppercase mt-6">{o.title}</h3>
                <p className="mt-3 text-ink-soft">{o.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="hazard" aria-hidden="true" />

      <Facts
        no="02"
        tone="paper-2"
        label="Paperwork"
        title={publicWorks.wage.heading}
        body={<p>{publicWorks.wage.body}</p>}
        facts={[
          ...publicWorks.credentials.map((c) => ({ term: c.label, detail: c.detail })),
          { term: "Service area", detail: "Los Angeles, Ventura, Orange, San Bernardino, Riverside and southern Santa Barbara counties." },
        ]}
        note={
          <Link to="/public-works" className="link inline-flex items-center gap-2">
            Full public works qualifications <Arrow />
          </Link>
        }
      />

      <Photos ids={[4]} no="03" />
      <Reference id={2} no="04" />
      <Pager slug="construction" />
    </div>
  );
}
