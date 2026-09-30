import AdaSign from "./AdaSign";
import StreetSign from "./StreetSign";

/* The drawing that stands in for a photo on the sign types we have none of. */
export default function SignFigure({ slug, className = "" }: { slug: string; className?: string }) {
  return (
    <div className={`absolute inset-0 bg-mat text-paper p-3 ${className}`}>
      {slug === "street" ? <StreetSign /> : <AdaSign />}
    </div>
  );
}
