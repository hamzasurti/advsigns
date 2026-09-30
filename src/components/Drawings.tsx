import Truck from "./Truck";

/*
  Elevation drawings for the sign types that stand in for photos in the index
  positions. All share one frame (360 x 480, a ground line, hatching) with the
  ADA and street drawings, so the set reads as one sheet of shop drawings.
*/

const line = { stroke: "currentColor", strokeWidth: 1, fill: "none" } as const;
const display = { font: "800 1px var(--font-display)", fontStretch: "125%" } as const;

function Frame({ label, children, ground = 440 }: { label: string; children: React.ReactNode; ground?: number }) {
  return (
    <svg className="w-full h-full" viewBox="0 0 360 480" role="img" aria-label={label}>
      <path d={`M24 ${ground}h312`} {...line} strokeWidth={1.5} />
      {Array.from({ length: 20 }, (_, i) => (
        <path key={i} d={`M${32 + i * 16} ${ground}l-8 10`} {...line} opacity={0.5} />
      ))}
      {children}
    </svg>
  );
}

function Dim({ d, at, text, rotate = false }: { d: string; at: [number, number]; text: string; rotate?: boolean }) {
  return (
    <>
      <path d={d} {...line} opacity={0.7} />
      <text
        x={at[0]}
        y={at[1]}
        textAnchor="middle"
        fill="currentColor"
        className="label"
        style={{ fontSize: 10 }}
        transform={rotate ? `rotate(-90 ${at[0]} ${at[1]})` : undefined}
      >
        {text}
      </text>
    </>
  );
}

/* Channel letters on a parapet, with the return drawn as an offset. */
export function BuildingLetters() {
  return (
    <Frame label="Drawing of channel letters on a building parapet: 24 inch letters on a raceway, the return shown in section.">
      {/* Parapet band and the wall under it */}
      <rect x="24" y="120" width="312" height="110" fill="var(--color-paper)" opacity="0.14" />
      <path d="M24 120h312M24 230h312" {...line} opacity={0.6} />
      {Array.from({ length: 7 }, (_, i) => (
        <path key={i} d={`M24 ${262 + i * 26}h312`} {...line} opacity={0.18} />
      ))}
      {/* Raceway */}
      <rect x="52" y="200" width="256" height="8" fill="var(--color-paper)" opacity="0.5" />
      {/* Letters: return first, face on top */}
      <text x="180" y="196" textAnchor="middle" fill="var(--color-mark)" opacity="0.55" style={{ ...display, fontSize: 62 }}>
        SIGNS
      </text>
      <text x="176" y="192" textAnchor="middle" fill="var(--color-paper)" style={{ ...display, fontSize: 62 }}>
        SIGNS
      </text>
      <Dim d="M328 148v48M322 148h12M322 196h12" at={[344, 172]} text="24 in." rotate />
      <Dim d="M52 250h256M52 244v12M308 244v12" at={[180, 270]} text="18 ft. raceway" />
      {/* Section of one letter, bottom right */}
      <g transform="translate(228 300)">
        <rect width="60" height="90" fill="var(--color-paper)" opacity="0.9" />
        <rect x="8" y="8" width="44" height="74" fill="var(--color-mat)" />
        <rect x="8" y="8" width="44" height="6" fill="var(--color-mark)" />
        <text x="30" y="118" textAnchor="middle" fill="currentColor" className="label" style={{ fontSize: 9 }}>
          Section: face, return, LEDs
        </text>
      </g>
    </Frame>
  );
}

/* Dimensional letters on a reception wall, standing off it on pins. */
export function LobbySign() {
  return (
    <Frame label="Drawing of a lobby sign: dimensional letters and a logo mark on standoffs above a reception desk.">
      {/* Wall panel */}
      <rect x="48" y="70" width="264" height="230" fill="var(--color-paper)" opacity="0.1" />
      <path d="M48 70h264v230H48z" {...line} opacity={0.5} />
      {/* Mark and letters, with the pin shadow offset */}
      <rect x="92" y="126" width="56" height="56" fill="var(--color-mark)" opacity="0.5" transform="translate(3 4)" />
      <rect x="92" y="126" width="56" height="56" fill="var(--color-mark)" />
      <text x="166" y="168" fill="var(--color-paper)" opacity="0.45" transform="translate(3 4)" style={{ ...display, fontSize: 32 }}>
        LOBBY
      </text>
      <text x="166" y="168" fill="var(--color-paper)" style={{ ...display, fontSize: 32 }}>
        LOBBY
      </text>
      {/* Standoff pins */}
      {[
        [96, 130], [144, 130], [96, 178], [144, 178], [172, 140], [276, 140], [172, 168], [276, 168],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="var(--color-paper)" />
      ))}
      {/* Desk */}
      <rect x="24" y="360" width="312" height="10" fill="var(--color-paper)" opacity="0.8" />
      <path d="M40 370v70M320 370v70" {...line} />
      <Dim d="M92 216h186M92 210v12M278 210v12" at={[185, 236]} text="4 ft. 6 in." />
      <Dim d="M328 126v56M322 126h12M322 182h12" at={[344, 154]} text="12 in." rotate />
      <text x="92" y="330" fill="currentColor" className="label" style={{ fontSize: 9 }}>
        1/2 in. acrylic on 3/4 in. standoffs
      </text>
    </Frame>
  );
}

/* The box truck from the wraps page, three quarters wrapped. */
export function VehicleWrap() {
  return (
    <div className="w-full h-full grid place-items-center">
      <Truck coverage={0.75} className="max-h-full" />
    </div>
  );
}

/* A printed wall in a room: one full-height panel, a door for scale. */
export function WallGraphic() {
  return (
    <Frame label="Drawing of a wall graphic: a printed panel covering a wall from floor to ceiling, next to a door for scale.">
      {/* Ceiling and wall edge */}
      <path d="M24 72h312" {...line} opacity={0.6} />
      {/* Printed panel: three big shapes */}
      <clipPath id="wg-panel">
        <rect x="24" y="72" width="212" height="368" />
      </clipPath>
      <g clipPath="url(#wg-panel)">
        <rect x="24" y="72" width="212" height="368" fill="var(--color-paper)" opacity="0.12" />
        <circle cx="120" cy="190" r="70" fill="var(--color-mark)" />
        <path d="M24 440L140 280l96 160z" fill="var(--color-paper)" opacity="0.85" />
        <path d="M24 440l70-96 70 96z" fill="var(--color-paper)" opacity="0.5" />
      </g>
      <path d="M236 72v368" {...line} />
      {/* Door */}
      <rect x="262" y="250" width="58" height="190" {...line} />
      <circle cx="310" cy="350" r="2.5" fill="var(--color-paper)" />
      <Dim d="M24 56h212M24 50v12M236 50v12" at={[130, 46]} text="14 ft." />
      <Dim d="M340 72v368M334 72h12M334 440h12" at={[352, 256]} text="9 ft." rotate />
      <text x="262" y="236" fill="currentColor" className="label" style={{ fontSize: 9 }}>
        Door, 6 ft. 8 in.
      </text>
    </Frame>
  );
}

/* An engraved plaque, standing on the ground line. */
export function EngravedPlaque() {
  return (
    <Frame label="Drawing of an engraved plaque: an eight by ten inch plate with a raised border, three lines of text and a seal.">
      <g transform="translate(76 130)">
        <rect width="208" height="260" fill="var(--color-paper)" />
        <rect x="10" y="10" width="188" height="240" {...line} stroke="var(--color-ink)" strokeWidth={2} />
        <circle cx="104" cy="74" r="30" {...line} stroke="var(--color-ink)" strokeWidth={2} />
        <circle cx="104" cy="74" r="22" {...line} stroke="var(--color-ink)" opacity={0.6} />
        <text x="104" y="79" textAnchor="middle" fill="var(--color-ink)" style={{ ...display, fontSize: 14 }}>
          1999
        </text>
        <text x="104" y="140" textAnchor="middle" fill="var(--color-ink)" style={{ ...display, fontSize: 18 }}>
          IN RECOGNITION
        </text>
        {[164, 184, 204].map((y, i) => (
          <rect key={y} x={i === 2 ? 60 : 36} y={y} width={i === 2 ? 88 : 136} height="5" fill="var(--color-ink)" opacity="0.35" />
        ))}
        {/* Mounting holes */}
        {[[22, 22], [186, 22], [22, 238], [186, 238]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3" {...line} stroke="var(--color-ink)" />
        ))}
      </g>
      <Dim d="M76 410h208M76 404v12M284 404v12" at={[180, 430]} text="8 in." />
      <Dim d="M304 130v260M298 130h12M298 390h12" at={[320, 260]} text="10 in." rotate />
      <text x="76" y="112" fill="currentColor" className="label" style={{ fontSize: 9 }}>
        Brass on walnut, laser engraved
      </text>
    </Frame>
  );
}
