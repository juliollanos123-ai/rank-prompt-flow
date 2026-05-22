import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/es/servicios/landmark")({
  loader: () => {
    throw redirect({ to: "/es/servicios/agencia-seo-ia", statusCode: 301 });
  },
});
