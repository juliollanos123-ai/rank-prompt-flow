import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/es/servicios/blueprint")({
  beforeLoad: () => {
    throw redirect({ to: "/es/servicios/seo-tecnico", statusCode: 301 });
  },
});
