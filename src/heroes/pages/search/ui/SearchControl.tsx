import { Input } from "@/components/ui/input";
import { HeroStats } from "@/heroes/components/HeroStats";
import { Search } from "lucide-react";

export const SearchControl = () => {
  return (
    <section className="directory-section" aria-label="Hero directory">
      <div className="directory-toolbar">
        <div className="search-wrap">
          <Search size={18} />
          <Input
            className="h-auto border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
            placeholder="Search heroes, abilities, or names"
            aria-label="Search heroes"
          />
        </div>

        {/* Hero Stats */}
        <HeroStats />
      </div>
    </section>
  );
};
