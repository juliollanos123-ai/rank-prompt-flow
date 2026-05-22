import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/b2b-seo-services")({
  loader: () => {
    throw redirect({ to: "/services/seo-for-b2b", statusCode: 301 });
  },
});
