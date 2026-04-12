import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
    component: () => (
        <div className="max-h-screen">
            <Outlet />
        </div>
    ),
})