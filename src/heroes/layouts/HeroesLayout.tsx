import { Outlet } from "react-router";
import { CustomMenu } from "@/components/custom/CustomMenu";

export const HeroesLayout = () => {
  return (
    <main className="app-shell">
      {/* Navigation */}
      <CustomMenu />
      <Outlet />
    </main>
  );
};
