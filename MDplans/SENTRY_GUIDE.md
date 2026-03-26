# 🛡️ Sentry Setup Guide — Dami Systems

Quick reference to get Sentry error monitoring live.

---

## 1. Create Your Sentry Account & Project

1. Go to [sentry.io](https://sentry.io) → **Sign Up** (free tier is sufficient to start).
2. Create a new **Project** → Select **React**.
3. Copy your **DSN** from: *Settings → Projects → [Your Project] → Client Keys (DSN)*.

---

## 2. Install the SDK

```bash
npm install @sentry/react
```

---

## 3. Initialize Sentry

Add this to the **top** of `src/main.tsx`, before any other imports render:

```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_DSN_HERE", // paste your DSN from Step 1
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,   // 100% of transactions — reduce in production
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  environment: import.meta.env.MODE, // "development" or "production"
});
```

---

## 4. Verify It Works

Trigger a test error anywhere in your app temporarily:

```typescript
// Remove after testing!
throw new Error("Sentry test error 🚨");
```

Check your **Sentry Dashboard → Issues** — it should appear within seconds.

---

## 5. Wrap Your App (Optional but Recommended)

In `src/main.tsx`, wrap your root component for automatic error boundaries:

```typescript
const app = Sentry.withErrorBoundary(App, {
  fallback: <p>Something went wrong. Our team has been notified.</p>,
});
```

---

## 6. Configure Alerts

In the Sentry dashboard:
- Go to **Alerts → Create Alert Rule**.
- Set notification channel (Email, Slack, etc.).
- Recommended rule: *"Alert when a new issue is seen"*.

---

## ✅ Checklist

- [ ] Account created at sentry.io
- [ ] DSN copied and added to `main.tsx`
- [ ] SDK installed (`@sentry/react`)
- [ ] Test error verified in dashboard
- [ ] Alert rule configured

---

> **Reference Issue**: [#5 - Setup Sentry for Error Reporting](https://github.com/DamianHRY/Dami_Systems/issues/5)
