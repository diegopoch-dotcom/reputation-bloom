import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bodegón Vandama — Tu opinión" },
      { name: "description", content: "Cuéntanos cómo fue tu experiencia en Bodegón Vandama." },
    ],
  }),
  component: Index,
});

// Easily reusable: change these four values for any restaurant.
const RESTAURANT = {
  name: "Bodegón Vandama",
  logoUrl: "https://api.dicebear.com/9.x/initials/svg?seed=BV&backgroundType=solid&backgroundColor=111111&textColor=ffffff",
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=REPLACE_WITH_PLACE_ID",
  privateFeedbackPath: "/feedback",
};

function Index() {
  const [rating, setRating] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleSend = () => {
    if (!rating) return;
    if (rating === 5) {
      window.location.href = RESTAURANT.googleReviewUrl;
    } else {
      navigate({ to: RESTAURANT.privateFeedbackPath, search: { r: rating } as never });
    }
  };

  return (
    <main className="min-h-screen bg-background flex items-start sm:items-center justify-center px-5 py-10">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <img
          src={RESTAURANT.logoUrl}
          alt={`${RESTAURANT.name} logo`}
          className="h-20 w-20 rounded-full object-cover shadow-sm"
        />
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">
          {RESTAURANT.name}
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Tell us how your experience was 😊
        </p>

        <div className="mt-8 w-full space-y-3">
          {[1, 2, 3, 4, 5].map((n) => {
            const selected = rating === n;
            return (
              <button
                key={n}
                type="button"
                onClick={() => setRating(n)}
                aria-pressed={selected}
                className={`w-full flex items-center justify-between rounded-2xl border px-5 py-4 transition-all ${
                  selected
                    ? "border-foreground bg-foreground/[0.03] shadow-sm"
                    : "border-border hover:border-foreground/40"
                }`}
              >
                <span className="text-sm font-medium text-foreground">
                  {n} {n === 1 ? "star" : "stars"}
                </span>
                <span className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < n ? "fill-[#F5B301] text-[#F5B301]" : "text-muted-foreground/30"
                      }`}
                      strokeWidth={1.5}
                    />
                  ))}
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleSend}
          disabled={!rating}
          className="mt-8 w-full rounded-2xl bg-foreground py-4 text-base font-medium text-background transition-opacity disabled:opacity-40"
        >
          Send
        </button>

        <button
          type="button"
          onClick={() => setRating(null)}
          disabled={!rating}
          className="mt-3 text-sm text-muted-foreground underline-offset-4 hover:underline disabled:opacity-40"
        >
          Clear choice
        </button>
      </div>
    </main>
  );
}
