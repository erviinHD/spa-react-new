import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { SearchControl } from "./ui/SearchControl";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { searchHeroesAction } from "@/heroes/actions/search-heroes.action";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") ?? undefined;

  const { data: heroes = [] } = useQuery({
    queryKey: ["search", { name }],
    queryFn: () => searchHeroesAction({ name }),
    staleTime: 1000 * 60 * 5, //5min
  });

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Búsqueda de Super héroes"
        description="Descubre, explora y administra super heroes y villanos "
      />

      {/* Filter */}
      <SearchControl />

      {/*Hero Card*/}
      <section className="directory-section " aria-label="Hero directory">
        <HeroGrid heroes={heroes} />
      </section>
    </>
  );
};

export default SearchPage;
