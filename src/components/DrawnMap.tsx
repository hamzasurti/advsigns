import { useEffect, useMemo, useRef } from "react";
import { installCities } from "../content/site";

/*
  Greater Los Angeles, drawn. Positions are real longitude and latitude
  projected flat; lines are smoothed and given a slight wobble so the map
  reads as drawn by hand, not plotted. Freeway geometry is from memory and
  simplified: it is a drawing, not a road atlas.
*/

const LON0 = -118.77;
const LAT1 = 34.43;
const K = 1108;
const COS = Math.cos((34.15 * Math.PI) / 180);
const W = 1000;
const H = 660;

type Pt = [number, number];
const P = (lon: number, lat: number): Pt => [(lon - LON0) * COS * K, (LAT1 - lat) * K];
const f = (n: number) => n.toFixed(1);

const freeways: Record<string, Pt[]> = {
  "101": [[-118.77,34.146],[-118.700,34.147],[-118.660,34.153],[-118.638,34.158],[-118.605,34.170],[-118.571,34.172],[-118.536,34.171],[-118.501,34.163],[-118.469,34.159],[-118.431,34.155],[-118.396,34.152],[-118.376,34.154],[-118.363,34.139],[-118.340,34.118],[-118.325,34.100],[-118.300,34.085],[-118.280,34.075],[-118.260,34.062],[-118.245,34.058],[-118.235,34.050]],
  "134": [[-118.376,34.154],[-118.345,34.153],[-118.309,34.155],[-118.280,34.155],[-118.255,34.156],[-118.228,34.149],[-118.185,34.146],[-118.155,34.150]],
  "405": [[-118.474,34.297],[-118.470,34.288],[-118.468,34.272],[-118.472,34.258],[-118.472,34.236],[-118.473,34.222],[-118.473,34.205],[-118.472,34.187],[-118.469,34.159],[-118.472,34.128],[-118.474,34.105],[-118.478,34.085],[-118.462,34.062],[-118.443,34.042],[-118.430,34.020],[-118.400,33.990],[-118.372,33.960],[-118.362,33.940],[-118.352,33.900],[-118.345,33.860]],
  "118": [[-118.77,34.283],[-118.700,34.279],[-118.660,34.274],[-118.635,34.271],[-118.605,34.271],[-118.571,34.273],[-118.536,34.276],[-118.501,34.275],[-118.468,34.272],[-118.437,34.277],[-118.396,34.283]],
  "5": [[-118.575,34.43],[-118.545,34.400],[-118.525,34.370],[-118.515,34.352],[-118.505,34.337],[-118.487,34.316],[-118.474,34.297],[-118.437,34.277],[-118.415,34.255],[-118.398,34.240],[-118.372,34.228],[-118.349,34.215],[-118.335,34.203],[-118.307,34.182],[-118.280,34.155],[-118.255,34.130],[-118.235,34.100],[-118.225,34.075],[-118.215,34.050],[-118.190,34.020],[-118.160,33.990],[-118.120,33.940],[-118.090,33.905],[-118.060,33.860]],
  "170": [[-118.376,34.154],[-118.385,34.172],[-118.401,34.190],[-118.404,34.215],[-118.398,34.240]],
  "210": [[-118.487,34.316],[-118.450,34.308],[-118.410,34.291],[-118.396,34.283],[-118.360,34.272],[-118.310,34.262],[-118.270,34.240],[-118.240,34.225],[-118.205,34.205],[-118.175,34.178],[-118.155,34.150],[-118.120,34.142],[-118.060,34.140],[-118.000,34.140],[-117.940,34.132],[-117.860,34.122],[-117.790,34.110],[-117.700,34.100]],
  "14": [[-118.500,34.340],[-118.475,34.365],[-118.450,34.395],[-118.430,34.43]],
  "2": [[-118.245,34.156],[-118.246,34.125],[-118.250,34.095],[-118.260,34.080]],
  "10": [[-118.500,34.030],[-118.440,34.035],[-118.400,34.036],[-118.350,34.036],[-118.300,34.037],[-118.270,34.040],[-118.250,34.043],[-118.220,34.050],[-118.170,34.062],[-118.130,34.070],[-118.070,34.070],[-118.030,34.070],[-117.940,34.070],[-117.850,34.072],[-117.780,34.072],[-117.700,34.070]],
  "110": [[-118.150,34.150],[-118.175,34.125],[-118.210,34.095],[-118.240,34.065],[-118.265,34.035],[-118.278,33.990],[-118.282,33.930],[-118.285,33.870]],
  "60": [[-118.215,34.050],[-118.170,34.032],[-118.110,34.030],[-118.030,34.032],[-117.950,34.030],[-117.850,34.036],[-117.780,34.040],[-117.700,34.030]],
  "605": [[-118.105,34.150],[-118.090,34.110],[-118.065,34.075],[-118.062,34.030],[-118.068,33.975],[-118.085,33.925],[-118.100,33.870]],
  "710": [[-118.170,34.090],[-118.170,34.030],[-118.170,33.975],[-118.185,33.925],[-118.200,33.870]],
  "105": [[-118.400,33.930],[-118.350,33.930],[-118.280,33.930],[-118.200,33.920],[-118.120,33.912],[-118.080,33.910]],
};

const shields: Record<string, Pt> = {
  "101": [-118.72, 34.147], "134": [-118.215, 34.148], "405": [-118.478, 34.075], "118": [-118.555, 34.2745],
  "5": [-118.360, 34.2215], "170": [-118.402, 34.183], "210": [-118.335, 34.2675], "14": [-118.44, 34.412],
  "10": [-118.375, 34.036], "110": [-118.283, 33.90], "60": [-117.985, 34.031], "605": [-118.079, 33.945],
  "710": [-118.174, 33.965], "105": [-118.245, 33.928], "5 ": [-118.145, 33.972], "210 ": [-117.905, 34.127], "405 ": [-118.36, 33.925],
};

const streets: Pt[][] = [
  [[-118.605, 34.271], [-118.605, 34.170]], /* Topanga Canyon Blvd */
  [[-118.640, 34.2355], [-118.472, 34.2355]], /* Nordhoff St */
];

const coast: Pt[] = [[-118.77,34.030],[-118.700,34.033],[-118.640,34.036],[-118.590,34.037],[-118.550,34.038],[-118.520,34.026],[-118.500,34.010],[-118.478,33.985],[-118.462,33.965],[-118.448,33.950],[-118.440,33.935],[-118.425,33.910],[-118.412,33.880],[-118.402,33.850]];

const ranges: { name: string; at: Pt; pts: Pt[] }[] = [
  { name: "Santa Susana Mountains", at: [-118.640, 34.336], pts: [[-118.77,34.326],[-118.690,34.318],[-118.630,34.312],[-118.570,34.316],[-118.525,34.326]] },
  { name: "Simi Hills", at: [-118.712, 34.176], pts: [[-118.705,34.250],[-118.680,34.222],[-118.668,34.190]] },
  { name: "Santa Monica Mountains", at: [-118.560, 34.098], pts: [[-118.77,34.118],[-118.670,34.121],[-118.590,34.125],[-118.510,34.126],[-118.440,34.129],[-118.385,34.128],[-118.340,34.115],[-118.305,34.105]] },
  { name: "Verdugo Mountains", at: [-118.300, 34.236], pts: [[-118.335,34.238],[-118.300,34.218],[-118.266,34.197]] },
  { name: "San Gabriel Mountains", at: [-118.120, 34.262], pts: [[-118.450,34.340],[-118.385,34.318],[-118.325,34.296],[-118.265,34.272],[-118.205,34.246],[-118.150,34.226],[-118.080,34.205],[-118.000,34.185],[-117.900,34.175],[-117.800,34.175],[-117.700,34.190]] },
  { name: "Puente Hills", at: [-118.000, 33.985], pts: [[-118.085,33.995],[-118.030,33.985],[-117.960,33.990],[-117.900,34.000]] },
  { name: "", at: [0, 0], pts: [[-118.385,34.012],[-118.355,34.005]] }, /* Baldwin Hills */
];

interface Place {
  name: string; lon: number; lat: number;
  sub?: string; dx: number; dy: number; anchor: "start" | "middle" | "end"; shop?: boolean;
}

/* Label offsets, tuned by hand so nothing overlaps. */
const labels: Record<string, Partial<Place>> = {
  "Chatsworth": { shop: true, name: "Our shop", sub: "Chatsworth", lon: -118.597, lat: 34.2355, dx: -12, dy: 4, anchor: "end" },
  "Northridge": { dx: 10, dy: 4 },
  "Canoga Park": { dx: -10, dy: 4, anchor: "end" },
  "Woodland Hills": { dx: 0, dy: 17, anchor: "middle" },
  "Tarzana": { dx: 10, dy: 4 },
  "Encino": { dx: 8, dy: 15 },
  "Van Nuys": { dx: 0, dy: -10, anchor: "middle" },
  "North Hollywood": { dx: 0, dy: 17, anchor: "middle" },
  "Burbank": { dx: 9, dy: 16 },
  "Glendale": { dx: 6, dy: 18, sub: "Courthouse letters" },
  "Pasadena": { dx: 0, dy: -10, anchor: "middle" },
  "Monrovia": { dx: 10, dy: 4 },
  "Hollywood": { dx: -10, dy: 4, anchor: "end" },
  "Beverly Hills": { dx: 0, dy: 17, anchor: "middle" },
  "Downtown Los Angeles": { dx: 10, dy: 4 },
  "East Los Angeles": { dx: 0, dy: 17, anchor: "middle" },
  "Alhambra": { dx: 10, dy: 4 },
  "El Monte": { dx: 0, dy: -10, anchor: "middle" },
  "West Covina": { dx: 0, dy: 17, anchor: "middle" },
  "Pomona": { dx: -10, dy: 4, anchor: "end" },
  "Inglewood": { dx: 10, dy: 4 },
  "Whittier": { dx: 10, dy: 4 },
  "Downey": { dx: -10, dy: 4, anchor: "end" },
  "Bellflower": { dx: 10, dy: 4 },
  "Santa Clarita": { dx: 10, dy: 4 },
};

const extra: Place[] = [
  { name: "Hollywood Burbank Airport", sub: "Terminal signage", lon: -118.3587, lat: 34.2007, dx: 10, dy: -4, anchor: "start" },
];

const places: Place[] = [
  ...installCities
    .filter((c) => c.name !== "Lancaster")
    .map((c) => ({ ...c, dx: 10, dy: 4, anchor: "start" as const, ...labels[c.name] })),
  ...extra,
];

/* Lancaster sits 45 miles north, off the top of the drawing, up the 14. */
const lancaster = installCities.find((c) => c.name === "Lancaster");

function rng(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* Catmull-Rom through the points, written as cubic Beziers. */
function smooth(pts: Pt[]) {
  const p = pts.map((q) => P(q[0], q[1]));
  let d = `M${f(p[0][0])} ${f(p[0][1])}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] || p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] || p2;
    d += `C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)},${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)},${f(p2[0])} ${f(p2[1])}`;
  }
  return d;
}

/* Hills: short pen strokes falling away from each ridge line. */
function hachures() {
  const r = rng(11);
  const out: string[] = [];
  ranges.forEach((range) => {
    const p = range.pts.map((q) => P(q[0], q[1]));
    for (let i = 0; i < p.length - 1; i++) {
      const a = p[i], b = p[i + 1], dx = b[0] - a[0], dy = b[1] - a[1];
      const len = Math.hypot(dx, dy), nx = -dy / len, ny = dx / len;
      for (let s = 0; s < len; s += 6.5) {
        const t = (s + r() * 1.5) / len, x = a[0] + dx * t, y = a[1] + dy * t;
        for (const side of [1, -1]) {
          if (r() < 0.1) continue;
          const l = 8 + r() * 6, lean = (r() - 0.5) * 0.16, off = 2;
          out.push(`M${f(x + nx * off * side)} ${f(y + ny * off * side)}l${f((nx * side + (lean * dx) / len) * l)} ${f((ny * side + (lean * dy) / len) * l)}`);
        }
      }
    }
  });
  return out.join("");
}

const HALO = { paintOrder: "stroke" as const, stroke: "var(--color-paper)", strokeWidth: 5, strokeLinejoin: "round" as const };

export default function DrawnMap({ className = "" }: { className?: string }) {
  const svg = useRef<SVGSVGElement>(null);
  const hills = useMemo(() => hachures(), []);
  const coastD = useMemo(() => smooth(coast), []);

  /* Freeways draw themselves on, once, unless the visitor prefers still pages. */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    svg.current?.querySelectorAll<SVGPathElement>(".fwy").forEach((path, i) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = String(len);
      path.style.setProperty("--len", String(len));
      path.style.animation = `draw 1.6s cubic-bezier(.4,0,.2,1) ${(i * 0.1).toFixed(2)}s both`;
    });
  }, []);

  const bar = 0.0725 * K; /* 5 miles is about 0.0725 degrees of latitude */
  const bx = 40, by = H - 28;
  const l14 = P(-118.430, 34.43);

  return (
    <svg
      ref={svg}
      className={`map ${className}`}
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={`Drawn map of greater Los Angeles showing the shop in Chatsworth and the ${installCities.length} cities where Advanced Sign & Banner has installed signs, from Santa Clarita to Pomona and Bellflower, with Lancaster off the map to the north.`}
    >
      <defs>
        <filter id="hand" x="-2%" y="-2%" width="104%" height="104%">
          <feTurbulence type="fractalNoise" baseFrequency=".018" numOctaves="2" seed="4" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="3.2" />
        </filter>
      </defs>

      {/* Sea */}
      <g filter="url(#hand)">
        <path className="coast" d={coastD} />
        <path className="coast-2" d={coastD} />
      </g>
      <text className="range" x={f(P(-118.62, 33.93)[0])} y={f(P(-118.62, 33.93)[1])} textAnchor="middle">Pacific Ocean</text>

      {/* Hills */}
      <g filter="url(#hand)">
        <path className="hach" d={hills} />
      </g>
      {ranges.filter((r) => r.name).map((r) => {
        const at = P(r.at[0], r.at[1]);
        return <text key={r.name} className="range" x={f(at[0])} y={f(at[1])} textAnchor="middle">{r.name}</text>;
      })}

      {/* Streets, then freeways */}
      <g filter="url(#hand)">
        {streets.map((s, i) => <path key={i} className="street" d={smooth(s)} />)}
        {Object.entries(freeways).map(([id, pts]) => <path key={id} className="fwy" d={smooth(pts)} />)}
      </g>

      {/* Route numbers */}
      {Object.entries(shields).map(([id, at]) => {
        const p = P(at[0], at[1]), label = id.trim(), w = label.length > 2 ? 26 : label.length > 1 ? 22 : 18;
        return (
          <g key={id}>
            <rect x={f(p[0] - w / 2)} y={f(p[1] - 8)} width={w} height={16} rx={3} className="shield" />
            <text className="route" x={f(p[0])} y={f(p[1] + 3.6)}>{label}</text>
          </g>
        );
      })}

      {/* Lancaster, off the top */}
      {lancaster && (
        <g>
          <path d={`M${f(l14[0])} 30v-22M${f(l14[0] - 6)} 15l6-9 6 9`} className="fwy" style={{ strokeWidth: 1.4 }} />
          <text className="place" x={f(l14[0] + 12)} y={16} {...HALO}>Lancaster</text>
          <text className="job-sub" x={f(l14[0] + 12)} y={29} {...HALO}>45 miles north, up the 14</text>
        </g>
      )}

      {/* The shop and the cities */}
      {places.map((pl) => {
        const p = P(pl.lon, pl.lat);
        return (
          <g key={pl.name}>
            {pl.shop ? (
              <rect className="shop" x={f(p[0] - 6)} y={f(p[1] - 6)} width={12} height={12} />
            ) : (
              <>
                <circle className="pin-ring" cx={f(p[0])} cy={f(p[1])} r={6} />
                <circle className="pin" cx={f(p[0])} cy={f(p[1])} r={5} />
              </>
            )}
            <text className={pl.shop || pl.sub ? "job" : "place"} x={f(p[0] + pl.dx)} y={f(p[1] + pl.dy)} textAnchor={pl.anchor} {...HALO}>
              {pl.name}
            </text>
            {pl.sub && (
              <text className="job-sub" x={f(p[0] + pl.dx)} y={f(p[1] + pl.dy + 13)} textAnchor={pl.anchor} {...HALO}>
                {pl.sub}
              </text>
            )}
          </g>
        );
      })}

      {/* North arrow and a five mile bar */}
      <path d={`M${bx} ${by}h${f(bar)}M${bx} ${by - 5}v10M${f(bx + bar / 2)} ${by - 3}v6M${f(bx + bar)} ${by - 5}v10`} className="rule-line" />
      <text className="place" x={bx} y={by - 12}>5 miles</text>
      <path d={`M${W - 40} ${H - 40}v-38M${W - 47} ${H - 66}l7-13 7 13`} className="rule-line" />
      <text className="route" x={W - 40} y={H - 24}>N</text>
    </svg>
  );
}
