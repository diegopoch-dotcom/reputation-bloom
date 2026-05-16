import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/feedback")({
  head: () => ({
    meta: [
      { title: "Bodegón Vandama — Your feedback" },
      { name: "description", content: "Share your private feedback with us." },
    ],
  }),
  component: FeedbackPage,
});

function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ what: "", improve: "", name: "", contact: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to private feedback destination (email/webhook/DB).
    console.log("Private feedback:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-5 py-10">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto h-14 w-14 rounded-full bg-foreground/[0.04] flex items-center justify-center text-2xl">
            💛
          </div>
          <h1 className="mt-5 text-2xl font-semibold text-foreground">Thank you</h1>
          <p className="mt-3 text-muted-foreground">
            Thank you for your feedback. Your opinion helps us improve.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block rounded-2xl bg-foreground px-6 py-3 text-sm font-medium text-background"
          >
            Back
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background flex items-start justify-center px-5 py-10">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground text-center">
          We'd love to know more
        </h1>
        <p className="mt-2 text-sm text-muted-foreground text-center">
          Your feedback stays private and helps us improve.
        </p>

        <div className="mt-8 space-y-5">
          <Field label="What happened?">
            <textarea
              required
              rows={4}
              value={form.what}
              onChange={(e) => setForm({ ...form, what: e.target.value })}
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
            />
          </Field>
          <Field label="How can we improve?">
            <textarea
              required
              rows={4}
              value={form.improve}
              onChange={(e) => setForm({ ...form, improve: e.target.value })}
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
            />
          </Field>
          <Field label="Name (optional)">
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
            />
          </Field>
          <Field label="Phone or email (optional)">
            <input
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
            />
          </Field>
        </div>

        <button
          type="submit"
          className="mt-8 w-full rounded-2xl bg-foreground py-4 text-base font-medium text-background"
        >
          Send
        </button>
        <Link
          to="/"
          className="mt-3 block text-center text-sm text-muted-foreground underline-offset-4 hover:underline"
        >
          Cancel
        </Link>
      </form>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  );
}