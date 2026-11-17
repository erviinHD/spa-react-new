import { useRef } from "react";
import { useSearchParams } from "react-router";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { HeroStats } from "@/heroes/components/HeroStats";

export const SearchControl = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const value = inputRef.current?.value ?? "";
      setSearchParams((prev) => {
        prev.set("name", value);
        return prev;
      });
    }
  };

  const handleClearSearch = () => {
    setSearchParams((prev) => {
      prev.delete("name");
      return prev;
    });
  };

  return (
    <section className="directory-section" aria-label="Hero directory">
      <div className="directory-toolbar">
        <div className="search-wrap">
          <Search size={18} />
          <Input
            className="h-auto border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
            placeholder="Buscar heroes por su nombre"
            aria-label="Buscar heroes"
            type="search"
            ref={inputRef}
            onKeyDown={handleKeyDown}
            defaultValue={searchParams.get("name") ?? ""}
            onInput={handleClearSearch}
          />
        </div>

        {/* Hero Stats */}
        <HeroStats />
      </div>
    </section>
  );
};
