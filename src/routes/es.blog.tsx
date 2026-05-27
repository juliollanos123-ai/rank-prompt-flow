import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/es/blog")({
  component: () => <Outlet />,
});
