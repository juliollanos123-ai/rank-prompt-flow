import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/blueprint")({
  beforeLoad: () => {
    throw redirect({ to: "/services/technical-seo", statusCode: 301 });
  },
});
