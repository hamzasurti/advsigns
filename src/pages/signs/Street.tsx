import { Link } from "react-router-dom";
import usePageMeta from "../../hooks/usePageMeta";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import Arrow from "../../components/Arrow";
import StreetSign from "../../components/StreetSign";
import { Facts, Pager, Reference, SignActions, SignEyebrow } from "../../components/SignParts";
import { publicWorks } from "../../content/site";

const [service] = publicWorks.services;

const kinds = [
  { shape: "blade", title: "Street name signs", body: "Blades for city streets and private roads, lettered and mounted to the local standard." },
  { shape: "reg", title: "Regulatory and parking signs", body: "Speed, stop, no-parking and permit signs, made to the California MUTCD." },
  { shape: "panel", title: "Wayfinding and post-and-panel", body: "Directional signs, campus and lot signs, and project identification on posts." },
  { shape: "work", title: "Work-zone signs", body: "Temporary traffic control and site notices that stay readable through a full build." },
];

function Shape({ kind }: { kind: string }) {
  if (kind === "blade") return <div className="mini"><div className="mini-blade">Nordhoff St</div></div>;
  if (kind === "reg") return <div className="mini"><div className="mini-reg"><span>Speed</span><span>limit</span><b>35</b></div></div>;
  if (kind === "panel")
    return (
      <div className="mini">
        <div>
          <div className="mini-panel">
            <span className="block h-2 w-2/3 bg-ink" />
            <span className="block h-1.5 w-full bg-ink/30 mt-2" />
            <span className="block h-1.5 w-5/6 bg-ink/30 mt-1.5" />
            <span className="block h-3 w-1/3 bg-mark mt-3" />
          </div>
          <div className="mini-post"><span /><span /></div>
        </div>
      </div>
    );
  return <div className="mini"><div className="diamond"><span className="label">Work</span></div></div>;
}

export default function Street() {
  usePageMeta({
    title: "Street Signs | Los Angeles",
    description: "Street name signs, regulatory and parking signs, wayfinding and work-zone signs for public works in Los Angeles. SBE certified. Call 818-346-2142.",
  });
  useScrollAnimation();

  return (
    <div>
      {/* Hero: the shop's own blade, drawn to scale */}
      <section className="mat on-mat overflow-hidden">
        <div className="wrap pt-10 pb-[var(--s13)]">
          <div className="split-8-5 items-center">
            <div>
              <SignEyebrow slug="street" className="text-mark" />
              <h1 className="display display-1 mt-6">Street signage for Los Angeles</h1>
              <p className="lead measure mt-6 text-on-mat">{service.description}</p>
              <SignActions className="mt-8" />
            </div>
            <div className="street-figure max-w-[24rem] mx-auto w-full text-on-mat">
              <StreetSign />
              <p className="label mt-3 text-center opacity-70">Fig. 1 &nbsp; Blade and panel on one post, the City of Los Angeles way</p>
            </div>
          </div>
        </div>
      </section>

      {/* What goes up */}
      <section className="on-paper bg-paper">
        <div className="wrap py-[var(--s15)]">
          <p className="label flex items-center gap-3">
            <span className="inline-block w-8 h-[2px] bg-current" aria-hidden="true" />
            What we make
          </p>
          <h2 className="display display-2 mt-5 max-w-[18ch]">Four kinds of sign on a street</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 mt-[var(--s5)] border-l-2 border-ink">
            {kinds.map((o, i) => (
              <li key={o.title} className={`border-r-2 border-y-2 border-ink p-6 animate-on-scroll delay-${i + 1}`}>
                <Shape kind={o.shape} />
                <h3 className="display display-4 mt-6">{o.title}</h3>
                <p className="mt-3 text-ink-soft">{o.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Facts
        no="02"
        tone="paper-2"
        label="Paperwork"
        title={publicWorks.wage.heading}
        body={<p>{publicWorks.wage.body}</p>}
        facts={[
          ...publicWorks.credentials.map((c) => ({ term: c.label, detail: c.detail })),
          { term: "Service area", detail: "Los Angeles County, from Lancaster to Bellflower." },
        ]}
        note={
          <Link to="/public-works" className="link inline-flex items-center gap-2">
            Full public works qualifications <Arrow />
          </Link>
        }
      />

      <Reference id={2} no="03" />
      <Pager slug="street" />
    </div>
  );
}
