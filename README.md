# Podium

A minimal, mobile-first reputation tool for local businesses.

**Goal:** help restaurants, cafés, bars, beauty centers, and tourism businesses get more positive Google reviews while capturing private feedback for improvement.

Customers rate their experience on a 5-star scale. If they choose **5 stars**, they are redirected to the business's Google Review page. If they choose **1–4 stars**, they are taken to a private feedback form where they can share what went wrong.

---

## Live Demo

Visit the preview URL or deploy your own copy to see it in action.

---

## How it works

1. **Customer arrives** at the landing page (via NFC card, QR code, or WhatsApp link).
2. **They select a rating** from 1 to 5 stars.
3. **5 stars** → redirected to Google Reviews.
4. **1–4 stars** → private feedback form (optionally with name and contact).

---

## Configure for any business

All business-specific settings live in a single constant at the top of `src/routes/index.tsx`:

```ts
const RESTAURANT = {
  name: "Bodegón Vandama",
  logoUrl: "https://example.com/logo.png",
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID",
  privateFeedbackPath: "/feedback",
};
```

Change these four values and the page instantly adapts to a new business.

---

## Tech Stack

- [TanStack Start](https://tanstack.com/start) — full-stack React framework
- [Tailwind CSS](https://tailwindcss.com) — styling
- [TypeScript](https://typescriptlang.org) — type safety

---

## Getting Started

```bash
# Install dependencies
bun install

# Run the dev server
bun dev
```

The app will be available at `http://localhost:3000`.

---

## Project Structure

```text
src/
  routes/
    index.tsx       # Rating landing page
    feedback.tsx    # Private feedback form
    __root.tsx      # Root layout
  components/ui/    # shadcn/ui components
  styles.css        # Tailwind + design tokens
  router.tsx        # TanStack Router setup
```

---

## License

MIT — feel free to fork, customize, and deploy for your own clients.
