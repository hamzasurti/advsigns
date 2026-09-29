import { useState } from "react";
import { submitQuote, quoteErrorMessage, type QuoteStatus } from "../lib/submitQuote";

type FieldEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

export default function useQuoteForm<T extends Record<string, string>>(
  initial: T,
  subject: (values: T) => string
) {
  const [values, setValues] = useState<T>(initial);
  const [status, setStatus] = useState<QuoteStatus>("idle");

  const onChange = (e: FieldEvent) =>
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const result = await submitQuote(subject(values), values);
    setStatus(result);
    if (result === "success") setValues(initial);
  };

  return {
    values,
    status,
    sending: status === "sending",
    sent: status === "success",
    error: quoteErrorMessage(status),
    onChange,
    onSubmit,
    reset: () => setStatus("idle"),
  };
}
