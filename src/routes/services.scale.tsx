import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/scale")({
  beforeLoad: () => {
    throw redirect({ to: "/services/seo-for-b2b", statusCode: 301 });
  },
});
