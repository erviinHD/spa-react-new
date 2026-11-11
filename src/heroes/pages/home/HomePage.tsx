import { useMemo } from "react";
import { useSearchParams } from "react-router";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";
  const category = searchParams.get("category") ?? "all";

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  const { data: heroesResponse } = usePaginatedHero(+page, +limit, category);

  // useEffect(() => {
  //   getHeroesByPage().then();
  // }, []);

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Super héroes"
        description="Descubre, explora y administra super heroes y villanos "
      />

      <section className="directory-section " aria-label="Hero directory">
        {/* Hero Stats */}
        <div className="directory-toolbar justify-end!">
          <HeroStats />
        </div>

        {/* Tabs */}
        <div className="filter-row">
          <Tabs value={selectedTab}>
            <TabsList className="filters">
              <TabsTrigger
                onClick={() =>
                  setSearchParams((prev) => {
                    prev.set("tab", "all");
                    prev.set("category", "all");
                    prev.set("page", "1");
                    return prev;
                  })
                }
                value="all"
              >
                Todos los personajes
              </TabsTrigger>
              <TabsTrigger
                onClick={() =>
                  setSearchParams((prev) => {
                    prev.set("tab", "favorites");
                    prev.set("category", "all");
                    return prev;
                  })
                }
                value="favorites"
              >
                Favoritos
              </TabsTrigger>
              <TabsTrigger
                onClick={() =>
                  setSearchParams((prev) => {
                    prev.set("tab", "heroes");
                    prev.set("category", "hero");
                    prev.set("page", "1");
                    return prev;
                  })
                }
                value="heroes"
              >
                Heroes
              </TabsTrigger>
              <TabsTrigger
                onClick={() =>
                  setSearchParams((prev) => {
                    prev.set("tab", "villains");
                    prev.set("category", "villain");
                    prev.set("page", "1");
                    return prev;
                  })
                }
                value="villains"
              >
                Villanos
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <HeroGrid heroes={heroesResponse?.heroes ?? []} />
            </TabsContent>
            <TabsContent value="favorites">
              <HeroGrid heroes={heroesResponse?.heroes ?? []} />
            </TabsContent>
            <TabsContent value="heroes">
              <HeroGrid heroes={heroesResponse?.heroes ?? []} />
            </TabsContent>
            <TabsContent value="villains">
              <HeroGrid heroes={heroesResponse?.heroes ?? []} />
            </TabsContent>
          </Tabs>
        </div>
        {/* Pagination */}
        <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
      </section>
    </>
  );
};
