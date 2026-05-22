import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/es/servicios/scale")({
  loader: () => {
    throw redirect({ to: "/es/servicios/seo-b2b", statusCode: 301 });
  },
});
