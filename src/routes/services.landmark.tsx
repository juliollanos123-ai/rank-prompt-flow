import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/landmark")({
  beforeLoad: () => {
    throw redirect({ to: "/services/ai-seo-agency", statusCode: 301 });
  },
});
