export type QuoteStatus = "idle" | "sending" | "success" | "error" | "unconfigured";

/*
  Posts a quote request to Web3Forms. Returns "unconfigured" when the site was
  built without PUBLIC_WEB3FORMS_KEY, so the form can tell the visitor to call
  instead of failing with a generic error after they have typed everything.
*/
export async function submitQuote(
  subject: string,
  fields: Record<string, string>
): Promise<QuoteStatus> {
  const apiKey = import.meta.env.PUBLIC_WEB3FORMS_KEY;
  if (!apiKey || apiKey === "YOUR_ACCESS_KEY") {
    console.error("Web3Forms API key not configured. Add PUBLIC_WEB3FORMS_KEY to your .env file.");
    return "unconfigured";
  }
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: apiKey,
        subject,
        from_name: fields.name,
        ...fields,
      }),
    });
    return response.ok ? "success" : "error";
  } catch {
    return "error";
  }
}

export function quoteErrorMessage(status: QuoteStatus): string | null {
  if (status === "unconfigured")
    return "Our online form is offline right now. Please call 818-346-2142 or email info@advsigns.net.";
  if (status === "error")
    return "That didn’t send. Please try again, or call 818-346-2142.";
  return null;
}
