import AdaSign from "./AdaSign";
import StreetSign from "./StreetSign";
import { BuildingLetters, EngravedPlaque, LobbySign, VehicleWrap, WallGraphic } from "./Drawings";

const drawings: Record<string, (props: { className?: string }) => React.JSX.Element> = {
  street: StreetSign,
  building: BuildingLetters,
  ada: AdaSign,
  lobby: LobbySign,
  "vehicle-wraps": VehicleWrap,
  "wall-graphics": WallGraphic,
  "laser-engraving": EngravedPlaque,
};

/* The shop drawing for a sign type: what stands in for a photo in every index. */
export default function SignFigure({ slug, className = "" }: { slug: string; className?: string }) {
  const Drawing = drawings[slug] ?? AdaSign;
  return (
    <div className={`absolute inset-0 bg-mat text-paper p-3 ${className}`}>
      <Drawing />
    </div>
  );
}
