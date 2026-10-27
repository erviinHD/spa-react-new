import { Outlet } from "react-router";

export const HeroesLayout = () => {
  return (
    <main className="app-shell">
      <Outlet />
    </main>
  );
};
