import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/landmark")({
  loader: () => {
    throw redirect({ to: "/services/ai-seo-agency", statusCode: 301 });
  },
});
