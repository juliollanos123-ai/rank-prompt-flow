import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/technical-seo-services")({
  loader: () => {
    throw redirect({ to: "/services/technical-seo", statusCode: 301 });
  },
});
