import { useEffect, useRef } from "react";

export default function useStructuredData(id: string, data: Record<string, unknown>) {
  const json = JSON.stringify({ "@context": "https://schema.org", ...data });
  const prevJson = useRef(json);

  useEffect(() => {
    prevJson.current = json;
    let script = document.querySelector(`script[data-sd="${id}"]`) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-sd", id);
      document.head.appendChild(script);
    }
    script.textContent = json;

    return () => {
      script?.remove();
    };
  }, [id, json]);
}
